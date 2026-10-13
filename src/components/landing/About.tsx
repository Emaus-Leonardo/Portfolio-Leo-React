import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { stats } from "../../util/landing";
import { useLang } from "../../i18n";

const linkClass =
  "group inline-flex items-center gap-3 text-lg text-neutral-900 hover:text-[#0071e3] transition-colors";
const arrowClass =
  "w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5";

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="relative scroll-mt-8 pt-28 md:pt-36 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
            <p className="text-sm text-neutral-500">{t("about.label")}</p>
            <h2 className="mt-6 text-5xl md:text-6xl font-medium tracking-[-0.045em] leading-none text-neutral-900">
              {t("about.title")}
            </h2>

            <div className="mt-14 max-w-3xl space-y-6 text-xl md:text-2xl leading-snug font-medium text-neutral-800">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a href="#projects" className={linkClass}>
                {t("about.projects")}
                <ArrowUpRight className={arrowClass} />
              </a>
              <Link to="/about" className={linkClass}>
                {t("about.more")}
                <ArrowUpRight className={arrowClass} />
              </Link>
            </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-24 md:mt-28">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
            {stats.map((s, i) => (
              <div
                key={s.key}
                className={`px-6 md:px-10 ${i > 0 ? "md:border-l border-black/10" : ""} ${i % 2 ? "border-l border-black/10 md:border-l" : ""}`}
              >
                <dd className="text-6xl md:text-7xl font-normal tracking-[-0.05em] text-neutral-900 leading-none">
                  {s.value}
                </dd>
                <dt className="mt-5 text-xs md:text-sm uppercase tracking-wide text-neutral-500">{t(s.key)}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
