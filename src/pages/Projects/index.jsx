import React from "react";
import { motion } from "framer-motion";
import transition1 from "../../transition";
import project from "../../../public/img/project-1.png";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
      className="section overflow-y-scroll overflow-x-hidden"
    >
      <div className="container mx-auto h-full relative flex items-center justify-center">
        <div className="flex-col justify-center items-center">
            <div className="flex items-center justify-center  m-7">
                <h1>HELLO WORLD</h1>
            </div>
            <div className="flex justify-center gap-11">
                <div className="w-[50px] h-[50px] bg-black animate-pulse delay-75"></div>
                <div className="w-[50px] h-[50px] bg-black animate-pulse"></div>
                <div className="w-[50px] h-[50px] bg-black animate-pulse"></div>
            </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
