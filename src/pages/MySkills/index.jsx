import React, { useState, useEffect } from "react";
import { Tooltip } from "@mui/material";
import { CgChevronLeft } from "react-icons/cg";
import { CgChevronRight } from "react-icons/cg";

import ProfileMySkills from "../../../public/img/ProfileMySkills.png";

import { motion, AnimatePresence } from "framer-motion";
import Smooth from "../../SmoothTransition";
import SoftSkills from "../../components/SoftSkills";
import FrontEnd from "../../components/FrontEnd";
import BackEnd from "../../components/BackEnd";

function MySkills() {
  const [showWindow, setShowWindow] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuOpen, setMenuOpen] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setMenuOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClose = () => {
    setIsAnimating(true);
    setShowWindow(false);
  };

  const handleSection = (section) => {
    setActiveSection(section);
    setShowWindow(true);
  };

  const renderSkillsContent = () => {
    switch (activeSection) {
      case "frontEnd":
        return (
          <div className="flex justify-center items-center overflow-y-auto w-full h-[65vh]">
            <FrontEnd />
          </div>
        );
      case "backEnd":
        return (
          <div className="flex justify-center  overflow-y-auto w-full h-[65vh]">
            <BackEnd />
          </div>
        );
      case "softSkills":
        return (
          <div className="flex justify-center  overflow-y-auto w-full h-[65vh]">
            <SoftSkills />
          </div>
        );
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={Smooth}
      className="section flex flex-col justify-center items-center"
    >
      <AnimatePresence>
        {!showWindow && !isAnimating && (
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={Smooth}
            className="absolute"
          >
            <button
              onClick={() => setShowWindow(true)}
              style={{
                visibility: showWindow || isAnimating ? "hidden" : "visible",
              }}
              className="w-[210px] h-[55px] bg-black text-white font-bold lg:mt-7 mt-2 hover:shadow-lg"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWindow && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={Smooth}
            onAnimationComplete={() => setIsAnimating(false)}
            className="w-full max-w-[1100px] px-3 flex flex-col rounded-lg mt-16"
          >
            <nav className="flex justify-between items-center h-12 bg-[#707070] rounded-t-lg ">
              <p className="text-white text-[12px] font-bold pl-10">
                My Skills_
              </p>
              <div className="flex mr-6">
                <Tooltip title="Close">
                  <button
                    onClick={handleClose}
                    className="hover:scale-105 transition-all duration-200"
                  >
                    <div className="w-3 h-3 bg-red-600 rounded-full "></div>
                  </button>
                </Tooltip>

                <Tooltip title="Minimize">
                  <button className="hover:scale-105 transition-all duration-200">
                    <div className="w-3 h-3 bg-yellow-300 rounded-full ml-2"></div>
                  </button>
                </Tooltip>

                <Tooltip title="Maximeze">
                  <button className="hover:scale-105 transition-all duration-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
                  </button>
                </Tooltip>
              </div>
            </nav>
            <div className="flex">
              <aside className=" flex-1 flex flex-col md:flex-row">
                <motion.div
                  animate={{ width: menuOpen ? "280px" : "80px" }}
                  transition={Smooth}
                  className="flex flex-col justify-around p-4 h-[65vh] bg-[#939393] rounded-bl-lg"
                >
                  <ul className="relative flex flex-col justify-center items-center cursor-pointer text-[16px] text-white font-primary font-medium ">
                    <div className=" flex justify-center left-[260px] top-5 mb-1">
                      <button
                        onClick={toggleMenu}
                        className={`flex justify-center items-center w-[50px] h-[50px] hover:bg-[#838383] pr-1 rounded-full transition-all `}
                      >
                        {menuOpen ? (
                          <CgChevronLeft size={25} />
                        ) : (
                          <CgChevronRight size={25} />
                        )}
                      </button>
                    </div>
                    <li
                      onClick={() => handleSection("frontEnd")}
                      className={`flex items-center hover:bg-[#838383] gap-3 w-full h-[50px] transition-all ${
                        activeSection === "frontEnd" && "bg-[#838383]"
                      } ${
                        menuOpen
                          ? "px-4 md:px-10 flex justify-center"
                          : "flex justify-center"
                      }`}
                    >
                      <svg width="21" height="21" viewBox="0 0 21 17">
                        <path
                          d="M4.59 0L6 1.41L2.82 4.59L6 7.77L4.59 9.19L0 4.59L4.59 0ZM10.41 0L15 4.59L10.41 9.19L9 7.77L12.18 4.59L9 1.41L10.41 0ZM21 2.59V14.59C21 15.7 20.11 16.59 19 16.59H3C2.46957 16.59 1.96086 16.3793 1.58579 16.0042C1.21071 15.6291 1 15.1204 1 14.59V10.59H3V14.59H19V2.59H16.03V0.59H19C20.11 0.59 21 1.48 21 2.59Z"
                          fill="white"
                        />
                      </svg>

                      {menuOpen && <span>Front End</span>}
                    </li>

                    <li
                      onClick={() => handleSection("backEnd")}
                      className={`flex items-center hover:bg-[#838383] gap-3 w-full h-[50px] transition-all ${
                        activeSection === "backEnd" && "bg-[#838383]"
                      } ${
                        menuOpen
                          ? "px-4 md:px-10 flex justify-center"
                          : "flex justify-center"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20px"
                        viewBox="0 0 16 16"
                      >
                        <g fill="white">
                          <path d="M7 13H2V7h13V3a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h5v-1zM2 3h12v3H2V3z" />
                          <path d="M3.75 5h-.5A.25.25 0 0 1 3 4.75v-.5A.25.25 0 0 1 3.25 4h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25zM5.75 5h-.5A.25.25 0 0 1 5 4.75v-.5A.25.25 0 0 1 5.25 4h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25zM7.75 5h-.5A.25.25 0 0 1 7 4.75v-.5A.25.25 0 0 1 7.25 4h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25zM15.897 11.399l-1.213-.346a2.685 2.685 0 0 0-.115-.282l.611-1.101a.142.142 0 0 0-.024-.17l-.656-.656a.143.143 0 0 0-.17-.024l-1.1.611a2.775 2.775 0 0 0-.282-.115l-.346-1.213A.146.146 0 0 0 12.463 8h-.927a.142.142 0 0 0-.137.103l-.347 1.213a2.685 2.685 0 0 0-.282.115l-1.1-.611a.143.143 0 0 0-.17.024l-.656.655a.144.144 0 0 0-.024.171l.611 1.101a2.775 2.775 0 0 0-.115.282l-1.213.346a.144.144 0 0 0-.103.138v.927c0 .064.042.12.103.137l1.213.346c.034.097.071.191.115.282l-.612 1.101a.142.142 0 0 0 .024.17l.656.656a.143.143 0 0 0 .17.024l1.101-.611c.091.044.186.081.282.115l.346 1.213a.146.146 0 0 0 .139.103h.927c.064 0 .12-.042.137-.103l.346-1.213c.097-.034.191-.071.282-.115l1.101.611a.142.142 0 0 0 .17-.024l.656-.656a.143.143 0 0 0 .024-.17l-.611-1.101c.044-.091.081-.186.115-.282l1.213-.346a.144.144 0 0 0 .103-.138v-.927a.143.143 0 0 0-.103-.137zM12 13.5a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 12 13.5z" />
                        </g>
                      </svg>
                      {menuOpen && <span>Back End</span>}
                    </li>

                    <li
                      onClick={() => handleSection("softSkills")}
                      className={`flex items-center hover:bg-[#838383] gap-3 w-full h-[50px] transition-all ${
                        activeSection === "softSkills" && "bg-[#838383]"
                      } ${
                        menuOpen
                          ? "px-4 md:px-10 flex justify-center"
                          : "flex justify-center"
                      }`}
                    >
                      <svg
                        fill="white"
                        height="20px"
                        width="20px"
                        viewBox="0 0 210 210"
                      >
                        <path d="M0,0v210h210V0H0z M184,186h-81v-22h81V186z M184,139H47v-21h137V139z M184,93H65V72h119V93z M184,46H27V25h157V46z"></path>{" "}
                      </svg>
                      {menuOpen && <span>Soft Skills</span>}
                    </li>
                  </ul>

                  <span className="w-full h-[1px] bg-white my-6"></span>

                  <div className="flex flex-col justify-center items-center gap-5">
                    <div className="relative overflow-hidden flex-1 rounded-full">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={Smooth}
                        src={ProfileMySkills}
                        alt="Profile My Skills"
                        className="w-full h-auto"
                      />
                    </div>

                    {menuOpen && (
                      <p className="text-[12px] text-white font-primary font-bold mb-12">
                        Test your limit.
                      </p>
                    )}
                  </div>
                </motion.div>
              </aside>
              <div className="flex justify-center items-center w-full h-full bg-[#D9D9D9] rounded-ee-lg ">
                {renderSkillsContent()}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default MySkills;
