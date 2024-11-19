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
            <h1 className="font-secondary text-[32px] leading-normal">
              WAE:
              <br /> A Brand Committed to Innovation and Transformation
            </h1>
            <p className="wae-h6 max-w-screen-xl text-center font-light">
              At WAE, our brand embodies more than just products; it represents
              a belief in possibilities. Our commitment to innovation, quality,
              and making a positive impact on people's lives through technology
              drives us forward. This philosophy is at the heart of everything
              we do, guiding our efforts to bring transformative solutions to
              the world.
            </p>
          </div>
        </div>
      </main>

      <section className="flex flex-col bg-window-pattern bg-cover bg-no-repeat py-20 md:py-[120px]">
        <div className="container grid gap-x-8 gap-y-[60px] md:grid-cols-2 md:gap-x-10">
          <div
            className="flex flex-col"
            data-aos="fade-right"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Belief in Possibilities!
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm">
              At WAE, we believe in the potential for change and progress. Our
              brand is a testament to this belief, showcasing our dedication to
              creating technologies that transform lives. We are more than a
              manufacturer; we are pioneers of innovation, aiming to make a
              lasting difference.
            </p>
            <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-left"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Commitment to Quality!
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm">
              Quality is the cornerstone of our brand. Every product we create
              is a reflection of our relentless pursuit of excellence. We ensure
              that our solutions not only meet but exceed expectations,
              providing unmatched value to our customers and stakeholders
            </p>
            <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col"
            data-aos="fade-up"
          >
            <h6 className="wae-h6-lg mb-6 font-extrabold uppercase">
              Transformation Through Technology!
            </h6>
            <p className="fw-light mb-10 max-w-xl text-sm">
              Our mission is to leverage technology to bring about meaningful
              transformation. Whether it's through our advanced water solutions
              or our commitment to sustainability, we strive to create a better,
              more sustainable future for all.
            </p>
            <div>
              <Link
                to="#"
                className="inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="md:[120px] relative flex min-h-screen flex-col items-center justify-center py-20">
        <div className="absolute inset-0 -z-[1] h-full w-full">
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c48a418-ce7a-4020-6be9-d6f8f399a000/public"
            alt="brand symbol"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="container grid md:grid-cols-2">
          <div
            className="mb-[60px] flex flex-col gap-x-10 text-left text-white"
            // data-aos="fade-right"
          >
            <h2 className="mb-10 font-secondary text-2xl">
              WAE: A Symbol of Unity and Progress
            </h2>

            <div className="mb-12 flex max-w-screen-lg items-center gap-x-2 font-semibold">
              <p className="prefix-dot"></p>
              <p className="text-sm uppercase">
                Explore each element of our logo which represents our core
                values at WAE
              </p>
            </div>

            <p className="pl-20 text-sm">
              Our new logo is a key part of our updated brand identity, designed
              to drive consistency and focus. Its simple, bold design makes it
              instantly recognizable and versatile across various marketing
              mediums, from billboards to mobile screens.
            </p>
          </div>
          <div
            className="text-white"
            // data-aos="fade-left"
          >
            <p className="max-w-xl text-left text-base font-light uppercase leading-relaxed">
              The logo features an illustration of six hands moving in harmony,
              symbolizing our commitment to making the earth a better and more
              sustainable place. These hands also represent teamwork and
              cooperation, essential values that drive our success in all
              endeavors. The number six signifies perfection and completion,
              reflecting our goal to achieve the highest standards in everything
              we do.
            </p>
          </div>
        </div>
      </section>

      <section className="wae-gap-lg flex flex-col bg-window-pattern bg-cover bg-no-repeat py-20 lg:py-28">
        <div className="container">
          <div className="flex flex-col items-center">
            <div
              className="mb-[60px] flex max-w-screen-lg items-center justify-center gap-x-2"
              // data-aos="fade-down"
            >
              <p className="prefix-dot"></p>
              <p className="text-xs uppercase md:text-center xl:text-base">
                Each of the six hands represents a core value of WAE:
              </p>
            </div>
            <img
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f78f2987-6585-44e5-40c9-3fb1ac0acc00/public"
              alt="brand background"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="200"
              data-aos-duration="500"
            />
            <div className="my-20 grid gap-[60px] md:grid-cols-2">
              <h2
                className="font-secondary text-2xl uppercase"
                // data-aos="fade-right"
              >
                Gaols of six sigma
              </h2>
              <p
                className="text-sm uppercase"
                // data-aos="fade-left"
              >
                The Six Sigma principles embedded in our logo highlight our
                dedication to quality and excellence. By reducing defects and
                errors, we aim to improve productivity, customer satisfaction,
                and operational efficiency. Our goal is to produce defect-free
                products 99.99966% of the time, underscoring our commitment to
                excellence.
              </p>
            </div>
            <div className="grid gap-10 md:grid-cols-2">
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
              <div className="flex flex-col justify-between gap-5 md:gap-8">
                {featuresArray.map((feature, idx) => {
                  return (
                    <div
                      className="flex items-center gap-6 md:gap-4"
                      key={idx}
                      data-aos="fade-in"
                      data-aos-delay={`${idx}00`}
                    >
                      <img
                        src={`/images/icons/${feature.icon}`}
                        alt={feature.title}
                        width={36}
                        height={36}
                        className="block aspect-square h-6 w-6 shrink-0 object-contain"
                      />
                      <h3 className="wae-p">{feature.title}</h3>
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
