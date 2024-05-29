import React from "react";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";
import Cards from "../../components/Cards";
import Album from "../../../public/img/weedingAlbum.jpg";
import ToDoList from "../../../public/img/toDoList.jpg";
import RefreshShop from "../../../public/img/refreshShop.jpg";
import Portfolio from "../../../public/img/portfolio.jpg";
import AppClima from "../../../public/img/appClima.jpg";
import LanchonetePequim from "../../../public/img/lanchonete-pequim.jpg"

import Categoria from "../../components/Categoria";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={Smooth}
      className="section overflow-y-scroll overflow-x-hidden bg-[#F0F4F9]"
    >
      <div className="mx-auto h-full relative flex items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center mt-24">
            <Categoria>
              <motion.div
                initial={{ opacity: 0, y: "30%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["HTML", "CSS", "JavaScript"]}
              >
                <Cards
                  title="{Portfolio V-1}"
                  img={Portfolio}
                  github="https://github.com/Emaus-Leonardo/portfolio-leo"
                  demo="https://portfolio-leo-ecru.vercel.app/"
                  summary="Portfolio desenvolvido em HTML, CSS e JavaScript"
                  category={["HTML", "CSS"]}
                />
              </motion.div>
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
                  summary="Aplicativo desenvolvido com intuito de aprendizagem em JavaScript, HTML e CSS"
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
                initial={{ opacity: 0, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["Tailwind", "React"]}
              >
                <Cards
                  title="{Weeding Album}"
                  img={Album}
                  github="https://github.com/Emaus-Leonardo/Weeding-album"
                  demo="https://weeding-album.vercel.app/"
                  summary="Album de Casamento Online para armazenar fotos, foi desenvolvido em React e TailWind."
                  category={["Tailwind", "React"]}
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
                  summary="Landing Page desenvolvida em conjunto com um amigo para a lanchonete pequim de presidente prudente"
                  category={["Tailwind", "React", "TypeScript"]}
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
