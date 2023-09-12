"use client";

import BackBlur from "@/components/ui/back-blur";
import { FC } from "react";
import SectionTitle from "@/components/ui/section-title";
import WorkWithList from "./work-with-list";
import { motion } from "framer-motion";

const WorkWith: FC = () => {
  return (
    <section className="container relative flex flex-col gap-20 text-center">
      <SectionTitle variant="short">Work With</SectionTitle>
      <WorkWithList />
      <BackBlur />
      <motion.div
        animate={{ opacity: [0, 1, 0, 1, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute w-1/2 h-full bg-workWith-stars bg-no-repeat -right-40 -top-10"
      />
    </section>
  );
};

export default WorkWith;