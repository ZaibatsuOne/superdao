import { FC, PropsWithChildren } from "react";

interface Props {
  variant: "short" | "medium" | "long";
}
const SectionTitle: FC<PropsWithChildren<Props>> = ({ variant, children }) => {
  const switchBrush = (variant: string) => {
    if (variant === "short") {
      return (
        <div className="absolute w-full h-full bg-workWith-brush bg-no-repeat translate-x-1/3 top-7 -z-10" />
      );
    } else if (variant === "medium") {
      return (
        <div className="absolute bg-project-brush h-10 translate-x-[15%] w-full bg-no-repeat -z-10 top-8 " />
      );
    } else {
      return (
        <div className="absolute h-full w-full bg-areaWork-brush bg-no-repeat top-7 translate-x-1/4 -left-40 -z-10" />
      );
    }
  };
  return (
    <div className="relative">
      <h2>{children}</h2>
      {switchBrush(variant)}
    </div>
  );
};

export default SectionTitle;
