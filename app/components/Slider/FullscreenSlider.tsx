import {Carousel} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import clsx from "clsx";
import {ReactNode} from "react";
import {Icons} from "~/static";

{
  /* <main className="relative flex h-screen flex-col items-center justify-center pb-10 pt-[var(--header-height)]">
  <div className="absolute inset-0 -z-[1] h-full w-full">
    <div className="absolute z-[1] h-full w-full bg-gradient-to-b from-black via-transparent to-black"></div>
    <img
      src="/images/covers/earth-from-space.jpg"
      alt="earth-from-space"
      className="h-full w-full object-cover"
      width={1920}
      height={1080}
    />
  </div>

  <div
    className="text-center text-white"
    data-aos="fade-up"
  >
    <h1 className="wae-h1 font-secondary">Keeping The Blue Planet Green</h1>
  </div>

  <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center text-center text-white">
    {Icons.ArrowDown}
    Scroll
  </div>
</main>; */
}

export const FullscreenSlider = ({items}: SliderProps) => {
  const sliderItems = items.length > 0 ? items : [];

  return (
    <Carousel
      withControls
      withIndicators
      align={"center"}
      controlSize={50}
      slideGap={0}
      previousControlIcon={
        <svg
          width="16"
          height="31"
          viewBox="0 0 16 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 1L2 15.5L15 30"
            stroke="currentcolor"
            strokeWidth="2"
          />
        </svg>
      }
      nextControlIcon={
        <svg
          width="16"
          height="31"
          viewBox="0 0 16 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 30L14 15.5L1 0.999999"
            stroke="currentcolor"
            strokeWidth="2"
          />
        </svg>
      }
      loop
      height={"100vh"}
      className="relative"
      classNames={{
        indicators: "gap-3",
        indicator: "indicator-dot w-2 h-2 bg-[#666666]",
        control: "bg-transparent text-white border-none opacity-100",
      }}
    >
      {sliderItems.map((item, idx) => {
        return (
          <Carousel.Slide
            key={idx}
            className={clsx(
              "flex h-full w-full flex-col pb-20 pt-[var(--header-height)]",
              {
                "justify-center": item.align === "center",
                "justify-end": item.align === "end",
              },
            )}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full bg-gradient-to-b from-black via-transparent to-black"></div>

            <img
              src={item.image}
              alt=""
              width={1920}
              height={1080}
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
            />

            <div
              data-aos="zoom-in"
              className={clsx("isolate z-[2] mx-auto text-center text-white", {
                "max-w-[850px]": !item.isHeadingMax,
                "max-w-[1200px]": item.isHeadingMax,
              })}
            >
              <div className="mb-10">
                {item.subtitle && (
                  <h3 className="wae-h6 mb-6 font-black">{item.subtitle}</h3>
                )}
                {item.title && (
                  <h1
                    className={clsx("wae-h3 font-secondary !leading-normal", {
                      "lg:text-[72px]": item.isHeadingMax,
                      "lg:text-[48px]": !item.isHeadingMax,
                    })}
                  >
                    {item.title}
                  </h1>
                )}
              </div>

              {item.isButton && (
                <Link
                  to={"/contact"}
                  className="wae-btn-light wae-btn wae-btn-lg!border-none px-10"
                >
                  Get in Touch
                </Link>
              )}
            </div>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

interface SliderItem {
  image: string;
  title?: string;
  subtitle?: string;
  align: "center" | "end";
  isButton: boolean;
  isHeadingMax: boolean;
}

interface SliderProps {
  items: SliderItem[];
}
