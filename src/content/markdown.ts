// Markdown exports derived from `profile.ts`: a CV, a full portfolio for humans/LLMs and an
// `llms.txt` index (https://llmstxt.org). Pure functions — no browser or Node APIs.

import { profile, type Lang, type SkillGroup } from "./profile";

export interface MarkdownFile {
  /** Path under the site root, without the leading slash. */
  path: string;
  contentType: string;
  body: string;
}

export interface RenderOptions {
  /** Public origin without trailing slash, e.g. `https://example.com`. Omit for root-relative links. */
  siteUrl?: string;
  /** ISO date stamped into the documents. */
  updated?: string;
}

const COPY = {
  en: {
    cv: "CV",
    summary: "Summary",
    highlights: "Highlights",
    skills: "Skills",
    projects: "Selected projects",
    links: "Links",
    demo: "Live demo",
    code: "Source code",
    caseStudy: "Case study",
    stack: "Stack",
    based: "Location",
    portfolio: "Portfolio",
    about: "About",
    whatIDo: "What I do",
    contact: "Contact",
    sitemap: "Site map",
    formats: "Other formats",
    forAi: "About this document",
    forAiText:
      "This is a plain-text version of Léo's portfolio, written for people and for AI assistants / LLMs. It is generated from the same data as the website, so it matches the site. Only facts published on the site are included.",
    pages: {
      home: "Landing page with intro, about, skills, projects and contact",
      about: "Longer About page",
      work: "One case-study page per project",
      desktop: "Interactive macOS-style desktop mode",
    },
    langName: "English",
    other: "Português (BR)",
  },
  pt: {
    cv: "Currículo",
    summary: "Resumo",
    highlights: "Destaques",
    skills: "Skills",
    projects: "Projetos selecionados",
    links: "Links",
    demo: "Demo ao vivo",
    code: "Código-fonte",
    caseStudy: "Estudo de caso",
    stack: "Stack",
    based: "Localização",
    portfolio: "Portfólio",
    about: "Sobre",
    whatIDo: "O que eu faço",
    contact: "Contato",
    sitemap: "Mapa do site",
    formats: "Outros formatos",
    forAi: "Sobre este documento",
    forAiText:
      "Esta é uma versão em texto puro do portfólio do Léo, escrita para pessoas e para assistentes de IA / LLMs. Ela é gerada a partir dos mesmos dados do site, então corresponde a ele. Só entram fatos publicados no site.",
    pages: {
      home: "Página inicial com apresentação, sobre, skills, projetos e contato",
      about: "Página Sobre mim, mais completa",
      work: "Uma página de estudo de caso por projeto",
      desktop: "Modo desktop interativo no estilo macOS",
    },
    langName: "Português (BR)",
    other: "English",
  },
} as const;

const url = (opts: RenderOptions, path: string) => `${opts.siteUrl ?? ""}${path}`;
const names = (group: SkillGroup, lang: Lang) => group.items.map((i) => i.names?.[lang] ?? i.name);
const fileFor = (kind: "cv" | "portfolio", lang: Lang) => `/${kind}${lang === "pt" ? ".pt" : ""}.md`;

function header(lang: Lang): string[] {
  const { name, roles, location } = profile;
  return [`# ${name}`, "", `**${roles[lang].join(" · ")}** (${COPY[lang].based}: ${location[lang]})`, ""];
}

function skillsBlock(lang: Lang): string[] {
  return profile.skills.map((g) => `- **${g.label[lang]}:** ${names(g, lang).join(", ")}`);
}

function linksBlock(): string[] {
  return profile.socials.map((s) => `- [${s.name}](${s.href}): ${s.handle}`);
}

/** Résumé. Only contains facts that exist in `profile.ts`. */
export function renderCv(lang: Lang, opts: RenderOptions = {}): string {
  const c = COPY[lang];
  const out: string[] = [...header(lang)];

  out.push(`## ${c.links}`, "", ...linksBlock(), "");
  out.push(`## ${c.summary}`, "", ...profile.bio[lang].flatMap((p) => [p, ""]));
  out.push(`## ${c.highlights}`, "", ...profile.highlights[lang].map((h) => `- ${h}`), "");
  out.push(`## ${c.skills}`, "", ...skillsBlock(lang), "");

  out.push(`## ${c.projects}`, "");
  for (const p of profile.projects) {
    const links = [
      p.demo ? `[${c.demo}](${p.demo})` : "",
      p.github ? `[${c.code}](${p.github})` : "",
      `[${c.caseStudy}](${url(opts, `/work/${p.slug}`)})`,
    ].filter(Boolean);
    out.push(`### ${p.title}`, "", `${links.join(" · ")}`, "", `*${c.stack}:* ${p.technologies.join(", ")}`, "");
    if (p.summary[lang]) out.push(p.summary[lang], "");
  }

  out.push("---", "", `*${c.langName} · ${opts.updated ?? ""}* · [${c.other}](${url(opts, fileFor("cv", lang === "en" ? "pt" : "en"))})`, "");
  return out.join("\n");
}

