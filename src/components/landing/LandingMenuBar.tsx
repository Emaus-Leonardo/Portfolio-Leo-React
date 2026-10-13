import React, { useEffect, useRef, useState, type MouseEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Wifi, BatteryFull, Monitor, Github, FileText } from "lucide-react";
import { FaApple } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { sections, socials, type SectionId } from "../../util/landing";
import { useLang } from "../../i18n";
import LangSwitch from "./LangSwitch";
import { useFileExists } from "../../hooks/useFileExists";
import { CV_FILE } from "../../util/downloads";

const useClock = (): Date => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(t);
  }, []);
  return now;
};

interface LandingMenuBarProps {
  /** Section highlighted in the nav (landing only). */
  active?: SectionId;
  /** The "app" shown in bold next to the Apple menu. */
  title?: string;
}

export default function LandingMenuBar({ active, title = "Léo's Portfolio" }: LandingMenuBarProps) {
  const now = useClock();
  const hasCv = useFileExists(CV_FILE);
  const { t, lang } = useLang();
  const locale = lang === "pt" ? "pt-BR" : "en-US";
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Anchors work from the case-study pages too: go home, then to the section.
  const go = (id: SectionId) => (e: MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (pathname === "/") document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    navigate({ pathname: "/", hash: `#${id}` }, { replace: pathname === "/" });
  };

  useEffect(() => {
    const onDown = (e: globalThis.MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const date = now.toLocaleDateString(locale, { weekday: "short", month: "short", day: "numeric" });
  const time = now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit", hour12: false });

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-8 flex items-center justify-between px-3 sm:px-4 text-[13px] text-neutral-800 bg-[#fafafa]/80 backdrop-blur-xl border-b border-black/[0.06]">
      <div className="flex items-center gap-1 sm:gap-3 min-w-0">
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Apple menu"
            className={`p-1.5 rounded transition-colors ${open ? "bg-black/10" : "hover:bg-black/5"}`}
          >
            <FaApple className="w-[15px] h-[15px]" />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.12 }}
                className="absolute top-9 left-0 w-60 surface rounded-xl p-1.5 text-neutral-800"
              >
                <div className="md:hidden">
                  <p className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-neutral-400">{t("menu.goTo")}</p>
                  {sections.map((s) => (
                    <a
                      key={s.id}
                      href={`/#${s.id}`}
                      onClick={go(s.id)}
                      className="block px-3 py-1.5 rounded-md hover:bg-[#0071e3] hover:text-white"
                    >
                      {t(`nav.${s.id}`)}
                    </a>
                  ))}
                  <div className="h-px bg-black/10 my-1.5 mx-2" />
                </div>
                <p className="px-3 py-1.5 text-[10px] uppercase tracking-widest text-neutral-400">{t("menu.findMe")}</p>
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-[#0071e3] hover:text-white"
                  >
                    <span>{s.name}</span>
                    <span className="text-[10px] opacity-60">{s.handle}</span>
                  </a>
                ))}
                <div className="h-px bg-black/10 my-1.5 mx-2" />
                <Link
                  to="/desktop"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-[#0071e3] hover:text-white"
                >
                  <Monitor className="w-3.5 h-3.5" /> {t("menu.openDesktop")}
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a href="/#home" onClick={go("home")} className="font-bold tracking-tight px-1 truncate">
          {title}
        </a>

        <nav className="hidden md:flex items-center gap-0.5 ml-2" aria-label="Sections">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`/#${s.id}`}
              onClick={go(s.id)}
              className={`px-2.5 py-1 rounded transition-colors ${
                active === s.id ? "bg-black/10 text-neutral-900" : "text-neutral-600 hover:bg-black/5 hover:text-neutral-900"
              }`}
            >
              {t(`nav.${s.id}`)}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 text-neutral-700">
        {hasCv && (
          <a
            href={CV_FILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-md bg-neutral-900 text-white text-[12px] font-medium hover:bg-black transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            {t("menu.cv")}
            <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
          </a>
        )}
        <LangSwitch />
        <Link
          to="/desktop"
          className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded hover:bg-black/5 transition-colors"
        >
          <Monitor className="w-3.5 h-3.5" /> {t("menu.desktop")}
        </Link>
        <a
          href={socials[0].href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hidden sm:block hover:text-black"
        >
          <Github className="w-4 h-4" />
        </a>
        <Wifi className="w-4 h-4 hidden sm:block" />
        <BatteryFull className="w-4 h-4 hidden sm:block" />
        <span className="font-medium tabular-nums">
          <span className="hidden sm:inline">{date}&nbsp;&nbsp;</span>
          {time}
        </span>
      </div>
    </header>
  );
}
