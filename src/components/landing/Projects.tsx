import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import OptionWheel from "../OptionWheel";
import { projects } from "../../util/projects";
import { useLang } from "../../i18n";

// Screens of scrolling given to each project while the section is pinned.
const VH_PER_PROJECT = 70;

export default function Projects() {
  const { t } = useLang();
  // Featured projects lead the story.
  const list = useMemo(() => [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)), []);
  const n = list.length;

  const trackRef = useRef<HTMLDivElement>(null);
  const scrollIndex = useRef(0);
  const [index, setIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });

  // Page scroll -> active project
  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(n - 1, Math.max(0, Math.floor(p * n)));
    if (i !== scrollIndex.current) {
      scrollIndex.current = i;
      setIndex(i);
    }
  });

  // Wheel interaction (click / arrow keys) -> scroll the page to that project
  const goTo = useCallback(
    (i: number) => {
      if (i === scrollIndex.current) return;
      const el = trackRef.current;
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const distance = el.offsetHeight - window.innerHeight;
      window.scrollTo({ top: top + ((i + 0.5) / n) * distance, behavior: "smooth" });
    },
    [n]
  );

  useEffect(() => {
    scrollIndex.current = index;
  }, [index]);

  const current = list[index];
  const summary = t(`proj.${current.slug}`);

  return (
    <section id="projects" className="relative scroll-mt-8">
      <div ref={trackRef} style={{ height: `${n * VH_PER_PROJECT + 100}vh` }}>
        <div className="sticky top-8 h-[calc(100vh-2rem)] flex items-center px-5 sm:px-8">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex items-end justify-between gap-6 mb-6 md:mb-10">
              <div>
                <p className="text-sm text-neutral-500">{t("projects.label")}</p>
                <h2 className="mt-4 text-3xl md:text-5xl font-medium tracking-[-0.04em] leading-[1.05] text-neutral-900">
                  {t("projects.title")}
                </h2>
              </div>
              <p className="font-mono text-sm text-neutral-400 tabular-nums">
                {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
              </p>
            </div>

            <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-6 lg:gap-14 items-center">
              <div>
                <div className="h-[130px] sm:h-[190px] lg:h-[400px] -mx-5 sm:mx-0">
                  <OptionWheel
                    items={list.map((p) => p.title)}
                    defaultSelected={0}
                    selected={index}
                    onChange={goTo}
                    textColor="#a3a3a3"
                    activeColor="#171717"
                    side="left"
                    fontSize={2.2}
                    spacing={1.5}
                    tilt={7}
                    blur={1.5}
                    fade={0.28}
                    inset={24}
                    draggable={false}
                    scrollable={false}
                  />
                </div>
                <div className="mt-4 h-px bg-black/10 overflow-hidden hidden lg:block">
                  <motion.div className="h-full bg-neutral-900 origin-left" style={{ scaleX: scrollYProgress }} />
                </div>
                <p className="mt-3 font-mono text-xs text-neutral-400 hidden lg:block">{t("projects.hint")}</p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 16 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(6px)", y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/work/${current.slug}`}
                    className="group block rounded-2xl overflow-hidden bg-white border border-black/10 aspect-[16/10] max-h-[44vh] w-full"
                    aria-label={`${t("projects.open")} ${current.title}`}
                  >
                    <img
                      src={current.img}
                      alt={current.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="mt-5 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl md:text-3xl font-medium tracking-[-0.03em] text-neutral-900">
                        {current.title}
                      </h3>
                      {summary && <p className="mt-2 text-neutral-600 leading-relaxed max-w-xl line-clamp-2">{summary}</p>}
                      <p className="mt-3 text-sm text-neutral-400">{current.technologies.join(" · ")}</p>
                    </div>
                    <div className="flex items-center gap-x-5 gap-y-2 flex-wrap shrink-0">
                      <Link
                        to={`/work/${current.slug}`}
                        className="group inline-flex items-center gap-2 h-11 px-5 rounded-full bg-neutral-900 text-white font-medium hover:bg-black transition-colors"
                      >
                        {t("projects.case")}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      {current.demo && (
                        <a
                          href={current.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-700 underline underline-offset-4 decoration-black/20 hover:decoration-black"
                        >
                          {t("projects.demo")}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
