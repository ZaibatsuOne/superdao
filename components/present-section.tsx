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
    }, 2000);

    return () => clearInterval(currentTab);
  }, []);
  return (
    <section className="container flex flex-col gap-8 items-center">
      <h2>All the tools in one app</h2>
      <ul className="flex items-center gap-7">
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
      <div className="w-[92%] h-[700px] overflow-hidden rounded-2xl bg-bg">
        {listOFTools.map((tool, index) => (
          <Image
            src={tool.image}
            alt="icon"
            className={currentTab === index ? "block" : "hidden"}
          />
        ))}
      </div>
    </section>
  );
};

export default PresentSection;
