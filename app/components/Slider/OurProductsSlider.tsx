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

    console.log(offset);

    setContainerOffset(offset);
  }, []);

  return (
    <section>
      <div
        style={{paddingLeft: containerOffset}}
        className="max-lg:!pl-3"
      >
        <h5
          className="mb-8 text-center text-sm md:text-left"
          data-aos="fade-down"
        >
          OUR PRODUCTS
        </h5>

        <Carousel
          getEmblaApi={setEmbla}
          align={"start"}
          loop={true}
          classNames={{
            slide: "basis-[200px] lg:basis-[300px] mr-8",
            controls: "hidden",
          }}
        >
          {productList?.map((product, idx) => {
            return (
              <Carousel.Slide key={idx}>
                <Link
                  to={product?.link}
                  data-aos="fade-in"
                  data-aos-delay={`${idx}00`}
                >
                  <img
                    src={product?.image}
                    alt={product?.name}
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                  <h5 className="mt-3 lg:mt-5">{product?.name}</h5>
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
