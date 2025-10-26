import type { headingTypes } from "../../../../Types/global";


const HeadingText = ({ title }: headingTypes) => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex  items-center ">
            <h2 className="text-[48px] leading-16  font-bold text-[#0c0407]">
              {title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadingText;
