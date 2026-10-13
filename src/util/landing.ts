import { profile, type SkillGroup, type Social } from "../content/profile";
import type { DictKey } from "../i18n/dictionary";

export type SectionId = "home" | "about" | "skills" | "projects" | "contact";

/** Landing sections, in page order. Labels come from the dictionary (`nav.<id>`). */
export const sections: readonly { id: SectionId }[] = [
  { id: "home" },
  { id: "about" },
  { id: "skills" },
  { id: "projects" },
  { id: "contact" },
];

export const socials: readonly Social[] = profile.socials;

/** Handle printed on the badge. */
export const badgeHandle: string = profile.handle;

export interface Stat {
  value: string;
  key: DictKey;
}

export const stats: readonly Stat[] = [
  { value: String(profile.projects.length), key: "stat.projects" },
  { value: "2", key: "stat.tools" },
  { value: "3", key: "stat.platforms" },
  { value: "∞", key: "stat.learn" },
];

export const skillGroups: readonly SkillGroup[] = profile.skills;
