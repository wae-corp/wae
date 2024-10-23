import {Link, MetaFunction} from "@remix-run/react";
import {ProjectSlider} from "~/components";
import {productData} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Products",
    },
  ];
};

export default function Products() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-white bg-gradient-to-b from-[#6d6d6d] from-0% to-white py-8 pt-[var(--header-height)] text-center text-black">
        <div className="container">
          <div
            className="mx-auto mt-0 max-w-4xl sm:mt-20 xl:mt-40"
            data-aos="fade-down"
          >
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mt-10 font-secondary leading-tight lg:mb-[100px]">
              At WAE,
              <br /> we craft bespoke, sustainable hydration solutions with
              unmatched integrity and innovation
            </h2>
          </div>
        </div>
      </main>

      <section className="bg-window-pattern bg-cover bg-right bg-no-repeat py-20 lg:py-[180px]">
        <section className="container mb-20 lg:mb-[212px]">
          {/* <p
            className="mb-12 text-sm uppercase"
            data-aos="fade-right"
          >
            WHO WE ARE
          </p> */}

          <div className="flex flex-col items-center justify-between lg:mb-8 lg:flex-row">
            <h4
              className="wae-h4 mb-12 font-secondary !leading-[1.4] lg:mb-0"
              // data-aos="fade-right"
            >
              At WAE, we're dedicated to developing solutions that are
              fundamentally aligned with the principles of SDG 6: Clean Water
              and Sanitation. Every water system we craft is designed not only
              to provide pure hydration but also to drastically reduce reliance
              on single-use plastics. Built entirely from metal, our products
              contribute to zero landfill waste, combining sustainability with
              energy efficiency. Choosing WAE means making a meaningful
              commitment to a smarter, greener future, where hydration meets
              ecological responsibility.
            </h4>
            {/* <p
              className="mb-10 text-sm uppercase lg:mb-0 lg:basis-60 lg:text-base"
              data-aos="fade-left"
            >
              <strong className="font-extrabold">
                We are thought that becomes action.
              </strong>{" "}
              Matter that transforms into emotion. Invisible yet concrete
              values,{" "}
              <strong className="font-extrabold">
                to give a new meaning to an interior place.
              </strong>
            </p> */}
          </div>

          {/* <p
            className="uppercase"
            data-aos="fade-right"
          >
            <span className="prefix-dot"></span>
            You Discover Demo Kitchens
          </p> */}
        </section>

        <section>
          <div className="container max-w-[1080px]">
            <div className="wae-gap-lg flex flex-col">
              {productData.map((category, idx) => {
                return (
                  <div
                    key={category.id}
                    className="group flex flex-col gap-10 md:flex-row md:even:flex-row-reverse lg:gap-[110px]"
                  >
                    <div
                      className="flex-shrink-0 md:basis-1/2"
                      data-aos="zoom-in"
                    >
                      <img
                        src={category.categoryImage}
                        alt="Category Poster"
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
                      <div className="mb-14 flex flex-col gap-6">
                        <label className="text-xs font-bold">
                          {category.id}
                        </label>

                        <h5 className="font-extrabold uppercase">
                          {category.categoryName}
                        </h5>

                        <p className="fw-light text-sm uppercase">
                          {category.categoryDescription}
                        </p>
                      </div>
                      <Link
                        to={`/browse-products/${category.id}`}
                        className="mt-auto inline-block rounded-lg border border-black px-5 py-3 transition-colors hover:bg-white"
                      >
                        Know More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-5 mt-10 flex items-center justify-center py-20 text-center text-black lg:py-40">
          <div className="container">
            <div
              className="mx-auto max-w-[845px]"
              data-aos="fade-down"
            >
              <h6 className="uppercase">HOW DOES IT WORK?</h6>

              <h2 className="wae-h2 mt-12 font-secondary leading-tight">
                Choose your product style or type, and let us customize it to
                perfectly match your needs.
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <p className="mb-6 text-center uppercase lg:text-sm">
              Other Products
            </p>
          </div>
          <ProjectSlider
            productList={productData
              .flatMap((cat) => cat.productList)
              .map((p) => {
                return {
                  id: p?.id,
                  image: p?.images ? p?.images[0] : "",
                  link: `/product-details/${p?.name}`,
                  name: p?.name,
                };
              })}
          />
        </section>
      </section>
    </>
  );
}
