import { FC } from "react";
import PressPreviewCard from "./press-preview-card";
import { listBlogPreview } from "@/data/data";

const PressPreviewList: FC = () => {
  return (
    <section className="flex gap-7">
      {listBlogPreview.map((blog, index) => (
        <PressPreviewCard blog={blog} key={index} />
      ))}
    </section>
  );
};

export default PressPreviewList;
