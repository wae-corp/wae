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
  return (
    <>
      <main className="flex flex-col items-center bg-black pt-[var(--header-height)] text-white">
        <div className="container flex max-w-[1100px] items-end pb-10 xl:min-h-[550px]">
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

        <div className="wae-pb-lg wae-pt-lg container flex items-center 2xl:min-h-screen">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div data-aos="fade-right">
              <h3 className="wae-h4 mb-10 font-secondary">Life at WAE</h3>
              <p className="mb-10 uppercase lg:ml-28 lg:max-w-[80%]">
                Life at WAE is vibrant and inspiring. Our culture is a tapestry
                of collaboration, inclusivity, and continuous learning. Here,
                your professional growth is as important as your personal
                well-being. Enjoy a work environment that fosters creativity,
                supports balance, and celebrates every success. At WAE, your
                journey is our story.
              </p>
              <p className="uppercase">
                <span className="prefix-dot"></span> You discover Life at WAE
              </p>
            </div>
            <div
              data-aos="fade-left"
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
      </main>

      <section className="wae-pt-md wae-pb-md bg-window-pattern bg-cover bg-no-repeat md:py-40">
        <Carousel
          align={"start"}
          loop={true}
          classNames={{
            slide: "basis-[370px] mr-14",
            controls: "hidden",
          }}
        >
          {new Array(10).fill("").map((slide, idx) => {
            return (
              <Carousel.Slide
                key={idx}
                data-aos="fade-in"
                data-aos-delay={`${idx}00`}
              >
                <img
                  src={"/images/covers/bowl-with-chopsticks.jpg"}
                  width={370}
                  height={450}
                  className="object-cover"
                  alt=""
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>

        <div className="wae-mt-lg container">
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

          <div className="grid gap-12 md:grid-cols-2 md:gap-32">
            {careers.map((career, idx) => {
              return (
                <div
                  key={career.id}
                  className="md:even:!-translate-y-20"
                  data-aos="fade-down"
                  data-aos-delay={`${idx}00`}
                >
                  <h5 className="wae-h6-lg mb-6 font-extrabold uppercase">
                    {career.type}
                  </h5>

                  <p className="mb-6">{career.details}</p>

                  <Link
                    to={career.link}
                    className="wae-btn wae-btn-md min-w-[200px] border-black"
                  >
                    Explore
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
