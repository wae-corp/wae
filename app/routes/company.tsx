import {MetaFunction} from "@remix-run/react";
import {ProjectSlider} from "~/components";
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
      <main className="relative flex min-h-screen items-center justify-center bg-company-banner bg-cover bg-no-repeat py-8 pt-[var(--header-height)] text-center">
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

      <section className="wae-pt-lg wae-pb-lg bg-white">
        <div className="container">
          <div className="lg:wae-gap-lg mx-auto mb-16 flex max-w-[1080px] flex-col justify-between gap-6 sm:flex-row lg:mb-36">
            <div
              className="flex-shrink-0"
              // data-aos="fade-right"
            >
              <label className="mb-5 block text-sm uppercase">
                Mission & Vision
              </label>

              <div className="flex items-center uppercase">
                <div className="prefix-dot"></div>
                <div>
                  The WAE's Vision <br /> Towards Sustainable <br /> Development
                </div>
              </div>
            </div>
            <div
              className="max-w-[650px]"
              // data-aos="fade-left"
            >
              <p className="wae-h6">
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
          <div className="grid gap-y-12 sm:grid-cols-3">
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                <Counter
                  end={1012120.25}
                  duration={1}
                  separator=","
                  decimals={2}
                  decimal="."
                />
              </h2>
              <p className="uppercase">Tonnes CO2 Emissions Saved</p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                <Counter
                  end={12185.43}
                  duration={1}
                  separator=","
                  decimals={2}
                  decimal="."
                />
              </h2>
              <p className="uppercase">million gallons Water Saved</p>
            </div>
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                <Counter
                  end={22253.65}
                  duration={1}
                  separator=","
                  decimals={2}
                  decimal="."
                />
              </h2>
              <p className="uppercase">Tonnes Plastic Removed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-footprint relative flex min-h-[640px] items-end justify-center bg-cover bg-no-repeat py-24 text-center text-black">
        <div
          className="container isolate"
          // data-aos="fade-down"
        >
          <div className="mx-auto max-w-[1080px] text-white 2xl:mt-40">
            <h2 className="mb-8 font-extrabold uppercase">
              Journey and Transformation
            </h2>

            <p className="wae-h6-lg mt-10 font-secondary uppercase !leading-normal">
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

      <section className="bg-black py-36 text-white">
        <div className="container">
          <div
            className="flex flex-col justify-center gap-6 sm:flex-row lg:justify-between"
            // data-aos="fade-down"
          >
            <div className="flex-shrink-0">
              <h4 className="wae-h4 font-secondary uppercase">Brand Purpose</h4>
            </div>

            <p className="wae-h6 max-w-[600px]">
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

      <section className="wae-pt-lg wae-pb-lg container">
        <div className="flex flex-col gap-8 sm:flex-row">
          <div
          // data-aos="fade-right"
          >
            <h3 className="wae-h4 mb-10 font-secondary">
              Journey and Transformation
            </h3>
            <p
              className="mb-10 uppercase lg:ml-28 lg:max-w-[80%]"
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

            <p className="uppercase">
              <span className="prefix-dot"></span> You discover Doimo Kitchens
            </p>
          </div>
          <div
            className="max-w-[400px] flex-shrink-0"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <img
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b122394b-da4c-4757-c125-9d9b77503900/public"
              alt="bowl-with-chopsticks"
              width={370}
              height={460}
              className="ml-auto object-cover"
            />
          </div>
        </div>

        <div className="wae-mt-lg container">
          <div className="mb-28 max-w-[670px] lg:mb-36">
            <h4 className="wae-h4 mb-5 font-secondary uppercase">
              Core Values and Beliefs
            </h4>

            <p className="flex items-center">
              <span className="prefix-dot"></span>
              WAE thrives on a foundation of progressive values and beliefs,
              reflected in every interaction:
            </p>
          </div>

          <div className="grid gap-16 sm:grid-cols-2 lg:gap-32">
            {coreValues.map((v, idx) => {
              return (
                <div
                  key={v.id}
                  className="sm:even:!-translate-y-20"
                  data-aos="fade-down"
                  data-aos-delay={`${idx}00`}
                >
                  <img
                    src={v.image}
                    alt=""
                    width={70}
                    height={70}
                    className="mb-6 object-contain"
                  />
                  <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                    {v.value}
                  </h5>

                  <p className="mb-6">{v.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg bg-black text-center text-white">
        <div className="container">
          <div
            className="wae-mb-lg mx-auto max-w-5xl text-center"
            data-aos="fade-down"
          >
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mb-10 mt-10 font-secondary leading-tight lg:mb-[100px]">
              Projects created by our <br /> customers to draw inspiration from
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              You Discover Demo Kitchens
            </p>
          </div>
        </div>
        <ProjectSlider
          productList={SecondaryProducts}
          arrows={true}
        />
      </section>
    </>
  );
}
