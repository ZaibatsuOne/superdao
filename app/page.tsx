import AreaOfWork from "@/components/area-of-work";
import Hero from "@/components/hero";
import PresentSection from "@/components/present-section";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-52">
      <Hero />
      <Projects />
      <AreaOfWork />
      <PresentSection />
    </main>
  );
}
