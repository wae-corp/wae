import {Carousel} from "@mantine/carousel";
import {Link, MetaFunction} from "@remix-run/react";

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
        <div className="container flex min-h-[550px] max-w-[1100px] items-end">
          <div className="text-center">
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

        <div className="container flex min-h-screen items-center">
          <div className="flex gap-8">
            <div>
              <h3 className="wae-h4 mb-10 font-secondary">Life at WAE</h3>
              <p className="mb-10 max-w-[80%] uppercase md:ml-28">
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
            <div className="max-w-[400px] flex-shrink-0">
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

      <section className="bg-window-pattern bg-cover bg-no-repeat py-40">
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
              <Carousel.Slide key={idx}>
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
          <div className="mb-36 max-w-[670px]">
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

          <div className="grid grid-cols-2 gap-32">
            <div className="even:-translate-y-20">
              <h5 className="wae-h6-lg mb-6 font-extrabold uppercase">
                Apprenticeship
              </h5>

              <p className="mb-6">
                Step into the professional world with hands-on experience and
                expert mentorship. Ideal for those eager to learn and grow.
              </p>

              <Link
                to={"/careers/apprenticeship"}
                className="wae-btn wae-btn-md min-w-[200px] border-black"
              >
                Explore
              </Link>
            </div>

            <div className="even:-translate-y-20">
              <h5 className="wae-h6-lg mb-6 font-extrabold uppercase">
                Full-Time Positions
              </h5>

              <p className="mb-6">
                Dive into diverse roles that challenge and excite you. From
                engineering to marketing, we are on the lookout for passionate
                professionals ready to innovate.
              </p>

              <Link
                to={"/careers/full-time"}
                className="wae-btn wae-btn-md min-w-[200px] border-black"
              >
                Explore
              </Link>
            </div>

            <div className="even:-translate-y-20">
              <h5 className="wae-h6-lg mb-6 font-extrabold uppercase">
                Internship
              </h5>

              <p className="mb-6">
                Our internships offer more than just experience. They’re
                gateways to your future career, providing real-world skills and
                professional development.
              </p>

              <Link
                to={"/careers/internship"}
                className="wae-btn wae-btn-md min-w-[200px] border-black"
              >
                Explore
              </Link>
            </div>

            <div className="even:-translate-y-20">
              <h5 className="wae-h6-lg mb-6 font-extrabold uppercase">
                Short Term Projects
              </h5>

              <p className="mb-6">
                Engage in unique, high-impact projects. Perfect for specialists
                looking to contribute their expertise on a flexible basis.
              </p>

              <Link
                to={"/careers/short-term"}
                className="wae-btn wae-btn-md min-w-[200px] border-black"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
