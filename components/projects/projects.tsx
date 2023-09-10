import Arrows from "@/components/ui/arrows";
import { FC } from "react";
import ProjectsBadges from "./projects-badgets";
import ProjectsBanner from "./projects-banner";

const Projects: FC = () => {
  return (
    <section className="container text-center flex flex-col gap-11">
      <Arrows />
      <div className="relative">
        <h2>Ready for every project</h2>
        <div className="absolute bg-project-brush h-10 w-full bg-no-repeat -z-10 top-8 left-40" />
        <div className="absolute bg-project-stars w-24 h-24 bg-no-repeat left-[45px] -top-10" />
      </div>
      <ProjectsBadges />
      <ProjectsBanner />
    </section>
  );
};

export default Projects;
