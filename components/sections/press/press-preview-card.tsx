import { Button } from "@/components/ui/button";
import { FC } from "react";
import { IBlogPreview } from "@/types/types";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { bgPreviewCard } from "@/helpers/func";
import { cn } from "@/lib/utils";

interface Props {
  blog: IBlogPreview;
  index: number;
}
const PressPreviewCard: FC<Props> = ({ blog, index }) => {
  const { desc, title, logo } = blog;

  return (
    <article
      className={cn(
        "flex flex-col gap-5 w-full h-96 rounded-[20px] py-7 px-7 hover:mix-blend-color-dodge cursor-pointer",
        bgPreviewCard(index)
      )}
    >
      <Image src={logo} alt="blog logo" />
      <div className="flex flex-col gap-3 flex-grow">
        <h4 className="text-bg line-clamp-3">{title}</h4>
        <p className="text-semibold text-lg text-bg line-clamp-4">{desc}</p>
      </div>
      <div>
        <Button variant="ghost" className="font-semibold text-bg gap-1 text-lg">
          <span>Read</span>
          <MoveRight />
        </Button>
      </div>
    </article>
  );
};

export default PressPreviewCard;
