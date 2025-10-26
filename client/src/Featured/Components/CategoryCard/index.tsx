import type { CategoryCardProps } from "../../../Types/global";

const CategoryCard = ({ image, title }: CategoryCardProps) => {
  return (
    <div className="box max-w-[285px]  overflow-hidden">
      <img src={image} alt="" className="max-h-[309px] mb-2 rounded-xl" />
      <h2 className="text-[20px] font-semibold leading-[30px] font-inter">
        {title}
      </h2>
    </div>
  );
};

export default CategoryCard;
