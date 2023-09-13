"use client";

import BackBlur from "@/shared/ui/back-blur/back-blur";
import { FC } from "react";
import SectionTitle from "@/shared/ui/section-title/section-title";
import WorkWithList from "./work-with-list";
import { motion } from "framer-motion";
import { starAnimation } from "@/constants/animation.constants";

const WorkWith: FC = () => {
  return (
    <section className="container relative flex flex-col gap-20 text-center">
      <SectionTitle variant="short">Work With</SectionTitle>
      <WorkWithList />
      <BackBlur />
      <motion.div
        variants={starAnimation}
        animate="animate"
        className="absolute w-1/2 h-full bg-workWith-stars bg-no-repeat -right-40 -top-10"
      />
    </section>
  );
};

export default WorkWith;
