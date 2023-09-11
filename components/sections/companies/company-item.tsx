import Image, { StaticImageData } from "next/image";

import { FC } from "react";

interface Props {
  company: StaticImageData;
}
const CompanyItem: FC<Props> = ({ company }) => {
  return (
    <li className="flex justify-center items-center h-[114px] bg-[#121E28] px-10 border-2 border-[#2A3744] rounded-[30px] mr-5">
      <Image src={company} alt="Company logo" />
    </li>
  );
};

export default CompanyItem;
