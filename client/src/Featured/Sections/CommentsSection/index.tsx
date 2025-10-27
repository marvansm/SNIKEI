import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import HeadingText from "../../Components/Common/HeadingText";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { NavigationOptions } from "swiper/types";
import { useRef } from "react";
const CommentsSection = () => {
  const prevReferans = useRef(null);
  const nextReferans = useRef(null);
  const pagination = {
    clickable: true,
  };
  return (
    <section className="container mx-auto max-w-[1200px] mt-[150px]">
      <div className="flex items-center justify-between mb-10">
        <HeadingText title="What People Says" />
        <div className="flex items-center gap-2.5">
          <button
            ref={prevReferans}
            className="w-[41px] h-10 rounded-[10px] border border-[#e0e0e0] hover:bg-[#eee] flex items-center justify-center duration-300 cursor-pointer"
          >
            <ArrowLeft size={14} />
          </button>
          <button
            ref={nextReferans}
            className="w-[41px] h-10 rounded-[10px] border border-[#e0e0e0] hover:bg-[#eee] flex items-center justify-center duration-300 cursor-pointer"
          >
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
      <Swiper
        pagination={pagination}
        navigation={{
          prevEl: prevReferans.current,
          nextEl: nextReferans.current,
        }}
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={10}
        onInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;
          navigation.prevEl = prevReferans.current;
          navigation.nextEl = nextReferans.current;

          swiper.navigation.init();
          swiper.navigation.update();
        }}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex items-start  gap-1">
            <div className="max-w-96  max-h-[296px] h-[296px] rounded-[20px] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697d0c6439129efa3a1_d0b5175a471ff8d16ea8c272dcd617a616f365d6.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f9f9f9] border border-[#eee] rounded-[20px] max-w-[410px] h-[296px] p-[31px] flex items-start flex-col justify-between">
              <p className="text-[20px] font-medium leading-[30px] font-inter">
                “I’ve never worn shoes this stylish that also feel like walking
                on clouds. The quality is top-notch, and I get compliments
                everywhere I go!”
              </p>
              <ul className="flex items-center gap-4">
                <li>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                  />
                </li>
                <li>
                  <div className="flex items-start flex-col">
                    <h2 className="text-[18px] font-semibold leading-[30px]">
                      Harper Jackson
                    </h2>
                    <div className="prices flex items-start gap-1 ">
                      <Star fill="#FF9500" color="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-start  gap-1">
            <div className="max-w-96  max-h-[296px] h-[296px] rounded-[20px] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697d0c6439129efa3a1_d0b5175a471ff8d16ea8c272dcd617a616f365d6.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f9f9f9] border border-[#eee] rounded-[20px] max-w-[410px] h-[296px] p-[31px] flex items-start flex-col justify-between">
              <p className="text-[20px] font-medium leading-[30px] font-inter">
                “I’ve never worn shoes this stylish that also feel like walking
                on clouds. The quality is top-notch, and I get compliments
                everywhere I go!”
              </p>
              <ul className="flex items-center gap-4">
                <li>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                  />
                </li>
                <li>
                  <div className="flex items-start flex-col">
                    <h2 className="text-[18px] font-semibold leading-[30px]">
                      Harper Jackson
                    </h2>
                    <div className="prices flex items-start gap-1 ">
                      <Star fill="#FF9500" color="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-start  gap-1">
            <div className="max-w-96  max-h-[296px] h-[296px] rounded-[20px] overflow-hidden">
              <img
                src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/68a1f697d0c6439129efa3a1_d0b5175a471ff8d16ea8c272dcd617a616f365d6.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-[#f9f9f9] border border-[#eee] rounded-[20px] max-w-[410px] h-[296px] p-[31px] flex items-start flex-col justify-between">
              <p className="text-[20px] font-medium leading-[30px] font-inter">
                “I’ve never worn shoes this stylish that also feel like walking
                on clouds. The quality is top-notch, and I get compliments
                everywhere I go!”
              </p>
              <ul className="flex items-center gap-4">
                <li>
                  <img
                    src="https://cdn.prod.website-files.com/6890fbf29f28b7089b169c21/6893621a929dc19ce2544e67_Ellipse%202.svg"
                    alt=""
                  />
                </li>
                <li>
                  <div className="flex items-start flex-col">
                    <h2 className="text-[18px] font-semibold leading-[30px]">
                      Harper Jackson
                    </h2>
                    <div className="prices flex items-start gap-1 ">
                      <Star fill="#FF9500" color="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                      <Star color="#FF9500" fill="#FF9500" size={14} />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default CommentsSection;
