import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useEffect, useState} from "react";
import {Icons} from "~/static";
import {ProductSliderProps} from "~/typeDefinitions";

export const OurProductsSlider = ({productList}: ProductSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  const [containerOffset, setContainerOffset] = useState<number>();

  useEffect(() => {
    const containerElement = document
      .querySelector(".container")
      ?.getBoundingClientRect().left;

    setContainerOffset(containerElement);
  }, []);

  return (
    <section>
      <div
        style={{paddingLeft: containerOffset}}
        className="pl-0"
      >
        <h5 className="mb-8 text-center text-sm md:text-left">OUR PRODUCTS</h5>

        <Carousel
          getEmblaApi={setEmbla}
          align={"start"}
          loop={true}
          classNames={{
            slide: "basis-[300px] mr-8",
          }}
        >
          {productList?.map((product, idx) => {
            return (
              <Carousel.Slide key={idx}>
                <Link to={product?.link}>
                  <img
                    src={product?.image}
                    alt={product?.name}
                    width={300}
                    height={400}
                    className="object-cover"
                  />
                  <h5 className="mt-5">{product?.name}</h5>
                </Link>
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
      <div className="container mt-20 flex items-center justify-end gap-4">
        <button
          onClick={() => embla?.scrollPrev()}
          className="flex h-12 w-12 items-center justify-center rounded-lg border border-black transition-colors hover:bg-gray-200 active:bg-gray-300"
        >
          {Icons.ChevronLeft}
        </button>
        <button
          onClick={() => embla?.scrollNext()}
          className="flex h-12 w-12 items-center justify-center rounded-lg border border-black transition-colors hover:bg-gray-200 active:bg-gray-300"
        >
          {Icons.ChevronRight}
        </button>
      </div>
    </section>
  );
};
