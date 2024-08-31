import {MetaFunction} from "@remix-run/react";
import {ProjectSlider} from "~/components";
import {ProjectList} from "~/static";

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
      <main className="bg-washing-hands flex min-h-screen items-center justify-center bg-black bg-cover bg-no-repeat py-8 text-center text-black">
        <div className="container">
          <div className="mx-auto mt-40 max-w-[1080px] text-white">
            <h2 className="mt-10 font-secondary text-2xl uppercase leading-tight">
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

      <section className="bg-white py-36">
        <div className="container">
          <div className="mb-36 flex justify-center gap-[180px]">
            <div className="flex-shrink-0">
              <label className="mb-5 block text-sm uppercase">
                Mission & Vision
              </label>

              <p className="uppercase">
                <span className="prefix-dot"></span>You discover wae vision
              </p>
            </div>
            <div>
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
          <div className="grid grid-cols-3">
            <div className="text-center">
              <h2 className="mb-5 font-secondary text-[50px] uppercase">
                1,012,120.25
              </h2>
              <p className="uppercase">Tonnes CO2 Emissions Saved</p>
            </div>
            <div className="text-center">
              <h2 className="mb-5 font-secondary text-[50px] uppercase">
                12,185.43
              </h2>
              <p className="uppercase">million gallons Water Saved</p>
            </div>
            <div className="text-center">
              <h2 className="mb-5 font-secondary text-[50px] uppercase">
                22,253.65
              </h2>
              <p className="uppercase">Tonnes Plastic Removed</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-washing-hands flex min-h-screen items-center justify-center bg-black bg-cover bg-no-repeat py-8 text-center text-black">
        <div className="container">
          <div className="mx-auto mt-40 max-w-[1080px] text-white">
            <h2 className="mb-8 font-extrabold uppercase">
              Journey and Transformation
            </h2>

            <p className="mt-10 font-secondary text-2xl uppercase leading-tight">
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
          <div className="mb-36 flex justify-center gap-[180px]">
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

      <section className="container py-[180px]">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="flex flex-col justify-start md:col-span-8">
            <h3 className="wae-h4 mb-10 font-secondary">
              Journey and Transformation
            </h3>
            <p className="mb-10 max-w-[80%] uppercase md:ml-28">
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
          <div className="md:col-span-4">
            <img
              src="/images/covers/bowl-with-chopsticks.jpg"
              alt="bowl-with-chopsticks"
              width={370}
              height={460}
              className="ml-auto object-cover"
            />
          </div>
        </div>

        <div className="container mt-[180px]">
          <div className="mb-36 max-w-[670px]">
            <h4 className="wae-h4 mb-5 font-secondary uppercase">
              Core Values and Beliefs
            </h4>

            <p className="flex items-center">
              <span className="prefix-dot"></span>
              WAE thrives on a foundation of progressive values and beliefs,
              reflected in every interaction:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-32">
            <div className="even:-translate-y-20">
              <img
                src="/images/icons/magnifying-glass-with-gear.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="mb-6 text-2xl font-extrabold uppercase">
                Research-Driven
              </h5>

              <p className="mb-6">
                We prioritize research and technology over market trends.
              </p>
            </div>

            <div className="even:-translate-y-20">
              <img
                src="/images/icons/person-with-leaves.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="mb-6 text-2xl font-extrabold uppercase">
                Environmental and Human Service
              </h5>

              <p className="mb-6">
                Our top priority is serving the planet and humanity.
              </p>
            </div>

            <div className="even:-translate-y-20">
              <img
                src="/images/icons/hand-with-checkmark.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="mb-6 text-2xl font-extrabold uppercase">
                Responsibility
              </h5>

              <p className="mb-6">
                We hold ourselves accountable to our employees, customers,
                associates, and society, upholding the highest standards in all
                engagements
              </p>
            </div>

            <div className="even:-translate-y-20">
              <img
                src="/images/icons/employee-value.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="mb-6 text-2xl font-extrabold uppercase">
                Employee Value
              </h5>

              <p className="mb-6">
                Our future hinges on our employees' knowledge, attitude, skills,
                teamwork, and integrity, which we hold in the highest esteem.
              </p>
            </div>

            <div className="even:-translate-y-20">
              <img
                src="/images/icons/hand-with-checkmark.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="mb-6 text-2xl font-extrabold uppercase">
                Participative Management
              </h5>

              <p className="mb-6">
                We champion participative management, productivity, and
                profit-sharing.
              </p>
            </div>

            <div className="even:-translate-y-20">
              <img
                src="/images/icons/handshake-verified.svg"
                alt=""
                width={70}
                height={70}
                className="mb-6 object-contain"
              />
              <h5 className="mb-6 text-2xl font-extrabold uppercase">
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

      <section className="flex flex-col items-center justify-center bg-black py-[180px] text-center text-white">
        <div className="container">
          <div className="mx-auto mb-[180px] max-w-5xl">
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mb-[100px] mt-10 font-secondary leading-tight">
              Projects created by our <br /> customers to draw inspiration from
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              You Discover Demo Kitchens
            </p>
          </div>
        </div>
        <ProjectSlider
          projectList={ProjectList}
          arrows={true}
        />
      </section>
    </>
  );
}
