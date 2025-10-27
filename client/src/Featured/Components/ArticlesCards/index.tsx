import { WifiZero } from "lucide-react";
import type { ArticlesCardsProps } from "../../../Types/global";

const ArticlesCards = ({
  image,
  category,
  date,
  title,
}: ArticlesCardsProps) => {
  return (
    <div className="">
      <div className="card">
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-full h-auto object-cover hover:scale-105 duration-500"
            src={image}
            alt={title}
          />
        </div>

        <div className="mt-2 flex flex-col gap-[5px]">
          <div className="flex text-[14px] text-[#4c4c4c] items-center gap-2">
            <h3>{category}</h3>
            <WifiZero className="mb-2" />
            <h4>{date}</h4>
          </div>
          <h2 className="text-[18px] font-semibold leading-[26px]">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ArticlesCards;
