import { FC } from "react";

const BackBlur: FC = () => {
  return (
    <div className="absolute w-1/2 h-1/2 rounded-full bg-white translate-y-1/2 translate-x-1/2 -z-10 blur-[120px] opacity-5" />
  );
};

export default BackBlur;
