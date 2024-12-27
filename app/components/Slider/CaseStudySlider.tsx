import {Carousel, Embla} from "@mantine/carousel";
import {useState} from "react";
import {useMediaQuery} from "@mantine/hooks";

export const CaseStudySlider = () => {
  const [embla, setEmbla] = useState<Embla | null>();
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1279px)");

  return (
    <div>
      <Carousel
        getEmblaApi={setEmbla}
        align={"center"}
        loop={true}
        slideGap={isDesktop ? 80 : isTablet ? 32 : 16}
        withControls={false}
        classNames={{
          container: "px-4 md:px-0",
          slide: "basis-full md:basis-[650px] xl:basis-[1080px]",
        }}
        withIndicators={false}
      >
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
        <Carousel.Slide>
          <img
            src="/images/cards/citibank-stats.jpg"
            alt="Citibank Stats"
            width={1080}
            height={533}
            className="mx-auto object-contain"
          />
        </Carousel.Slide>
      </Carousel>

      <div className="container mt-10 flex items-center justify-end gap-4 md:mt-[60px] xl:mt-20">
        <button
          onClick={() => embla?.scrollPrev()}
          className="wae-btn carousel-nav-btn border-white"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5 12.5L1.5 7L6.5 1.5"
              stroke="white"
            />
          </svg>
        </button>
        <button
          onClick={() => embla?.scrollNext()}
          className="wae-btn carousel-nav-btn border-white"
        >
          <svg
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1.5L6.5 7L1.5 12.5"
              stroke="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
