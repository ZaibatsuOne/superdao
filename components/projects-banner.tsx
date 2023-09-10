import Artworks from "@/public/Artworks.png";
import { FC } from "react";
import Image from "next/image";

const ProjectsBanner: FC = () => {
  return (
    <div className="relative">
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
      <div className="absolute -bottom-8 translate-x-1/2 h-14 w-1/2 bg-orange rounded-[100px] border-4 border-black">
        <p className="font-bold text-lg text-bg translate-y-1/3">
          1000+ projects launched on Superdao
        </p>
      </div>
    </div>
  );
};

export default ProjectsBanner;
