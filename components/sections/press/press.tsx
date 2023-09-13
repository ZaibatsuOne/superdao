import { Button } from "@/shared/ui/button/button";
import { FC } from "react";
import { MoveRight } from "lucide-react";
import PressPreviewList from "./press-preview-list";
import SectionTitle from "@/shared/ui/section-title/section-title";
const Press: FC = () => {
  return (
    <section className="container flex flex-col gap-8">
      <header className="flex justify-between items-end">
        <SectionTitle variant="none" className="text-left">
          Press
        </SectionTitle>
        <Button variant="ghost" className="gap-2">
          <span>See all</span>
          <MoveRight />
        </Button>
      </header>
      <PressPreviewList />
    </section>
  );
};

export default Press;
