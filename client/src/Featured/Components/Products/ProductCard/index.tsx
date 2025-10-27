import { Star } from "lucide-react";

const ProductCard = () => {
  return (
    <div className="">
      <div className="card">
        <div className="overflow-hidden rounded-xl">
          <img
            className="w-full h-auto object-cover  hover:scale-105 duration-500"
            src="https://cdn.prod.website-files.com/689251469afed457b38b7028/68a0368f03f08bf146a04fde_eclipse.png"
            alt=""
          />
        </div>
        <div className="mt-4 flex flex-col gap-[5px]">
          <div className="flex justify-between">
            <h2 className="text-[20px] font-semibold leading-[30px] ">
              Eclipse Sneakers
            </h2>
            <p className="flex items-center text-[12px]">
              <Star size={14} stroke="#ff8d1c" fill="#ff8d1c" />
              (4.3)
            </p>
          </div>
          <ul className="flex text-[14px] font-medium  gap-2">
            <li className="text-[#0c0407]">$ 430.00 USD</li>
            <li className="text-[#949494]">$ 450.00 USD</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
