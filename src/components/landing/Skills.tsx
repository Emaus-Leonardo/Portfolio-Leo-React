import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { skillGroups } from "../../util/landing";
import { useLang, lines } from "../../i18n";

export default function Skills() {
  const { t, lang } = useLang();
  return (
    <section id="skills" className="relative scroll-mt-8 py-28 md:py-40 px-5 sm:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-12 lg:gap-16 items-start">
        <Reveal>
          <p className="text-sm text-neutral-500">{t("skills.label")}</p>
          <h2 className="mt-6 text-4xl md:text-5xl font-medium tracking-[-0.04em] leading-[1.05] text-neutral-900 max-w-md">
            {lines(t("skills.title"))}
          </h2>
        </Reveal>

        <ul className="flex flex-wrap gap-3 lg:pt-10" aria-label="Skills">
          {skillGroups
            .flatMap((g) => g.items)
            .map((item, i) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center h-12 px-6 rounded-full bg-white border border-black/[0.08] text-neutral-900 hover:border-black/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                {item.names?.[lang] ?? item.name}
              </motion.li>
            ))}
        </ul>
      </div>
    </section>
  );
}
