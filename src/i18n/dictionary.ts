// UI copy for both languages. `|` marks a line break inside headings, `**x**` marks emphasis.
// Anything that is *about Léo* (bio, roles, services, project summaries…) is not written here:
// it is derived from `content/profile.ts` so the site and the Markdown exports share one source.

import { profile, type Lang } from "../content/profile";

const en = {
  "nav.home": "Home",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.contact": "Contact",

  "menu.findMe": "Find me on",
  "menu.goTo": "Go to",
  "menu.desktop": "Desktop mode",
  "menu.openDesktop": "Open desktop mode",
  "menu.language": "Language",
  "menu.cv": "CV",

  "hero.label": "Portfolio",
  "hero.title": "Hi, I'm Léo,",
  "hero.text": "I develop websites, mobile apps and REST APIs, taking each product from the first screen to the last endpoint.",
  "hero.cta": "View projects",
  "hero.about": "About me",

  "egg.konami.title": "+30 lives",
  "egg.konami.sub": "Konami code unlocked.",
  "egg.hired.title": "Hired!",
  "egg.hired.sub": "offer letter sent.",

  "about.label": "About",
  "about.title": "I'm Léo,",
  "about.projects": "See my projects",
  "about.more": "More about me",

  "stat.projects": "Projects shipped",
  "stat.tools": "Internal tools led solo",
  "stat.platforms": "Platforms: web, mobile & desktop",
  "stat.learn": "Things left to learn",

  "skills.label": "Skills",
  "skills.title": "Tools I reach for|every day.",

  "projects.label": "Projects",
  "projects.title": "Things I've shipped.",
  "projects.case": "Case study",
  "projects.demo": "Live demo",
  "projects.hint": "keep scrolling to move on",
  "projects.open": "Open case study:",

  "contact.label": "Contact",
  "contact.title1": "Have something in mind?",
  "contact.title2": "Let's talk.",
  "contact.touch": "Get in touch",

  "footer.blurb": "Full stack developer. Building clean, fast interfaces and the APIs behind them.",
  "footer.navigate": "Navigate",
  "footer.social": "Social",
  "footer.elsewhere": "Elsewhere",
  "footer.rights": "Designed like a Mac.",
  "footer.letters": "hover the letters · drag them around",
  "footer.top": "Back to top",

  "dl.cv": "Download CV (.md)",
  "dl.portfolio": "Portfolio for AI (.md)",
  "dl.llms": "llms.txt",

  "ap.title": "About me.",
  "ap.do.label": "What I do",
  "ap.do.title": "Front-end, back-end and the|tools in between.",
  "ap.how.label": "How I work",
  "ap.how.title": "Bridges between|tech and people.",
  "ap.tool.label": "Toolbox",
  "ap.tool.title": "What I reach for.",
  "ap.cta.title": "See what I've|built so far.",
  "ap.cta.projects": "View projects",
  "ap.cta.touch": "Get in touch",

  "case.kind": "Kind",
  "case.kind.desktop": "Desktop app",
  "case.kind.web": "Web project",
  "case.stack": "Stack",
  "case.demo": "Demo",
  "case.source": "Source",
  "case.open": "Open live",
  "case.nodemo": "No live demo",
  "case.built": "Built by Léo",
  "case.more": "More about me ↗",
  "pager.all": "All projects",
  "pager.prev": "Previous",
  "pager.next": "Next",
} as const;

export type BaseKey = keyof typeof en;

