import {Carousel, CarouselSlide, Embla} from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import {useRef} from "react";

export const BrandSlider = ({brandsList}: {brandsList: string[]}) => {
  const autoplay = useRef(Autoplay({delay: 1500}));

  return (
    <Carousel
      loop={true}
      classNames={{
        slide: "basis-[140px] lg:basis-[400px]",
        controls: "hidden",
      }}
      draggable={false}
      plugins={[autoplay.current]}
      data-aos="fade-in"
      align={"start"}
    >
      {brandsList.map((brand, idx) => {
        return (
          <CarouselSlide className="mr-20 flex items-center justify-center">
            <img
              src={brand}
              alt="Brand"
              className="object-contain"
            />
          </CarouselSlide>
        );
      })}
    </Carousel>
  );
};
