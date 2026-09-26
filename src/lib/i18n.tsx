import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "es";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string, es: string) => string };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (en) => en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("bol-lang");
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("bol-lang", l);
  };
  const t = (en: string, es: string) => (lang === "es" ? es || en : en || es);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
