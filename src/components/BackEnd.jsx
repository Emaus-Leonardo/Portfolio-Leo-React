import React from "react";
import { motion } from "framer-motion";
import Smooth from "../SmoothTransition";
import SkillSection from "./SkillSections";

import NodeIcon from "../../public/img/nodejs-icon.svg"

function BackEnd() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.1 }}
      >
        <SkillSection src={NodeIcon} title="Node.js" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.2 }}
      >
        <SkillSection src="" title="SQL" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.3 }}
      >
        <SkillSection src="" title="Python" />
      </motion.div>
    </div>
  );
}

export default BackEnd;
