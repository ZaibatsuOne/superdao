"use client";

import { FC } from "react";
import PressPreviewCard from "./press-preview-card";
import { listBlogPreview } from "@/data/data";
const PressPreviewList: FC = () => {
  return (
    <section className="grid grid-cols-3 gap-7">
      {listBlogPreview.slice(-3).map((blog, index) => (
        <PressPreviewCard blog={blog} key={blog.id} index={index} />
      ))}
    </section>
  );
};

export default PressPreviewList;
