import { ArrowLeft, ArrowRight } from "lucide-react";
import HeadingText from "../../../Components/Common/HeadingText";
import CategoryCard from "../../../Components/CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";
import type { NavigationOptions } from "swiper/types";
const OurCategoriesSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pagination = {
    clickable: true,
  };
  const cards = [
    {
      id: 1,
      name: "Sneakers",
      image:
        "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a047ce177dc57b2dce4588_image%20(25).png",
    },
    {
      id: 2,
      name: "Boots",
      image:
        "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03bff072e0fa8cbf853a5_boots.png",
    },
    {
      id: 3,
      name: "Formal",
      image:
        "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c0f6d4da41861947a6c_formal.png",
    },
    {
      id: 4,
      name: "Running",
      image:
        "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c1da2a187c96be8892b_running.png",
    },
    {
      id: 5,
      name: "Oxford",
      image:
        "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c29072e0fa8cbf8580b_oxford.png",
    },
    {
      id: 6,
      name: "Sport Shoe",
      image:
        "https://cdn.prod.website-files.com/689251469afed457b38b7028/68a03c38e31a6bf91056ec46_sports.png",
    },
  ];
  return (
    <section className="container max-w-[1200px] mx-auto mt-[150px]">
      <div className="flex items-center justify-between mb-10">
        <HeadingText title="Our Categories" />
        <div className="flex items-center gap-2.5">
          <button
            ref={prevRef}
            className="w-[41px] h-10 rounded-[10px] border border-[#e0e0e0] hover:bg-[#eee] flex items-center justify-center duration-300 cursor-pointer"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            ref={nextRef}
            className="w-[41px] h-10 rounded-[10px] border border-[#e0e0e0] hover:bg-[#eee] flex items-center justify-center duration-300 cursor-pointer"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
      <Swiper
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        onInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevRef.current;
          navigation.nextEl = nextRef.current;

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper"
      >
        {cards &&
          cards.map((item: any) => (
            <SwiperSlide>
              <CategoryCard
                key={item?.id}
                image={item?.image}
                title={item?.name}
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper mt-[150px]"
      >
        <SwiperSlide>
          <div className="min-h-[495px] max-h-[495px] rounded-[20px] overflow-hidden relative">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65b2cc4aa2b920c790_Offer-Frame-three.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[30%] pl-10">
              <button className="text-black bg-white text-[14px] font-medium px-2 py-0.5 rounded-md font-inter leading-6">
                Weekend Offer
              </button>
              <h2 className="mt-[18px] mb-[9px] text-[60px] leading-[110%] font-inter text-white font-bold">
                15% OFF!
              </h2>
              <p className="max-w-[252px] text-[20px] font-semibold leading-[30px] text-white">
                Summit Sneakers! Hottest Deals Of The Month
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[495px] max-h-[495px] rounded-[20px] overflow-hidden relative">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65381608ffd59aca70_Offer-Frame-one.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[30%] pl-10">
              <button className="text-black bg-white text-[14px] font-medium px-2 py-0.5 rounded-md font-inter leading-6">
                Weekend Offer
              </button>
              <h2 className="mt-[18px] mb-[9px] text-[60px] leading-[110%] font-inter text-white font-bold">
                15% OFF!
              </h2>
              <p className="max-w-[252px] text-[20px] font-semibold leading-[30px] text-white">
                Summit Sneakers! Hottest Deals Of The Month
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="min-h-[495px] max-h-[495px] rounded-[20px] overflow-hidden relative">
            <img
              src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/689f6c65aacca81a46e142c0_Offer-Frame-two.png"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute top-[30%] pl-10">
              <button className="text-black bg-white text-[14px] font-medium px-2 py-0.5 rounded-md font-inter leading-6">
                Weekend Offer
              </button>
              <h2 className="mt-[18px] mb-[9px] text-[60px] leading-[110%] font-inter text-white font-bold">
                15% OFF!
              </h2>
              <p className="max-w-[252px] text-[20px] font-semibold leading-[30px] text-white">
                Summit Sneakers! Hottest Deals Of The Month
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default OurCategoriesSection;
