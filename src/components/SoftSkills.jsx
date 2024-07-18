import { motion } from "framer-motion";
import Smooth from "../SmoothTransition";
import SkillSection from "../components/SkillSections";

import React from "react";

import discussion from "../../public/img/discussion.png"
import teamwork from "../../public/img/teamwork.png"
import problemSolving from "../../public/img/problem-solving.png"
import timeManagement from "../../public/img/time-management.png"

function SoftSkills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 justify-center items-center lg:h-[20vh] md:h-[40vh] h-[63vh]">
      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.1 }}
      >
        <SkillSection src={discussion} title="Communication" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "20%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.2 }}
      >
        <SkillSection src={teamwork} title="Teamwork" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "30%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.3 }}
      >
        <SkillSection src={problemSolving} title="Problem Solving" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: "40%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...Smooth, delay: 0.4 }}
      >
        <SkillSection src={timeManagement} title="Time Management" />
      </motion.div>
    </div>
  );
}

export default SoftSkills;