const pt: Record<BaseKey, string> = {
  "nav.home": "Início",
  "nav.about": "Sobre",
  "nav.skills": "Skills",
  "nav.projects": "Projetos",
  "nav.contact": "Contato",

  "menu.findMe": "Me encontre em",
  "menu.goTo": "Ir para",
  "menu.desktop": "Modo desktop",
  "menu.openDesktop": "Abrir modo desktop",
  "menu.language": "Idioma",
  "menu.cv": "CV",

  "hero.label": "Portfólio",
  "hero.title": "Olá, eu sou o Léo,",
  "hero.text": "Desenvolvo sites, aplicativos mobile e APIs REST, levando cada produto da primeira tela ao último endpoint.",
  "hero.cta": "Ver projetos",
  "hero.about": "Sobre mim",

  "egg.konami.title": "+30 vidas",
  "egg.konami.sub": "Código Konami desbloqueado.",
  "egg.hired.title": "Contratado!",
  "egg.hired.sub": "proposta enviada.",

  "about.label": "Sobre",
  "about.title": "Sou o Léo,",
  "about.projects": "Ver meus projetos",
  "about.more": "Mais sobre mim",

  "stat.projects": "Projetos entregues",
  "stat.tools": "Ferramentas internas lideradas sozinho",
  "stat.platforms": "Plataformas: web, mobile e desktop",
  "stat.learn": "Coisas para aprender",

  "skills.label": "Skills",
  "skills.title": "Ferramentas que uso|no dia a dia.",

  "projects.label": "Projetos",
  "projects.title": "O que já entreguei.",
  "projects.case": "Estudo de caso",
  "projects.demo": "Demo ao vivo",
  "projects.hint": "continue rolando para avançar",
  "projects.open": "Abrir estudo de caso:",

  "contact.label": "Contato",
  "contact.title1": "Tem algo em mente?",
  "contact.title2": "Vamos conversar.",
  "contact.touch": "Entrar em contato",

  "footer.blurb": "Desenvolvedor full stack. Construindo interfaces limpas e rápidas e as APIs por trás delas.",
  "footer.navigate": "Navegar",
  "footer.social": "Redes",
  "footer.elsewhere": "Outros",
  "footer.rights": "Feito como um Mac.",
  "footer.letters": "passe o mouse nas letras · arraste-as",
  "footer.top": "Voltar ao topo",

  "dl.cv": "Baixar currículo (.md)",
  "dl.portfolio": "Portfólio para IAs (.md)",
  "dl.llms": "llms.txt",

  "ap.title": "Sobre mim.",
  "ap.do.label": "O que eu faço",
  "ap.do.title": "Front-end, back-end e as|ferramentas entre eles.",
  "ap.how.label": "Como eu trabalho",
  "ap.how.title": "Pontes entre|tecnologia e pessoas.",
  "ap.tool.label": "Ferramentas",
  "ap.tool.title": "O que eu uso.",
  "ap.cta.title": "Veja o que eu|construí até agora.",
  "ap.cta.projects": "Ver projetos",
  "ap.cta.touch": "Fale comigo",

  "case.kind": "Tipo",
  "case.kind.desktop": "App desktop",
  "case.kind.web": "Projeto web",
  "case.stack": "Stack",
  "case.demo": "Demo",
  "case.source": "Código-fonte",
  "case.open": "Abrir ao vivo",
  "case.nodemo": "Sem demo online",
  "case.built": "Feito por Léo",
  "case.more": "Mais sobre mim ↗",
  "pager.all": "Todos os projetos",
  "pager.prev": "Anterior",
  "pager.next": "Próximo",
};

const strip = (s: string) => s.replaceAll("**", "");

/** Entries derived from the profile content, one set per language. */
function derived(lang: Lang) {
  const soft = profile.skills.find((g) => g.id === "soft")?.items ?? [];
  const entries = {
    "hero.role1": profile.roles[lang][0],
    "hero.role2": profile.roles[lang][1],
    "about.p1": strip(profile.bio[lang][0]),
    "about.p2": strip(profile.bio[lang][1]),
    "ap.role": profile.roles[lang].join(" · "),
    "ap.p1": profile.bio[lang][0], // keeps `**emphasis**`
    "ap.p2": profile.bio[lang][1],
    "ap.motto": profile.motto,
  } as const;

  const extra: Record<string, string> = {};
  profile.services.forEach((s) => {
    extra[`ap.${s.id}.t`] = s.title[lang];
    extra[`ap.${s.id}.d`] = s.text[lang];
  });
  soft.forEach((item, i) => {
    extra[`ap.pr${i + 1}.t`] = item.names?.[lang] ?? item.name;
    extra[`ap.pr${i + 1}.d`] = item.note?.[lang] ?? "";
  });
  profile.projects.forEach((p) => {
    extra[`proj.${p.slug}`] = p.summary[lang];
  });
  return { ...entries, ...extra } as Record<string, string>;
}

export type DerivedKey =
  | "hero.role1"
  | "hero.role2"
  | "about.p1"
  | "about.p2"
  | "ap.role"
  | "ap.p1"
  | "ap.p2"
  | "ap.motto"
  | `ap.w${1 | 2 | 3 | 4 | 5}.${"t" | "d"}`
  | `ap.pr${1 | 2 | 3 | 4}.${"t" | "d"}`
  | `proj.${string}`;

export type DictKey = BaseKey | DerivedKey;

export const dictionary: Record<Lang, Record<string, string>> = {
  en: { ...en, ...derived("en") },
  pt: { ...pt, ...derived("pt") },
};
