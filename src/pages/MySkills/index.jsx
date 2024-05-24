import React, { useState } from "react";
import { Tooltip } from "@mui/material";

import ProfileMySkills from "../../../public/img/ProfileMySkills.png";
import HtmlIcon from "../../../public/img/frontEndIcon.svg";
import DatabaseIcon from "../../../public/img/databaseIcon.svg";

import { motion, AnimatePresence } from "framer-motion";
import Smooth from "../../SmoothTransition";

function MySkills() {
  const [showWindow, setShowWindow] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClose = () => {
    setIsAnimating(true);
    setShowWindow(false);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%"  }}
      transition={Smooth}
      className="section flex flex-col justify-center items-center"
    >
      <AnimatePresence>
        {!showWindow && !isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            transition={Smooth}
          >
            <button
              onClick={() => setShowWindow(true)}
              className="w-[210px] h-[55px] bg-black text-white font-bold lg:mt-7 mt-2 hover:shadow-lg"
            >
              Toggle My Skills
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWindow && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={Smooth}
            onAnimationComplete={() => setIsAnimating(false)}
            className="w-[1100px] h-[680px] bg-[#D9D9D9] rounded-lg flex flex-col"
          >
            <nav className="flex justify-between items-center h-12 bg-[#707070] rounded-t-lg">
              <p className="text-white text-[12px] font-bold pl-10">My Skills_</p>
              <div className="flex mr-6">

                <Tooltip title="Close">
                  <button onClick={handleClose}>
                    <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  </button>
                </Tooltip>
                <div className="w-3 h-3 bg-yellow-300 rounded-full ml-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
              </div>
            </nav>
            <aside className="flex-1 flex">
              <div className="flex flex-col justify-around p-4 w-[280px] h-full bg-[#939393] rounded-bl-lg">
                <ul className="flex flex-col justify-center items-center cursor-pointer text-black font-primary font-medium">
                  <li className="flex items-center hover:bg-[#838383] px-10 w-full h-[50px] transition-all">
                    <img src={HtmlIcon} className="mr-3" alt="Front End Icon" />
                    Front End
                  </li>
                  <li className="flex items-center hover:bg-[#838383] px-10 w-full h-[50px] transition-all">
                    <img
                      src={DatabaseIcon}
                      className="mr-3"
                      alt="Back End Icon"
                    />
                    Back End
                  </li>
                  <li className="flex items-center hover:bg-[#838383] px-10 w-full h-[50px] transition-all">
                    <img
                      src={DatabaseIcon}
                      className="mr-3"
                      alt="Database Icon"
                    />
                    Database
                  </li>
                </ul>
                <span className="w-full h-[1px] bg-black my-6"></span>
                <div className="flex flex-col justify-center items-center gap-5">
                  <div className="relative overflow-hidden flex-1 rounded-lg">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={Smooth}
                      src={ProfileMySkills}
                      alt="Profile My Skills"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-[12px] text-black font-primary font-bold mr-3">
                    Lorem Ipsum is simply dummy <br />
                    text of the printing and <br />
                    typesetting industry. Lorem <br />
                    Ipsum has been the industry's <br />
                    standard dummy text ever
                  </p>
                </div>
              </div>
            </aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default MySkills;
