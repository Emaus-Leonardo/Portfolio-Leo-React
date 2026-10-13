import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import LandingMenuBar from "../../components/landing/LandingMenuBar";
import SplitText from "../../components/landing/SplitText";
import Reveal from "../../components/landing/Reveal";
import { profile } from "../../content/profile";
import { socials, stats, skillGroups } from "../../util/landing";
import { downloads } from "../../util/downloads";
import { useLang, rich, lines } from "../../i18n";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const principles = ["pr1", "pr2", "pr3", "pr4"] as const;

export default function AboutMe() {
  const reduce = useReducedMotion();
  const { t, lang } = useLang();
  const files = downloads(lang);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enter = (delay: number): MotionProps =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, filter: "blur(14px)", y: 40 },
          animate: { opacity: 1, filter: "blur(0px)", y: 0 },
          transition: { duration: 0.85, delay, ease },
        };

  return (
    <div className="relative isolate min-h-screen text-neutral-900">
      <div className="wallpaper" aria-hidden="true" />
      <LandingMenuBar title={t("nav.about") + " Léo"} />

      <main className="mx-auto max-w-[1500px] px-5 sm:px-8 pt-24 pb-6">
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-sm text-neutral-500">
            ~/<span className="text-neutral-900">about</span>
            <span className="caret ml-1 text-[#0071e3]" />
          </p>
          <h1 className="sr-only">{t("ap.title")}</h1>
          <SplitText
            as="p"
            text={t("ap.title")}
            delay={0.1}
            className="mt-4 block text-[clamp(2.5rem,7vw,6rem)] font-medium tracking-[-0.05em] leading-[1.02] text-neutral-900"
          />
        </div>

        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[340px_minmax(0,1fr)] items-start">
          {/* Profile card (stays pinned while the page scrolls) */}
          <motion.div {...enter(0.25)} className="lg:sticky lg:top-[calc(2rem+24px)]">
            <aside className="surface rounded-2xl p-5">
              <div className="group overflow-hidden rounded-xl">
                <img
                  src="/img/profileAbout.png"
                  alt={profile.name}
                  className="w-full aspect-[4/5] object-cover object-[50%_25%] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <h2 className="mt-5 text-xl font-medium tracking-[-0.03em]">{profile.name}</h2>
              <p className="mt-1 text-sm text-neutral-500">{t("ap.role")}</p>
              <p className="mt-3 font-mono text-xs text-neutral-400">&ldquo;{t("ap.motto")}&rdquo;</p>

              <ul className="mt-5 border-t border-black/10">
                {socials.map((s) => (
                  <li key={s.name} className="border-b border-black/[0.06] last:border-0">
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center justify-between py-2.5 text-sm hover:text-[#0071e3] transition-colors"
                    >
                      <span>{s.name}</span>
                      <span className="flex items-center gap-1 text-neutral-400 group-hover/link:text-[#0071e3]">
                        {s.handle} <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={files.cv.href}
                download={files.cv.filename}
                className="mt-4 inline-flex w-full items-center justify-between gap-3 h-11 px-4 rounded-xl bg-neutral-900 text-white font-medium hover:bg-black transition-colors"
              >
                {t("dl.cv")} <Download className="w-4 h-4" />
              </a>
            </aside>
          </motion.div>

          <motion.div {...enter(0.4)} className="min-w-0 space-y-24 md:space-y-32 lg:mb-28">
            {/* Story */}
            <section className="space-y-6 text-xl md:text-2xl leading-snug font-medium text-neutral-400 max-w-3xl">
              <p>{rich(t("ap.p1"))}</p>
              <p>{rich(t("ap.p2"))}</p>
            </section>

            {/* What I do */}
            <section className="grid lg:grid-cols-[0.6fr_1.4fr] gap-8">
              <Reveal>
                <p className="text-sm text-neutral-500">{t("ap.do.label")}</p>
                <h2 className="mt-5 text-3xl md:text-4xl font-medium tracking-[-0.04em] leading-[1.05]">
                  {lines(t("ap.do.title"))}
                </h2>
              </Reveal>
              <ol>
                {profile.services.map((w, i) => (
                  <Reveal key={w.id} delay={i * 0.05}>
                    <li className="grid grid-cols-[40px_minmax(0,1fr)] gap-2 py-5 border-b border-black/10 first:border-t">
                      <span className="font-mono text-sm text-neutral-400 pt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <h3 className="font-medium">{t(`ap.${w.id}.t`)}</h3>
                        <p className="mt-1 text-neutral-500 leading-relaxed">{t(`ap.${w.id}.d`)}</p>
                        {w.tags.length > 0 && <p className="mt-2 text-sm text-neutral-400">{w.tags.join(" · ")}</p>}
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </section>

            {/* Numbers */}
            <Reveal>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
                {stats.map((s, i) => (
                  <div
                    key={s.key}
                    className={`px-6 md:px-8 ${i > 0 ? "md:border-l border-black/10" : ""} ${i % 2 ? "border-l border-black/10" : ""}`}
                  >
                    <dd className="text-5xl md:text-6xl font-normal tracking-[-0.05em] leading-none">{s.value}</dd>
                    <dt className="mt-4 text-xs uppercase tracking-wide text-neutral-500">{t(s.key)}</dt>
                  </div>
                ))}
              </dl>
            </Reveal>

            {/* How I work */}
            <section className="grid lg:grid-cols-[0.6fr_1.4fr] gap-8">
              <Reveal>
                <p className="text-sm text-neutral-500">{t("ap.how.label")}</p>
                <h2 className="mt-5 text-3xl md:text-4xl font-medium tracking-[-0.04em] leading-[1.05]">
                  {lines(t("ap.how.title"))}
                </h2>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-3">
                {principles.map((p, i) => (
                  <Reveal key={p} delay={i * 0.05}>
                    <div className="surface rounded-2xl p-5 h-full">
                      <h3 className="font-medium">{t(`ap.${p}.t`)}</h3>
                      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{t(`ap.${p}.d`)}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </section>

            {/* Toolbox */}
            <section className="grid lg:grid-cols-[0.6fr_1.4fr] gap-8">
              <Reveal>
                <p className="text-sm text-neutral-500">{t("ap.tool.label")}</p>
                <h2 className="mt-5 text-3xl md:text-4xl font-medium tracking-[-0.04em] leading-[1.05]">
                  {t("ap.tool.title")}
                </h2>
              </Reveal>
              <Reveal>
                <ul className="flex flex-wrap gap-3">
                  {skillGroups
                    .filter((g) => g.id !== "soft")
                    .flatMap((g) => g.items)
                    .map((s) => (
                      <li key={s.name} className="inline-flex items-center h-11 px-5 rounded-full bg-white border border-black/[0.08]">
                        {s.name}
                      </li>
                    ))}
                </ul>
              </Reveal>
            </section>

            {/* CTA */}
            <Reveal>
              <div className="rounded-[2rem] bg-[#0c0c10] text-white p-8 md:p-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <h2 className="text-3xl md:text-5xl font-medium tracking-[-0.04em] leading-[1.05]">
                  {lines(t("ap.cta.title"))}
                </h2>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/#projects"
                    className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-colors"
                  >
                    {t("ap.cta.projects")}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center h-12 px-6 rounded-full border border-white/25 hover:bg-white/10 transition-colors"
                  >
                    {t("ap.cta.touch")}
                  </Link>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
