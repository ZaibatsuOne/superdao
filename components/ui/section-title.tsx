import { FC, PropsWithChildren } from "react";

interface Props {
  variant: "short" | "medium" | "long";
}
const SectionTitle: FC<PropsWithChildren<Props>> = ({ variant, children }) => {
  return (
    <div className="relative">
      <h2>{children}</h2>
      {variant === "short" ? (
        <div className="absolute w-full h-full bg-workWith-brush bg-no-repeat translate-x-1/3 top-7 -z-10" />
      ) : "medium" ? (
        <div className="absolute bg-project-brush h-10 w-full bg-no-repeat -z-10 top-8 left-40" />
      ) : (
        <div className="absolute h-full w-full bg-areaWork-brush bg-no-repeat top-7 translate-x-1/4 -left-40 -z-10" />
      )}
    </div>
  );
};

export default SectionTitle;
