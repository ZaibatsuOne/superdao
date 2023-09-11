"use client";

import { FC, useEffect, useState } from "react";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { listOFTools } from "@/data/data";

const PresentSection: FC = () => {
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTab((currentTab) => (currentTab + 1) % listOFTools.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const glowBackground = (index: number) => {
    switch (index) {
      case 1:
        return "bg-blue";
      case 2:
        return "bg-blue";
      case 3:
        return "bg-green-500";
      case 4:
        return "bg-white";
      case 5:
        return "bg-purple";
      case 6:
        return "bg-orange";
    }
  };
  return (
    <section className="relative container flex flex-col gap-8 items-center justify-center">
      <div className="absolute w-full h-full bg-present-stars bg-no-repeat -top-10 translate-x-[15%]" />
      <h2>All the tools in one app</h2>
      <ul className="relative z-10 flex items-center gap-7">
        {listOFTools.map((tool, index) => (
          <li className="p-3" key={index}>
            <button
              className={cn(
                "font-semibold text-xl",
                currentTab === index ? "text-yellow" : "text-[#8395A7]"
              )}
              onClick={(): void => setCurrentTab(index)}
            >
              {tool.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="relative flex items-center justify-center">
        <div className="overflow-hidden w-[92%] h-[700px] rounded-2xl bg-bg">
          {listOFTools.map((tool, index) => (
            <Image
              src={tool.image}
              alt="icon"
              className={currentTab === index ? "block" : "hidden"}
            />
          ))}
        </div>
        <div className="absolute inset-0 -z-10 w-full h-full bg-blue blur-3xl opacity-20" />
      </div>
    </section>
  );
};

export default PresentSection;
