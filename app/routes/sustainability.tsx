import {Link, MetaFunction} from "@remix-run/react";
import clsx from "clsx";
import {championsSpotlight, Icons} from "~/static";

export const meta: MetaFunction = () => {
  return [{title: "Sustainability"}];
};

export default function Sustainability() {
  return (
    <>
      <main className="bg-water-splash relative flex min-h-screen items-center bg-cover bg-top bg-no-repeat pt-[var(--header-height)] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div
          className="container isolate text-center"
          data-aos="fade-down"
        >
          <h1 className="wae-h2 font-base mb-10 font-secondary uppercase xl:text-[70px]">
            WAE's Solutions Driving Change!
          </h1>

          <p className="wae-h6 mb-10 uppercase 2xl:text-3xl">
            How the BFSI Sector is Leading the Green Revolution
          </p>
        </div>
      </main>

      <section>
        <div className="container">
          <div className="wae-pb-lg wae-pt-lg container flex items-center 2xl:min-h-screen">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-[140px]">
              <div data-aos="fade-right">
                <h3 className="wae-h4 mb-10 font-secondary">
                  Transforming Hydration in the BFSI Sector
                </h3>
                <div className="flex items-center gap-4">
                  <div className="prefix-dot"></div>
                  <p className="uppercase">
                    Explore how BFSI leaders are not just crunching numbers but
                    making every drop count in their journey towards a
                    sustainable future.
                  </p>
                </div>
              </div>
              <div
                data-aos="fade-left"
                className="flex-shrink-0 lg:max-w-[400px]"
              >
                <p className="wae-h6 uppercase">
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

      <section className="bg-leaf-closeup relative flex min-h-screen items-center bg-cover bg-top bg-no-repeat text-white">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black to-black/70"></div>
        <div className="container isolate">
          <h3 className="wae-h3 text-center font-black uppercase">
            Spotlight on BFSI Sustainability Champions
          </h3>
        </div>
      </section>

      <div>
        {championsSpotlight.map((champion, idx) => (
          <section
            className={
              "wae-pt-lg wae-pb-lg group text-white odd:bg-black odd:text-white even:bg-white even:text-black"
            }
          >
            <div className="container">
              <div className="wae-mb-lg flex flex-col items-start gap-8 lg:flex-row lg:gap-14">
                <div data-aos="fade-right">
                  <h3 className="wae-h3 mb-8 font-secondary uppercase !leading-normal lg:mb-10 lg:text-[44px]">
                    {champion.title}
                  </h3>

                  <div className="flex items-center gap-4">
                    <div className="prefix-dot mr-0"></div>
                    <p className="text-base uppercase">{champion.subtitle}</p>
                  </div>
                </div>
                <img
                  src={champion.image}
                  alt={champion.title}
                  width={600}
                  height={384}
                  className="block shrink-0 object-cover max-xl:mx-auto"
                  data-aos="fade-in"
                />
              </div>

              <div
                className={clsx("mb-8 grid gap-y-12 lg:mb-[60px]", {
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
                    <h2 className="mb-5 font-secondary text-4xl uppercase lg:text-[50px]">
                      {achievment.title}
                    </h2>
                    <p className="uppercase">{achievment.subtitle}</p>
                  </div>
                ))}
              </div>

              <p
                className="text-center text-base uppercase"
                data-aos="fade-in"
              >
                {champion.statement}
              </p>

              <div
                className="flex justify-center"
                data-aos="fade-in"
                data-aos-delay="100"
              >
                <Link
                  to={champion.link}
                  className={
                    "wae-btn mt-10 px-4 group-odd:border-white group-even:border-black lg:mt-20"
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
          <div className="mb-10 flex items-center justify-center py-20 text-center text-black lg:py-40">
            <div
              className="mx-auto"
              data-aos="fade-down"
            >
              <h6 className="uppercase">Why WAE's Green Machines Matter</h6>

              <h5 className="wae-h5-lg mb-12 mt-12 font-secondary leading-tight lg:mb-[100px]">
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

          <h5
            data-aos="fade-right"
            className="wae-h5-lg mb-8 !leading-normal lg:mb-10"
          >
            The Value Proposition:
          </h5>
          <div className="wae-mb-lg wae-gap-lg flex flex-col items-start lg:flex-row">
            <div data-aos="fade-right">
              <div className="mb-8 flex items-start gap-4 lg:mb-[60px]">
                <div className="prefix-dot mr-0 mt-2"></div>
                <div>
                  <h6 className="wae-h6-lg mb-5 font-secondary uppercase">
                    Cost Efficiency:
                  </h6>
                  <p className="text-base uppercase">
                    With WAE drinking water stations, organizations can cut
                    water bills by 70%, save precious office space, and
                    eliminate the need for bottled water logistics.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="prefix-dot mr-0 mt-2"></div>
                <div>
                  <h6 className="wae-h6-lg mb-5 font-secondary uppercase">
                    Health Benefits:
                  </h6>
                  <p className="text-base uppercase">
                    Unlike bottled water, which can leach harmful microplastics
                    and chemicals like BPA, WAE's purified water is free from
                    toxins, offering safe hydration without the environmental
                    downsides.
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/images/covers/beaker-on-table.jpg"
              alt="Beaker on table"
              width={500}
              height={384}
              className="block shrink-0 object-cover max-xl:mx-auto"
              data-aos="fade-in"
            />
          </div>
        </div>
      </section>

      <section className="bg-earth-in-hands relative flex items-center justify-center bg-black bg-cover bg-no-repeat pt-20 text-center lg:min-h-screen">
        <div className="absolute inset-0 h-full w-full bg-black/50"></div>
        <div className="container isolate">
          <div
            className="mx-auto text-white lg:mt-40"
            data-aos="fade-uo"
          >
            <p className="wae-h6-lg font-light uppercase">
              <span className="prefix-dot mr-5"></span>
              Join the Movement Towards a Greener Future
            </p>

            <h5 className="wae-h5-lg mt-10 font-secondary uppercase leading-tight">
              The BFSI sector is showing that sustainable choices have a ripple
              effect. By embracing WAE's innovative hydration solutions, these
              organizations are not just quenching thirst—they're feeding a
              movement toward a greener future.
            </h5>
          </div>
        </div>
      </section>

      <section className="relative flex items-center border-b border-white bg-black bg-cover bg-top bg-no-repeat py-20 text-center text-white lg:min-h-screen">
        <div className="container">
          <div
            className="mx-auto max-w-[860px]"
            data-aos="fade-up"
          >
            <h3 className="wae-h3-lg mb-6 text-center font-secondary uppercase lg:mb-10 lg:text-[50px]">
              Ready to make a change?
            </h3>

            <p className="text-lg uppercase xl:text-2xl">
              Partner with WAE and start making every drop count for your
              business and the planet.
            </p>

            <Link
              to={"/"}
              className="wae-btn wae-btn-md mt-10 border-white px-6 lg:mt-[100px]"
            >
              Contact Us {Icons.ChevronRight}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
