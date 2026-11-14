import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import LandingMenuBar from "../../components/landing/LandingMenuBar";
import Contact from "../../components/landing/Contact";
import Reveal from "../../components/landing/Reveal";
import { projects } from "../../util/projects";
import { useLang } from "../../i18n";

// Featured projects first, the rest keep their order.
const ordered = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

/** Every project, one card each. The landing page only shows a few. */
export default function Work() {
  const { t } = useLang();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative isolate min-h-screen text-neutral-900">
      <div className="wallpaper" aria-hidden="true" />
      <LandingMenuBar />

      <main className="mx-auto max-w-7xl px-5 sm:px-8 pt-28 md:pt-36 pb-4">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
          <div>
            <p className="text-sm text-neutral-500">{t("projects.label")}</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-medium tracking-[-0.04em] leading-[1.05] text-neutral-900">
              {t("work.title")}
            </h1>
          </div>
          <p className="text-sm text-neutral-500 tabular-nums">
            {ordered.length} {t("work.count")}
          </p>
        </div>

        <ul className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ordered.map((p, i) => (
            <li key={p.id} className="flex">
              <Reveal y={28} delay={(i % 3) * 0.06} className="flex w-full">
                <article className="surface flex w-full flex-col rounded-2xl overflow-hidden">
                  <Link
                    to={`/work/${p.slug}`}
                    aria-label={`${t("projects.open")} ${p.title}`}
                    className="group block aspect-[16/10] overflow-hidden bg-[#f3f3f1] border-b border-black/[0.06]"
                  >
                    <img
                      src={p.img}
                      alt=""
                      loading={i < 3 ? "eager" : "lazy"}
                      style={{ objectPosition: p.imgPosition }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-medium tracking-[-0.02em] leading-snug">{p.title}</h2>
                      {p.featured && (
                        <span className="shrink-0 inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full bg-[#0071e3]/10 text-xs font-medium text-[#0058b0]">
                          <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                          {t("work.featured")}
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-[15px] leading-snug text-neutral-600 line-clamp-3">{t(`proj.${p.slug}`)}</p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {p.technologies.map((tech) => (
                        <li key={tech} className="px-2 py-0.5 rounded-full bg-black/[0.05] text-xs text-neutral-600">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-6 flex items-center gap-x-5 gap-y-2 flex-wrap">
                      <Link
                        to={`/work/${p.slug}`}
                        className="group inline-flex items-center gap-1.5 h-9 px-4 rounded-full bg-neutral-900 text-sm font-medium text-white hover:bg-black transition-colors"
                      >
                        {t("projects.case")}
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-neutral-700 underline underline-offset-4 decoration-black/20 hover:decoration-black"
                        >
                          {t("projects.demo")}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </main>

      <div className="mt-16 md:mt-24">
        <Contact />
      </div>
    </div>
  );
}
