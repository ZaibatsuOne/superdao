import Artworks from "@/public/Artworks.png";
import { Badge } from "./ui/badge";
import { FC } from "react";
import Image from "next/image";
import ProjectsBanner from "./projects-banner";
import { badgeTextColor } from "@/helpers/func";
import { projectCategory } from "@/data/data";

const Projects: FC = () => {
  return (
    <section className="container text-center flex flex-col gap-11">
      <div className="relative">
        <h2>Ready for every project</h2>
        <div className="absolute bg-project-brush h-10 w-full bg-no-repeat -z-10 top-8 left-40" />
        <div className="absolute bg-project-stars w-24 h-24 bg-no-repeat left-[45px] -top-10" />
      </div>
      <ul className="flex gap-6 items-center flex-wrap justify-center px-20">
        {projectCategory.map((category, index) => (
          <li>
            <Badge className={badgeTextColor(index)}>{category}</Badge>
          </li>
        ))}
      </ul>
      <div className="h-[490px] w-full rounded-[30px] bg-gray overflow-hidden">
        <Image
          src={Artworks}
          className="animate-move-up repeat-infinite w-full rounded-[30px]"
          alt="artworks"
        />
        <Image
          src={Artworks}
          className="animate-move-up repeat-infinite w-full rounded-[30px]"
          alt="artworks"
        />
      </div>
    </section>
  );
};

export default Projects;
