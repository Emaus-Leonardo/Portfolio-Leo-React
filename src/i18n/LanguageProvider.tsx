import React, { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang } from "../content/profile";
import { dictionary } from "./dictionary";
import { LangContext, type LangContextValue, type Translate } from "./context";

const STORAGE_KEY = "lang";

const initialLang = (): Lang => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    /* storage unavailable */
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo<LangContextValue>(() => {
    const dict = dictionary[lang];
    // t(key, fallback): the fallback is used when a key has no entry
    const t: Translate = (key, fallback) => dict[key] ?? fallback ?? key;
    return { lang, setLang, t };
  }, [lang, setLang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}
