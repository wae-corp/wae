import {Link, MetaFunction} from "@remix-run/react";
import PropTypes from "prop-types";
import {Counter} from "~/components/Counter";

type SolutionItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export const meta: MetaFunction = () => {
  return [{title: "Sustainability"}];
};

interface CaseStudyCardProps extends SolutionItem {
  id: number;
  reverse?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}) => {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : "flex-row"
      } mx-auto max-w-screen-xl items-start gap-8`}
    >
      <div
        className="flex aspect-square w-1/2 justify-center"
        data-aos="fade-down"
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="flex max-h-[400px] w-1/2 flex-col justify-start"
        data-aos="fade-down"
        data-aos-delay={`${id}00`}
      >
        <h2 className="text-primary mb-4 text-left font-bold">{title}</h2>
        <p className="wae-p text-left">{description}</p>
      </div>
    </div>
  );
};

CaseStudyCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  reverse: PropTypes.bool, // Optional prop
};

export default function Sustainability() {
  const solutionsData: Array<SolutionItem> = [
    {
      title: "INNOVATIVE SOLUTIONS",
      description:
        "WAE Drinking Water Stations, equipped with cutting-edge purification, chilling, and dispensing systems, deliver a seamless and sustainable hydration experience. They are the ultimate sustainable alternative to plastic water jars for corporates and institutions, offering unmatched reliability and eco-efficiency.",
      imageSrc: "/images/cards/card-1.png",
      imageAlt: "Abstract geometric pattern representing innovative solutions",
    },
    {
      title: "SUSTAINABILITY AT ITS CORE",
      description:
        "Eliminating plastic water jars not only curtails direct carbon emissions from production and disposal but also significantly reduces the carbon footprint from transportation and delivery logistics, making a significant environmental impact.",
      imageSrc: "/images/cards/card-2.png",
      imageAlt: "Water droplets on a green leaf",
    },
    {
      title: "UNCOMPROMISED COMPLIANCE",
      description:
        "WAE Drinking Water Stations are engineered to meet the highest standards, adhering to NSF/ANSI 42, NSF/ANSI 53, NSF/ANSI 55, NSF/ANSI 58, NSF P231, and Article 9 of European Regulation (EC) 852/2004. This ensures our solutions deliver not just sustainability, but also top-tier quality and safety.",
      imageSrc: "/images/cards/card-3.png",
      imageAlt: "Water droplets on a green leaf",
    },
    {
      title: "CHAMPIONING WATER STEWARDSHIP",
      description:
        "In a world facing unprecedented resource challenges, WAE is dedicated to responsible water stewardship. Our innovative solutions are designed to harmonize with the principles of the circular economy, enabling us to play a vital role in the ongoing resource revolution. We believe that protecting and optimizing water resources is not just a business priority but a collective responsibility.",
      imageSrc: "/images/cards/card-4.png",
      imageAlt: "Water droplets on a green leaf",
    },
    {
      title: "ACHIEVING WATER NEUTRALITY",
      description:
        "Despite a worsening water crisis, more companies are drawing excessive amounts of water from natural sources. WAE is driving a movement towards water neutrality by helping organizations replace bottled water with sustainable hydration systems. This transition enables them to become water-positive, drastically reducing their water footprint and supporting global sustainability efforts.",
      imageSrc: "/images/cards/card-5.jpg",
      imageAlt: "Water droplets on a green leaf",
    },
    {
      title: "LEADING WATER RESTORATION EFFORTS",
      description:
        "By 2025, it is anticipated that around 2 billion people will face severe water scarcity, with over half of the global population living under conditions of water stress. WAE’s Water Restoration Program equips businesses with innovative and sustainable solutions designed to mitigate their water impact. Through forward-thinking practices, we work to restore equilibrium to vital water resources and build resilience for the future.",
      imageSrc: "/images/cards/card-6.jpg",
      imageAlt: "Water droplets on a green leaf",
    },
    {
      title: "EMBRACING SUSTAINABLE RESPONSIBILITY",
      description:
        "The future demands that businesses and institutions step up to the challenge of sustainable growth. WAE embraces this responsibility by aligning our efforts with the Sustainable Development Goals (SDGs), fostering a leadership mindset that integrates economic growth with long-term water management solutions.",
      imageSrc: "/images/cards/card-7.jpg",
      imageAlt: "Water droplets on a green leaf",
    },
  ];

  return (
    <>
      <main className="relative flex h-screen items-center bg-leaf-droplet bg-cover bg-top bg-no-repeat pt-[var(--header-height)] text-white md:h-[640px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <div
          className="container isolate text-center"
          data-aos="fade-down"
        >
          <div className="container mx-auto h-full px-4">
            <h1 className="hidden text-center text-2xl font-light uppercase md:mb-10 md:block xl:mb-[60px]">
              Transformation
            </h1>

            <div className="grid items-center gap-[60px] md:grid-cols-3 md:gap-10 xl:items-start 2xl:gap-[150px]">
              <div className="text-center">
                <div className="mb-5 font-secondary text-[40px] leading-normal md:mb-3 md:text-[32px] xl:mb-5 xl:text-[40px] 2xl:text-[50px]">
                  <Counter
                    end={5736591}
                    duration={1}
                    separator=","
                  />{" "}
                  KG
                </div>
                <p className="uppercase md:text-sm xl:text-base">
                  CO2E EMISSIONS ELIMINATED
                </p>
              </div>

              <div className="text-center">
                <div className="mb-5 font-secondary text-[40px] leading-normal md:mb-3 md:text-[32px] xl:mb-5 xl:text-[40px] 2xl:text-[50px]">
                  <Counter
                    end={900000}
                    duration={1}
                    separator=","
                  />
                </div>
                <p className="uppercase md:text-sm xl:text-base">
                  PLASTIC WATER JARS ERADICATED
                </p>
              </div>

              <div className="text-center">
                <div className="mb-5 font-secondary text-[40px] leading-normal md:mb-3 md:text-[32px] xl:mb-5 xl:text-[40px] 2xl:text-[50px]">
                  <Counter
                    end={92}
                    duration={1}
                    separator=","
                  />
                  M LITERS
                </div>
                <p className="uppercase md:text-sm xl:text-base">
                  OF WATER CONSERVED
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="container mx-auto overflow-x-hidden py-20 md:py-[120px] xl:py-[180px]">
        <div className="mx-auto max-w-screen-xl">
          <div className="grid gap-10 md:gap-[60px] xl:grid-cols-5 xl:gap-[180px]">
            <div className="md:col-span-2">
              <h2
                className="text-xs font-medium xl:text-base"
                // data-aos="fade-right"
              >
                <span className="prefix-dot"></span> WE LIVE AND BREATHE WATER
              </h2>
            </div>
            <div className="md:col-span-3">
              <p className="mb-10 text-xl text-gray-600 md:pl-10 xl:pl-0">
                At WAE, our dedication to safeguarding natural water resources
                is at the core of everything we do. For us, sustainability is
                not merely a target—it is{" "}
                <span className="font-semibold text-black">a necessity</span>{" "}
                and a shared duty. That's why we engineer advanced solutions
                that <span className="font-semibold text-black">maximize</span>{" "}
                water utilization, minimize consumption, reduce emissions, and
                cut maintenance costs. It's about{" "}
                <span className="font-semibold text-black">
                  leading the charge for transformative change
                </span>{" "}
                and creating a better tomorrow.
              </p>
              <p className="mb-10 text-xl text-gray-600 md:pl-10 xl:pl-0">
                For over a decade, WAE has been a trailblazer in{" "}
                <span className="font-semibold text-black">
                  sustainable water management
                </span>
                . From concept and design to construction and management, we
                have pioneered every stage of development with a focus on water
                conservation. Our{" "}
                <span className="font-semibold text-black">
                  innovative approach
                </span>{" "}
                enables us to stay ahead of the curve, adapting our solutions to
                meet the challenges of the future.
              </p>
              <p className="text-xl text-gray-600 md:pl-10 xl:pl-0">
                Our{" "}
                <span className="font-semibold text-black">
                  award-winning initiatives
                </span>{" "}
                have empowered organizations in India and beyond to embrace
                sustainable alternatives,{" "}
                <span className="font-semibold text-black">transitioning</span>{" "}
                from plastic water jars to safe, efficient water solutions that
                comply with BIS 10500:2012 standards for drinking water.
              </p>
              <Link
                to="/sustainability-case-study"
                className="mt-10 inline-block rounded-md border border-black bg-white px-4 py-2 text-base font-normal text-black transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 xl:mt-[60px]"
              >
                Explore Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden">
        <div className="container xl:max-w-[1080px]">
          <div className="flex flex-col gap-20 md:gap-[60px] xl:gap-[120px]">
            {solutionsData.map((solution, idx) => {
              return (
                <div
                  key={idx}
                  className="group flex flex-col gap-10 md:flex-row md:even:flex-row-reverse xl:gap-[110px]"
                >
                  <div
                    className="flex-shrink-0 md:w-[350px] xl:w-[500px]"
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-offset="200"
                    data-aos-duration="500"
                  >
                    <img
                      src={solution.imageSrc}
                      alt={solution.imageAlt}
                      className="aspect-square object-cover group-even:ml-auto max-sm:w-full"
                      width="500"
                      height="500"
                    />
                  </div>
                  <div
                    className="flex flex-col items-start md:basis-1/2"
                    // data-aos="fade-down"
                    data-aos-delay="100"
                  >
                    <div className="flex flex-col gap-5 md:gap-8 xl:gap-10">
                      <h5 className="font-extrabold uppercase md:text-sm xl:text-base">
                        {solution.title}
                      </h5>

                      <p className="fw-light text-xs uppercase md:text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container mx-auto overflow-x-hidden py-20 md:py-[120px] xl:py-[180px]">
        <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between md:flex-row md:items-start md:gap-10 xl:gap-[160px]">
          <div
            className="md:w-1/2"
            // data-aos="fade-right"
          >
            <h2 className="xl:text-4 mb-[60px] font-secondary text-2xl font-semibold">
              OUR CULTURE
            </h2>
            <p className="mb-5 pl-20 md:mb-6 md:pl-10 md:text-sm xl:pl-20 xl:text-base">
              Our approach to water management fosters collaboration and
              co-existence, and this philosophy is mirrored in our business
              practices. We've removed hierarchical barriers to function as one
              cohesive team. We believe in complete transparency—extending this
              openness to our clients as well.
            </p>
            <p className="pl-20 md:pl-10 md:text-sm xl:pl-20 xl:text-base">
              WAE was founded with the vision of providing sustainable water
              solutions to communities and businesses. Recognizing the growing
              demand for efficient water management, we expanded our operations
              to cater to diverse markets where the need for sustainable water
              infrastructure is critical.
            </p>
            <button className="mt-10 inline-flex items-center rounded-md border border-black bg-white px-4 py-2 text-black transition duration-200 hover:bg-gray-100 md:mt-12">
              Know More <span className="ml-2">→</span>
            </button>
          </div>
          <div
            className="ml-auto mt-10 flex w-[260px] justify-center md:mt-0 md:w-[276px] xl:w-[370px]"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <img
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ca3b50b9-5e3d-4344-732e-f4fb5f975400/public"
              alt="Team Culture"
              className="w-full max-w-md shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
