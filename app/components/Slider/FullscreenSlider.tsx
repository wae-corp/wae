import {Carousel} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import clsx from "clsx";
import {useMediaQuery} from "@mantine/hooks";

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
  const isMobile = useMediaQuery("(max-width: 1199px)");

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
      height={isMobile ? "90vh" : "100vh"}
      className="relative"
      classNames={{
        indicators: "gap-3",
        indicator: "indicator-dot w-2 h-2 bg-[#666666]",
        control:
          "bg-transparent text-white max-sm:hidden border-none opacity-100",
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
              }
            )}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 z-[1] h-full w-full bg-gradient-to-b from-black via-transparent to-black"></div>

            {idx === 0 ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
              >
                <source src="/images/banners/Earth_Rotation_3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : idx === 2 ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
              >
                <source src="/images/banners/freepik__push-in-on-the-dam-capturing-the-intricate-details__777132-ezgif.com-reverse-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={item.image}
                alt=""
                width={1920}
                height={1080}
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover"
              />
            )}

            <div
              data-aos="zoom-in"
              className={"isolate z-[2] mx-auto text-center text-white"}
              style={item.align === "center" ? { marginTop: "5%" } : undefined}
            >
              {/* Wrapper for header, subtext, and button */}
              <div
                className={clsx(
                  "mb-10 md:px-14 transform",
                  {
                    "mt-[15vh] md:mt-[20vh]": idx === 0, // Slide 1
                    "mt-[25vh] md:mt-[20vh] sm:mt-[25vh] lg:mt-[20vh]": idx === 1 || idx === 2, // Slide 2 & 3
                  }                  
                )}
              >
                {item.subtitle && (
                  <h3 className="wae-h6 mb-6 font-black">{item.subtitle}</h3>
                )}
                {item.title && (
                  <h1
                    className={clsx(
                      "px-6 text-center font-poppins",
                      {
                        "text-[74px] leading-[82px] font-medium": idx === 0,
                        "text-[74px] leading-[88.8px] font-medium": idx === 1 || idx === 2,
                      }
                    )}
                  >
                    {item.title}
                    {item.title2 && (
                      <>
                        <br />
                        {item.title2}
                      </>
                    )}
                  </h1>
                )}

                {/* Subtext Below Header (All Slides) */}
                <p className="mt-2 text-center text-[16px] leading-[24px] font-poppins">
                  {idx === 0 ? (
                    <>
                      Our <span className="text-[#008CFF]">Green</span> Is{" "}
                      <span className="text-[#00FF4C]">Blue</span>
                    </>
                  ) : idx === 1 ? (
                    "No Green Wasting Here"
                  ) : (
                    "Don't just pledge - Act"
                  )}
                </p>

                {/* Conditionally Render Button */}
                {item.isButton && item.buttonText && (
                  <div className="mt-[calc(53px+2vw)]">
                    <Link
                      to={idx === 1 ? "/products" : idx === 2 ? "/sustainability" : "/contact"} // Dynamically change link
                      className="wae-btn-light wae-btn wae-btn-lg !border-none px-10 py-3 text-[16px] 
                      w-auto min-w-[200px] h-[48px] font-poppins md:text-[16px] 
                      sm:w-[160px] sm:h-[40px] sm:text-[14px] md:px-6 whitespace-nowrap"
                    >
                      {item.buttonText}
                    </Link>
                  </div>
                )}
              </div>
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
  title2?: string;
  subtitle?: string;
  align: "center" | "end";
  isButton: boolean;
  buttonText?: string;
}

interface SliderProps {
  items: SliderItem[];
}

