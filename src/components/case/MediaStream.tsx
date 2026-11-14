import React, { type ReactNode } from "react";
import type { MediaBlock } from "../../util/projects";
import Reveal from "../landing/Reveal";
import { useLang } from "../../i18n";

const RATIO = { lead: "16 / 10", wide: "1058 / 566", square: "525 / 566" } as const;

// Screens are shown inside a Safari-style window, like the rest of the site's macOS framing.
function BrowserFrame({ host, children }: { host: string; children: ReactNode }) {
  return (
    <div className="surface rounded-xl overflow-hidden">
      <div className="relative h-10 flex items-center px-4 border-b border-black/[0.06] bg-[#f6f6f8]">
        <div className="flex gap-2" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 w-[46%] max-w-sm h-6 rounded-md bg-black/[0.05] text-center font-mono text-[11px] leading-6 text-neutral-500 truncate px-3">
          {host}
        </span>
      </div>
      {children}
    </div>
  );
}

function Shot({ src, alt, ratio }: { src: string; alt: string; ratio: string }) {
  return (
    <figure className="bg-[#f3f3f1] overflow-hidden" style={{ aspectRatio: ratio }}>
      <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover object-top" />
    </figure>
  );
}

type DesignBlock = Extract<MediaBlock, { type: "design" }>;

// Design-system screens are artwork, not app screens: bare images in the same tight stream
// (8px gaps, 12px corners), wide ones on their own row and the rest in pairs. No frame, no caption.
function DesignGallery({ screens }: { screens: DesignBlock[] }) {
  const { t, lang } = useLang();
  return (
    <section aria-labelledby="case-design-system" className="grid sm:grid-cols-2 gap-2">
      <h2 id="case-design-system" className="sr-only">
        {t("case.designSystem")}
      </h2>
      {screens.map((d, i) => (
        <Reveal key={d.src} y={28} delay={d.full ? 0 : (i % 2) * 0.06} className={d.full ? "sm:col-span-2" : ""}>
          <figure className="relative rounded-xl overflow-hidden bg-black/[0.06] after:pointer-events-none after:absolute after:inset-0 after:rounded-xl after:ring-1 after:ring-inset after:ring-black/[0.08]">
            <img
              src={d.src}
              alt={d.title[lang]}
              width={d.width}
              height={d.height}
              loading="lazy"
              className="block w-full h-auto"
            />
          </figure>
        </Reveal>
      ))}
    </section>
  );
}

interface MediaStreamProps {
  media: MediaBlock[];
  host?: string;
}

export default function MediaStream({ media, host = "localhost" }: MediaStreamProps) {
  const screens = media.filter((b): b is DesignBlock => b.type === "design");
  const rest = media.filter((b) => b.type !== "design");

  return (
    <div className="grid gap-2">
      {rest.map((block, i) => {
        if (block.type === "pair") {
          return (
            <div key={i} className="grid sm:grid-cols-2 gap-2">
              {block.items.map((it, j) => (
                <BrowserFrame key={j} host={host}>
                  <Shot src={it.src} alt={it.alt} ratio={RATIO.square} />
                </BrowserFrame>
              ))}
            </div>
          );
        }
        if (block.type === "video") {
          return (
            <BrowserFrame key={i} host={host}>
              <video src={block.src} poster={block.poster} controls className="w-full bg-[#f3f3f1]" />
            </BrowserFrame>
          );
        }
        return (
          <BrowserFrame key={i} host={host}>
            <Shot src={block.src} alt={block.alt} ratio={RATIO[block.type]} />
          </BrowserFrame>
        );
      })}
      {screens.length > 0 && <DesignGallery screens={screens} />}
    </div>
  );
}
