import {MetaFunction} from "@remix-run/react";
import {CaseStudySlider, ProjectSlider} from "~/components";
import {Counter} from "~/components/Counter";
import {coreValues, SecondaryProducts} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Company",
    },
  ];
};

export default function Company() {
  return (
    <>
      <main className="relative flex h-screen items-center justify-center bg-company-banner bg-cover bg-center bg-no-repeat py-8 pt-[var(--header-height)] text-center md:h-[640px]">
        {/* <div className="container isolate">
          <div
            className="mx-auto mt-40 max-w-[1080px] text-white"
            data-aos="fade-down"
          >
            <h2 className="wae-h6-lg mt-10 font-secondary uppercase leading-tight">
              At WAE, we're driven by an audacious and inspiring mission: to
              become the world's most admired environmental services
              corporation, leaving an indelible mark on the quality of life. We
              innovate with purpose, crafting products and services that tackle
              one of today's most pressing challenges - water sustainability.
              Grounded in scientific rigor and research excellence, we turn
              discoveries into eco-friendly technologies and solutions, ensuring
              efficiency and sustainability for all. Our ethical commitment to
              sustainable development is unwavering.
            </h2>
          </div>
        </div> */}
      </main>

      {/* <section className="md:[120px] relative flex flex-col items-center justify-center bg-black py-20 md:py-[120px] xl:py-[180px]">
        <div className="container flex flex-col xl:flex-row xl:gap-[140px]">
          <div
            className="mb-[40px] flex flex-col gap-x-10 text-left text-white"
            // data-aos="fade-right"
          >
            <h2 className="mb-10 font-secondary text-2xl md:text-[32px] md:leading-normal xl:mb-[60px] xl:text-4xl">
              Life at WAE
            </h2>

            <p className="text-sm uppercase md:pl-20 xl:text-base">
              Life at WAE is vibrant and inspiring. Our culture is a tapestry of
              collaboration, inclusivity, and continuous learning. Here, your
              professional growth is as important as your personal well-being.
              Enjoy a work environment that fosters creativity, supports
              balance, and celebrates every success. At WAE, your journey is our
              story.
            </p>
          </div>

          <p
            className="text-left text-base font-light uppercase leading-relaxed text-white md:text-2xl xl:max-w-[400px]"
            // data-aos="fade-left"
          >
            WAE is more than a job – it’s a journey. We offer competitive
            benefits, a supportive and inclusive community, and countless
            opportunities for personal and professional growth. Join us and be
            part of a team that values your contributions and helps you reach
            your full potential. Let’s create a brighter future together.
          </p>
        </div>
      </section> */}

      <section className="wae-pt-lg wae-pb-lg bg-white max-sm:pb-0">
        <div className="container">
          <div className="mx-auto flex flex-col justify-between gap-12 md:mb-[60px] md:gap-10 lg:mb-36 xl:flex-row">
            <div
              className="flex-shrink-0"
              // data-aos="fade-right"
            >
              <label className="mb-5 block text-xs uppercase md:text-sm">
                Mission & Vision
              </label>

              <div className="flex items-center text-sm uppercase">
                <div className="prefix-dot"></div>
                The WAE's Vision Towards Sustainable Development
              </div>
            </div>
            <div
              className="max-w-[650px] pl-20 text-sm md:pl-10 md:text-xl"
              // data-aos="fade-left"
            >
              <p>
                At WAE, we're driven by an audacious and inspiring mission: to
                become the world's most admired environmental services
                corporation, leaving an indelible mark on the quality of life.
                We innovate with purpose, crafting products and services that
                tackle one of today's most pressing challenges - water
                sustainability. Grounded in scientific rigor and research
                excellence, we turn discoveries into eco-friendly technologies
                and solutions, ensuring efficiency and sustainability for all.
                Our ethical commitment to sustainable development is unwavering.
              </p>
            </div>
          </div>

          <div className="mb:mt-0 mt-20 flex flex-col flex-wrap justify-center gap-[60px] bg-[#f1f1f1] py-20 max-sm:items-center md:flex-nowrap md:gap-10 md:bg-transparent md:pb-0 md:pt-0 lg:flex-row xl:justify-between">
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-secondary text-4xl font-semibold uppercase md:text-[40px] lg:text-[50px]">
                <Counter
                  end={1012120.25}
                  duration={1}
                  separator=","
                  decimals={2}
                  decimal="."
                />
              </h2>
              <p className="uppercase md:text-sm xl:text-base">
                Tonnes CO2 Emissions Saved
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-secondary text-4xl font-semibold uppercase md:text-[40px] lg:text-[50px]">
                {" "}
                <Counter
                  end={12185.43}
                  duration={1}
                  separator=","
                  decimals={2}
                  decimal="."
                />
              </h2>
              <p className="uppercase md:text-sm xl:text-base">
                million gallons Water Saved
              </p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-secondary text-4xl font-semibold uppercase md:text-[40px] lg:text-[50px]">
                <Counter
                  end={22253.65}
                  duration={1}
                  separator=","
                  decimals={2}
                  decimal="."
                />
              </h2>
              <p className="uppercase md:text-sm xl:text-base">
                Tonnes Plastic Removed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[640px] items-end justify-center bg-footprint bg-cover bg-center bg-no-repeat pb-20 text-center text-black md:py-[120px] md:pb-0 xl:pb-[100px]">
        <div
          className="container isolate z-[1]"
          // data-aos="fade-down"
        >
          <div className="mx-auto max-w-[1080px] text-white 2xl:mt-40">
            <h2 className="mb-6 text-sm font-extrabold uppercase md:text-xl xl:mb-9">
              Journey and Transformation
            </h2>

            <p className="font-secondary text-base uppercase xl:text-2xl">
              Our journey has been a rewarding one, contributing to a
              sustainable planet where everyone can thrive. Looking ahead, our
              transformation will be guided by our capabilities, strategic
              vision, and commitment to creating enduring value for all
              stakeholders. We invite ongoing support as we embrace new
              opportunities and challenges, dedicated to making a positive
              impact on the environment and society.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-b from-transparent to-black"></div>
      </section>

      <section className="bg-black py-20 text-white md:py-[120px] xl:py-36">
        <div className="container">
          <div
            className="flex flex-col justify-center gap-6 lg:justify-between xl:flex-row"
            // data-aos="fade-down"
          >
            <div className="mb-12 flex-shrink-0 md:mb-[60px]">
              <h4 className="mb-10 font-secondary text-2xl uppercase md:mb-8 xl:text-4xl">
                Brand Purpose
              </h4>

              <div className="flex items-center text-sm uppercase xl:text-base">
                <div className="prefix-dot"></div>
                Brand WAE
              </div>
            </div>

            <p className="max-w-[600px] pl-20 text-sm md:pl-0 md:text-base lg:text-xl">
              Our purpose is to create meaningful and lasting impact. We develop
              products and solutions that protect our environment and elevate
              human life, all while preserving the future for generations to
              come. Leadership in our field isn't about size; it's about
              excellence in green technologies, consumer value, customer
              service, employee talent, and steady growth. We strive to
              harmonize social progress, employee satisfaction, unparalleled
              customer service, and economic advancement in pursuit of our
              mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px] xl:py-[180px]">
        <div className="container">
          <div className="mb-20 flex flex-col gap-[40px] md:mb-[120px] md:gap-[60px] xl:mb-[180px] xl:flex-row xl:gap-[160px]">
            <div
            // data-aos="fade-right"
            >
              <h3 className="mb-[60px] font-secondary text-2xl md:text-[32px] md:leading-normal xl:mb-[60px] xl:text-4xl">
                Journey and Transformation
              </h3>
              <p
                className="mb-12 md:mb-[60px] md:pl-20 md:text-sm xl:mb-12 xl:text-base"
                // data-aos="fade-right"
              >
                Our journey has been a rewarding one, contributing to a
                sustainable planet where everyone can thrive. Looking ahead, our
                transformation will be guided by our capabilities, strategic
                vision, and commitment to creating enduring value for all
                stakeholders. We invite ongoing support as we embrace new
                opportunities and challenges, dedicated to making a positive
                impact on the environment and society.
              </p>

              <p className="text-sm uppercase xl:text-base">
                <span className="prefix-dot"></span> Our journey is focused
                towards a sustainable planet
              </p>
            </div>
            <div
              className="flex-shrink-0 xl:max-w-[400px]"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="200"
              data-aos-duration="500"
            >
              <div className="ml-auto w-[260px] overflow-hidden md:mr-auto md:w-[370px] xl:mr-0">
                <img
                  src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b122394b-da4c-4757-c125-9d9b77503900/public"
                  alt="gray-meshed-backdrop"
                  width={370}
                  height={460}
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-150"
                />
              </div>
            </div>
          </div>

          <div className="mb-20 max-w-[670px] md:mb-[120px] lg:mb-36">
            <h4 className="mb-5 font-secondary text-2xl uppercase xl:text-[30px]">
              Core Values and Beliefs
            </h4>

            <p className="flex items-center gap-4 text-sm uppercase xl:text-base">
              <span className="prefix-dot"></span>
              WAE thrives on a foundation of progressive values and beliefs,
              reflected in every interaction:
            </p>
          </div>

          <div className="grid gap-[42px] sm:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:gap-32">
            {coreValues.map((v, idx) => {
              return (
                <div
                  key={v.id}
                  className="sm:even:!-translate-y-20"
                  data-aos="fade-up"
                  data-aos-delay={`${idx}00`}
                >
                  <img
                    src={v.image}
                    alt=""
                    width={70}
                    height={70}
                    className="mb-6 aspect-square w-[42px] object-contain xl:mb-9 xl:w-[72px]"
                  />
                  <h5 className="mb-5 text-xl font-extrabold uppercase md:mb-6 xl:text-2xl">
                    {v.value}
                  </h5>

                  <p className="text-sm xl:text-base">{v.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-[120px] xl:py-[180px]">
        <div className="container mb-[60px] text-center xl:mb-[75px]">
          <div className="text-sm xl:text-base">SUSTAINABILITY</div>

          <h3 className="my-10 text-[32px] !leading-relaxed md:my-6 md:text-4xl xl:my-12 xl:text-[58px]">
            Projects created by our customers to draw inspiration from
          </h3>

          <div className="flex items-center justify-center text-sm xl:text-base">
            <span className="prefix-dot"></span>
            You discover SUSTAINABILITY
          </div>
        </div>
        <CaseStudySlider />
      </section>
    </>
  );
}
