import Marquee from "react-fast-marquee";
import {ClientOnly} from "remix-utils/client-only";

export const BrandSlider = () => {
  return (
    <ClientOnly>
      {() => (
        <Marquee speed={100}>
          {[
            "/images/logos/cbre.png",
            "/images/logos/samsung.png",
            "/images/logos/netflix.png",
            "/images/logos/google.png",
            "/images/logos/cbre.png",
            "/images/logos/samsung.png",
            "/images/logos/netflix.png",
            "/images/logos/google.png",
          ].map((image, idx) => {
            return (
              <img
                key={idx}
                src={image}
                alt={`Brand ${idx}`}
                className="mx-8 block w-[150px] object-contain md:mx-[70px] md:w-[180px]"
              />
            );
          })}
        </Marquee>
      )}
    </ClientOnly>
  );
};
