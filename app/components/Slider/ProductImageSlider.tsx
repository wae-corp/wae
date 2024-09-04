import {Carousel, Embla} from "@mantine/carousel";
import {useState} from "react";
import {Icons} from "~/static";
import {ProjectImageSliderProps} from "~/typeDefinitions";

export const ProductImageSlider = ({images}: ProjectImageSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  return (
    <div className="relative">
      <Carousel
        getEmblaApi={setEmbla}
        loop={true}
        slideSize={600}
        slideGap={100}
        align={"center"}
        controlsOffset={0}
        className="product-image-slider"
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
              />
            </Carousel.Slide>
          );
        })}
      </Carousel>

      <div className="absolute left-0 top-1/2 z-10 flex w-full -translate-y-1/2 items-center justify-between">
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
