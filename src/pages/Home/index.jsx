import React, { useEffect, useState } from "react";
import teste from "../../../public/img/triangleWhite.png";
import Smooth from "../../SmoothTransition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["FRONT-END DEVELOPER", "VIDEO EDITOR"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(75);
    } else {
      setDelta(150);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  };

  return (
    <motion.section className="section overflow-y-scroll overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, x: "80%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "80%" }}
        transition={Smooth}
        className="absolute mix-blend-difference -left-[400px] top-32 
        md:-left-[700px]
        lg:-left-[700px] lg:-top-0 
        xl:-left-[700px] xl:-top-0 
        xxl:-left-[500px] xxl:-top-12"
      >
        <img src={teste} className="w-[3500px] h-[1260px]" />
      </motion.div>

      <div className="container mx-auto h-full relative mix-blend-difference">
        <div className="flex justify-center lg:justify-center items-center h-screen relative z-10">
          <motion.div
            className="flex flex-col justify-center lg:ml-32 ml-[142px] text-center lg:text-left"
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={Smooth}
          >
            <motion.h1
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-50%" }}
              transition={Smooth}
              className="text-4xl lg:text-8xl font-bold text-white"
            >
              HI, I'M LÉO
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={Smooth}
              className="text-[14px] lg:text-3xl font-bold text-white"
            >
              I'M A {text}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-70%" }}
              transition={Smooth}
              className="flex flex-col lg:flex-row justify-center lg:justify-start items-center"
            >
              <Link to="/about">
                <button className="w-[210px] h-[55px] bg-white text-black font-bold lg:mt-7 mt-2 hover:shadow-lg transition-all">
                  About Me
                </button>
              </Link>
              <motion.div
                initial={{ opacity: 0, y: "-70%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "-70%" }}
                transition={Smooth}
                className="flex px-5 xl:mt-10 lg:mt-10 mt-5 gap-4"
              >
                <a
                  href="https://github.com/Emaus-Leonardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-300 ease-in-out text-white text-3xl"
                >
                  <FaGithub size={40} />
                </a>

                <a
                  href="https://www.linkedin.com/in/emaus-leonardo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-300 ease-in-out text-white text-3xl"
                >
                  <FaLinkedin size={40} />
                </a>

                <a
                  href="https://www.instagram.com/kuri.sz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-300 ease-in-out text-white text-3xl"
                >
                  <FaSquareInstagram size={40} />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
          <div className="mr-36 mt-2"></div>
        </div>
      </div>
    </motion.section>
  );
}

export default Home;
