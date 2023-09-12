"use client";

import BackBlur from "../ui/back-blur";
import { FC } from "react";
import SectionTitle from "../ui/section-title";
import WorkWithCard from "./work-with-card";
import { listWorkWith } from "@/data/data";
import { motion } from "framer-motion";

const WorkWith: FC = () => {
  return (
    <section className="container relative flex flex-col gap-20 text-center">
      <SectionTitle variant="short">Work With</SectionTitle>
      <ul className="flex items-center justify-between">
        {listWorkWith.map((card, index) => (
          <WorkWithCard card={card} key={card.name} index={index} />
        ))}
      </ul>
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
