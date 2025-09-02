import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";
import { Minus, Square, X } from "lucide-react";

const WindowControls = ({ onClose, onMinimize, onMaximize }) => {
  return (
    <div className="flex items-center gap-2">
      {/* <Tooltip title="Minimize" arrow placement="top">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMinimize}
          className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-colors duration-200 flex items-center justify-center"
        >
          <Minus className="w-2 h-2 text-black" />
        </motion.button>
      </Tooltip>

      <Tooltip title="Maximize" arrow placement="top">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMaximize}
          className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-300 transition-colors duration-200 flex items-center justify-center"
        >
          <Square className="w-2 h-2 text-black" />
        </motion.button>
      </Tooltip> */}

      <Tooltip title="Close" arrow placement="top">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="w-5 h-5 rounded-full transition-colors duration-200 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-white" />
        </motion.button>
      </Tooltip>
    </div>
  );
};

export default WindowControls;
