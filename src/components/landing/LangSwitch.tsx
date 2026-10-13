import React from "react";
import { useLang, type Lang } from "../../i18n";

const CODES: readonly Lang[] = ["en", "pt"];

// EN | PT segmented switch for the menu bar.
export default function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t("menu.language")} className="inline-flex items-center rounded-md bg-black/[0.06] p-0.5 text-[11px] font-semibold leading-none">
      {CODES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`px-2 py-1 rounded transition-colors uppercase ${
            lang === code ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
