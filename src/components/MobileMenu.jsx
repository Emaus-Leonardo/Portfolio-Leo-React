import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="text-black font-primary xl:hidden lg:hidden">
      <div
        onClick={() => setOpenMenu(true)}
        className="hover:bg-[#F0F0F0] transition-all duration-300 rounded-md text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <div
        className={`bg-black shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen z-20 transition-transform transform shadow-2xl ${
          openMenu ? "translate-x-0 duration-500" : "translate-x-full duration-500"
        }`}
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="hover:scale-125 hover:rotate-90 transition-all duration-500 text-4x1 absolute z-30 left-4 top-14 text-white cursor-pointer"
        >
          <IoMdClose size={30} />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-white text-3xl font-primary font-light">
          <li className="hover:scale-110 w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
          </li>
          <li className="hover:scale-110 w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/myskills" onClick={() => setOpenMenu(false)}>
              My Skills
            </Link>
          </li>
          <li className="hover:scale-110 w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/projects" onClick={() => setOpenMenu(false)}>
              Projects
            </Link>
          </li>
          <li className="hover:scale-110 w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/about" onClick={() => setOpenMenu(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenu;
