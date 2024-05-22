import React from "react";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";
import Cards from "../../components/Cards";
import Album from "../../../public/img/weedingAlbum.jpg";
import ToDoList from "../../../public/img/toDoList.jpg";
import RefreshShop from "../../../public/img/refreshShop.jpg";
import Portfolio from "../../../public/img/portfolio.jpg";
import AppClima from "../../../public/img/appClima.jpg";

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
      <div className=" mx-auto h-full relative flex items-center justify-center">
        <div className="flex flex-col justify-center items-center mt-[110vh] md:mt-96 lg:mt-10">
          <div className="flex flex-wrap justify-center mb-10 lg:mb-20 gap-6 md:gap-8 lg:gap-10 px-4">
            <Categoria>
              <motion.div
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["Tailwind", "React"]}
              >
                <Cards
                  title="Weeding Album"
                  img={Album}
                  github="https://github.com/Emaus-Leonardo/Weeding-album"
                  demo="https://weeding-album.vercel.app/"
                  category={["Tailwind", "React"]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "90%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["HTML", "CSS", "JavaScript"]}
              >
                <Cards
                  title="Portfolio V-1"
                  img={Portfolio}
                  github="https://github.com/Emaus-Leonardo/portfolio-leo"
                  demo="https://portfolio-leo-ecru.vercel.app/"
                  category={["HTML", "CSS"]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "110%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["HTML", "JavaScript", "CSS"]}
              >
                <Cards
                  title="App Clima"
                  img={AppClima}
                  github="https://github.com/Emaus-Leonardo/App-Clima"
                  demo="https://emaus-leonardo.github.io/App-Clima/"
                  category={["HTML", "JavaScript", "CSS"]}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: "120%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={Smooth}
                category={["HTML", "JavaScript", "CSS"]}
              >
                <Cards
                  title="To-Do-List"
                  img={ToDoList}
                  github="https://github.com/Emaus-Leonardo/To-Do-List"
                  demo="https://emaus-leonardo.github.io/To-Do-List/"
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
                  title="Refresh Shop"
                  img={RefreshShop}
                  github="https://github.com/Emaus-Leonardo/Refresh-Shop-App-Epic7"
                  demo="#"
                  category={["Python"]}
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
