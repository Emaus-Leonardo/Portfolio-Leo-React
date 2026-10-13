import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../../i18n";
import type { Project } from "../../util/projects";

const hostOf = (url: string): string | null => {
  try {
    return new URL(url).host;
  } catch {
    return null;
  }
};

interface CaseSidebarProps {
  project: Project;
  total: number;
}

// "Get Info"-style panel: app icon, name, kind, and the facts about the project.
export default function CaseSidebar({ project, total }: CaseSidebarProps) {
  const { t } = useLang();
  const kind = t(project.technologies.includes("Python") ? "case.kind.desktop" : "case.kind.web");
  const summary = t(`proj.${project.slug}`);
  const rows = [
    { label: t("case.kind"), value: kind },
    { label: t("case.stack"), value: project.technologies.join(", ") },
    ...(project.demo ? [{ label: t("case.demo"), value: hostOf(project.demo) ?? project.demo }] : []),
    ...(project.github ? [{ label: t("case.source"), value: "GitHub" }] : []),
  ];

  return (
    <aside>
      <div className="surface rounded-2xl p-5">
        <div className="flex items-center gap-4">
          <img
            src={project.img}
            alt=""
            className="w-16 h-16 rounded-[18px] object-cover object-top ring-1 ring-black/10 shadow-[0_8px_20px_-8px_rgba(0,0,0,0.35)]"
          />
          <div className="min-w-0">
            <h1 className="text-xl font-medium tracking-[-0.03em] leading-tight text-neutral-900">{project.title}</h1>
            <p className="mt-1 text-sm text-neutral-500">
              {kind} · {String(project.index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
            </p>
          </div>
        </div>

        {summary && <p className="mt-5 leading-relaxed text-neutral-700">{summary}</p>}

        <dl className="mt-5 border-t border-black/10 text-sm">
          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-[108px_minmax(0,1fr)] gap-3 py-2.5 border-b border-black/[0.06] last:border-0">
              <dt className="text-right text-neutral-400">{r.label}:</dt>
              <dd className="text-neutral-900 [text-wrap:pretty]">{r.value}</dd>
            </div>
          ))}
        </dl>

        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-between gap-4 h-11 px-4 rounded-xl bg-[#0071e3] text-white font-medium hover:bg-[#0a84ff] transition-colors"
          >
            {t("case.open")} <ArrowUpRight className="w-4 h-4" />
          </a>
        ) : (
          <span className="mt-2 inline-flex w-full items-center h-11 px-4 rounded-xl bg-[#ebebe8] text-neutral-500 cursor-not-allowed">
            {t("case.nodemo")}
          </span>
        )}
      </div>

      {/* signature */}
      <Link to="/about" className="mt-5 flex items-center gap-3 px-1 group">
        <img src="/img/profileAbout.png" alt="" className="w-9 h-9 rounded-full object-cover object-[50%_25%] grayscale ring-1 ring-black/10" />
        <span className="text-sm leading-tight">
          <span className="block text-neutral-900 font-medium">{t("case.built")}</span>
          <span className="block text-neutral-500 group-hover:text-neutral-900 transition-colors">{t("case.more")}</span>
        </span>
      </Link>
    </aside>
  );
}
