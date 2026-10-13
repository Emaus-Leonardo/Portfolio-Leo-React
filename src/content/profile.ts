// Single source of truth for everything *about* Léo. The site UI, the i18n dictionary and the
// Markdown exports (CV, portfolio for LLMs, llms.txt) all derive from this file.
//
// Keep it pure data: no asset imports and no browser APIs, so it can also run inside the Vite config.

export type Lang = "en" | "pt";
export type Localized<T = string> = Record<Lang, T>;

export interface Social {
  name: string;
  handle: string;
  href: string;
}

export interface SkillItem {
  name: string;
  /** Display name per language when it differs (soft skills). */
  names?: Localized;
  /** Short description per language (soft skills). */
  note?: Localized;
  /** Logo shown next to the name, relative to the site root. */
  logo?: string;
}

export interface SkillGroup {
  id: "frontend" | "backend" | "mobile" | "soft";
  label: Localized;
  items: SkillItem[];
}

export interface Service {
  id: `w${1 | 2 | 3 | 4 | 5}`;
  title: Localized;
  text: Localized;
  tags: string[];
}

export interface ProjectContent {
  slug: string;
  title: string;
  technologies: string[];
  summary: Localized;
  image: string;
  demo?: string;
  github?: string;
  featured?: boolean;
}

export interface Profile {
  name: string;
  nickname: string;
  /** Handle printed on the badge. */
  handle: string;
  /** Contact e-mail. While empty, "Get in touch" falls back to LinkedIn. */
  email?: string;
  location: Localized;
  roles: Localized<string[]>;
  tagline: Localized;
  motto: string;
  /** A line that stays in the footer and the Markdown exports. Not translated on purpose. */
  quote: string;
  /** Paragraphs; `**x**` marks emphasis (valid Markdown, rendered as highlights on the site). */
  bio: Localized<string[]>;
  highlights: Localized<string[]>;
  services: Service[];
  skills: SkillGroup[];
  socials: Social[];
  projects: ProjectContent[];
}

