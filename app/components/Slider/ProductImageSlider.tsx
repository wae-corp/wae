import {Carousel, Embla} from "@mantine/carousel";
import {useState} from "react";
import {Icons} from "~/static";
import {ProductDetailImageSliderProps} from "~/typeDefinitions";
import {useMediaQuery} from "@mantine/hooks";

export const ProductImageSlider = ({images}: ProductDetailImageSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="relative">
      <Carousel
        getEmblaApi={setEmbla}
        loop={true}
        slideGap={isMobile ? 5 : 100}
        align={isMobile ? "start" : "center"}
        controlsOffset={0}
        className="product-image-slider"
        classNames={{
          slide: "md:basis-[300px] xl:basis-[600px]",
        }}
        previousControlIcon={Icons.ChevronLeft}
        nextControlIcon={Icons.ChevronRight}
        withIndicators
        withControls={false}
      >
        {images?.map((image, idx) => {
          return (
            <Carousel.Slide key={idx}>
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
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <div className="left-0 top-1/2 z-10 mt-3 hidden w-full items-center justify-center gap-4 md:absolute md:mt-0 md:-translate-y-1/2 md:justify-between xl:flex">
        <button
          onClick={() => embla?.scrollPrev()}
          className="wae-btn h-8 !min-h-8 w-8 !rounded-md border-black"
        >
          {Icons.ChevronLeft}
        </button>
        <button
          onClick={() => embla?.scrollNext()}
          className="wae-btn h-8 !min-h-8 w-8 !rounded-md border-black"
        >
          {Icons.ChevronRight}
        </button>
      </div>
    </div>
  );
};