/** Whole portfolio, structured for LLMs (front matter + stable headings + explicit URLs). */
export function renderPortfolio(lang: Lang, opts: RenderOptions = {}): string {
  const c = COPY[lang];
  const { name, nickname, roles, tagline, services } = profile;
  const out: string[] = [
    "---",
    `title: "${nickname} | ${name} · ${c.portfolio}"`,
    `description: "${roles[lang].join(", ")}. ${tagline[lang]}"`,
    `lang: ${lang === "pt" ? "pt-BR" : "en"}`,
    ...(opts.updated ? [`updated: ${opts.updated}`] : []),
    ...(opts.siteUrl ? [`canonical: ${opts.siteUrl}/`] : []),
    "---",
    "",
    ...header(lang),
    `> ${tagline[lang]}`,
    "",
    `> *${profile.quote}*`,
    "",
    `## ${c.forAi}`,
    "",
    c.forAiText,
    "",
    `## ${c.about}`,
    "",
    ...profile.bio[lang].flatMap((p) => [p, ""]),
    ...profile.highlights[lang].map((h) => `- ${h}`),
    "",
    `## ${c.whatIDo}`,
    "",
    ...services.flatMap((s, i) => [
      `${i + 1}. **${s.title[lang]}**: ${s.text[lang]}${s.tags.length ? ` (${s.tags.join(", ")})` : ""}`,
    ]),
    "",
    `## ${c.skills}`,
    "",
    ...skillsBlock(lang),
    "",
  ];

  const soft = profile.skills.find((g) => g.id === "soft");
  if (soft) {
    out.push(
      ...soft.items.map((i) => `  - ${i.names?.[lang] ?? i.name}: ${i.note?.[lang] ?? ""}`.replace(/: $/, "")),
      ""
    );
  }

  out.push(`## ${c.projects}`, "");
  for (const p of profile.projects) {
    out.push(`### ${p.title}`, "");
    if (p.summary[lang]) out.push(p.summary[lang], "");
    out.push(
      `- ${c.stack}: ${p.technologies.join(", ")}`,
      ...(p.demo ? [`- ${c.demo}: ${p.demo}`] : []),
      ...(p.github ? [`- ${c.code}: ${p.github}`] : []),
      `- ${c.caseStudy}: ${url(opts, `/work/${p.slug}`)}`,
      ""
    );
  }

  out.push(`## ${c.contact}`, "", ...linksBlock(), "");

  out.push(
    `## ${c.sitemap}`,
    "",
    `- [/](${url(opts, "/")}): ${c.pages.home}`,
    `- [/about](${url(opts, "/about")}): ${c.pages.about}`,
    `- [/work/:slug](${url(opts, "/work/" + profile.projects[0].slug)}): ${c.pages.work}`,
    `- [/desktop](${url(opts, "/desktop")}): ${c.pages.desktop}`,
    "",
    `## ${c.formats}`,
    "",
    `- [${c.cv} (${c.langName})](${url(opts, fileFor("cv", lang))})`,
    `- [${c.portfolio} (${c.other})](${url(opts, fileFor("portfolio", lang === "en" ? "pt" : "en"))})`,
    `- [llms.txt](${url(opts, "/llms.txt")})`,
    ""
  );
  return out.join("\n");
}

/** `llms.txt` following https://llmstxt.org — an index for language models. */
export function renderLlmsTxt(opts: RenderOptions = {}): string {
  const { name, nickname, roles } = profile;
  const doc = (kind: "cv" | "portfolio", lang: Lang) => url(opts, fileFor(kind, lang));
  return [
    `# ${nickname} | ${name}`,
    "",
    `> Portfolio of ${name}: ${roles.en.join(" and ").toLowerCase()}. Bilingual (English / Português BR).`,
    "",
    "The Markdown documents below are generated from the same data as the website and are the best way for an",
    "AI assistant to read it. The website itself is an animated single-page app.",
    "",
    "## Documents",
    "",
    `- [Portfolio (English)](${doc("portfolio", "en")}): full portfolio: about, what I do, skills, projects, links`,
    `- [Portfólio (Português BR)](${doc("portfolio", "pt")}): the same, in Portuguese`,
    `- [CV (English)](${doc("cv", "en")}): résumé`,
    `- [Currículo (Português BR)](${doc("cv", "pt")}): résumé, in Portuguese`,
    "",
    "## Pages",
    "",
    `- [Home](${url(opts, "/")}): landing page`,
    `- [About](${url(opts, "/about")}): longer About page`,
    ...profile.projects.map((p) => `- [${p.title}](${url(opts, `/work/${p.slug}`)}): case study`),
    "",
    "## Optional",
    "",
    ...profile.socials.map((s) => `- [${s.name}](${s.href})`),
    "",
  ].join("\n");
}

/** All generated files, ready for the Vite plugin to serve (dev) or emit (build). */
export function markdownFiles(opts: RenderOptions = {}): MarkdownFile[] {
  const md = "text/markdown; charset=utf-8";
  return [
    { path: "cv.md", contentType: md, body: renderCv("en", opts) },
    { path: "cv.pt.md", contentType: md, body: renderCv("pt", opts) },
    { path: "portfolio.md", contentType: md, body: renderPortfolio("en", opts) },
    { path: "portfolio.pt.md", contentType: md, body: renderPortfolio("pt", opts) },
    { path: "llms.txt", contentType: "text/plain; charset=utf-8", body: renderLlmsTxt(opts) },
  ];
}
