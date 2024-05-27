import React from "react";
import { motion } from "framer-motion";
import Smooth from "../SmoothTransition";
import SkillSection from "./SkillSections";

function BackEnd() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 ">
      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="Node.js" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "40%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="SQL" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "60%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="Python" />
      </motion.div>
    </div>
  );
}

export default BackEnd;
