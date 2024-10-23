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
      <main className="relative flex h-screen flex-col items-center justify-end pb-10 pt-[var(--header-height)]">
        <div className="absolute inset-0 -z-[1] h-full w-full">
          <img
            src="/images/covers/brand-bg.jpg"
            alt="brand background"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div
          className="flex flex-col gap-4 text-center text-white"
          data-aos="fade-up"
        >
          <h1 className="wae-h2 font-secondary">
            WAE:
            <br /> A Brand Committed to Innovation and Transformation
          </h1>
          <p className="wae-h6 max-w-screen-xl text-center">
            At WAE, our brand embodies more than just products; it represents a
            belief in possibilities. Our commitment to innovation, quality, and
            making a positive impact on people's lives through technology drives
            us forward. This philosophy is at the heart of everything we do,
            guiding our efforts to bring transformative solutions to the world.
          </p>
        </div>
      </main>
      <section className="wae-gap-lg flex flex-col bg-window-pattern bg-cover bg-no-repeat py-20 lg:py-28">
        <section
          className="container grid grid-cols-2 gap-x-8 gap-y-14 pt-20"
          style={{rowGap: "7rem"}}
        >
          <div
            className="flex flex-col gap-6"
            data-aos="fade-right"
          >
            <h6 className="wae-h6-lg font-extrabold uppercase">
              Belief in Possibilities!
            </h6>
            <p className="fw-light max-w-xl text-sm">
              At WAE, we believe in the potential for change and progress. Our
              brand is a testament to this belief, showcasing our dedication to
              creating technologies that transform lives. We are more than a
              manufacturer; we are pioneers of innovation, aiming to make a
              lasting difference.
            </p>
            <div>
              <Link
                to="#"
                className="mt-4 inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col gap-6"
            data-aos="fade-left"
          >
            <h6 className="wae-h6-lg font-extrabold uppercase">
              Commitment to Quality!
            </h6>
            <p className="fw-light max-w-xl text-sm">
              Quality is the cornerstone of our brand. Every product we create
              is a reflection of our relentless pursuit of excellence. We ensure
              that our solutions not only meet but exceed expectations,
              providing unmatched value to our customers and stakeholders
            </p>
            <div>
              <Link
                to="#"
                className="mt-4 inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
          >
            <h6 className="wae-h6-lg font-extrabold uppercase">
              Transformation Through Technology!
            </h6>
            <p className="fw-light max-w-xl text-sm">
              Our mission is to leverage technology to bring about meaningful
              transformation. Whether it's through our advanced water solutions
              or our commitment to sustainability, we strive to create a better,
              more sustainable future for all.
            </p>
            <div>
              <Link
                to="#"
                className="mt-4 inline-block rounded-md border border-black px-5 py-3 transition-colors hover:bg-white"
              >
                Explore
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="relative flex h-screen flex-col items-center justify-center pb-10 pt-[var(--header-height)]">
        <div className="absolute inset-0 -z-[1] h-full w-full">
          <img
            src="/images/covers/brand-symbol.jpg"
            alt="brand symbol"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>
        <div className="container grid grid-cols-2 gap-24">
          <div
            className="flex flex-col gap-10 px-4 text-left text-white"
            // data-aos="fade-right"
          >
            <h2 className="wae-h3 font-secondary">
              WAE: A Symbol of Unity and Progress
            </h2>
            <p className="wae-p">
              Our new logo is a key part of our updated brand identity, designed
              to drive consistency and focus. Its simple, bold design makes it
              instantly recognizable and versatile across various marketing
              mediums, from billboards to mobile screens.
            </p>
            <div className="flex max-w-screen-lg items-center gap-x-2">
              <p className="prefix-dot"></p>
              <p className="wae-p text-base uppercase">
                Explore each element of our logo which represents our core
                values at WAE
              </p>
            </div>
          </div>
          <div
            className="px-4 text-white"
            // data-aos="fade-left"
          >
            <p
              className="wae-h6 max-w-xl text-left font-light uppercase leading-relaxed"
              style={{lineHeight: "2rem"}}
            >
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
        <div className="container py-20">
          <div
            className="flex flex-col items-center"
            style={{rowGap: "100px"}}
          >
            <div
              className="flex max-w-screen-lg items-center justify-center gap-x-2"
              // data-aos="fade-down"
            >
              <p className="prefix-dot"></p>
              <p className="wae-p text-center text-base uppercase">
                Each of the six hands represents a core value of WAE:
              </p>
            </div>
            <img
              src="/images/covers/core-values.png"
              alt="brand background"
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              data-aos="zoom-in"
              data-aos-duration="500"
            />
            <div className="grid grid-cols-2 gap-14">
              <h2
                className="wae-h3 font-secondary uppercase"
                // data-aos="fade-right"
              >
                Gaols of six sigma
              </h2>
              <p
                className="wae-p"
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
            <div className="grid grid-cols-2 gap-14">
              <img
                src="/images/cards/VAR_Product.png"
                alt="Beaker on table"
                width={540}
                height={540}
                className="block shrink-0 object-cover max-xl:mx-auto"
                data-aos="zoom-in"
              />
              <div className="flex flex-col justify-between gap-8">
                {featuresArray.map((feature, idx) => {
                  return (
                    <div
                      className="flex items-center gap-4"
                      key={idx}
                      data-aos="fade-in"
                      data-aos-delay={`${idx}00`}
                    >
                      <img
                        src={`/images/icons/${feature.icon}`}
                        alt={feature.title}
                        width={36}
                        height={36}
                        className="block shrink-0"
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
