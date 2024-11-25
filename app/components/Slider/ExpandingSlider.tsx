import {Carousel} from "@mantine/carousel";

export const ExpandingSlider = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Slide className="w-[250px] flex-shrink-0">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a55a1197-2bf0-48f4-0b1e-70b9a698a900/public"
            alt=""
            className="object-cover"
          />
        </Carousel.Slide>
        <Carousel.Slide className="w-[250px] flex-shrink-0">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/125addc3-239e-41cd-8687-8f6d8ec79c00/public"
            alt=""
            className="object-cover"
          />
        </Carousel.Slide>
      </Carousel>
    </div>
  );
};
