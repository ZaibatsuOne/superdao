import { FC, PropsWithChildren } from "react";

interface Props {}
const Slug: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="absolute -bottom-8 translate-x-1/2 h-14 w-1/2 bg-orange rounded-[100px] border-4 border-black">
      <p className="font-bold text-lg text-bg translate-y-1/3">{children}</p>
    </div>
  );
};

export default Slug;
