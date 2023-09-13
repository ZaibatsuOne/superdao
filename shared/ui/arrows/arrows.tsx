"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const Arrows: FC = () => {
  const variants = {
    initial: {
      opacity: 0,
    },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.6,
        repeat: Infinity,
        duration: 2,
      },
    }),
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {[...Array(2)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={variants}
            initial="initial"
            custom={index}
            animate="visible"
            className="w-5 h-5 border-b-4 border-r-4 border-white rotate-45"
          />
        );
      })}
    </div>
  );
};

export default Arrows;
