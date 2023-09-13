import { FC, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

interface Props {
  variant: "short" | "medium" | "long" | "none";
  className?: string;
}
const SectionTitle: FC<PropsWithChildren<Props>> = ({
  variant,
  children,
  className,
}) => {
  const switchBrush = (variant: string) => {
    if (variant === "short") {
      return (
        <div className="absolute w-1/2 h-full bg-workWith-brush bg-no-repeat translate-x-[70%] top-7 -z-10" />
      );
    } else if (variant === "medium") {
      return (
        <div className="absolute bg-project-brush h-10 translate-x-[15%] w-full bg-no-repeat -z-10 top-8 " />
      );
    } else if (variant === "none") {
      return;
    } else {
      return (
        <div className="absolute h-full w-full bg-areaWork-brush bg-no-repeat top-7 translate-x-1/4 -left-40 -z-10" />
      );
    }
  };
  return (
    <div className={cn("relative text-center", className)}>
      <h2>{children}</h2>
      {switchBrush(variant)}
    </div>
  );
};

export default SectionTitle;
