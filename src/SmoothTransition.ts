import type { Transition } from "framer-motion";

const Smooth: Transition = {
  duration: 1.4,
  ease: [0.6, 0.01, 0.05, 0.96] as [number, number, number, number],
  // ease: [0.43, 0.13, 0.23, 0.96],
};
export default Smooth;