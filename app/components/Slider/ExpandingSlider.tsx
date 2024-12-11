import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useState} from "react";
import {Icons, productData} from "~/static";

export const ExpandingSlider = () => {
  const [embla, setEmbla] = useState<Embla | null>();

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

  const itemsToRender = [
    ...productData,
    ...productData,
    ...productData,
    ...productData,
  ];
  const catList = [...catImages, ...catImages, ...catImages, ...catImages];

  return (
    <>
      <h5
        className="mb-10 text-center text-sm md:text-left"
        // data-aos="fade-down"
      >
        OUR PRODUCTS
      </h5>
      <Carousel
        getEmblaApi={setEmbla}
        slideSize="300px"
        height={440}
        align={"start"}
        skipSnaps={true}
        loop={false}
        classNames={{
          slide:
            "group relative h-full flex-shrink-0 mr-4 transition-[flex-basis] duration-1000 md:mr-8 hover:basis-[600px] will-change-[flex-basis]",
          viewport: "overflow-hidden",
          container: "flex",
          controls: "hidden",
        }}
      >
        {itemsToRender.map((product, idx) => (
          <Carousel.Slide key={idx}>
            <Link
              to={`/browse-products/${product.id}`}
              className="relative flex h-full w-full flex-col overflow-hidden"
            >
              <div className="absolute inset-0 h-full transition-opacity duration-1000 group-hover:opacity-0">
                {/* Small Image */}
                <img
                  src={catList[idx]?.image}
                  className="h-[400px] w-full object-cover"
                />
              </div>

              <div className="absolute inset-0 h-full opacity-0 transition-opacity duration-1000 group-hover:opacity-100">
                <div className="relative h-[400px] w-[600px]">
                  <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-black to-transparent"></div>
                  {/* Large Image */}
                  <img
                    src={catList[idx]?.image}
                    alt={product?.categoryName}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h5 className="mt-auto">
                {product?.categoryName?.split("-")[0]}
              </h5>
            </Link>
          </Carousel.Slide>
        ))}
      </Carousel>
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
    </>
  );
};
