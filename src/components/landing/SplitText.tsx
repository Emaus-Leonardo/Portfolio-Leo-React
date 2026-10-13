import React, { useEffect, useState, type ElementType } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface SplitTextProps {
  text: string;
  /** Element to render, e.g. "p" or "h1". */
  as?: ElementType;
  delay?: number;
  stagger?: number;
  y?: string;
  blur?: number;
  className?: string;
}

// Letters rise out of a clipping mask, sharpening from a blur, left to right.
export default function SplitText({
  text,
  as: Tag = "span",
  delay = 0.18,
  stagger = 0.035,
  y = "115%",
  blur = 9,
  className = "",
}: SplitTextProps) {
  const reduce = useReducedMotion();
  // Start only once the web fonts are in, so letters do not reflow mid-animation.
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let alive = true;
    const go = () => alive && setReady(true);
    const t = setTimeout(go, 1200); // never wait forever
    (document.fonts?.ready ?? Promise.resolve()).then(() => requestAnimationFrame(go));
    return () => {
      alive = false;
      clearTimeout(t);
    };
  }, []);
  if (reduce) return <Tag className={className}>{text}</Tag>;

  const letter: Variants = {
    hidden: { opacity: 0, filter: `blur(${blur}px)`, y },
    show: { opacity: 1, filter: "blur(0px)", y: "0%", transition: { duration: 0.7, ease } },
  };

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        key={text}
        aria-hidden="true"
        className="inline-flex flex-wrap"
        initial="hidden"
        animate={ready ? "show" : "hidden"}
        variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      >
        {text.split(" ").map((word, w, words) => (
          <span key={w} className="inline-flex overflow-hidden pb-[0.08em] -mb-[0.08em] whitespace-nowrap">
            {Array.from(word).map((ch, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {ch}
              </motion.span>
            ))}
            {w < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
