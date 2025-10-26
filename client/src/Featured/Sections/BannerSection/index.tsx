import { ArrowRight } from "lucide-react";

const BannerSection = () => {
  return (
    <section>
      <div className="relative">
        <img
          src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891dcf26e965d2e8a4c0fef_hero-image.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 max-w-[1200px] mx-auto container pt-10 ">
          <div className="flex items-start justify-between">
            <div className="pt-[50px]">
              <h2 className="text-[100px] font-semibold capitalize font-poppins tracking-[-4px] text-white leading-[100px] mb-5">
                Explore <br /> Premium <br /> Shoes
              </h2>
              <div className="flex items-center gap-6">
                <button className="flex items-center gap-1 border border-[#e0e0e0] text-[#0c0407] bg-white rounded-xl px-4 py-3 text-[14px] font-semibold font-inter">
                  Shop Now <ArrowRight size={14} className="font-bold" />
                </button>
                <button className="flex items-center gap-1 border border-[#b29e8e] text-white bg-[#b29e8e] rounded-xl px-4 py-3 text-[14px] font-semibold font-inter">
                  Categories <ArrowRight size={14} className="font-bold" />
                </button>
              </div>
            </div>
            <div className="bg-white max-w-[252px] p-1.5 flex items-center justify-center flex-col group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6891ed3ee3d93ad17e2c0430_hero-product.jpg"
                  alt=""
                  className="group-hover:scale-[1.1] duration-500 "
                />
              </div>
              <div className="py-2.5">
                <h2 className="font-semibold text-[#0c0407] text-[14px] flex items-center gap-1.5 font-inter">
                  Explore New Arrivals{" "}
                  <ArrowRight size={14} className="font-bold" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
