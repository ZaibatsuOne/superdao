"use client";

import { firstListCompanies, secondListCompanies } from "@/data/data";

import CompanyItem from "./company-item";
import { FC } from "react";
import Marquee from "react-fast-marquee";
import SectionTitle from "./ui/section-title";

const CompanyCarousel: FC = () => {
  return (
    <section className="flex flex-col gap-14 my-20">
      <div className="relative container">
        <SectionTitle variant="short">Backed by</SectionTitle>
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
    </section>
  );
};

export default CompanyCarousel;
