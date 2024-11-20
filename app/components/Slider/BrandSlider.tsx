import {Carousel, CarouselSlide, Embla} from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";
import {useRef} from "react";

export const BrandSlider = ({brandsList}: {brandsList: string[]}) => {
  const autoplay = useRef(Autoplay({delay: 2500}));

  return (
    <Carousel
      loop={true}
      classNames={{
        slide: "basis-[140px] lg:basis-[400px]",
        controls: "hidden",
      }}
      draggable={false}
      plugins={[autoplay.current, AutoScroll({playOnInit: true})]}
      data-aos="fade-in"
      align={"start"}
    >
      {brandsList.map((brand, idx) => {
        return (
          <CarouselSlide
            key={idx}
            className="mr-20 flex items-center justify-center"
          >
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
