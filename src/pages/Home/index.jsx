import React from "react";
import Profile from "../../../public/img/Profile.png";
import transition1 from "../../transition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
      className="section overflow-y-scroll overflow-x-hidden"
    >
      <div className='container mx-auto h-full relative'>
        <div className="flex justify-center lg:justify-between items-center h-screen">
          <motion.div
            className="flex flex-col justify-center ml-32"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={transition1}
          >
            <h1 className="text-3xl lg:text-6xl font-bold">
              HI, I'M <span className="auto-type">LÉO</span>
            </h1>
            <h2 className="text-xl lg:text-3xl font-bold">
              I'M <span>A FRONT END DEVELOPER</span>
            </h2>
            <Link
            to="/about">
              <button className="w-[130px] h-[55px] bg-black text-white font-bold mt-7 hover:shadow-lg transition-all">
                About Me
              </button>
            </Link>
          </motion.div>
          <div className="mr-36 mt-2 ">
            <motion.div
              className="relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: "50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={transition1}
            >
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={transition1}
                src={Profile}
                alt="Profile"
                className="w-[500px] h-full  "
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
