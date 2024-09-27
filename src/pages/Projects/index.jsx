import React from "react";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";
import Cards from "../../components/Cards";
import ToDoList from "../../../public/img/toDoList.jpg";
import RefreshShop from "../../../public/img/refreshShop.jpg";
import AppClima from "../../../public/img/appClima.jpg";
import LanchonetePequim from "../../../public/img/lanchonete-pequim.jpg";
import ThiagoLunaPortfolio from "../../../public/img/thiagoLunaPortfolio.jpg";

import Categoria from "../../components/Categoria";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={Smooth}
      className="section overflow-y-scroll overflow-x-hidden bg-[#F4F6F8]"
    >
      <div className="mx-auto h-full relative flex items-center justify-center">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center mt-24 ">
            <Categoria>
              <motion.div
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["HTML", "JavaScript", "CSS"]}
              >
                <Cards
                  title="{App Clima}"
                  img={AppClima}
                  github="https://github.com/Emaus-Leonardo/App-Clima"
                  demo="https://emaus-leonardo.github.io/App-Clima/"
                  summary="Aplicativo de Clima JavaScript, HTML e CSS"
                  category={["HTML", "JavaScript", "CSS"]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "90%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["HTML", "JavaScript", "CSS"]}
              >
                <Cards
                  title="{To-Do-List}"
                  img={ToDoList}
                  github="https://github.com/Emaus-Leonardo/To-Do-List"
                  demo="https://emaus-leonardo.github.io/To-Do-List/"
                  summary="To do List utilizando HTML, CSS e javaScript"
                  category={["HTML", "JavaScript", "CSS"]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "130%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["Python"]}
              >
                <Cards
                  title="{Refresh Shop}"
                  img={RefreshShop}
                  github="https://github.com/Emaus-Leonardo/Refresh-Shop-App-Epic7"
                  summary="Este é um programa de automação escrito em Python com a biblioteca PyAutoGUI e a estrutura de interface gráfica KivyMD.
                  O objetivo do programa é automatizar o processo de atualização de uma loja virtual em um jogo, utilizando Python"
                  category={["Python"]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "160%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["Tailwind", "React", "TypeScript"]}
              >
                <Cards
                  title="{Lanchonete Pequim}"
                  img={LanchonetePequim}
                  github=""
                  demo="https://pequim-lanchonete.vercel.app/"
                  summary="Landing Page desenvolvida em conjunto com um amigo para a lanchonete pequim de presidente prudente, foi desenvolvido com TypeScript,Tailwind css e React"
                  category={["Tailwind", "React", "TypeScript"]}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "190%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["Tailwind", "React"]}
              >
                <Cards
                  title="{Thiago Luna Portfolio}"
                  img={ThiagoLunaPortfolio}
                  github=""
                  demo="https://thiagolunaf.com/"
                  summary="Portfolio Desenvolvido para Thiago Luna no estilo de Landing Page Tailwind css e React"
                  category={["Tailwind", "React"]}
                />
              </motion.div>
            </Categoria>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
