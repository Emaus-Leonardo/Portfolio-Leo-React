import React from "react";
import { motion } from "framer-motion";
import Smooth from "../SmoothTransition";
import SkillSection from "./SkillSections";

import NodeIcon from "../../public/img/Nodeicon.svg"
import pyIcon from "../../public/img/pyIcon.svg"
import sqlIcon from "../../public/img/sql-Icon.png"

function BackEnd() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center overflow-hidden py-32 h-full">
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
        <SkillSection src={sqlIcon} title="SQL" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.3 }}
      >
        <SkillSection src={pyIcon} title="Python" />
      </motion.div>
    </div>
  );
}

export default BackEnd;
