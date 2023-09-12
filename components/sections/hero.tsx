"use client";

import { Button } from "../ui/button";
import { FC } from "react";
import { motion } from "framer-motion";

const Hero: FC = () => {
  return (
    <section className="container pt-[130px] flex flex-col gap-14 items-center text-center px-72">
      <div className="relative flex flex-col gap-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >
          The easiest way to start a DAO
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 7 }}
          className="absolute w-full h-10 bg-hero-brush bg-no-repeat top-1/2 left-16 -z-10 translate-x-1/2 transform"
        />
        <motion.p
          initial={{ opacity: 0, y: 150 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 2 }}
          className="px-10"
        >
          An all-in-one platform to start, manage and grow a decentralized
          autonomous organization
        </motion.p>
        <div className="absolute h-1/2 w-1/2 transform translate-x-1/2 opacity-70  bg-white -z-10 blur-[140px]" />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 5, delay: 1 }}
        className="relative"
      >
        <div className="absolute bg-yellow w-full h-full rounded-2xl -z-10 blur-2xl animate-pulse" />
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
