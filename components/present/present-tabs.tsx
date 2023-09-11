import { Dispatch, FC, SetStateAction } from "react";

import { cn } from "@/lib/utils";
import { listOFTools } from "@/data/data";

interface Props {
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
}

const PresentTabs: FC<Props> = ({ currentTab, setCurrentTab }) => {
  return (
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
  );
};

export default PresentTabs;
