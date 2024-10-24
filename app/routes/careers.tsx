import {Carousel} from "@mantine/carousel";
import {Link, MetaFunction} from "@remix-run/react";
import {careers} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Careers",
    },
  ];
};

export default function Careers() {
  const images = [
    "career-1.png",
    "career-2.png",
    "career-3.png",
    "career-4.png",
  ];
  return (
    <>
      <main className="flex flex-col items-center bg-black bg-hands-pointing-on-table bg-cover bg-no-repeat pt-[var(--header-height)] text-white">
        <div className="container flex max-w-[1100px] items-center pb-10 xl:min-h-[550px]">
          <div
            className="text-center"
            data-aos="fade-down"
          >
            <h1 className="wae-h6 mb-10 font-extrabold uppercase">
              Why WAE (Make a Difference)
            </h1>

            <p className="wae-h6 font-secondary uppercase">
              Imagine a workplace where your creativity meets innovation, where
              your ideas drive change, and where every day is an opportunity to
              make a real difference. Welcome to WAE. We're not just about
              business; we're about building a better future. Join us and be a
              part of a team that's passionate about sustainability, excellence,
              and creating positive impacts in the world.
            </p>
          </div>
        </div>
      </main>

      <div className="wae-pb-lg wae-pt-lg flex items-center bg-black text-white">
        <div className="container">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div
            // data-aos="fade-right"
            >
              <h3 className="wae-h4 mb-10 font-secondary">Life at WAE</h3>
              <p className="mb-10 uppercase lg:ml-28 lg:max-w-[80%]">
                Life at WAE is vibrant and inspiring. Our culture is a tapestry
                of collaboration, inclusivity, and continuous learning. Here,
                your professional growth is as important as your personal
                well-being. Enjoy a work environment that fosters creativity,
                supports balance, and celebrates every success. At WAE, your
                journey is our story.
              </p>
            </div>
            <div
              // data-aos="fade-left"
              className="flex-shrink-0 lg:max-w-[400px] lg:pl-8"
            >
              <p className="wae-h6-lg uppercase">
                WAE is more than a job - it's a journey. We offer competitive
                benefits, a supportive and inclusive community, and countless
                opportunities for personal and professional growth. Join us and
                be part of a team that values your contributions and helps you
                reach your full potential. Let's create a brighter future
                together.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="wae-pt-md wae-pb-md bg-window-pattern bg-cover bg-no-repeat md:py-40">
        <Carousel
          align={"start"}
          slidesToScroll={1}
          loop={true}
          slideSize="25%"
          classNames={{
            slide: "mr-8",
            controls: "hidden",
          }}
        >
          {images.concat(images).map((image, idx) => (
            <Carousel.Slide
              key={idx}
              data-aos="fade-in"
              data-aos-delay={`${idx}00`}
            >
              <img
                src={`/images/cards/` + image}
                width={370}
                height={450}
                className="object-cover"
                alt={image}
              />
            </Carousel.Slide>
          ))}
        </Carousel>

        <section className="wae-mt-lg container max-w-[1080px]">
          <div
            className="mb-16 max-w-[670px] md:mb-36"
            data-aos="fade-in"
          >
            <h4 className="wae-h4 mb-5 font-secondary uppercase">
              Explore Current Openings
            </h4>

            <p className="flex items-center">
              <span className="prefix-dot"></span>
              Whether you're looking for a full-time role, an apprenticeship, a
              short-term project, or an internship, WAE has a place for you.
              Discover your perfect fit and join a team that's shaping the
              future.
            </p>
          </div>

          <div className="wae-gap-lg flex flex-col">
            {careers.map((career, idx) => {
              return (
                <div
                  key={career.id}
                  className="group flex flex-col gap-10 md:flex-row md:even:flex-row-reverse lg:gap-[110px]"
                >
                  <div
                    className="flex-shrink-0 md:basis-1/2"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset="200"
                    data-aos-duration="500"
                  >
                    <img
                      src={career.image}
                      alt="Career Poster"
                      className="aspect-square object-cover group-even:ml-auto max-sm:w-full"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div
                    className="md:basis-1/2"
                    // data-aos="fade-down"
                    // data-aos-delay="100"
                  >
                    <div className="mb-14 flex flex-col gap-8 lg:gap-10">
                      <h5 className="wae-h6-lg font-extrabold uppercase">
                        {career.type}
                      </h5>

                      <p className="fw-light text-sm uppercase">
                        {career.details}
                      </p>
                    </div>
                    <Link
                      to={career.link}
                      className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
                    >
                      Explore
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}