export const profile: Profile = {
  name: "Emaús Leonardo",
  nickname: "Léo",
  handle: "@EmausLeonardo",
  email: "",
  location: { en: "Brazil", pt: "Brasil" },
  roles: {
    en: ["Front-end developer", "Full stack developer"],
    pt: ["Desenvolvedor front-end", "Desenvolvedor full stack"],
  },
  tagline: {
    en: "I develop websites, mobile apps and REST APIs, taking each product from the first screen to the last endpoint.",
    pt: "Desenvolvo sites, aplicativos mobile e APIs REST, levando cada produto da primeira tela ao último endpoint.",
  },
  motto: "Push your limits.",
  quote: "Don't be afraid to be afraid.",

  bio: {
    en: [
      "Hi, my name is **Emaús Leonardo**, but you can call me Léo. Right now I'm diving into the world of **front-end development**, aiming to sharpen my skills and find my place in the market.",
      "I'm passionate about creating impressive online experiences for users and keeping up with best practices and trends. My portfolio shows what I've done so far and my determination to become an exceptional front-end developer. I'm ready to take on **challenging projects** and help creative, dynamic teams.",
    ],
    pt: [
      "Olá, meu nome é **Emaús Leonardo**, mas pode me chamar de Léo. No momento, estou mergulhando no mundo do **desenvolvimento Front End** com o objetivo de aprimorar minhas habilidades para me posicionar no mercado.",
      "Sou apaixonado por criar experiências online impressionantes para os usuários e acompanhar as melhores práticas e tendências. Meu portfólio demonstra o que já fiz até agora e minha determinação em me tornar um desenvolvedor Front End excepcional. Estou disposto a trabalhar em **projetos desafiadores** e ajudar equipes criativas e dinâmicas.",
    ],
  },

  highlights: {
    en: [
      "Built several landing pages for clients, including Dr. Smart Saúde with its own custom checkout.",
      "Developed native Android and iOS apps with React Native, configuring native dependencies in Kotlin and Swift.",
      "Led 2 internal process-improvement projects, working entirely on my own on both.",
    ],
    pt: [
      "Criei diversas landing pages para clientes, incluindo a Dr. Smart Saúde, com checkout próprio.",
      "Desenvolvi aplicativos nativos para Android e iOS com React Native, configurando dependências nativas com Kotlin e Swift.",
      "Liderei 2 projetos de melhoria de processos internos, atuando totalmente sozinho nos dois.",
    ],
  },

  services: [
    {
      id: "w1",
      title: { en: "Front-end development", pt: "Desenvolvimento front-end" },
      text: {
        en: "Building beautiful, interactive user experiences with clean, maintainable code, including client landing pages and a custom checkout.",
        pt: "Criando experiências de usuário bonitas e interativas, com código limpo e fácil de manter, incluindo landing pages para clientes e um checkout próprio.",
      },
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: "w3",
      title: { en: "Back-end & REST APIs", pt: "Back-end e APIs REST" },
      text: {
        en: "Designing and building RESTful APIs with Node.js and Prisma, plus automations in Python, like Refresh Shop.",
        pt: "Criação de APIs RESTful com Node.js e Prisma, além de automações em Python, como o Refresh Shop.",
      },
      tags: ["Node.js", "Prisma", "Express.js", "Python"],
    },
    {
      id: "w5",
      title: { en: "Mobile apps", pt: "Aplicativos mobile" },
      text: {
        en: "Native Android and iOS apps built with React Native, with native dependencies configured in Kotlin and Swift.",
        pt: "Aplicativos nativos para Android e iOS com React Native, configurando dependências nativas com Kotlin e Swift.",
      },
      tags: ["React Native", "Kotlin", "Swift"],
    },
    {
      id: "w4",
      title: { en: "Internal tools", pt: "Ferramentas internas" },
      text: {
        en: "I led 2 internal process-improvement projects, working entirely on my own on both.",
        pt: "Liderei 2 projetos de melhoria de processos internos, atuando totalmente sozinho nos dois.",
      },
      tags: [],
    },
  ],

  skills: [
    {
      id: "frontend",
      label: { en: "Frontend", pt: "Frontend" },
      items: [
        { name: "React", logo: "/img/react.svg" },
        { name: "TypeScript", logo: "/img/typescript-icon.svg" },
        { name: "Tailwind CSS", logo: "/img/tailwind.svg" },
        { name: "JavaScript", logo: "/img/javascript.svg" },
        { name: "HTML5", logo: "/img/html.svg" },
        { name: "CSS3", logo: "/img/css.svg" },
      ],
    },
    {
      id: "backend",
      label: { en: "Backend", pt: "Backend" },
      items: [
        { name: "Node.js", logo: "/img/nodejs-icon.svg" },
        { name: "Python", logo: "/img/pythonIcon.svg" },
        { name: "Express.js" },
        { name: "Prisma" },
        { name: "REST APIs" },
        { name: "Firebase" },
        { name: "Electron" },
        { name: "Docker" },
      ],
    },
    {
      id: "mobile",
      label: { en: "Mobile", pt: "Mobile" },
      items: [{ name: "React Native" }, { name: "Kotlin" }, { name: "Swift" }],
    },
    {
      id: "soft",
      label: { en: "Soft skills", pt: "Soft skills" },
      items: [
        {
          name: "Comunicação",
          names: { en: "Communication", pt: "Comunicação" },
          note: { en: "Clear communication.", pt: "Comunicação clara." },
        },
        {
          name: "Trabalho em equipe",
          names: { en: "Teamwork", pt: "Trabalho em equipe" },
          note: { en: "Collaboration in diverse environments.", pt: "Colaboração em ambientes diversos." },
        },
        {
          name: "Adaptabilidade",
          names: { en: "Adaptability", pt: "Adaptabilidade" },
          note: {
            en: "Quickly adapting to new technologies and methods.",
            pt: "Adaptação rápida a novas tecnologias e métodos.",
          },
        },
        {
          name: "Empatia",
          names: { en: "Empathy", pt: "Empatia" },
          note: {
            en: "Understanding users' needs and team dynamics.",
            pt: "Entender as necessidades dos usuários e a dinâmica da equipe.",
          },
        },
      ],
    },
  ],

  socials: [
    { name: "X", handle: "@EmausLeonardo", href: "https://x.com/EmausLeonardo" },
    { name: "GitHub", handle: "Emaus-Leonardo", href: "https://github.com/Emaus-Leonardo" },
    { name: "LinkedIn", handle: "emaus-leonardo", href: "https://www.linkedin.com/in/emaus-leonardo/" },
    { name: "Instagram", handle: "@kuri.sz", href: "https://www.instagram.com/kuri.sz/" },
  ],

  projects: [
    {
      slug: "app-clima",
      title: "App Clima",
      technologies: ["HTML", "JavaScript", "CSS"],
      summary: {
        en: "Weather app built with JavaScript, HTML and CSS.",
        pt: "Aplicativo de Clima JavaScript, HTML e CSS",
      },
      image: "/img/appClima.jpg",
      github: "https://github.com/Emaus-Leonardo/App-Clima",
      demo: "https://emaus-leonardo.github.io/App-Clima/",
    },
    {
      slug: "to-do-list",
      title: "To-Do-List",
      technologies: ["HTML", "JavaScript", "CSS"],
      summary: {
        en: "To-do list built with HTML, CSS and JavaScript.",
        pt: "To do List utilizando HTML, CSS e javaScript",
      },
      image: "/img/toDoList.jpg",
      github: "https://github.com/Emaus-Leonardo/To-Do-List",
      demo: "https://emaus-leonardo.github.io/To-Do-List/",
    },
    {
      slug: "refresh-shop",
      title: "Refresh Shop",
      technologies: ["Python"],
      summary: {
        en: "An automation program written in Python with the PyAutoGUI library and the KivyMD GUI framework. It automates the refresh process of an in-game virtual shop.",
        pt: "Este é um programa de automação escrito em Python com a biblioteca PyAutoGUI e a estrutura de interface gráfica KivyMD. O objetivo do programa é automatizar o processo de atualização de uma loja virtual em um jogo, utilizando Python",
      },
      image: "/img/refreshShop.jpg",
      github: "https://github.com/Emaus-Leonardo/Refresh-Shop-App-Epic7",
    },
    {
      slug: "lanchonete-pequim",
      title: "Lanchonete Pequim",
      technologies: ["Tailwind", "React", "TypeScript"],
      summary: {
        en: "Landing page built together with a friend for the Pequim snack bar in Presidente Prudente, using TypeScript, Tailwind CSS and React.",
        pt: "Landing Page desenvolvida em conjunto com um amigo para a lanchonete pequim de presidente prudente, foi desenvolvido com TypeScript,Tailwind css e React",
      },
      image: "/img/lanchonete-pequim.jpg",
      demo: "https://pequim-lanchonete.vercel.app/",
    },
    {
      slug: "thiago-luna-portfolio",
      title: "Thiago Luna Portfolio",
      technologies: ["Tailwind", "React"],
      summary: {
        en: "Portfolio built for Thiago Luna in a landing-page style, using Tailwind CSS and React.",
        pt: "Portfolio Desenvolvido para Thiago Luna no estilo de Landing Page Tailwind css e React",
      },
      image: "/img/thiagoLunaPortfolio.jpg",
      demo: "https://thiagolunaf.com/",
    },
    {
      slug: "sakura-sound",
      title: "Sakura Sound",
      technologies: ["Tailwind", "React", "TypeScript", "Nodejs", "Firebase", "Express", "Electron"],
      summary: {
        en: "Music platform with Firebase integration and a native Windows app, built with Electron and backed by an Express API.",
        pt: "Plataforma de música com integração com Firebase e aplicativo nativo para Windows, feito com Electron e uma API Express.",
      },
      image: "/img/sakurasound.png",
      demo: "https://sakura-sound.vercel.app/",
      featured: true,
    },
    {
      slug: "dr-smart-saude",
      title: "Dr. Smart Saúde",
      technologies: ["Landing page", "Checkout"],
      summary: {
        en: "Landing page for a telemedicine and health-tech company, with its own custom checkout.",
        pt: "Landing page de uma empresa de telemedicina e tecnologia em saúde, com checkout próprio.",
      },
      image: "/img/drsmart.jpg",
      demo: "https://www.drsmartsaude.com.br/",
    },
    {
      slug: "duarte-e-cruz-advocacia",
      title: "Duarte & Cruz Advocacia",
      technologies: ["Landing page"],
      summary: {
        en: "Landing page for a law firm based in Campo Grande, MS.",
        pt: "Landing page de um escritório de advocacia de Campo Grande, MS.",
      },
      image: "/img/duarte-cruz-adv.jpg",
      demo: "https://duarteecruz.adv.br/",
    },
    {
      slug: "duarte-e-cruz-solucoes",
      title: "Duarte & Cruz Soluções",
      technologies: ["Landing page"],
      summary: {
        en: "Landing page for a health-plan brokerage and strategic support company.",
        pt: "Landing page de uma empresa de intermediação de planos de saúde e suporte estratégico.",
      },
      image: "/img/duarte-cruz-saude.jpg",
      demo: "https://duarteecruzsaude.com.br/",
    },
  ],
};
