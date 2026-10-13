import { profile, type ProjectContent } from "../content/profile";

/** Media blocks of a case study. Only the lead image exists for now. */
export type MediaBlock =
  | { type: "lead" | "wide"; src: string; alt: string }
  | { type: "pair"; items: [{ src: string; alt: string }, { src: string; alt: string }] }
  | { type: "video"; src: string; poster?: string };

export interface Project extends ProjectContent {
  id: number;
  index: number;
  /** Same as `image`; kept as the name the UI already uses. */
  img: string;
  media: MediaBlock[];
}

export const projects: Project[] = profile.projects.map((p, index) => ({
  ...p,
  id: index + 1,
  index,
  img: p.image,
  media: [{ type: "lead", src: p.image, alt: p.title }],
}));

export const findProject = (slug: string | undefined): Project | undefined => projects.find((p) => p.slug === slug);
