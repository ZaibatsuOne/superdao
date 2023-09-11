import Arrows from "@/components/ui/arrows";
import { FC } from "react";
import ProjectsBadges from "./projects-badgets";
import ProjectsBanner from "./projects-banner";
import SectionTitle from "../ui/section-title";

const Projects: FC = () => {
  return (
    <section className="container relative text-center flex flex-col gap-11">
      <Arrows />
      <SectionTitle variant="medium">Ready for every project</SectionTitle>
      <ProjectsBadges />
      <ProjectsBanner />
      <div className="absolute bg-project-stars w-24 h-24 bg-no-repeat left-[85px] top-5" />
    </section>
  );
};

export default Projects;
