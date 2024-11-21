import {Carousel} from "@mantine/carousel";
import {Icons} from "~/static";

export const TestimonialSlider = () => {
  const reviewsList = [
    {
      id: 1,
      companyLogo: "/images/logos/artvenue.svg",
      author: "Arthur Morgan",
      companyName: "Zoomerr",
      role: "Seller",
      message:
        "Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.",
    },
    {
      id: 2,
      companyLogo: "/images/logos/zoomerr.svg",
      author: "John Marston",
      companyName: "Zoomerr",
      role: "Seller",
      message:
        "Imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque. Nisl vitae viverra dignissim nibh. Nibh",
    },
    {
      id: 1,
      companyLogo: "/images/logos/artvenue.svg",
      author: "Arthur Morgan",
      companyName: "Zoomerr",
      role: "Seller",
      message:
        "Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.",
    },
    {
      id: 2,
      companyLogo: "/images/logos/zoomerr.svg",
      author: "John Marston",
      companyName: "Zoomerr",
      role: "Seller",
      message:
        "Imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque. Nisl vitae viverra dignissim nibh. Nibh",
    },
    {
      id: 1,
      companyLogo: "/images/logos/artvenue.svg",
      author: "Arthur Morgan",
      companyName: "Zoomerr",
      role: "Seller",
      message:
        "Nisl vitae viverra dignissim nibh. Nibh imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque.",
    },
    {
      id: 2,
      companyLogo: "/images/logos/zoomerr.svg",
      author: "John Marston",
      companyName: "Zoomerr",
      role: "Seller",
      message:
        "Imperdiet integer vitae consequat adipiscing pellentesque. Sed amet tincidunt morbi non sed donec mollis pharetra neque. Nisl vitae viverra dignissim nibh. Nibh",
    },
  ];

  return (
    <div>
      <Carousel
        align={"start"}
        slideGap={16}
        loop={true}
        withControls
        height="100%"
        classNames={{
          slide: "basis-full md:basis-[50%]",
          viewport: "mx-10",
          control: "text-white border-0 bg-transparent",
        }}
        controlsOffset={0}
        nextControlIcon={Icons.ChevronRight}
        previousControlIcon={Icons.ChevronLeft}
      >
        {reviewsList.map((review, idx) => (
          <Carousel.Slide key={idx}>
            <div className="h-full border border-[#DDE1E680] bg-white/10 p-5 text-center md:p-6">
              <img
                src={review.companyLogo}
                alt={review.companyName}
                width={133}
                height={64}
                className="mx-auto mb-4 object-contain xl:mb-6"
              />

              <p className="mb-[14px] text-sm md:mb-[30px] md:text-lg">
                {review.message}
              </p>

              <div className="text-base md:text-2xl">{review.author}</div>
              <div className="text-sm md:text-lg">{review.role}</div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};
