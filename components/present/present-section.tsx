"use client";

import { FC, useEffect, useState } from "react";

import { Button } from "../ui/button";
import { Play } from "lucide-react";
import PresentImages from "./present-images";
import PresentTabs from "./present-tabs";
import { listOFTools } from "@/data/data";

const PresentSection: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTab((currentTab) => (currentTab + 1) % listOFTools.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative container flex flex-col gap-8 items-center justify-center">
      <div className="absolute w-full h-full bg-present-stars bg-no-repeat -top-10 translate-x-[15%]" />
      <h2>All the tools in one app</h2>
      <PresentTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <PresentImages currentTab={currentTab} />
      <Button
        size="lg"
        variant="primary"
        className="gap-2 bg-opacity-10 text-yellow"
      >
        <Play />
        <span>Watch video</span>
      </Button>
    </section>
  );
};

export default PresentSection;
