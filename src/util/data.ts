// Legacy shape consumed by the old desktop-mode windows (Projects page, Cards).
// Derived from the shared content so there is a single list of projects.
import { projects } from "./projects";

export interface LegacyProject {
  id: number;
  title: string;
  img: string;
  github: string;
  demo: string;
  summary: string;
  technologies: string[];
  category: string[];
  animationDelay: string;
}

const delays = ["60%", "90%", "130%", "160%", "190%", "190%"];

const projectsData: LegacyProject[] = projects.map((p, i) => ({
  id: p.id,
  title: `{${p.title}}`,
  img: p.img,
  github: p.github ?? "",
  demo: p.demo ?? "",
  summary: p.summary.pt,
  technologies: p.technologies,
  category: p.technologies,
  animationDelay: delays[i] ?? "190%",
}));

export default projectsData;
