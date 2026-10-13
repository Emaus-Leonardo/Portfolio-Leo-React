import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLang } from "../../i18n";
import Confetti from "./Confetti";

type EggKind = "konami" | "hired";

const CODE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

// Easter eggs: the Konami code (hinted on the badge) and `sudo hire leo` (typed on the badge).
// Kept deliberately small: a corner toast with a tiny animated icon and a puff of confetti.
export default function KonamiEgg() {
  const { t } = useLang();
  const [shown, setShown] = useState<EggKind | null>(null);
  const [burst, setBurst] = useState(0);
  const progress = useRef(0);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const show = (kind: EggKind) => {
      setShown(kind);
      setBurst((n) => n + 1);
      clearTimeout(timer);
      timer = setTimeout(() => setShown(null), 3800);
    };
    const onEgg = (e: Event) => show((e as CustomEvent<EggKind>).detail);
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      progress.current = key === CODE[progress.current] ? progress.current + 1 : key === CODE[0] ? 1 : 0;
      if (progress.current === CODE.length) {
        progress.current = 0;
        show("konami");
        console.log("%c+30 lives. Hire Léo.", "font:bold 14px monospace;color:#0071e3");
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("badge-egg", onEgg);
    return () => {
      window.removeEventListener("badge-egg", onEgg);
      window.removeEventListener("keydown", onKey);
      clearTimeout(timer);
    };
  }, []);

  const hired = shown === "hired";

  return (
    <>
      <Confetti burst={burst} />
      <AnimatePresence>
        {shown && (
          <motion.div
            key={shown}
            role="status"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ type: "spring", stiffness: 420, damping: 28 }}
            className="fixed top-12 right-4 z-[60] w-[300px] max-w-[calc(100vw-2rem)] flex items-center gap-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-black/10 p-3.5 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.28)]"
          >
            <div className="grid place-items-center w-11 h-11 shrink-0 rounded-xl bg-neutral-100">
              {hired ? (
                <motion.span
                  initial={{ scale: 2.4, rotate: -20, opacity: 0 }}
                  animate={{ scale: 1, rotate: -8, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 14, delay: 0.1 }}
                  className="font-mono text-[10px] font-extrabold uppercase text-[#e5322d] border-2 border-[#e5322d] rounded px-1 leading-4"
                >
                  hired
                </motion.span>
              ) : (
                <motion.span
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 0.9, repeat: 3 }}
                  className="text-xl text-[#ff5a36] leading-none"
                  aria-hidden="true"
                >
                  ♥
                </motion.span>
              )}
            </div>
            <div className="min-w-0 text-sm leading-snug">
              <p className="font-mono font-bold text-neutral-900">{t(hired ? "egg.hired.title" : "egg.konami.title")}</p>
              <p className="text-neutral-500">{t(hired ? "egg.hired.sub" : "egg.konami.sub")}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
