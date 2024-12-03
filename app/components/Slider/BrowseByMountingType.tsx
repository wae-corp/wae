import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useState} from "react";
import {BrowseByMountingTypeProps} from "~/typeDefinitions";

export const BrowseByMountingType = ({
  mountingTypes,
  arrows = false,
  centered,
}: BrowseByMountingTypeProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  const itemsToRender =
    mountingTypes.length === 1
      ? [...mountingTypes, ...mountingTypes, ...mountingTypes] // Repeat single item three times
      : mountingTypes.length <= 2
        ? [...mountingTypes, ...mountingTypes] // Repeat if there are 2 or fewer items
        : mountingTypes;

  return (
    <section className="container">
      <Carousel
        getEmblaApi={setEmbla}
        loop={true}
        classNames={{
          slide: "basis-[300px] md:basis-[40%]",
          controls: "hidden",
        }}
        align={centered ? "center" : "start"}
        slideGap="16px"
      >
        {itemsToRender?.map((mounting, idx) => {
          return (
            <Carousel.Slide key={idx}>
              {mounting.link ? (
                <Link
                  to={mounting?.link}
                  className="block"
                  data-aos="fade-in"
                >
                  <img
                    src={mounting?.image}
                    alt={mounting?.name}
                    width={600}
                    height={384}
                    className="aspect-video object-cover"
                  />
                  {mounting?.name && (
                    <h5 className="mt-5 text-start">{mounting?.name}</h5>
                  )}
                  {/* {mounting?.details && <div>{mounting?.details}</div>} */}
                </Link>
              ) : (
                <Link
                  data-aos="fade-in"
                  to={`/product-list/${mounting?.id}`}
                >
                  <img
                    src={mounting?.image}
                    alt={mounting?.name}
                    width={600}
                    height={384}
                    className="aspect-video object-cover"
                  />
                  {mounting?.name && (
                    <h5 className="mt-5 text-start">{mounting?.name}</h5>
                  )}
                  {/* {mounting?.details && <div>{mounting?.details}</div>} */}
                </Link>
              )}
            </Carousel.Slide>
          );
        })}
      </Carousel>
      {arrows && (
        <div className="container mt-10 flex items-center justify-end gap-4 lg:mt-20">
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
      )}
    </section>
  );
};
