"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const ScrollAnimation = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress);
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(86,1,245)", "rgb(1,245,13)"]
  );
  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "left",
        background,
        position: "fixed",
        zIndex: 70,
        top: 0,
        height: "20px",
        width: "100%",
      }}
    />
  );
};

export default ScrollAnimation;
