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
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <div
        className={`bg-[#232524] shadow-2x1 w-full absolute top-0 right-0 max-w-xs h-screen z-20 transition-transform transform ${
          openMenu ? "translate-x-0 duration-300" : "translate-x-full duration-300"
        }`}
      >
        <div
          onClick={() => setOpenMenu(false)}
          className="text-4x1 absolute z-30 left-4 top-14 text-white cursor-pointer"
        >
          <IoMdClose size={30} />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-white text-3xl font-primary font-light">
          <li className="hover:bg-[#444444] w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/" onClick={() => setOpenMenu(false)}>
              Home
            </Link>
          </li>
          <li className="hover:bg-[#444444] w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/myskills" onClick={() => setOpenMenu(false)}>
              My Skills
            </Link>
          </li>
          <li className="hover:bg-[#444444] w-full flex justify-center h-[50px] items-center transition-all duration-300">
            <Link to="/projects" onClick={() => setOpenMenu(false)}>
              Projects
            </Link>
          </li>
          <li className="hover:bg-[#444444] w-full flex justify-center h-[50px] items-center transition-all duration-300">
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
