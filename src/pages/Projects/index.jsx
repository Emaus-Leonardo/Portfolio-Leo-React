import React from "react";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={Smooth}
      className="section overflow-y-scroll overflow-x-hidden "
    >
      <div className="container mx-auto h-full relative flex items-center justify-center">
        <div className="flex-col justify-center items-center">
            <div className="flex items-center justify-center  m-7">
                <h1>HELLO WORLD</h1>
            </div>
            <div className="flex justify-center gap-11">
                <div className="w-[50px] h-[50px] bg-black animate-pulse"></div>
                <div className="w-[50px] h-[50px] bg-black animate-pulse"></div>
                <div className="w-[50px] h-[50px] bg-black animate-pulse"></div>
            </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
