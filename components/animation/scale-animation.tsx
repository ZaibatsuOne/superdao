"use client";

import { FC, ReactNode } from "react";

import { motion } from "framer-motion";

const ScaleAnimation: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.2,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.div>
  );
};

export default ScaleAnimation;
