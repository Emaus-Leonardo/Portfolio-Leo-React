import React from "react";
import ProfileAbout from "../../../public/img/profileAbout.png";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={Smooth}
      className="flex h-screen overflow-y-auto overflow-x-hidden items-center justify-center md:pt-32  pt-80 "
    >
      <div className="container mx-auto h-full relative flex items-center justify-center">
        <div
          className="flex flex-col lg:flex-row h-auto items-center justify-center gap-12 
          text-center lg:text-left px-6 lg:px-12 pt-24 lg:pt-16 pb-12 order-2 lg:order-none"
        >
          {/* Imagem */}
          <div className="order-1 lg:order-none flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={Smooth}
              className="relative overflow-hidden flex-1 rounded-md"
            >
              <div className="grayscale hover:grayscale-0 transition-all duration-700">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={Smooth}
                  src={ProfileAbout}
                  alt="Profile"
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px]
                  rounded-lg shadow-lg filter "
                />
              </div>
            </motion.div>
          </div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "80%" }}
            transition={Smooth}
            className="flex-1 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1 font-bold text-3xl md:text-7xl mb-6">About Me</h1>
            <p className="mb-12 text-sm md:text-base leading-relaxed max-w-[600px]">
              Olá, meu nome é <span className="font-semibold">Emaús Leonardo</span>, mas pode me chamar de Léo.
              No momento, estou mergulhando no mundo do <span className="font-semibold">desenvolvimento Front End</span>{" "}
              com o objetivo de aprimorar minhas habilidades para me posicionar no mercado.
              Sou apaixonado por criar experiências online impressionantes para os usuários e acompanhar as
              melhores práticas e tendências. Meu portfólio demonstra o que já fiz até agora e
              minha determinação em me tornar um desenvolvedor Front End excepcional.
              Estou disposto a trabalhar em projetos desafiadores e ajudar equipes criativas e dinâmicas.
            </p>

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "110%" }}
              transition={Smooth}
            >
              <Link
                to="/projects"
                className="w-[200px] md:w-[230px] h-[55px] md:h-[60px] bg-black flex justify-center items-center 
                text-white font-bold hover:shadow-lg hover:bg-gray-900 transition-all"
              >
                My Projects
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}

export default About;
