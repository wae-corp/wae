import {MetaFunction} from "@remix-run/react";
import {ProjectSlider} from "~/components";
import {SecondaryProducts} from "~/static";

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
      <main className="relative flex min-h-screen items-center justify-center bg-black bg-washing-hands bg-cover bg-no-repeat py-8 pt-[var(--header-height)] text-center">
        <div className="absolute inset-0 h-full w-full bg-black/60"></div>
        <div className="container isolate">
          <div className="mx-auto mt-40 max-w-[1080px] text-white">
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
        </div>
      </main>

      <section className="wae-pt-lg wae-pb-lg bg-white">
        <div className="container">
          <div className="lg:wae-gap-lg mb-16 flex max-w-[1080px] flex-col justify-between gap-6 sm:flex-row lg:mb-36">
            <div className="flex-shrink-0">
              <label className="mb-5 block text-sm uppercase">
                Mission & Vision
              </label>

              <p className="uppercase">
                <span className="prefix-dot"></span>You discover wae vision
              </p>
            </div>
            <div className="max-w-[650px]">
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
            <div className="text-center">
              <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                1,012,120.25
              </h2>
              <p className="uppercase">Tonnes CO2 Emissions Saved</p>
            </div>
            <div className="text-center">
              <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                12,185.43
              </h2>
              <p className="uppercase">million gallons Water Saved</p>
            </div>
            <div className="text-center">
              <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                22,253.65
              </h2>
              <p className="uppercase">Tonnes Plastic Removed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center justify-center bg-black bg-washing-hands bg-cover bg-no-repeat py-8 text-center text-black">
        <div className="absolute inset-0 h-full w-full bg-black/60"></div>
        <div className="container isolate">
          <div className="mx-auto max-w-[1080px] text-white 2xl:mt-40">
            <h2 className="mb-8 font-extrabold uppercase">
              Journey and Transformation
            </h2>

            <p className="wae-h6-lg mt-10 font-secondary uppercase leading-tight">
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
      </section>

      <section className="bg-black py-36 text-white">
        <div className="container">
          <div className="sm:wae-gap-lg mb-36 flex flex-col justify-center gap-6 sm:flex-row">
            <div className="flex-shrink-0">
              <h4 className="wae-h4 font-secondary uppercase">Brand Purpose</h4>
            </div>

            <p className="wae-h6">
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
          <div>
            <h3 className="wae-h4 mb-10 font-secondary">
              Journey and Transformation
            </h3>
            <p className="mb-10 uppercase lg:ml-28 lg:max-w-[80%]">
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
          <div className="max-w-[400px] flex-shrink-0">
            <img
              src="/images/covers/bowl-with-chopsticks.jpg"
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
            <div className="sm:even:-translate-y-20">
              <img
                src="/images/icons/magnifying-glass-with-gear.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                Research-Driven
              </h5>

              <p className="mb-6">
                We prioritize research and technology over market trends.
              </p>
            </div>

            <div className="sm:even:-translate-y-20">
              <img
                src="/images/icons/person-with-leaves.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                Environmental and Human Service
              </h5>

              <p className="mb-6">
                Our top priority is serving the planet and humanity.
              </p>
            </div>

            <div className="sm:even:-translate-y-20">
              <img
                src="/images/icons/hand-with-checkmark.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                Responsibility
              </h5>

              <p className="mb-6">
                We hold ourselves accountable to our employees, customers,
                associates, and society, upholding the highest standards in all
                engagements
              </p>
            </div>

            <div className="sm:even:-translate-y-20">
              <img
                src="/images/icons/employee-value.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                Employee Value
              </h5>

              <p className="mb-6">
                Our future hinges on our employees' knowledge, attitude, skills,
                teamwork, and integrity, which we hold in the highest esteem.
              </p>
            </div>

            <div className="sm:even:-translate-y-20">
              <img
                src="/images/icons/hand-with-checkmark.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                Participative Management
              </h5>

              <p className="mb-6">
                We champion participative management, productivity, and
                profit-sharing.
              </p>
            </div>

            <div className="sm:even:-translate-y-20">
              <img
                src="/images/icons/handshake-verified.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="wae-h6-lg mb-3 font-extrabold uppercase sm:mb-6">
                Quality Commitment
              </h5>

              <p className="mb-6">
                We commit to quality in our products, services, relationships,
                communications, and promises
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg bg-black text-center text-white">
        <div className="container">
          <div className="wae-mb-lg mx-auto max-w-5xl text-center">
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
          projectList={SecondaryProducts}
          arrows={true}
        />
      </section>
    </>
  );
}
