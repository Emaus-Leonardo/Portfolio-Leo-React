import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

function Header() {
  return (
    <header
      className="fixed w-full bg-white md:bg-transparent
      px-[30px] lg:px-[100px] z-30 py-6 md:h-[100px] flex items-center lg:mix-blend-difference mix-blend-normal text-white"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px] ">
          <p className="text-[22px] font-bold text-black lg:text-white">L é o</p>
        </Link>
        <nav className="hidden xl:flex lg:flex gap-x-12 font-semibold">
          <Link to="/" className="text-[#696c6d] hover:text-white transition">
            Home
          </Link>
          <Link
            to="/myskills"
            className="text-[#696c6d] hover:text-white transition"
          >
            My Skills
          </Link>
          <Link
            to="/projects"
            className="text-[#696c6d] hover:text-white transition"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-[#696c6d] hover:text-white transition"
          >
            About
          </Link>
        </nav>
      </div>

      <div className="hidden xl:flex lg:flex ml-24">
        <ul className="flex gap-x-4 ">
          <li className="flex gap-2">
            <a
              href="https://github.com/Emaus-Leonardo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/emaus-leonardo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/kuri.sz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <FaSquareInstagram size={24} />
            </a>
          </li>
        </ul>
      </div>

      <MobileMenu />
    </header>
  );
}

export default Header;
