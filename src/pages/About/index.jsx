import React from "react";
import ProfileAbout from "../../../public/img/ProfileAbout.png";
import Mugetsu from "../../../public/img/mugetsu.jpeg";
import Hiro from "../../../public/img/hiro.jpeg";
import Haku from "../../../public/img/haku.jpg";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={Smooth}
      className="section overflow-y-scroll overflow-x-hidden"
    >
      <div className="container mx-auto h-full relative flex items-center justify-center">
        <div
          className="flex flex-col lg:flex-row h-auto items-center justify-center gap-x-24 
        text-center lg:text-left lg:pt-16 pt-[100%] md:pt-96 order-2 lg:order-none"
        >
          <div className=" order-1 lg:order-none">
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={Smooth}
              className="relative overflow-hidden flex-1"
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={Smooth}
                src={ProfileAbout}
                alt="Profile"
                className="w-full h-auto lg:max-w-[500px] mx-auto"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: "80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "80%" }}
            transition={Smooth}
            className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start mx-7 lg:mt-24"
          >
            <h1 className="h1 font-bold">About Me</h1>
            <p className="mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque augue odio,
              <br /> fermentum vel venenatis quis, sollicitudin quis purus.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              earum quidem adipisci <br /> sunt a quae, aut consectetur, br
              veniam placeat incidunt quaerat obcaecati inventore, <br />{" "}
              dignissimos repellat consequuntur voluptas beatae facilis iusto?
            </p>
            <motion.div
              initial={{ opacity: 0, y: "80%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "60%" }}
              transition={Smooth}
              className="flex justify-center items-center gap-7"
            >
              <div className="w-[100px] h-[100px] relative overflow-hidden rounded-md">
                <motion.img
                  src={Mugetsu}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  transition={Smooth}
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: "40%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "40%" }}
                transition={Smooth}
                className="w-[100px] h-[100px] relative overflow-hidden rounded-md"
              >
                <motion.img
                  src={Hiro}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  transition={Smooth}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: "60%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "80%" }}
                transition={Smooth}
                className="w-[100px] h-[100px] relative overflow-hidden rounded-md"
              >
                <motion.img
                  src={Haku}
                  alt=""
                  whileHover={{ scale: 1.1 }}
                  transition={Smooth}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "110%" }}
              transition={Smooth}
            >
              <Link
                to="/projects"
                className="w-[230px] h-[60px] bg-[black] flex justify-center items-center rounded-md text-white font-bold mt-7 hover:shadow-lg transition-all"
              >
                My Projects
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
