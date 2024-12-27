import {Icons} from "~/static";
import {ProductDetailImageSliderProps} from "~/typeDefinitions";
import {Swiper, SwiperRef, SwiperSlide, useSwiper} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import {useRef} from "react";

export const ProductImageSlider = ({images}: ProductDetailImageSliderProps) => {
  const swiperRef = useRef<any>(null);

  return (
    <div className="relative">
      <div className="min-w-[0px]">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={10}
          navigation={false}
          loop={true}
          slidesPerView={"auto"}
        >
          {images?.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img
                  src={image}
                  alt={`Product ${idx}`}
                  className="mx-auto block aspect-square w-full object-cover"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="500"
                />
              </SwiperSlide>
            );
          })}

          <div className="left-0 top-1/2 z-10 mt-3 hidden w-full items-center justify-center gap-4 md:absolute md:mt-0 md:flex md:-translate-y-1/2 md:justify-between">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="wae-btn h-8 !min-h-8 w-8 !rounded-md border-white"
            >
              {Icons.ChevronLeft}
            </button>
            <button
              onClick={() => swiperRef.current.slideNext()}
              className="wae-btn h-8 !min-h-8 w-8 !rounded-md border-white"
            >
              {Icons.ChevronRight}
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
