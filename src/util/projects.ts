import { profile, type Localized, type ProjectContent } from "../content/profile";

/** Media blocks of a case study: the lead image, then any design-system screens. */
export type MediaBlock =
  | { type: "lead" | "wide"; src: string; alt: string }
  | { type: "pair"; items: [{ src: string; alt: string }, { src: string; alt: string }] }
  | { type: "video"; src: string; poster?: string }
  | { type: "design"; src: string; title: Localized; width: number; height: number; full: boolean };

export interface Project extends ProjectContent {
  id: number;
  index: number;
  /** Same as `image`; kept as the name the UI already uses. */
  img: string;
  /** CSS object-position for the cover. */
  imgPosition: string;
  /** Square thumbnail. */
  iconImg: string;
  media: MediaBlock[];
}

export const projects: Project[] = profile.projects.map((p, index) => ({
  ...p,
  id: index + 1,
  index,
  img: p.image,
  imgPosition: p.imagePosition ?? "top",
  iconImg: p.icon ?? p.image,
  media: [
    { type: "lead", src: p.image, alt: p.title },
    ...(p.designSystem ?? []).map((d): MediaBlock => ({ type: "design", ...d, full: !!d.full })),
  ],
}));

/** The handful of projects shown on the landing page, in profile order. */
export const featuredProjects: Project[] = projects.filter((p) => p.featured);

export const findProject = (slug: string | undefined): Project | undefined => projects.find((p) => p.slug === slug);
