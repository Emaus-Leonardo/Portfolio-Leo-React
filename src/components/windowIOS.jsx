import React from "react";
import Smooth from "../SmoothTransition";
import { motion } from "framer-motion";

import ProfileMySkills from "../../public/img/ProfileMySkills.png";
import HtmlIcon from "../../public/img/frontEndIcon.svg";
import DatabaseIcon from "../../public/img/databaseIcon.svg";

function WindowIOS() {
  return (
    <div className="w-[1100px] h-[680px] bg-[#D9D9D9] rounded-lg flex flex-col ">
      <nav className="flex justify-between items-center h-12 bg-[#707070] rounded-t-lg">
        <p className="text-white text-[12px] font-bold pl-10">My Skills_</p>

        <div className="flex mr-6">
          <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-300 rounded-full ml-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full ml-2"></div>
        </div>
      </nav>

      <aside className="flex-1 ">
        <div className="flex flex-col justify-around p-4 w-[280px] h-full bg-[#939393] rounded-bl-md">
          <ul className="flex flex-col justify-center items-center cursor-pointer text-black font-primary font-medium">
            <li className="flex items-center hover:bg-[#838383] px-10 w-[280px] h-[50px] transition-all ">
              <img src={HtmlIcon} className="mr-3" /> Front End
            </li>
            <li className="flex items-center hover:bg-[#838383] px-10 w-[280px] h-[50px] transition-all">
              <img src={DatabaseIcon} className="mr-3" /> Back End
            </li>
            <li className="flex items-center hover:bg-[#838383] px-10 w-[280px] h-[50px] transition-all">
              <img src={DatabaseIcon} className="mr-3" /> Data Base
            </li>
          </ul>

          <span className="relative top-6 w-full h-[1px] bg-black m"></span>

          <div className=" flex flex-col justify-center items-center gap-5 container">
            <div className="relative overflow-hidden flex-1 rounded-lg ">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={Smooth}
                src={ProfileMySkills}
                alt="Profile My Skills"
              />
            </div>

            <p className="text-[12px] text-black font-primary font-bold mr-3">
              Lorem Ipsum is simply dummy <br /> text of the printing and <br />{" "}
              typesetting industry. Lorem <br /> Ipsum has been the industry's{" "}
              <br /> standard dummy text ever
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default WindowIOS;
