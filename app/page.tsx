import Hero from "@/components/hero";
import Image from "next/image";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className="flex flex-col gap-52">
      <Hero />
      <Projects />
    </main>
  );
}
