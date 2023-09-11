"use client";

import { FC, useRef } from "react";

import { Badge } from "../../ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { projectCategory } from "@/data/data";

const ProjectsBadges: FC = () => {
  const badgeTextColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-purpleLight";
      case 1:
        return "text-yellow";
      case 2:
        return "text-purple";
      case 3:
        return "text-blue";
      case 4:
        return "text-[#23C9DE]";
      case 5:
        return "text-pink";
      default:
        return "text-[#707F8D]";
    }
  };
  const badgeBgColor = (index: number) => {
    switch (index) {
      case 0:
        return "bg-purpleLight";
      case 1:
        return "bg-yellow";
      case 2:
        return "bg-purple";
      case 3:
        return "bg-blue";
      case 4:
        return "bg-[#23C9DE]";
      case 5:
        return "bg-pink";
      default:
        return "bg-[#707F8D]";
    }
  };

  return (
    <ul className="flex  gap-6 items-center flex-wrap justify-center px-20">
      {projectCategory.map((category, index) => (
        <motion.li className="relative" key={index} whileHover="hover">
          <Badge className={cn("cursor-default", badgeTextColor(index))}>
            {category}
          </Badge>
          <div
            className={cn(
              "absolute top-0 w-full h-full -z-10 opacity-10 blur-lg",
              badgeBgColor(index)
            )}
          />
        </motion.li>
      ))}
    </ul>
  );
};

export default ProjectsBadges;
