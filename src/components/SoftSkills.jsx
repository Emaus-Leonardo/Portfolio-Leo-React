import React from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, Lightbulb, Target, Heart, Zap } from "lucide-react";

const softSkills = [
  { 
    name: "Comunicação", 
    description: "Comunicação clara",
    icon: MessageCircle,
    color: "text-black"
  },
  { 
    name: "Trabalho em Equipe", 
    description: "Colaboração em ambientes diversos",
    icon: Users,
    color: "text-black"
  },
  { 
    name: "Adaptabilidade", 
    description: "Adaptação rápida a novas tecnologias e métodos",
    icon: Zap,
    color: "text-black"
  },
  { 
    name: "Empatia", 
    description: "Compreendendo as necessidades dos usuários e a dinâmica da equipe",
    icon: Heart,
    color: "text-black"
  }
];

const achievements = [
  "Liderei 2 projetos para melhoria de processos internos, Atuando totalmente sozinho nesses 2 projetos.", 
];

const SoftSkills = ({ noScroll }) => {
  const containerClass = noScroll
    ? "w-full max-w-4xl p-6 space-y-8"
    : "w-full max-w-4xl p-6 space-y-8 max-h-[60vh]";

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
            Soft Skills & Liderança
          </h2>
        </div>
        <p className="text-window-content-foreground/70 text-lg">
          Construindo pontes entre tecnologia e pessoas
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl border border/50 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="text-center">
                <Icon className={`w-12 h-12 ${skill.color} mx-auto mb-4`} />
                <h3 className="text-xl font-semibold text-black mb-3">{skill.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="bg-white p-8 rounded-xl border border-gray/50 shadow-card"
      >
        <h3 className="text-2xl font-bold text-center text-black mb-6">Principais Conquistas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="flex items-center gap-3 p-4 bg-background/10 rounded-lg"
            >
              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-foreground">{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="text-center p-6 bg-gray-300 rounded-xl text-black"
      >
        <h4 className="text-xl font-bold mb-2">Pronto para Colaborar</h4>
        <p className="text-black/80">
          Apaixonado por gerar impacto significativo através da tecnologia e do trabalho em equipe
        </p>
      </motion.div>
    </div>
  );
};

export default SoftSkills;
