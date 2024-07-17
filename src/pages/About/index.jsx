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
      className="section overflow-y-scroll overflow-x-hidden"
    >
      <div className="container mx-auto h-full relative flex items-center justify-center">
        <div
          className="flex flex-col lg:flex-row h-auto items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16 pt-[100%] md:pt-96 md:pb-10 order-2 lg:order-none"
        >
          <div className=" order-1 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={Smooth}
              className="relative overflow-hidden flex-1 rounded-md"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={Smooth}
                src={ProfileAbout}
                alt="Profile"
                className="w-full h-auto lg:max-w-[500px]"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "80%" }}
            transition={Smooth}
            className="flex-1 pt-56 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start mx-7 lg:mt-24"
          >
            <h1 className="h1 font-bold">About Me</h1>
            <p className="mb-12">
              Olá, meu nome é Emaús Leonardo, mas pode me chamar de Léo. No
              momento, <br /> estou mergulhando no mundo do desenvolvimento Front End
              com o objetivo de <br /> aprimorar minhas habilidades para me posicionar
              no mercado. Sou apaixonado <br /> por criar experiências online
              impressionantes para os usuários e acompanhar as <br /> melhores práticas
              e tendências. Meu portfólio demonstra o que já fiz até agora e <br />
              minha determinação em me tornar um desenvolvedor Front End
              excepcional. <br /> Estou disposto a trabalhar em projetos desafiadores e
              ajudar equipes criativas e <br /> dinâmicas.
            </p>

            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "110%" }}
              transition={Smooth}
            >
              <Link
                to="/projects"
                className="w-[230px] h-[60px] bg-[black] flex justify-center items-center 
                text-white font-bold mt- hover:shadow-lg transition-all"
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
