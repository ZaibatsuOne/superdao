import AreaOfWork from "@/components/area-of-work";
import Contacts from "@/components/contacts";
import Hero from "@/components/hero";
import PresentSection from "@/components/present/present-section";
import Projects from "@/components/projects/projects";
import WorkWith from "@/components/work-with";

export default function Home() {
  return (
    <main className="flex flex-col gap-52">
      <Hero />
      <Projects />
      <AreaOfWork />
      <PresentSection />
      <WorkWith />
      <Contacts />
    </main>
  );
}
