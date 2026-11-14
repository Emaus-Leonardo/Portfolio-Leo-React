import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import OptionWheel from "../OptionWheel";
import Reveal from "./Reveal";
import { featuredProjects, type Project } from "../../util/projects";
import { useLang } from "../../i18n";

// Screens of scrolling given to each project while the section is pinned.
const VH_PER_PROJECT = 70;
const DESKTOP_QUERY = "(min-width: 1024px)";

const pad = (n: number) => String(n).padStart(2, "0");

const linkClass =
  "group inline-flex items-center gap-1.5 text-neutral-900 underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors";
const arrowClass = "w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

// The pinned, wheel-driven layout needs a wide viewport and a mouse wheel.
function useIsDesktop() {
  const [desktop, setDesktop] = useState(() => window.matchMedia(DESKTOP_QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setDesktop(mq.matches);
    onChange();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return desktop;
}

export default function Projects() {
  return useIsDesktop() ? <ProjectsPinned /> : <ProjectsCards />;
}

/** Desktop: the section stays pinned while the page scroll drives the project wheel. */
function ProjectsPinned() {
  const { t } = useLang();
  const list = featuredProjects;
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
              <div className="flex items-center gap-8">
                <Link to="/work" className={linkClass}>
                  {t("projects.all")}
                  <ArrowUpRight className={arrowClass} />
                </Link>
                <p className="font-mono text-sm text-neutral-400 tabular-nums">
                  {pad(index + 1)} / {pad(n)}
                </p>
              </div>
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
                      style={{ objectPosition: current.imgPosition }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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

function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const { t } = useLang();
  const summary = t(`proj.${p.slug}`);

  return (
    <article className="grid md:grid-cols-[1.15fr_1fr] gap-5 md:gap-10 md:items-center">
      <Link
        to={`/work/${p.slug}`}
        aria-label={`${t("projects.open")} ${p.title}`}
        className="group relative block aspect-[5/4] w-full rounded-2xl overflow-hidden bg-white border border-black/10"
      >
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          style={{ objectPosition: p.imgPosition }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
        <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 h-9 px-3 rounded-lg bg-[#fafafa] text-neutral-900">
          <strong className="font-medium tracking-[-0.02em]">{p.title}</strong>
          <span className="font-mono text-xs text-neutral-400 tabular-nums">({pad(index + 1)})</span>
        </span>
      </Link>

      <div>
        {summary && <p className="text-[15px] md:text-lg leading-snug text-neutral-700 line-clamp-4">{summary}</p>}
        <p className="mt-3 text-[13px] text-neutral-400">{p.technologies.join(" · ")}</p>
        <div className="mt-4 flex items-center gap-x-6 gap-y-2 flex-wrap text-[15px]">
          <Link to={`/work/${p.slug}`} className={linkClass}>
            {t("projects.case")}
            <ArrowUpRight className={arrowClass} />
          </Link>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {t("projects.demo")}
              <ArrowUpRight className={arrowClass} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/** Mobile / tablet: the same featured projects as a plain list of cards. */
function ProjectsCards() {
  const { t } = useLang();

  return (
    <section id="projects" className="relative scroll-mt-8 pt-24 md:pt-32 pb-4 px-5 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <Reveal>
          <p className="flex items-baseline gap-3 text-sm text-neutral-500">
            {t("projects.label")}
            <span className="font-mono text-xs text-neutral-400 tabular-nums">[{pad(featuredProjects.length)}]</span>
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.04em] leading-[1.05] text-neutral-900">
            {t("projects.title")}
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 flex flex-col gap-14 md:gap-16">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/work"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 h-12 px-7 rounded-full bg-neutral-900 text-white font-medium hover:bg-black transition-colors"
          >
            {t("projects.all")}
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
