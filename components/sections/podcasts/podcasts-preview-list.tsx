import { FC } from "react";
import PodcastsPreviewCard from "./podcasts-preview-card";

const PodcastsPreviewList: FC = () => {
  return (
    <section className="grid grid-cols-3 gap-7">
      <PodcastsPreviewCard />
      <PodcastsPreviewCard />
      <PodcastsPreviewCard />
    </section>
  );
};

export default PodcastsPreviewList;
