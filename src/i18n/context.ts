import { createContext, useContext } from "react";
import type { Lang } from "../content/profile";
import type { DictKey } from "./dictionary";

export type Translate = (key: DictKey, fallback?: string) => string;

export interface LangContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  t: Translate;
}

export const LangContext = createContext<LangContextValue | null>(null);

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
