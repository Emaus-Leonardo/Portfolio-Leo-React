import React, { useEffect, useState } from "react";

import teste from "../../../public/img/triangleWhite.png";
import Smooth from "../../SmoothTransition";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["A FRONT-END DEVELOPER", "A VIDEO EDITOR"];
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
    <motion.section className="section overflow-y-scroll overflow-x-hidden ">
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
        <img src={teste} className="w-[3500px] h-[1260px]  " />
      </motion.div>

      <div className="container mx-auto h-full relative mix-blend-difference">
        <div className="flex justify-center lg:justify-center items-center h-screen relative z-10">
          <motion.div
            className="flex flex-col justify-center lg:ml-32 ml-44 text-center lg:text-left"
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
              className="text-4xl lg:text-8xl font-bold text-white "
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
              I'M {text}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-70%" }}
              transition={Smooth}
              className="flex flex-col lg:flex-row justify-center lg:justify-start items-center "
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
                className="flex px-5 xl:mt-10 lg:mt-10 mt-5 gap-2"
              >
                <a
                  href="https://github.com/Emaus-Leonardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <motion.svg
                    initial={{ opacity: 0, y: "-40%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-70%" }}
                    transition={Smooth}
                    width="40"
                    height="40"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1.5C8.01509 1.5 7.03982 1.69399 6.12987 2.0709C5.21993 2.44781 4.39314 3.00026 3.6967 3.6967C2.29018 5.10322 1.5 7.01088 1.5 9C1.5 12.315 3.6525 15.1275 6.63 16.125C7.005 16.185 7.125 15.9525 7.125 15.75V14.4825C5.0475 14.9325 4.605 13.4775 4.605 13.4775C4.26 12.6075 3.7725 12.375 3.7725 12.375C3.09 11.91 3.825 11.925 3.825 11.925C4.575 11.9775 4.9725 12.6975 4.9725 12.6975C5.625 13.8375 6.7275 13.5 7.155 13.32C7.2225 12.8325 7.4175 12.5025 7.6275 12.315C5.9625 12.1275 4.215 11.4825 4.215 8.625C4.215 7.7925 4.5 7.125 4.9875 6.5925C4.9125 6.405 4.65 5.625 5.0625 4.6125C5.0625 4.6125 5.6925 4.41 7.125 5.3775C7.7175 5.2125 8.3625 5.13 9 5.13C9.6375 5.13 10.2825 5.2125 10.875 5.3775C12.3075 4.41 12.9375 4.6125 12.9375 4.6125C13.35 5.625 13.0875 6.405 13.0125 6.5925C13.5 7.125 13.785 7.7925 13.785 8.625C13.785 11.49 12.03 12.12 10.3575 12.3075C10.6275 12.54 10.875 12.9975 10.875 13.695V15.75C10.875 15.9525 10.995 16.1925 11.3775 16.125C14.355 15.12 16.5 12.315 16.5 9C16.5 8.01509 16.306 7.03982 15.9291 6.12987C15.5522 5.21993 14.9997 4.39314 14.3033 3.6967C13.6069 3.00026 12.7801 2.44781 11.8701 2.0709C10.9602 1.69399 9.98491 1.5 9 1.5Z"
                      fill="white"
                    />
                  </motion.svg>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 bg transition-all duration-300 ease-in-out "
                >
                  <motion.svg
                    alt="LinkedIn"
                    initial={{ opacity: 0, y: "-60%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-70%" }}
                    transition={Smooth}
                    width="40"
                    height="40"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.25 2.25C14.6478 2.25 15.0294 2.40804 15.3107 2.68934C15.592 2.97064 15.75 3.35218 15.75 3.75V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H14.25ZM13.875 13.875V9.9C13.875 9.25155 13.6174 8.62965 13.1589 8.17112C12.7003 7.7126 12.0785 7.455 11.43 7.455C10.7925 7.455 10.05 7.845 9.69 8.43V7.5975H7.5975V13.875H9.69V10.1775C9.69 9.6 10.155 9.1275 10.7325 9.1275C11.011 9.1275 11.278 9.23812 11.475 9.43504C11.6719 9.63195 11.7825 9.89902 11.7825 10.1775V13.875H13.875ZM5.16 6.42C5.49417 6.42 5.81466 6.28725 6.05095 6.05095C6.28725 5.81466 6.42 5.49417 6.42 5.16C6.42 4.4625 5.8575 3.8925 5.16 3.8925C4.82384 3.8925 4.50144 4.02604 4.26374 4.26374C4.02604 4.50144 3.8925 4.82384 3.8925 5.16C3.8925 5.8575 4.4625 6.42 5.16 6.42ZM6.2025 13.875V7.5975H4.125V13.875H6.2025Z"
                      fill="white"
                    />
                  </motion.svg>
                </a>
                <a
                  href="https://www.instagram.com/kuri.sz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:-translate-y-2 transition-all duration-300 ease-in-out"
                >
                  <motion.svg
                    alt="Instagram"
                    initial={{ opacity: 0, y: "-80%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-70%" }}
                    transition={Smooth}
                    width="40"
                    height="40"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.77101 1.5C10.6148 1.50225 11.043 1.50675 11.4128 1.51725L11.5583 1.5225C11.7263 1.5285 11.892 1.536 12.0923 1.545C12.8903 1.5825 13.4348 1.7085 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.464 6.108 16.4715 6.27375 16.4775 6.4425L16.482 6.588C16.4933 6.957 16.4978 7.38525 16.4993 8.229L16.5 8.7885V9.771C16.5018 10.3181 16.4961 10.8651 16.4828 11.412L16.4783 11.5575C16.4723 11.7262 16.4648 11.892 16.4558 12.0915C16.4183 12.8902 16.2908 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4348 16.2915 12.8903 16.4175 12.0923 16.455C11.9143 16.4634 11.7363 16.4709 11.5583 16.4775L11.4128 16.482C11.043 16.4925 10.6148 16.4978 9.77101 16.4993L9.21151 16.5H8.22976C7.68245 16.5019 7.13515 16.4961 6.58801 16.4827L6.44251 16.4783C6.26446 16.4715 6.08646 16.4638 5.90851 16.455C5.11051 16.4175 4.56601 16.2915 4.08751 16.1063C3.58701 15.9183 3.13367 15.6231 2.75926 15.2415C2.37754 14.8667 2.08217 14.4132 1.89376 13.9125C1.70851 13.4347 1.58251 12.8902 1.54501 12.0915C1.53665 11.9135 1.52915 11.7355 1.52251 11.5575L1.51876 11.412C1.50493 10.8651 1.49868 10.3181 1.50001 9.771V8.229C1.49791 7.68195 1.50341 7.1349 1.51651 6.588L1.52176 6.4425C1.52776 6.27375 1.53526 6.108 1.54426 5.9085C1.58176 5.10975 1.70776 4.566 1.89301 4.0875C2.08134 3.58643 2.3773 3.13277 2.76001 2.7585C3.13432 2.37711 3.58736 2.08199 4.08751 1.89375C4.56601 1.7085 5.10976 1.5825 5.90851 1.545C6.10801 1.536 6.27451 1.5285 6.44251 1.5225L6.58801 1.518C7.1349 1.50467 7.68195 1.49892 8.22901 1.50075L9.77101 1.5ZM9.00001 5.25C8.00544 5.25 7.05162 5.64509 6.34836 6.34835C5.64509 7.05161 5.25001 8.00544 5.25001 9C5.25001 9.99456 5.64509 10.9484 6.34836 11.6517C7.05162 12.3549 8.00544 12.75 9.00001 12.75C9.99457 12.75 10.9484 12.3549 11.6517 11.6517C12.3549 10.9484 12.75 9.99456 12.75 9C12.75 8.00544 12.3549 7.05161 11.6517 6.34835C10.9484 5.64509 9.99457 5.25 9.00001 5.25ZM9.00001 6.75C9.29548 6.74995 9.58807 6.8081 9.86107 6.92113C10.1341 7.03416 10.3821 7.19985 10.5911 7.40874C10.8001 7.61764 10.9658 7.86565 11.079 8.13862C11.1921 8.41158 11.2503 8.70415 11.2504 8.99963C11.2504 9.2951 11.1923 9.58769 11.0793 9.86069C10.9662 10.1337 10.8005 10.3818 10.5916 10.5907C10.3827 10.7997 10.1347 10.9655 9.86176 11.0786C9.5888 11.1917 9.29623 11.25 9.00076 11.25C8.40402 11.25 7.83172 11.0129 7.40977 10.591C6.98781 10.169 6.75076 9.59674 6.75076 9C6.75076 8.40326 6.98781 7.83097 7.40977 7.40901C7.83172 6.98705 8.40402 6.75 9.00076 6.75M12.9383 4.125C12.6896 4.125 12.4512 4.22377 12.2753 4.39959C12.0995 4.5754 12.0008 4.81386 12.0008 5.0625C12.0008 5.31114 12.0995 5.5496 12.2753 5.72541C12.4512 5.90123 12.6896 6 12.9383 6C13.1869 6 13.4254 5.90123 13.6012 5.72541C13.777 5.5496 13.8758 5.31114 13.8758 5.0625C13.8758 4.81386 13.777 4.5754 13.6012 4.39959C13.4254 4.22377 13.1869 4.125 12.9383 4.125Z"
                      fill="white"
                    />
                  </motion.svg>
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
