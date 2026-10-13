import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Lanyard from "../Lanyard/Lanyard";
import { useTypewriter } from "../../hooks/useTypewriter";
import { useResponsive } from "../../hooks/useReponsive";
import { useBadgeTerminal } from "../../hooks/useBadgeTerminal";
import { createBadgeAssets, type BadgeAssets } from "../../util/badge";
import SplitText from "./SplitText";
import DotGrid from "./DotGrid";
import { socials, skillGroups, badgeHandle } from "../../util/landing";
import { useLang } from "../../i18n";

const stack = skillGroups.filter((g) => g.id !== "soft").flatMap((g) => g.items.map((i) => i.name));

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const rise = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.1 + i * 0.09, ease },
});

export default function Hero() {
  const { t, lang } = useLang();
  const roles = useMemo(() => [t("hero.role1"), t("hero.role2")], [lang]); // eslint-disable-line react-hooks/exhaustive-deps
  const role = useTypewriter(roles);
  const { isDesktop } = useResponsive();
  const [badge, setBadge] = useState<BadgeAssets | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [backImage, setBackImage] = useState<string | null>(null);
  // Typing on the badge: when its back is showing, keys go to the terminal drawn on it.
  useBadgeTerminal({ enabled: flipped, handle: badgeHandle, onFrame: setBackImage });

  // The badge (WebGL + canvas work) starts after the headline has animated in,
  // so that heavy work never competes with the text animation on a reload.
  useEffect(() => {
    let alive = true;
    const start = () => {
      createBadgeAssets("/img/profileAbout.png", { handle: badgeHandle }).then((assets) => {
        if (alive) setBadge(assets);
      });
    };
    const timer = setTimeout(() => {
      if ("requestIdleCallback" in window) window.requestIdleCallback(start, { timeout: 800 });
      else start();
    }, 1400);
    return () => {
      alive = false;
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen px-5 sm:px-8 overflow-hidden">
      {/* Dotted texture that reacts to the cursor, fading out toward the edges */}
      <DotGrid
        className="absolute inset-0 w-full h-full"
        style={{
          WebkitMaskImage: "radial-gradient(70% 65% at 62% 45%, #000 25%, transparent 100%)",
          maskImage: "radial-gradient(70% 65% at 62% 45%, #000 25%, transparent 100%)",
        }}
      />

      <div className="mx-auto w-full max-w-7xl min-h-screen grid lg:grid-cols-[1.1fr_1fr] items-center">
        {/* Copy */}
        <div className="relative z-10 pt-36 lg:pt-24 pb-6 lg:pb-24 lg:pointer-events-none [&_a]:pointer-events-auto">
          <h1 className="mt-6 text-[clamp(2.25rem,4.4vw,3.75rem)] font-medium leading-[1.05] tracking-[-0.04em] text-neutral-900">
            <SplitText text={t("hero.title")} />
          </h1>

          <motion.p
            {...rise(2)}
            transition={{ duration: 0.6, delay: 0.7, ease }}
            className="mt-2 h-8 md:h-9 whitespace-nowrap text-xl md:text-2xl font-medium tracking-[-0.03em] text-neutral-400"
          >
            <span className="caret">{role}</span>
          </motion.p>

          <motion.p {...rise(2)} className="mt-8 max-w-md text-base leading-relaxed text-neutral-600">
            {t("hero.text")}
          </motion.p>

          <motion.div {...rise(3)} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 h-12 px-6 rounded-full bg-neutral-900 text-white font-medium hover:bg-black transition-colors"
            >
              {t("hero.cta")}
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#about"
              className="text-neutral-900 underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors"
            >
              {t("hero.about")}
            </a>
          </motion.div>

          <motion.ul {...rise(4)} className="mt-16 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors"
                >
                  {s.name}
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Badge: hangs from the very top of the page, right below the menu bar */}
        <div className="relative h-[560px] sm:h-[640px] -mx-5 sm:-mx-8 lg:absolute lg:inset-0 lg:h-auto lg:mx-0">
          <div
            aria-hidden="true"
            className="absolute left-1/2 lg:left-[73%] top-[56%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[560px] sm:h-[560px] rounded-full bg-[#0071e3]/[0.12] blur-3xl"
          />
          {badge && (
            <Lanyard
              frontImage={badge.front}
              backImage={backImage || badge.back}
              onFlip={setFlipped}
              strapImage={badge.strap}
              strapColor="#0b0b0d"
              cardColor="#ffffff"
              finish="glossy"
              cornerRadius={0.3}
              size={0.6}
              anchor={isDesktop ? "right" : "center"}
              strapLength={0.46}
              strapWidth={0.75}
              metal="silver"
              breeze={0.4}
            />
          )}
        </div>
      </div>

      {/* Stack ticker */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-black/10 bg-[#fafafa]/80 backdrop-blur-sm">
        <div
          className="overflow-hidden py-5"
          style={{
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
            maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          }}
        >
          <ul className="marquee flex w-max gap-12 text-sm text-neutral-500" aria-label="Stack">
            {[...stack, ...stack].map((name, i) => (
              <li key={i} className="flex items-center gap-12 whitespace-nowrap">
                {name}
                <span aria-hidden="true" className="w-1 h-1 rounded-full bg-neutral-300" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
