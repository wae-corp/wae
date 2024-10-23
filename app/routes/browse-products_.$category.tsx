import type {LoaderFunction, MetaFunction} from "@remix-run/node";
import {json, Link, useLoaderData} from "@remix-run/react";
import {useEffect, useState} from "react";
import {ProjectSlider} from "~/components";
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
      <main className="relative flex h-[640px] items-center bg-water-machine-near-wall bg-cover bg-bottom bg-no-repeat pt-[var(--header-height)] text-white"></main>

      <section className="wae-pt-md wae-pb-md bg-black text-white">
        <div className="container flex items-center">
          <div className="gap-8 sm:flex lg:gap-[140px]">
            <div
              className="flex flex-col items-start justify-start md:col-span-8"
              // data-aos="fade-right"
            >
              <h3 className="wae-h4 mb-12 font-secondary">
                {currentCategory?.categoryName}
              </h3>
              <p className="uppercase lg:max-w-[80%]">
                {currentCategory?.categoryDescriptionTwo}
              </p>

              <Link
                to={"/product-list"}
                className="wae-btn mt-[60px] border-white px-6 py-2"
              >
                View All Products
              </Link>
            </div>
            <div
              className="mt-10 sm:mt-0 lg:max-w-[400px]"
              // data-aos="fade-left"
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

          <BrowseBySlider productList={getMountingTypes()} />
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
