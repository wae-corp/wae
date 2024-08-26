import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useState} from "react";
import {ProductSliderProps} from "~/typeDefinitions";

export const OurProductsSlider = ({productList}: ProductSliderProps) => {
    const [embla, setEmbla] = useState<Embla | null>();

    return (
        <>
            <Carousel
                getEmblaApi={setEmbla}
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

            <div className="flex justify-end items-center gap-4 mt-[100px]">
                <button
                    onClick={() => embla?.scrollPrev()}
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-black transition-colors hover:bg-gray-200 active:bg-gray-300"
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
                    className="w-12 h-12 rounded-full flex items-center justify-center border border-black transition-colors hover:bg-gray-200 active:bg-gray-300"
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
        </>
    );
};
