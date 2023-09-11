import { FC } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { listOFTools } from "@/data/data";

interface Props {
  currentTab: number;
}
const PresentImages: FC<Props> = ({ currentTab }) => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="overflow-hidden w-[92%] h-[700px] rounded-2xl">
        {listOFTools.map((tool, index) => (
          <Image
            src={tool.image}
            alt="icon"
            className={currentTab === index ? "block" : "hidden"}
            width={1920}
            height={1080}
          />
        ))}
      </div>
      <div
        className={cn(
          "absolute inset-0 -z-10 w-full h-full blur-3xl bg-white opacity-10"
        )}
      />
    </div>
  );
};

export default PresentImages;
