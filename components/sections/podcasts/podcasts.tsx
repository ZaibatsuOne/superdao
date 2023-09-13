import { Button } from "@/shared/ui/button/button";
import { FC } from "react";
import { MoveRight } from "lucide-react";
import PodcastsPreviewCard from "./podcasts-preview-card";
import PodcastsPreviewList from "./podcasts-preview-list";
import SectionTitle from "@/shared/ui/section-title/section-title";

const Podcasts: FC = () => {
  return (
    <section className="container flex flex-col gap-8">
      <header className="flex justify-between items-end">
        <SectionTitle variant="none" className="text-left">
          Podcasts
        </SectionTitle>
        <Button variant="ghost" className="gap-1">
          <span>See all</span>
          <MoveRight />
        </Button>
      </header>
      <PodcastsPreviewList />
    </section>
  );
};

export default Podcasts;
