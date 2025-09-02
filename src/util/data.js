import ToDoList from "../../public/img/toDoList.jpg";
import RefreshShop from "../../public/img/refreshShop.jpg";
import AppClima from "../../public/img/appClima.jpg";
import LanchonetePequim from "../../public/img/lanchonete-pequim.jpg";
import ThiagoLunaPortfolio from "../../public/img/thiagoLunaPortfolio.jpg";
import SakuraSound from "../../public/img/sakurasound.png";

const projectsData = [
  {
    id: 1,
    title: "{App Clima}",
    img: AppClima,
    github: "https://github.com/Emaus-Leonardo/App-Clima",
    demo: "https://emaus-leonardo.github.io/App-Clima/",
    summary: "Aplicativo de Clima JavaScript, HTML e CSS",
    technologies: ["HTML", "JavaScript", "CSS"],
    category: ["HTML", "JavaScript", "CSS"],
    animationDelay: "60%"
  },
  {
    id: 2,
    title: "{To-Do-List}",
    img: ToDoList,
    github: "https://github.com/Emaus-Leonardo/To-Do-List",
    demo: "https://emaus-leonardo.github.io/To-Do-List/",
    summary: "To do List utilizando HTML, CSS e javaScript",
    technologies: ["HTML", "JavaScript", "CSS"],
    category: ["HTML", "JavaScript", "CSS"],
    animationDelay: "90%"
  },
  {
    id: 3,
    title: "{Refresh Shop}",
    img: RefreshShop,
    github: "https://github.com/Emaus-Leonardo/Refresh-Shop-App-Epic7",
    demo: "",
    summary: "Este é um programa de automação escrito em Python com a biblioteca PyAutoGUI e a estrutura de interface gráfica KivyMD. O objetivo do programa é automatizar o processo de atualização de uma loja virtual em um jogo, utilizando Python",
    technologies: ["Python"],
    category: ["Python"],
    animationDelay: "130%"
  },
  {
    id: 4,
    title: "{Lanchonete Pequim}",
    img: LanchonetePequim,
    github: "",
    demo: "https://pequim-lanchonete.vercel.app/",
    summary: "Landing Page desenvolvida em conjunto com um amigo para a lanchonete pequim de presidente prudente, foi desenvolvido com TypeScript,Tailwind css e React",
    technologies: ["Tailwind", "React", "TypeScript"],
    category: ["Tailwind", "React", "TypeScript"],
    animationDelay: "160%"
  },
  {
    id: 5,
    title: "{Thiago Luna Portfolio}",
    img: ThiagoLunaPortfolio,
    github: "",
    demo: "https://thiagolunaf.com/",
    summary: "Portfolio Desenvolvido para Thiago Luna no estilo de Landing Page Tailwind css e React",
    technologies: ["Tailwind", "React"],
    category: ["Tailwind", "React"],
    animationDelay: "190%"
  },
  {
    id: 6,
    title: "{Sakura Sound}",
    img: SakuraSound,
    github: "",
    demo: "https://sakura-sound.vercel.app/",
    summary: "",
    technologies: ["Tailwind", "React", "TypeScript", "Nodejs"],
    category: ["Tailwind", "React", "TypeScript", "Nodejs"],
    animationDelay: "190%"
  }
];

export default projectsData;