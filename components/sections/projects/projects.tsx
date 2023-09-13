"use client";

import Arrows from "@/shared/ui/arrows/arrows";
import BackBlur from "../../../shared/ui/back-blur/back-blur";
import { FC } from "react";
import ProjectsBadges from "./projects-badgets";
import ProjectsBanner from "./projects-banner";
import SectionTitle from "../../../shared/ui/section-title/section-title";
import { motion } from "framer-motion";

const Projects: FC = () => {
  return (
    <section className="container relative text-center flex flex-col gap-11">
      <Arrows />
      <SectionTitle variant="medium">Ready for every project</SectionTitle>
      <ProjectsBadges />
      <ProjectsBanner />
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="absolute bg-project-stars w-24 h-24 bg-no-repeat left-[85px] top-5"
      />
      <BackBlur />
    </section>
  );
};

export default Projects;
