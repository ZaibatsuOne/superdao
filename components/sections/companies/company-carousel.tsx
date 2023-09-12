"use client";

import { firstListCompanies, secondListCompanies } from "@/data/data";

import BackBlur from "../../ui/back-blur";
import CompanyItem from "./company-item";
import { FC } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "../../ui/section-title";
import { motion } from "framer-motion";
import { starAnimation } from "@/constants/animation.constants";

const CompanyCarousel: FC = () => {
  return (
    <section className="relative flex flex-col gap-14 my-20">
      <div className="relative container">
        <SectionTitle variant="none">Backed by</SectionTitle>
      </div>
      <section className="flex flex-col gap-5">
        <ul>
          <Marquee
            gradient={true}
            gradientColor={[16, 21, 26]}
            gradientWidth={500}
            speed={70}
            pauseOnHover={true}
          >
            {firstListCompanies.map((company, index) => (
              <CompanyItem company={company} key={index} />
            ))}
          </Marquee>
        </ul>
        <ul>
          <Marquee
            direction="right"
            gradient={true}
            gradientColor={[16, 21, 26]}
            gradientWidth={500}
            pauseOnHover={true}
          >
            {secondListCompanies.map((company, index) => (
              <CompanyItem company={company} key={index} />
            ))}
          </Marquee>
        </ul>
      </section>
      <BackBlur />
      <motion.div
        variants={starAnimation}
        animate="animate"
        className="absolute w-[70px] right-1/3 h-full bg-present-stars bg-no-repeat -top-16 "
      />
    </section>
  );
};

export default CompanyCarousel;
