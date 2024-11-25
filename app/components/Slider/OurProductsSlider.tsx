import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useEffect, useState} from "react";
import {Icons} from "~/static";
import {ProductSliderProps} from "~/typeDefinitions";

export const OurProductsSlider = ({productList}: ProductSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  const [containerOffset, setContainerOffset] = useState<number>();

  useEffect(() => {
    const offset = document
      .querySelector(".container")
      ?.getBoundingClientRect().left;

    setContainerOffset(offset);
  }, []);

  const catImages = [
    {
      id: 1,
      image:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a55a1197-2bf0-48f4-0b1e-70b9a698a900/public",
    },
    {
      id: 2,
      image:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/125addc3-239e-41cd-8687-8f6d8ec79c00/public",
    },
    {
      id: 3,
      image:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3fadcd4c-7bb2-42ed-8fa2-8d45297c4500/public",
    },
    {
      id: 4,
      image:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/90776a8b-ea76-43f4-df59-488d926e2600/public",
    },
    {
      id: 5,
      image:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dd899d46-b0a0-4f2f-ac54-4be4ceb4d100/public",
    },
    {
      id: 6,
      image:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5e60d433-924f-419b-a6d0-c55e60f89c00/public",
    },
  ];

  return (
    <section>
      <div
      // style={{paddingLeft: containerOffset}}
      // className="max-lg:!pl-3"
      >
        <h5
          className="mb-10 text-center text-sm md:text-left"
          data-aos="fade-down"
        >
          OUR PRODUCTS
        </h5>

        <Carousel
          getEmblaApi={setEmbla}
          align={"start"}
          loop={true}
          classNames={{
            slide:
              "basis-[250px] transition-all xl:hover:w-[1000px] md:basis-[280px] xl:basis-[500px] mr-4 md:mr-8",
            controls: "hidden",
          }}
        >
          {productList?.map((product, idx) => {
            return (
              <Carousel.Slide key={idx}>
                <Link
                  to={`/browse-products/${product.id}`}
                  data-aos="fade-in"
                  data-aos-delay={`${idx}00`}
                >
                  <img
                    src={catImages[idx]?.image}
                    alt={product?.categoryName}
                    className="object-cover"
                  />
                  <h5 className="mt-3 text-sm md:text-base lg:mt-5 xl:text-xl">
                    {product?.categoryName}
                  </h5>
                </Link>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
      <div className="container mt-10 flex items-center justify-end gap-4 lg:mt-20">
        <button
          onClick={() => embla?.scrollPrev()}
          className="wae-btn carousel-nav-btn border-black"
        >
          {Icons.ChevronLeft}
        </button>
        <button
          onClick={() => embla?.scrollNext()}
          className="wae-btn carousel-nav-btn border-black"
        >
          {Icons.ChevronRight}
        </button>
      </div>
    </section>
  );
};
