import React from "react";
import SkillSection from "./SkillSections";
import Smooth from "../SmoothTransition";
import { motion } from "framer-motion";

function FrontEnd() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:mt-0 mt-40 justify-center 
    items-center ">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="HTML" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="CSS" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="JavaScript" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "40%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="TypeScript" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "50%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="React" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "60%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="TailWind" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "70%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="BootStrap" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "80%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={Smooth}
      >
        <SkillSection src="" title="React Native" />
      </motion.div>
    </div>
  );
}

export default FrontEnd;
