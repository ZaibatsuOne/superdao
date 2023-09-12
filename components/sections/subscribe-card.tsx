"use client";

import { Button } from "../ui/button";
import { FC } from "react";
import { motion } from "framer-motion";
const SubscribeCard: FC = () => {
  return (
    <section className="subscribe_card hover:shadow-[#121E28] hover:shadow-2xl">
      <div className="subscribe_card__bg" />
      <div className="relative z-10 flex flex-col gap-16">
        <div className="flex flex-col gap-6 text-center">
          <h2>Weekly digest</h2>
          <h3 className="text-[#9AAFC3]">Latest news in DAOs and Web3</h3>
        </div>
        <div className="flex items-center gap-6 justify-center">
          <input
            className="w-1/3 bg-bg border-2 border-[#2A3744] h-16 px-7 rounded-2xl"
            placeholder="Your email"
            type="email"
          />
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              size="lg"
              className="h-16 bg-purpleLight text-bg text-xl font-semibold"
            >
              Subscribe
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="absolute w-40 h-40 translate-x-1/2 top-1/3 right-1/2 bg-white blur-[100px] opacity-20 -z-1 rounded-full" />
    </section>
  );
};

export default SubscribeCard;
