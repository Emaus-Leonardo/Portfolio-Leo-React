import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "../../i18n";
import type { Project } from "../../util/projects";

const arrow =
  "grid place-items-center h-[34px] rounded-full text-[#fafafa] hover:bg-white/10 transition-all duration-[180ms]";

interface ProjectPagerProps {
  prev: Project;
  next: Project;
}

// Floating pill: previous · all projects · next
export default function ProjectPager({ prev, next }: ProjectPagerProps) {
  const { t } = useLang();
  return (
    <nav
      aria-label="Projects"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-max grid grid-cols-[34px_auto_34px] rounded-full bg-neutral-900 p-1 shadow-[0_18px_42px_rgba(24,24,24,0.12)]"
    >
      <Link to={`/work/${prev.slug}`} aria-label={`${t("pager.prev")}: ${prev.title}`} className={`${arrow} hover:-translate-x-0.5`}>
        <ArrowLeft className="w-4 h-4" />
      </Link>
      <Link
        to="/#projects"
        className="grid place-items-center h-[34px] min-w-[102px] px-3.5 rounded-full bg-white text-neutral-900 font-medium hover:bg-[#f0f0ed] transition-colors duration-[180ms]"
      >
        {t("pager.all")}
      </Link>
      <Link to={`/work/${next.slug}`} aria-label={`${t("pager.next")}: ${next.title}`} className={`${arrow} hover:translate-x-0.5`}>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </nav>
  );
}
