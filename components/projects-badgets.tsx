import { Badge } from "./ui/badge";
import { FC } from "react";
import { projectCategory } from "@/data/data";

const ProjectsBadges: FC = () => {
  const badgeTextColor = (index: number) => {
    switch (index) {
      case 0:
        return "text-purpleLight";
      case 1:
        return "text-yellow";
      case 2:
        return "text-purple";
      case 3:
        return "text-blue";
      case 4:
        return "text-[#23C9DE]";
      case 5:
        return "text-pink";
      default:
        return "text-[#707F8D]";
    }
  };

  return (
    <ul className="flex gap-6 items-center flex-wrap justify-center px-20">
      {projectCategory.map((category, index) => (
        <li>
          <Badge className={badgeTextColor(index)}>{category}</Badge>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsBadges;
