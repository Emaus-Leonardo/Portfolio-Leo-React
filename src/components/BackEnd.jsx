import React from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Shield, 
  Cpu, 
  Box, 
  Cloud, 
  Cable, 
  Layers,
  Terminal 
} from "lucide-react";
import Smooth from "@/SmoothTransition";

const backEndSkills = [
  { name: "Node.js", icon: Server },
  { name: "Python", icon: Terminal },
  { name: "Express.js", icon: Cable },
  { name: "Docker", icon: Box },
];

const BackEnd = ({ noScroll }) => {
  const containerClass = noScroll
    ? "w-full max-w-4xl p-6 space-y-8"
    : "w-full max-w-4xl p-6 space-y-8 max-h-[60vh] overflow-y-auto";

  return (
    <div className={containerClass}>
      {/* Cabeçalho */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="flex items-center justify-center gap-3">
          <h2 className="text-3xl font-bold bg-black bg-clip-text text-transparent">
            Desenvolvimento Backend
          </h2>
        </div>
        <p className="text-window-content-foreground/70 text-lg">
          Construindo soluções robustas e escaláveis no lado do servidor
        </p>
      </motion.div>

      {/* Grade de Habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        {backEndSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...Smooth, delay: 0.1 * index }}
            className="bg-white p-4 flex flex-col justify-center items-center rounded-lg border border-gray-300 shadow-card transition-all duration-300 w-full"
          >
            <div className="flex items-center gap-2">
              <skill.icon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recursos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        <div className="text-center p-6 bg-white rounded-xl border border-gray-300">
          <Database className="w-12 h-12 text-black mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">Modelagem de Banco de Dados</h4>
          <p className="text-muted-foreground">
            Desenvolvendo arquiteturas de banco de dados eficientes e escaláveis
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl border border-gray-300">
          <Shield className="w-12 h-12 text-black mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">Segurança</h4>
          <p className="text-muted-foreground">
            Implementando medidas de segurança robustas e melhores práticas
          </p>
        </div>

        <div className="text-center p-6 bg-white rounded-xl border border-gray-300">
          <Cpu className="w-12 h-12 text-black mx-auto mb-3" />
          <h4 className="text-lg font-semibold text-foreground mb-2">Desenvolvimento de APIs</h4>
          <p className="text-muted-foreground">
            Criando APIs RESTful e GraphQL para integrações perfeitas
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default BackEnd;
