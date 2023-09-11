import AreaOfWork from "@/components/sections/area-of-work";
import CompanyCarousel from "@/components/sections/companies/company-carousel";
import Contacts from "@/components/sections/contacts";
import Hero from "@/components/sections/hero";
import PresentSection from "@/components/sections/present/present-section";
import Press from "@/components/sections/press/press";
import Projects from "@/components/sections/projects/projects";
import SubscribeCard from "@/components/sections/subscribe-card";
import WorkWith from "@/components/sections/work-with";

export default function Home() {
  return (
    <main className="flex flex-col gap-52">
      <Hero />
      <Projects />
      <AreaOfWork />
      <PresentSection />
      <WorkWith />
      <Contacts />
      <SubscribeCard />
      <CompanyCarousel />
      <Press />
    </main>
  );
}
