import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Monitor, 
  Palette, 
  Zap,
  Braces,
  FileCode,
  Layout,
  Atom,
  TerminalSquare
} from "lucide-react";
import Smooth from "@/SmoothTransition";

const frontEndSkills = [
  { name: "React", icon: Atom },
  { name: "TypeScript", icon: Braces },
  { name: "Tailwind CSS", icon: Palette },
  { name: "JavaScript", icon: FileCode },
  { name: "HTML5", icon: Layout },
  { name: "CSS3", icon: Code },
];

const FrontEnd = ({ noScroll }) => {
  const containerClass = noScroll
    ? "w-full max-w-4xl p-6 space-y-8"
    : "w-full max-w-4xl p-6 space-y-8 overflow-y-auto max-h-[60vh] ";

  return (
    <div className={containerClass}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent">
            Desenvolvimento Frontend
          </h2>
        </div>
        <p className="text-window-content-foreground/70 text-lg">
          Criando experiências de usuário bonitas e interativas
        </p>
      </motion.div>

      {/* Grade de habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {frontEndSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...Smooth, delay: 0.1 * index }}
            className="bg-white p-4 flex flex-col justify-center items-center rounded-lg border border/50 shadow-card transition-all duration-300 w-full"
          >
            <div className="flex items-center gap-2">
              <skill.icon className="w-6 h-6 text-black" />
              <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Cartões de informação extra */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        <div className="text-center p-6 bg-white rounded-xl border border/50">
          <Code className="w-12 h-12 text-black mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">Código Limpo</h4>
          <p className="text-muted-foreground">
            Escrevendo código legível e de fácil manutenção seguindo boas práticas
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl border border/50">
          <Palette className="w-12 h-12 text-black mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">Design UI/UX</h4>
          <p className="text-muted-foreground">
            Criando interfaces intuitivas e visualmente atraentes
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl border border/50">
          <Zap className="w-12 h-12 text-black mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">Performance</h4>
          <p className="text-muted-foreground">
            Otimizando para velocidade e excelente experiência do usuário
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default FrontEnd;
