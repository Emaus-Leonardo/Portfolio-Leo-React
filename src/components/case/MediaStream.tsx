import React, { type ReactNode } from "react";
import type { MediaBlock } from "../../util/projects";

const RATIO = { lead: "16 / 10", wide: "1058 / 566", square: "525 / 566" } as const;

// Screens are shown inside a Safari-style window, like the rest of the site's macOS framing.
function BrowserFrame({ host, children }: { host: string; children: ReactNode }) {
  return (
    <div className="surface rounded-2xl overflow-hidden">
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

interface MediaStreamProps {
  media: MediaBlock[];
  host?: string;
}

export default function MediaStream({ media, host = "localhost" }: MediaStreamProps) {
  return (
    <div className="grid gap-4">
      {media.map((block, i) => {
        if (block.type === "pair") {
          return (
            <div key={i} className="grid sm:grid-cols-2 gap-4">
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
    </div>
  );
}
