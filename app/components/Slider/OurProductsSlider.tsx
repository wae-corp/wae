import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useEffect, useState} from "react";
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
                <h5 className="text-center text-sm md:text-left mb-8">
                    OUR PRODUCTS
                </h5>

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
            <div className="container flex justify-end items-center gap-4 mt-20">
                <button
                    onClick={() => embla?.scrollPrev()}
                    className="w-12 h-12 rounded-lg flex items-center justify-center border border-black transition-colors hover:bg-gray-200 active:bg-gray-300"
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
                    className="w-12 h-12 rounded-lg flex items-center justify-center border border-black transition-colors hover:bg-gray-200 active:bg-gray-300"
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
        </section>
    );
};
