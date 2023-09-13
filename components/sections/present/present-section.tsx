"use client";

import { FC, useEffect, useState } from "react";

import { Button } from "../../../shared/ui/button/button";
import { Play } from "lucide-react";
import PresentImages from "./present-images";
import PresentTabs from "./present-tabs";
import SectionTitle from "../../../shared/ui/section-title/section-title";
import { listOFTools } from "@/data/data";
import { motion } from "framer-motion";
import { starAnimation } from "@/constants/animation.constants";

const PresentSection: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTab((currentTab) => (currentTab + 1) % listOFTools.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative container flex flex-col gap-8 text-center">
      <motion.div
        variants={starAnimation}
        animate="animate"
        className="absolute w-full h-full bg-present-stars bg-no-repeat -top-10 translate-x-[15%]"
      />
      <SectionTitle variant="medium">All the tools in one app</SectionTitle>
      <PresentTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <PresentImages currentTab={currentTab} />
      <div>
        <Button
          size="lg"
          variant="primary"
          className="gap-2 bg-opacity-10 text-yellow"
        >
          <Play />
          <span>Watch video</span>
        </Button>
      </div>
    </section>
  );
};

export default PresentSection;
