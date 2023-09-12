"use client";

import Artworks from "@/public/Artworks.png";
import { FC } from "react";
import Image from "next/image";
import Slug from "@/components/ui/slug";
import { motion } from "framer-motion";

const ProjectsBanner: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 4, delay: 0.4 }}
      className="relative"
    >
      <div className="h-[490px] w-full rounded-[30px] bg-black overflow-hidden ">
        <Image
          src={Artworks}
          alt="1"
          className="animate-move-up repeat-infinite"
        />
        <Image
          src={Artworks}
          alt="1"
          className="animate-move-up repeat-infinite"
        />
      </div>
      <Slug>1000+ projects launched on Superdao</Slug>
    </motion.div>
  );
};

export default ProjectsBanner;
