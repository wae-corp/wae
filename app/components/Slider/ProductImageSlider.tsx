import {Carousel, Embla} from "@mantine/carousel";
import {useState} from "react";
import {Icons} from "~/static";
import {ProductDetailImageSliderProps} from "~/typeDefinitions";

export const ProductImageSlider = ({images}: ProductDetailImageSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  return (
    <div className="relative">
      <Carousel
        getEmblaApi={setEmbla}
        loop={true}
        slideGap={100}
        align={"center"}
        controlsOffset={0}
        className="product-image-slider"
        classNames={{
          slide: "md:basis-[600px]",
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
                className="mx-auto block aspect-square object-cover"
                data-aos="zoom-in"
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <div className="left-0 top-1/2 z-10 mt-3 flex w-full items-center justify-center gap-4 md:absolute md:mt-0 md:-translate-y-1/2 md:justify-between">
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
