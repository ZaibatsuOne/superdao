import Hero from "@/components/hero";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-52">
      <Hero />
      <Projects />
    </main>
  );
}
