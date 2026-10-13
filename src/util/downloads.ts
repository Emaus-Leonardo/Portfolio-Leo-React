import type { Lang } from "../content/profile";

export interface DownloadLink {
  href: string;
  /** Suggested file name for `<a download>`; omitted for pages meant to be read in the browser. */
  filename?: string;
}

/**
 * The owner's own CV file (PDF). Drop it at `public/cv.pdf`: the header "CV" button appears
 * automatically once the file exists, and nothing is shown while it does not.
 */
export const CV_FILE = "/cv.pdf";

/**
 * Markdown exports, generated at build time by the Vite plugin (see `vite.config.ts`).
 * The Portuguese files carry a `.pt` suffix.
 */
export function downloads(lang: Lang): { cv: DownloadLink; portfolio: DownloadLink; llms: DownloadLink } {
  const suffix = lang === "pt" ? ".pt" : "";
  return {
    cv: { href: `/cv${suffix}.md`, filename: `emaus-leonardo-cv${suffix}.md` },
    portfolio: { href: `/portfolio${suffix}.md`, filename: `emaus-leonardo-portfolio${suffix}.md` },
    llms: { href: "/llms.txt" },
  };
}
