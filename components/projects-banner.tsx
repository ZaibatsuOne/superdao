import Artworks from "@/public/Artworks.png";
import { FC } from "react";
import Image from "next/image";

const ProjectsBanner: FC = () => {
  return (
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
  );
};

export default ProjectsBanner;
