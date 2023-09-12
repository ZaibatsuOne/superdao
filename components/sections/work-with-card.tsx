"use client";

import { FC } from "react";
import { IWorkWithCard } from "@/types/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  card: IWorkWithCard;
  index: number;
}
const WorkWithCard: FC<Props> = ({ card, index }) => {
  const pVariants = {
    animate: (i: number) => ({
      borderRadius: ["25%", "50%", "25%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatDelay: 6,
        delay: 1.5 * i,
      },
    }),
  };
  return (
    <div className="flex flex-col gap-4 items-center">
      <motion.li
        variants={pVariants}
        animate="animate"
        custom={index}
        className="border-2 relative bg-[#121E28] border-[#2A3744] "
      >
        <Image src={card.image} alt={card.name} />
      </motion.li>
      <li className="font-semibold text-xl">{card.name}</li>
    </div>
  );
};

export default WorkWithCard;
