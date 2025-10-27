import { Star } from "lucide-react";
import type { productCardProps } from "../../../../Types/global";

const ProductCard = ({
  image,
  title,
  price,
  discount,
  rating,
}: productCardProps) => {
  return (
    <div className="">
      <div className="card">
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-full h-auto object-cover  hover:scale-105 duration-500"
            src={image}
            alt=""
          />
        </div>
        <div className="mt-4 flex flex-col gap-[5px]">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-semibold leading-[30px] ">
              {title}
            </h2>
            <p className="flex items-center text-[12px]">
              <Star size={14} stroke="#ff8d1c" fill="#ff8d1c" />({rating})
            </p>
          </div>
          <ul className="flex text-[14px] font-medium  gap-2">
            <li className="text-[#0c0407]">$ {discount} USD</li>
            <li className="text-[#949494]">$ {price} USD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
