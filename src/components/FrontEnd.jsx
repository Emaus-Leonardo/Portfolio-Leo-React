import React from "react";
import SkillSection from "./SkillSections";
import Smooth from "../SmoothTransition";
import { motion } from "framer-motion";

import Html from "../../public/img/html.svg";
import Css from "../../public/img/css.svg";
import Javascript from "../../public/img/javascript.svg";
import ReactIcon from "../../public/img/react.svg";
import TailwindCss from "../../public/img/tailwind.svg";
import Bootstrap from "../../public/img/bootstrap-icon.svg";
import Typescript from "../../public/img/typescriptIcon.png";

function FrontEnd() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4 md:mt-0 mt-52 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.1 }}
      >
        <SkillSection src={Html} title="HTML" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.2 }}
      >
        <SkillSection src={Css} title="CSS" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.3 }}
      >
        <SkillSection src={Javascript} title="JavaScript" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "40%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.4 }}
      >
        <SkillSection src={Typescript} title="TypeScript" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.5 }}
      >
        <SkillSection src={ReactIcon} title="React" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "60%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.6 }}
      >
        <SkillSection src={TailwindCss} title="TailWind" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "70%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.7 }}
      >
        <SkillSection src={Bootstrap} title="BootStrap" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.8 }}
      >
        <SkillSection src={ReactIcon} title="React Native" />
      </motion.div>
    </div>
  );
}

export default FrontEnd;
