import React from "react";
import ProfileAbout from "../../../public/img/profileAbout.png";
import Mugetsu from "../../../public/img/mugetsu.jpeg";
import Hiro from "../../../public/img/hiro.jpeg";
import Haku from "../../../public/img/haku.jpg";
import { motion } from "framer-motion";
import transition1 from "../../transition";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.section className="section overflow-y-scroll overflow-x-hidden">
      <div className="flex justify-between items-center h-screen p-8 lg:p-16 gap-16 lg:flex-row">
        <div className="mt-40">
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="relative overflow-hidden rounded-lg ml-16 w-[500px] h-auto"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition1}
              src={ProfileAbout}
              alt="Profile"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: "80%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "80%" }}
          transition={transition1}
          className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center
                items-center lg:items-start mx-7 mt-72
            "
        >
          <h1 className="text-[100px] font-semibold">About me</h1>
          <p className="mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque augue odio, fermentum vel venenatis quis, sollicitudin
            quis purus.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit earum
            quidem adipisci sunt a quae, aut consectetur, veniam placeat
            incidunt quaerat obcaecati inventore, dignissimos repellat
            consequuntur voluptas beatae facilis iusto?
          </p>

          <div className="flex justify-center items-center gap-7">
            <div className="w-[100px] h-[100px] relative overflow-hidden ">
              <motion.img
                src={Mugetsu}
                alt=""
                whileHover={{ scale: 1.1 }}
                transition={transition1}
              />
            </div>
            <div className="w-[100px] h-[100px] relative overflow-hidden">
              <motion.img
                src={Hiro}
                alt=""
                whileHover={{ scale: 1.1 }}
                transition={transition1}
              />
            </div>
            <div className="w-[100px] h-[100px] relative overflow-hidden">
              <motion.img
                src={Haku}
                alt=""
                whileHover={{ scale: 1.1 }}
                transition={transition1}
              />
            </div>
          </div>

          <Link
            to="/projects"
            className="w-[130px] h-[55px] bg-black flex justify-center items-center text-white font-bold mt-7 hover:shadow-lg transition-all"
          >
            My Projects
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
