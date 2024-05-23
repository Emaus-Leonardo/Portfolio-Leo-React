import React, { useState } from "react";
import WindowIOS from "../../components/windowIOS";
import { motion } from "framer-motion";
import Smooth from "../../SmoothTransition";

function MySkills() {
  const [showWindow, setShowWindow] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "100%" }}
        transition={Smooth}
      >
        {!showWindow && (
          <button
            className="w-[230px] h-[60px] bg-[black] flex justify-center items-center 
                text-white font-bold mt- hover:shadow-lg transition-all"
            onClick={() => setShowWindow(true)}
          >
            Toggle Window
          </button>
        )}

        {showWindow && <WindowIOS onClose={() => setShowWindow(false)} />}
      </motion.div>
    </div>
  );
}

export default MySkills;
