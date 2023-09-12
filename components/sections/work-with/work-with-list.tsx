import { FC } from "react";
import WorkWithCard from "./work-with-card";
import { listWorkWith } from "@/data/data";

const WorkWithList: FC = () => {
  return (
    <ul className="flex items-center justify-between">
      {listWorkWith.map((card, index) => (
        <WorkWithCard card={card} key={card.name} index={index} />
      ))}
    </ul>
  );
};

export default WorkWithList;
