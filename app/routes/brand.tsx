import {Link, MetaFunction} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Brand",
    },
  ];
};

export default function Brand() {
  const featuresArray = [
    {
      id: "1",
      icon: "glyph.svg",
      title: "Reduce cycle times and operational costs",
    },
    {
      id: "2",
      icon: "Frame.svg",
      title: "Enhance customer expectations",
    },
    {
      id: "3",
      icon: "Vector.svg",
      title: "Provide an improved return on investment",
    },
    {
      id: "4",
      icon: "Capa_1.svg",
      title: "Eliminate defects and errors",
    },
    {
      id: "5",
      icon: "Layer_1.svg",
      title: "Improve productivity",
    },
    {
      id: "1",
      icon: "stonks.svg",
      title: "Achieve better asset utilization",
    },
  ];

  return (
    <>
      <main className="relative flex h-screen flex-col items-center justify-end pb-10 pt-[var(--header-height)] md:h-[640px] md:pb-[120px]">
        <div className="absolute inset-0 -z-[1] h-full w-full">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6afd4297-696e-44ee-7303-1b50a5262200/public"
            alt="brand background"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="container">
          <div
            className="flex flex-col gap-10 text-center text-white"
            data-aos="fade-up"
          >
            <h1 className="font-secondary text-[32px] leading-normal xl:text-[40px]">
              {/* WAE:
              <br /> A Brand Committed to Innovation and Transformation */}
              Our Green Is Blue
            </h1>
            <p className="wae-h6 text-center font-light">
              Water is the foundation of life and progress, a resource that
              sustains ecosystems and drives growth. At WAE, we combine
              innovation with responsibility to deliver sustainable water
              solutions. By protecting and preserving this vital resource, we
              aim to create a future where technology and nature work in harmony
              for generations to come.
            </p>
          </div>
        </div>
      </main>

      <section className="flex flex-col bg-window-pattern bg-cover bg-no-repeat py-20 md:py-[120px] xl:py-[180px]">
        <div className="container grid gap-x-8 gap-y-[60px] md:grid-cols-2 md:gap-x-10 xl:gap-x-[120px] xl:gap-y-[120px]">
          <div
            className="flex flex-col"
            data-aos="fade-right"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Belief in Possibilities!
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm xl:mb-[40px] xl:text-base">
              At WAE, we believe in progress driven by purpose and innovation.
              Our commitment lies in developing technologies that create real
              impact and enable meaningful change. More than just manufacturers,
              we are partners in shaping a sustainable future through ingenuity
              and excellence.
            </p>
            {/* <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div> */}
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-left"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Commitment to SDG 6
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm xl:mb-[40px] xl:text-base">
              Aligned with the United Nations' Sustainable Development Goal 6,
              we focus on delivering innovative water solutions that ensure
              clean and accessible water for all. Through sustainable
              technologies and responsible resource management, we drive
              progress toward a water-secure future.
            </p>
            {/* <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div> */}
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-left"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Moving Towards Zero-To-Landfill
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm xl:mb-[40px] xl:text-base">
              Focused on achieving zero-to-landfill, we implement solutions that
              emphasize resource efficiency and waste reduction. Through
              innovation and responsible practices, we support a circular
              economy, minimizing environmental impact and driving measurable
              progress.
            </p>
            {/* <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div> */}
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-left"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Enabling Carbon Reduction
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm xl:mb-[40px] xl:text-base">
              Our water solutions reduce carbon emissions by eliminating plastic
              water jars, offering a sustainable alternative made from stainless
              steel. Designed for longevity and aligned with the principles of a
              circular economy, they enable efficient resource use while
              supporting global climate goals.
            </p>
            {/* <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div> */}
          </div>
        </div>
      </section>

      <section className="md:[120px] relative flex flex-col items-center justify-center py-20 md:py-[120px] xl:py-[180px]">
        <div className="absolute inset-0 -z-[1] h-full w-full">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c48a418-ce7a-4020-6be9-d6f8f399a000/public"
            alt="brand symbol"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="container flex flex-col xl:flex-row xl:gap-[140px]">
          <div
            className="mb-[60px] flex flex-col gap-x-10 text-left text-white"
            // data-aos="fade-right"
          >
            <h2 className="mb-10 font-secondary text-2xl uppercase xl:mb-[60px] xl:text-4xl">
              WAE: A Symbol of Unity and Progress
            </h2>

            <div className="mb-12 flex max-w-screen-lg items-center gap-x-2 font-semibold md:order-last md:mb-0 md:mt-6 xl:mt-12">
              <p className="prefix-dot"></p>
              <p className="text-sm uppercase xl:text-base">
                Explore each element of our logo which represents our core
                values at WAE
              </p>
            </div>

            <p className="pl-20 text-sm xl:text-base">
              Our logo represents our commitment to sustainability and
              purpose-driven innovation. Its clean, bold design ensures clarity
              and consistency across all mediums, from digital interfaces to
              physical spaces, embodying reliability and forward-thinking
              principles.
            </p>
          </div>

          <p
            className="text-left text-base font-light uppercase leading-relaxed text-white md:text-xl xl:max-w-[400px] xl:text-2xl"
            // data-aos="fade-left"
          >
            The logo features six hands moving in harmony, symbolizing our
            commitment to sustainability and a better future. These hands
            represent teamwork, collaboration, and the values that drive our
            success. The number six signifies balance, perfection, and
            completion, reflecting our pursuit of the highest standards and our
            dedication to achieving excellence in everything we do.
          </p>
        </div>
      </section>

      <section className="wae-gap-lg flex flex-col bg-window-pattern bg-cover bg-no-repeat py-20 md:py-[120px]">
        <div className="container">
          <div className="flex flex-col items-center">
            <div
              className="mb-[60px] flex max-w-screen-lg items-center justify-center gap-x-2 xl:mb-[100px]"
              // data-aos="fade-down"
            >
              <p className="prefix-dot"></p>
              <p className="text-xs uppercase md:text-center md:text-sm xl:text-base">
                Each of the six hands represents a core value of WAE:
              </p>
            </div>
            <picture
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="200"
              data-aos-duration="500"
            >
              <source
                src=""
                media="(max-width: 767px)"
                className="h-full w-full object-cover"
              />
              <source
                media="(min-width: 1199px)"
                className="h-full w-full object-cover"
              />
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f78f2987-6585-44e5-40c9-3fb1ac0acc00/public"
                alt="Core values of WAE"
                className="h-full w-full object-cover"
              />
            </picture>

            <div className="my-20 flex w-full max-w-[1080px] flex-col items-start gap-[60px] md:my-[120px] md:flex-row md:gap-10">
              <h2
                className="font-secondary text-2xl uppercase md:flex-shrink-0"
                // data-aos="fade-right"
              >
                Goals of six sigma
              </h2>
              <p
                className="text-sm xl:ml-auto xl:max-w-[545px]"
                // data-aos="fade-left"
              >
                The Six Sigma principles embedded in our logo highlight our
                dedication to quality and excellence. By reducing defects and
                errors, we aim to improve productivity, customer satisfaction,
                and operational efficiency. Our goal is to produce defect-free
                products 99.99999% of the time, underscoring our commitment to
                excellence.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2 xl:gap-[60px]">
              <img
                src="/images/cards/VAR_Product.png"
                alt="Beaker on table"
                width={540}
                height={540}
                className="block aspect-square shrink-0 object-cover max-xl:mx-auto"
                data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-duration="500"
              />
              <div className="flex flex-col gap-5 md:gap-8 xl:gap-14">
                {featuresArray.map((feature, idx) => {
                  return (
                    <div
                      className="flex items-center gap-6 md:gap-4"
                      key={idx}
                      data-aos="fade-in"
                      data-aos-offset="0"
                      data-aos-delay={`${idx}00`}
                    >
                      <img
                        src={`/images/icons/${feature.icon}`}
                        alt={feature.title}
                        width={36}
                        height={36}
                        className="block aspect-square shrink-0 object-contain max-sm:h-6 max-sm:w-6"
                      />
                      <h3 className="wae-p md:text-sm xl:text-base">
                        {feature.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
