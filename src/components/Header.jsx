import React, { useState } from "react";
import { Link } from "react-router-dom";
import Github from "../../public/img/github_icon.svg";
import Linkedin from "../../public/img/linkedin_icon.svg";
import Instagram from "../../public/img/instagram_icon.svg";

function Header() {
  return (
    <header
      className="fixed w-full 
    px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <Link to={"/"} className="max-w-[200px] ">
          <p className="text-[22px] font-bold">L é o</p>
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link to="/" className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link
            to="/myskills"
            className="text-[#696c6d] hover:text-primary transition"
          >
            My Skills
          </Link>
          <Link
            to="/projects"
            className="text-[#696c6d] hover:text-primary transition"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-[#696c6d] hover:text-primary transition"
          >
            About
          </Link>
        </nav>
      </div>

      <div className="hidden xl:flex ml-24">
        <ul className="flex gap-x-4 ">
          <li className="flex gap-2">
            <a
              href="https://github.com/Emaus-Leonardo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Github} alt="GitHub" className="w-[30px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Linkedin} alt="LinkedIn" className="w-[30px]" />
            </a>
            <a
              href="https://www.instagram.com/kuri.sz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Instagram} alt="Instagram" className="w-[30px]"  />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
