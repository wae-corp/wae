import {Link, MetaFunction} from "@remix-run/react";
import clsx from "clsx";
import {Counter} from "~/components/Counter";
import {championsSpotlight, Icons} from "~/static";

export const meta: MetaFunction = () => {
  return [{title: "Sustainability Case Study"}];
};

export default function SustainabilityCaseStudy() {
  return (
    <>
      <main className="relative flex h-screen items-center bg-water-splash bg-cover bg-top bg-no-repeat pt-[var(--header-height)] text-white md:h-[640px] md:items-end md:pb-[120px] xl:items-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div
          className="container isolate text-center"
          data-aos="fade-down"
        >
          <h1 className="font-base mb-10 font-secondary text-[40px] uppercase leading-relaxed md:mb-5 md:text-[54px] md:leading-normal xl:mb-[32px] xl:text-[70px]">
            WAE's Solutions Driving Change!
          </h1>

          <p className="text-sm uppercase leading-relaxed md:text-base xl:text-xl">
            How the BFSI Sector is Leading the Green Revolution
          </p>
        </div>
      </main>

      <section className="py-20 md:pb-[120px] md:pt-[60px] xl:pt-[120px]">
        <div className="container">
          <div className="flex items-center">
            <div className="flex flex-col gap-10 md:gap-[60px] xl:flex-row xl:gap-[140px]">
              <div
              // data-aos="fade-right"
              >
                <h3 className="mb-5 font-secondary text-2xl xl:mb-12 xl:text-4xl">
                  Transforming Hydration in the BFSI Sector
                </h3>
                <div className="flex items-center gap-4 text-xs md:text-sm xl:text-base">
                  <div className="prefix-dot"></div>
                  <p className="uppercase">
                    Explore how BFSI leaders are not just crunching numbers but
                    making every drop count in their journey towards a
                    sustainable future.
                  </p>
                </div>
              </div>
              <div
                // data-aos="fade-left"
                className="flex-shrink-0 lg:max-w-[400px]"
              >
                <p className="text-sm uppercase md:text-base xl:text-xl">
                  In an era where every drop counts, the BFSI (Banking,
                  Financial Services, and Insurance) sector is taking bold steps
                  toward sustainability. Through partnerships with WAE, leading
                  financial institutions are replacing traditional bottled water
                  with state-of-the-art, point-of-use water purification systems
                  that not only ensure pure hydration but also dramatically
                  reduce environmental footprints. These initiatives are helping
                  to eliminate mountains of plastic waste, save millions of
                  liters of water, and cut carbon emissions, all while setting a
                  new standard for corporate responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-screen items-center bg-leaf-closeup bg-cover bg-top bg-no-repeat text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black to-black/70"></div>
        <div className="container isolate">
          <h3 className="text-center text-2xl font-black uppercase leading-relaxed md:text-[32px] md:leading-relaxed xl:text-[42px]">
            Spotlight on BFSI Sustainability Champions
          </h3>
        </div>
      </section>

      <div>
        {championsSpotlight.map((champion, idx) => (
          <section
            className={
              "group py-20 text-white odd:bg-black odd:text-white even:bg-white even:text-black md:py-[120px] xl:py-[180px]"
            }
            key={idx}
          >
            <div className="container">
              <div className="mb-20 flex flex-col items-start gap-10 md:mb-[60px] lg:flex-row lg:gap-14 xl:mb-[180px]">
                <div
                // data-aos="fade-right"
                >
                  <h3 className="mb-5 font-secondary text-2xl uppercase !leading-normal md:mb-4 md:text-[32px] xl:mb-10 xl:text-[44px]">
                    {champion.title}
                  </h3>

                  <div className="flex items-center gap-4">
                    <div className="prefix-dot mr-0"></div>
                    <p className="text-xs uppercase md:text-base">
                      {champion.subtitle}
                    </p>
                  </div>
                </div>
                <img
                  src={champion.image}
                  alt={champion.title}
                  width={600}
                  height={384}
                  className="block shrink-0 object-cover max-xl:mx-auto xl:w-[600px]"
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-duration="500"
                />
              </div>

              <div
                className={clsx("mb-10 grid gap-y-[60px] xl:mb-[60px]", {
                  "mx-auto max-w-[900px] sm:grid-cols-2":
                    champion.achievments?.length === 2,
                  "sm:grid-cols-3": champion.achievments?.length === 3,
                })}
              >
                {champion.achievments?.map((achievment, idx) => (
                  <div
                    key={achievment.id}
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-delay={`${idx}00`}
                  >
                    <h2 className="mb-5 font-secondary text-4xl font-semibold uppercase md:mb-3 md:text-[32px] xl:mb-5 xl:text-[50px] xl:font-medium">
                      <Counter
                        end={achievment.title}
                        duration={1}
                        separator=","
                      />{" "}
                      {achievment.unit}
                    </h2>
                    <p className="uppercase md:text-sm xl:text-base">
                      {achievment.subtitle}
                    </p>
                  </div>
                ))}
              </div>

              <p
                className="text-center text-base uppercase md:text-sm"
                data-aos="fade-in"
              >
                {champion.statement}
              </p>

              <div
                className="mt-10 flex justify-center md:mt-[60px] lg:mt-20 xl:mt-20"
                // data-aos="fade-in"
                data-aos-delay="100"
              >
                <Link
                  to={champion.link}
                  className={
                    "wae-btn px-4 py-3 group-odd:border-white group-even:border-black max-md:w-full"
                  }
                >
                  DOWNLOAD SUCCESS STORIES
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section>
        <div className="container">
          <div className="mb-20 flex items-center justify-center text-center text-black md:mb-[60px] xl:py-40 xl:pb-0">
            <div
              className="mx-auto"
              // data-aos="fade-down"
            >
              <h6 className="mb-10 text-xs uppercase md:mb-[60px] md:text-sm">
                Why WAE's Green Machines Matter
              </h6>
              ``
              <h5 className="font-secondary text-2xl uppercase leading-tight lg:mb-[100px]">
                WAE's hydration solutions are engineered to perfection, ensuring
                minimal water wastage and eliminating plastic waste. Our
                advanced ROVPD technology recovers 70% of water during the
                filtration process, and our machines guarantee 99.9999%
                microbe-free water. With a 100% recyclable construct, WAE's
                drinking water stations are more than just machines—they are
                investments in a healthier workforce and a cleaner planet.
              </h5>
            </div>
          </div>

          <div className="pb-10 md:pb-[120px]">
            <h5
              // data-aos="fade-right"
              className="mb-10 text-2xl !leading-normal xl:mb-[60px] xl:text-[32px]"
            >
              The Value Proposition:
            </h5>
            <div className="flex flex-col items-start md:flex-row md:gap-4 xl:gap-[150px]">
              <div className="mb-10 md:mb-0">
                <div className="mb-10 flex items-start gap-4 lg:mb-[60px]">
                  <div className="prefix-dot mr-0 mt-2"></div>
                  <div>
                    <h6 className="mb-3 font-secondary uppercase md:mb-5 md:text-xl xl:text-2xl">
                      Cost Efficiency:
                    </h6>
                    <p className="text-xs uppercase md:text-sm xl:text-base">
                      With WAE drinking water stations, organizations can cut
                      water bills by 70%, save precious office space, and
                      eliminate the need for bottled water logistics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="prefix-dot mr-0 mt-2"></div>
                  <div>
                    <h6 className="mb-3 font-secondary uppercase md:mb-5 md:text-xl xl:text-2xl">
                      Health Benefits:
                    </h6>
                    <p className="text-xs uppercase md:text-sm xl:text-base">
                      Unlike bottled water, which can leach harmful
                      microplastics and chemicals like BPA, WAE's purified water
                      is free from toxins, offering safe hydration without the
                      environmental downsides.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cc74550e-f3cc-43d5-f17c-c308b81ab800/public"
                alt="Beaker on table"
                width={500}
                height={384}
                className="block shrink-0 object-cover max-xl:mx-auto md:w-[300px] xl:w-[500px]"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex h-screen items-end justify-center bg-black bg-earth-in-hands bg-cover bg-no-repeat py-[30px] text-center md:h-[520px] md:pb-[60px] xl:h-[720px] xl:pb-[100px]">
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="container isolate">
          <div
            className="mx-auto text-white lg:mt-40"
            data-aos="fade-up"
          >
            <div className="mb-10 flex justify-center font-light uppercase xl:text-2xl">
              <span className="prefix-dot mr-5 mt-1"></span>
              <p>Join the Movement Towards a Greener Future</p>
            </div>

            <h5 className="font-secondary text-xl uppercase !leading-relaxed md:text-2xl xl:text-[32px]">
              The BFSI sector is showing that sustainable choices have a ripple
              effect. By embracing WAE’s innovative hydration solutions, these
              organizations are not just quenching thirst—they’re feeding a
              movement toward a greener future.
            </h5>
          </div>
        </div>
      </section>

      <section className="relative flex items-center border-b border-white bg-black bg-cover bg-top bg-no-repeat py-20 text-center text-white md:py-[120px] lg:min-h-screen">
        <div className="container">
          <div
            className="mx-auto max-w-[860px]"
            data-aos="fade-up"
          >
            <h3 className="mb-5 text-center font-secondary text-2xl uppercase lg:mb-10 lg:text-[50px]">
              Ready to make a change?
            </h3>

            <p className="text-base uppercase xl:text-2xl">
              Partner with WAE and start making every drop count for your
              business and the planet.
            </p>

            <Link
              to={"/contact"}
              className="wae-btn wae-btn-md mt-10 gap-3 border-white px-6 py-3 max-md:w-full xl:mt-[100px]"
            >
              Contact Us {Icons.ArrowRightLong}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
