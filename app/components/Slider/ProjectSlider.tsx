import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useState} from "react";
import {ProductSliderProps} from "~/typeDefinitions";

export const ProjectSlider = ({
  productList,
  arrows = false,
  centered,
}: ProductSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  return (
    <section>
      <Carousel
        getEmblaApi={setEmbla}
        loop={true}
        classNames={{
          slide:
            "basis-[240px] mr-4 min-w-[0] sm:basis-[350px] lg:basis-[500px] lg:mr-[60px] 2xl:basis-[600px] 2xl:mr-[100px]",
          controls: "hidden",
        }}
        align={centered ? "center" : "start"}
      >
        {productList?.map((product, idx) => {
          return (
            <Carousel.Slide key={idx}>
              {product.link ? (
                <Link
                  to={product?.link}
                  className="block"
                  data-aos="fade-in"
                >
                  <img
                    src={product?.bannerImageUrl}
                    alt={product?.name}
                    width={600}
                    height={384}
                    className="aspect-video object-cover"
                  />
                  {product?.name && (
                    <h5 className="mt-5 text-start">{product?.name}</h5>
                  )}
                  {product?.details && <div>{product?.details}</div>}
                </Link>
              ) : (
                <div data-aos="fade-in">
                  <img
                    src={product?.bannerImageUrl}
                    alt={product?.name}
                    width={600}
                    height={384}
                    className="aspect-video object-cover"
                  />
                  {product?.name && (
                    <h5 className="mt-5 text-start">{product?.name}</h5>
                  )}
                  {product?.details && <div>{product?.details}</div>}
                </div>
              )}
            </Carousel.Slide>
          );
        })}
      </Carousel>
      {arrows && (
        <div className="mr-8 mt-10 flex items-center justify-end gap-4 lg:mt-20">
          <button
            onClick={() => embla?.scrollPrev()}
            className="wae-btn carousel-nav-btn border-black"
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
                stroke="black"
              />
            </svg>
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            className="wae-btn carousel-nav-btn border-black"
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
                stroke="black"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
