import BackBlur from "../ui/back-blur";
import { FC } from "react";
import Image from "next/image";
import SectionTitle from "../ui/section-title";
import { listWorkWith } from "@/data/data";

const WorkWith: FC = () => {
  return (
    <section className="container relative flex flex-col gap-20 text-center">
      <SectionTitle variant="short">Work With</SectionTitle>
      <ul className="flex items-center justify-between">
        {listWorkWith.map((card) => (
          <div className="flex flex-col gap-4 items-center" key={card.name}>
            <li className="border-2 relative bg-[#121E28] border-[#2A3744] rounded-[40px]">
              <Image src={card.image} alt={card.name} />
            </li>
            <li className="font-semibold text-xl">{card.name}</li>
          </div>
        ))}
      </ul>
      <BackBlur />
      <div className="absolute w-1/2 h-full bg-workWith-stars bg-no-repeat -right-40 -top-10" />
    </section>
  );
};

export default WorkWith;
