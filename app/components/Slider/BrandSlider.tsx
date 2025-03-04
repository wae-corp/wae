import Marquee from "react-fast-marquee";
import {ClientOnly} from "remix-utils/client-only";

const logos = [
  "/images/logos/cbre.png",
  "/images/logos/samsung.png",
  "/images/logos/netflix.png",
  "/images/logos/google.png",
];

// Static fallback component for server-side rendering
const StaticLogos = () => (
  <div className="flex items-center justify-center">
    {logos.map((image, idx) => (
      <img
        key={idx}
        src={image}
        alt={`Brand ${idx}`}
        className="mx-8 block w-[150px] object-contain md:mx-[70px] md:w-[180px]"
      />
    ))}
  </div>
);

// Client-side marquee component
const MarqueeLogos = () => (
  <Marquee speed={100}>
    {[...logos, ...logos].map((image, idx) => (
      <img
        key={idx}
        src={image}
        alt={`Brand ${idx}`}
        className="mx-8 block w-[150px] object-contain md:mx-[70px] md:w-[180px]"
      />
    ))}
  </Marquee>
);

export const BrandSlider = () => {
  return (
    <ClientOnly fallback={<StaticLogos />}>
      {() => <MarqueeLogos />}
    </ClientOnly>
  );
};
