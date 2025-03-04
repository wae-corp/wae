import {Link, MetaFunction} from "@remix-run/react";
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
            WAE is more than a job – it's a journey. We offer competitive
            benefits, a supportive and inclusive community, and countless
            opportunities for personal and professional growth. Join us and be
            part of a team that values your contributions and helps you reach
            your full potential. Let's create a brighter future together.
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

              <div className="flex items-center text-sm uppercase w-[200px] h-[72px]">
                <div className="prefix-dot"></div>
                THE WAE'S VISION TOWARDS SUSTAINABLE DEVELOPMENT
              </div>
            </div>
            <div
              className="max-w-[650px] pl-20 font-mont text-xl font-light leading-7 tracking-[0.01em] md:pl-10"
              // data-aos="fade-left"
            >
              <p>
                At WAE, our mission is clear. We revolutionize water 
                sustainability through cutting-edge innovation. We eliminate 
                the need for plastic water bottles, slash carbon emissions, and 
                engineer solutions that redefine efficiency. Sustainability is not 
                just a goal; it is our blueprint for the future. By merging 
                advanced technology with eco-conscious design, we tackle 
                global water challenges head-on, empowering businesses and 
                communities to make a measurable impact. Our vision is a 
                world where water conservation leads the charge toward a 
                cleaner, greener planet.
              </p>
            </div>
          </div>

          <div className="mb:mt-0 mt-20 flex flex-col flex-wrap justify-center gap-[60px] bg-[#f1f1f1] py-20 max-sm:items-center md:flex-nowrap md:gap-10 md:bg-transparent md:pb-0 md:pt-0 lg:flex-row xl:justify-between">
            <div
              className="text-center"
              data-aos="fade-up"
            >
              <h2 className="mb-5 font-poppins text-[50px] font-normal leading-[70px] tracking-[0.01em]">
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
              <h2 className="mb-5 font-poppins text-[50px] font-normal leading-[70px] tracking-[0.01em]">
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
              <h2 className="mb-5 font-poppins text-[50px] font-normal leading-[70px] tracking-[0.01em]">
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
              Our Journey: A vision in motion
            </h2>

            <p className="font-poppins text-[24px] font-normal leading-[36px] tracking-[0.01em] text-center uppercase">
              WAE WAS BUILT ON A SINGULAR VISION—CREATING A WORLD WHERE SUSTAINABILITY AND 
              PROGRESS GO HAND IN HAND. OUR JOURNEY HAS BEEN DEFINED BY RELENTLESS INNOVATION, 
              BOLD STRATEGIES, AND A DEEP-ROOTED COMMITMENT TO ENVIRONMENTAL AND SOCIAL 
              IMPACT. WITH EVERY MILESTONE, WE HAVE PUSHED THE BOUNDARIES OF WHAT IS POSSIBLE. 
              AS WE MOVE FORWARD, OUR PLEDGE REMAINS UNWAVERING. WE DRIVE TRANSFORMATIVE 
              CHANGE, EMBRACE NEW CHALLENGES, AND BUILD A FUTURE WHERE SUSTAINABILITY IS NOT 
              AN OPTION; IT IS THE STANDARD.
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

              <Link
                to="/brand"
                className="flex items-center text-sm uppercase xl:text-base"
              >
                <div className="prefix-dot"></div>
                The Essence of WAE
              </Link>
            </div>

            <p className="max-w-[600px] pl-20 font-mont text-[20px] font-light leading-[28px] md:pl-0">
              We exist to do more than provide water solutions—we create 
              lasting impact. Our mission is to engineer sustainability at 
              scale, pioneering green technologies that drive a circular 
              economy, minimize waste, and eliminate plastic dependency. 
              From reducing landfill contributions to enhancing water 
              efficiency, we craft solutions that benefit businesses, 
              communities, and the planet. The result is a future where 
              responsible water consumption leads the way to a healthier, 
              more sustainable world.
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
              <h3 className="mb-[60px] font-secondary text-2xl uppercase md:text-[32px] md:leading-normal xl:mb-[60px] xl:text-4xl">
                WHAT DRIVES US
              </h3>
              <p
                className="mb-[48px] h-[216px] w-[550px] font-mont text-base font-light leading-6 tracking-[0.01em] md:pl-20"
                // data-aos="fade-right"
              >
                Innovation fuels us. Sustainability defines us. At WAE, we 
                are relentless in our pursuit of pioneering solutions that 
                address the global water crisis. We do not just adapt to 
                change; we create it. Our drive stems from a 
                commitment to reducing environmental impact, 
                advancing technology, and delivering unparalleled value 
                to our customers. Every breakthrough, every milestone, 
                and every innovation is a step toward a world where 
                water sustainability is a reality, not just a vision.
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

          <div className="mb-20 max-w-[660px] md:mb-[120px] lg:mb-36">
            <h4 className="mb-5 font-secondary text-2xl uppercase xl:text-[30px]">
              Core Values and Beliefs
            </h4>

            <p className="flex items-center gap-4 text-sm xl:text-base">
              <span className="prefix-dot"></span>
              At WAE, our values are not just words; 
              they are the foundation of everything we do.
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

          <div 
            className="mt-[60px] mx-auto"
            style={{
              width: '991px',
              height: '150px',
            }}
          >
            <p className="font-poppins uppercase font-semibold text-[36px] leading-[50.4px] text-center">
              WAE is not just redefining water sustainability;
              we are shaping the future. And we are just getting started.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-[120px] xl:py-[180px]">
        <div className="container mb-[60px] text-center xl:mb-[75px]">
          <div className="text-sm xl:text-base">SUSTAINABILITY</div>

          <h3 className="my-10 text-[32px] !leading-relaxed md:my-6 md:text-4xl xl:my-12 xl:text-[58px]">
            Our solutions empower clients to make a meaningful & lasting green
            impact.
          </h3>

          {/* <div className="flex items-center justify-center text-sm xl:text-base">
            <span className="prefix-dot"></span>
            You discover SUSTAINABILITY
          </div> */}
        </div>
        <CaseStudySlider />
      </section>
    </>
  );
}
