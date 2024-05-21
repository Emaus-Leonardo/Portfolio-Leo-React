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
</motion.div>;
