import {Carousel} from "@mantine/carousel";

export const ExpandingSlider = () => {
  return (
    <>
      <Carousel
        slideSize="200px"
        height={400}
        slideGap="sm"
        align="start"
        classNames={{
          viewport: "overflow-hidden",
          container: "flex",
        }}
      >
        {[1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3, 1, 3].map(
          (slide, idx) => (
            <Carousel.Slide
              key={idx}
              className="group relative h-full flex-shrink-0 transition-all duration-300 hover:basis-[600px]"
            >
              <div className="relative h-full w-full overflow-hidden">
                <div className="h-full transition-opacity duration-300 group-hover:opacity-0">
                  {/* Small Image */}
                  <img
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a55a1197-2bf0-48f4-0b1e-70b9a698a900/public"
                    alt="small"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="h-full transition-opacity duration-300 group-hover:opacity-100">
                  {/* Large Image */}
                  <img
                    src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d65a7aae-4e62-49d2-e4be-60b891e6da00/public"
                    alt="large"
                    className="absolute inset-0 h-full w-[600px] object-cover opacity-0"
                  />
                </div>
              </div>
            </Carousel.Slide>
          ),
        )}
      </Carousel>

      {/* <Carousel
        className="mb-20 mt-40"
        slideSize={100}
        slideGap={20}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
          <Carousel.Slide
            key={idx}
            className="group grid h-[200px] grid-cols-1 grid-rows-1 transition-all hover:basis-[500px]"
          >
            <div className="col-span-1 row-span-1 h-full transition-all group-hover:opacity-0">
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a55a1197-2bf0-48f4-0b1e-70b9a698a900/public"
                alt=""
                width={400}
                height={200}
                className="h-full object-cover"
              />
            </div>
            <div className="relative col-span-1 row-span-1 h-full opacity-0 transition-all group-hover:opacity-100">
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a55a1197-2bf0-48f4-0b1e-70b9a698a900/public"
                alt=""
                className="object-cover"
                width={600}
                height={200}
              />

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                consequuntur!
              </p>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel> */}
    </>
  );
};
