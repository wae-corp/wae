import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {json, Link, useLoaderData} from "@remix-run/react";
import {useEffect, useState} from "react";
import {BrowseBySlider} from "~/components/Slider/BrowseBySlider";
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
      const link = `/product-list/${id}`;

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
      <main className="relative flex h-[640px] items-center bg-water-machine-near-wall bg-cover bg-center bg-no-repeat pt-[var(--header-height)] text-white"></main>

      <section className="bg-black py-20 text-white md:py-[120px]">
        <div className="container flex items-center">
          <div className="gap-8 lg:gap-[140px] xl:flex">
            <div
              className="flex flex-col items-start justify-start md:col-span-8 md:mb-10 xl:mb-0"
              // data-aos="fade-right"
            >
              <h3 className="mb-12 font-secondary text-2xl md:mb-10 md:text-[32px] md:leading-normal xl:text-4xl">
                {currentCategory?.categoryName}
              </h3>
              <p className="pl-20 text-sm uppercase xl:text-base">
                {currentCategory?.categoryDescriptionTwo}
              </p>

              <Link
                to={"/product-list/" + currentCategory?.id}
                className="wae-btn mt-12 border-white px-6 py-2 max-lg:mx-auto"
              >
                View All Products
              </Link>
            </div>
            <div
              className="mt-10 sm:mt-0 lg:max-w-[400px]"
              // data-aos="fade-left"
            >
              <p className="text-base uppercase md:text-2xl">
                {currentCategory?.categoryDescriptionThree}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px]">
        <section>
          <div
            className="container mb-10 text-center md:mb-20"
            data-aos="fade-down"
          >
            <h6 className="mb-xl:mb-12 mb-8 text-xs font-light md:text-sm">
              Products
            </h6>

            <h2 className="wae-h2 mb-8 font-secondary md:mb-[60px] xl:mb-12">
              Browse by Product Type
            </h2>

            <p className="text-xs uppercase md:text-sm">
              <span className="prefix-dot"></span>
              Check what fits your requirement
            </p>
          </div>

          <BrowseBySlider productList={getMountingTypes()} />
        </section>

        <section className="wae-pt-lg">
          <div
            className="container mb-20 text-center"
            data-aos="fade-down"
          >
            <h6 className="mb-8 text-xs font-light md:text-sm xl:mb-12">
              Products
            </h6>

            <h2 className="wae-h2 mb-8 font-secondary xl:mb-12">
              Browse by Application
            </h2>

            <p className="text-xs uppercase md:text-sm">
              <span className="prefix-dot"></span>
              Explore the best suited designs for you
            </p>
          </div>

          <BrowseBySlider
            productList={productsByApplication.map((p) => {
              delete p.details;
              return p;
            })}
          />
        </section>
      </section>
    </>
  );
}
