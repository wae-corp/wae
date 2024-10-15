import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {json, Link, useLoaderData} from "@remix-run/react";
import {useEffect, useState} from "react";
import {ProjectSlider} from "~/components";
import {getStringFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import {ProductData, productData, productsByApplication} from "~/static";

type LoaderData = {
  category: string;
};

export const loader: LoaderFunction = async ({request, params}) => {
  const categoryResult = getStringFromUnknown(params.category);
  if (categoryResult.success === false) {
    return new Response(null, {status: 404});
  }
  const categoryType = categoryResult.ok;

  const loader: LoaderData = {
    category: categoryType,
  };

  console.log(JSON.stringify(loader));
  return json(loader);
};

export const meta: MetaFunction = () => {
  return [{title: "Browse Products"}];
};

export default function BrowseProducts() {
  const [currentCategory, setCurrentCategory] = useState<ProductData>();
  const {category} = useLoaderData() as LoaderData;

  useEffect(() => {
    setCurrentCategory(
      productData && productData.find((c) => c.id === category),
    );
  }, []);

  const getMountingTypes = () => {
    const mountingTypeMap = new Map<
      string,
      {id: string; image: string; link: string; name: string}
    >();

    currentCategory?.productList?.forEach((product) => {
      const mountingType = product.mountingType;
      const image = product.images?.[0];
      const id = product.id || "";
      const name = mountingType || "";
      const link = `/product-list/${mountingType}`;

      if (mountingType && !mountingTypeMap.has(mountingType) && image) {
        mountingTypeMap.set(mountingType, {id, image, link, name});
      }
    });

    return Array.from(mountingTypeMap.entries()).map(
      ([mountingType, details]) => ({
        mountingType,
        ...details,
      }),
    );
  };

  return (
    <>
      <main className="relative flex min-h-screen items-center bg-washing-hands bg-cover bg-bottom bg-no-repeat pt-[var(--header-height)] text-white">
        <div className="from- absolute inset-0 bg-gradient-to-t from-black to-[rgba(0,0,0,.6)]"></div>
        <div
          className="container isolate text-center"
          data-aos="fade-down"
        >
          <h6 className="wae-h6 mb-10 font-extrabold uppercase">
            {currentCategory?.categoryName}
          </h6>

          <p className="wae-h6 mb-10 font-secondary uppercase 2xl:text-3xl">
            Imagine a workplace where your creativity meets innovation, where
            your ideas drive change, and where every day is an opportunity to
            make a real difference. Welcome to WAE. We're not just about
            business; we're about building a better future. Join us and be a
            part of a team that's passionate about sustainability, excellence,
            and creating positive impacts in the world.
          </p>

          <Link
            to={"/product-list"}
            className="wae-btn wae-btn-md border-white px-6"
          >
            View All Products
          </Link>
        </div>
      </main>

      <section className="wae-pt-md wae-pb-md bg-black text-white">
        <div className="container flex items-center">
          <div className="gap-8 sm:flex">
            <div
              className="flex flex-col items-start justify-start md:col-span-8"
              data-aos="fade-right"
            >
              <h3 className="wae-h4 mb-10 font-secondary">
                {currentCategory?.categoryName}
              </h3>
              <p className="mb-10 uppercase lg:max-w-[80%] xl:ml-28">
                {currentCategory?.categoryDescriptionTwo}
              </p>
              <p className="uppercase">
                <span className="prefix-dot"></span> You discover Life at WAE
              </p>

              <Link
                to={"/product-list"}
                className="wae-btn wae-btn-pill mt-11 border-white px-6 py-2"
              >
                View All Products
              </Link>
            </div>
            <div
              className="mt-10 sm:mt-0 lg:max-w-[400px]"
              data-aos="fade-left"
            >
              <p className="wae-h6-lg uppercase">
                {currentCategory?.categoryDescriptionThree}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg">
        <section>
          <div
            className="container mb-20 text-center"
            data-aos="fade-down"
          >
            <h6 className="mb-12 font-light">Products</h6>

            <h2 className="wae-h2 mb-12 font-secondary">
              Browse by Product Type
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              Check what fits your requirement
            </p>
          </div>

          <ProjectSlider productList={getMountingTypes()} />

          <div className="container mt-20 flex items-center">
            <div className="gap-8 sm:flex">
              <div
                className="flex flex-col justify-start md:col-span-7"
                data-aos="fade-right"
              >
                <p className="mb-10 uppercase lg:max-w-[80%] xl:ml-28">
                  Life at WAE is vibrant and inspiring. Our culture is a
                  tapestry of collaboration, inclusivity, and continuous
                  learning. Here, your professional growth is as important as
                  your personal well-being. Enjoy a work environment that
                  fosters creativity, supports balance, and celebrates every
                  success. At WAE, your journey is our story.
                </p>
              </div>
              <div
                className="mt-10 sm:mt-0 lg:max-w-[400px]"
                data-aos="fade-left"
              >
                <p className="wae-h6-lg uppercase">
                  WAE is more than a job - it's a journey. We offer competitive
                  benefits, a supportive and inclusive community, and countless
                  opportunities for personal and professional growth. Join us
                  and be part of a team that values your contributions and helps
                  you reach your full potential. Let's create a brighter future
                  together.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="wae-pt-lg">
          <div
            className="container mb-20 text-center"
            data-aos="fade-down"
          >
            <h6 className="mb-12 font-light">Products</h6>

            <h2 className="wae-h2 mb-12 font-secondary">
              Browse by Application
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              Explore the best suited designs for you
            </p>
          </div>

          <ProjectSlider productList={productsByApplication} />

          {/* <div className="wae-pt-lg container max-w-[1080px]">
            <div className="flex flex-col gap-[120px]">
              {ProductsPageListing.map((product, idx) => {
                return (
                  <div
                    key={product.id}
                    className="group flex flex-col gap-10 md:flex-row md:even:flex-row-reverse lg:gap-[110px]"
                  >
                    <div
                      className="flex-shrink-0 md:basis-1/2"
                      data-aos="fade-down"
                    >
                      <img
                        src="/images/covers/trublu.jpg"
                        alt="TruBlu"
                        className="aspect-square object-cover group-even:ml-auto max-sm:w-full"
                        width="500"
                        height="500"
                      />
                    </div>
                    <div
                      className="md:basis-1/2"
                      data-aos="fade-down"
                      data-aos-delay={`${idx}00`}
                    >
                      <div className="mb-14 flex flex-col gap-8 lg:gap-10">
                        <label className="text-xs font-bold">
                          {product.id}
                        </label>

                        <h5 className="font-extrabold uppercase">
                          {product.name}
                        </h5>

                        <p className="fw-light text-sm uppercase">
                          {product.description}
                        </p>

                        <div className="flex items-center gap-5">
                          {Icons.Sun}
                          {Icons.IceCrystal}
                          {Icons.LiquidDrop}
                        </div>
                      </div>
                      <Link
                        to={"/product-list"}
                        className="rounded-full border border-black px-5 py-3 transition-colors hover:bg-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}
        </section>
      </section>
    </>
  );
}
