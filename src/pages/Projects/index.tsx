import React from "react";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";
import Cards from "../../components/Cards";
import Categoria, { CategoryItem } from "../../components/Categoria";
import projectsData from "../../util/data";

// Legacy projects page, rendered inside the desktop-mode "Projects" window.
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
              {projectsData.map((project) => (
                <CategoryItem key={project.id} category={project.category}>
                  <motion.div
                    initial={{ opacity: 0, y: project.animationDelay }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "100%" }}
                    transition={Smooth}
                  >
                    <Cards
                      title={project.title}
                      img={project.img}
                      github={project.github}
                      demo={project.demo}
                      technologies={project.technologies}
                      summary={project.summary}
                    />
                  </motion.div>
                </CategoryItem>
              ))}
            </Categoria>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
