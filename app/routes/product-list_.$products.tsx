import {Accordion} from "@mantine/core";
import {json, Link, MetaFunction, useLoaderData} from "@remix-run/react";
import {Icons, productData} from "~/static";
import {Checkbox} from "~/components";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {LoaderFunction} from "@remix-run/node";
import {getStringFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import type {ProductList as ProductListDTO} from "~/static";

type LoaderData = {
  products: ProductListDTO[];
};

const filters = [
  {
    id: 1,
    type: "Category",
    options: [
      {
        id: 1,
        name: "Drinking Water Station",
      },
    ],
  },
  {
    id: 2,
    type: "Mounting Type",
    options: [
      {
        id: 1,
        name: "On Wall",
      },
      {
        id: 2,
        name: "On Wall",
      },
      {
        id: 3,
        name: "On Wall",
      },
    ],
  },
  {
    id: 3,
    type: "Power",
    options: [
      {
        id: 1,
        name: "On Wall",
      },
      {
        id: 2,
        name: "On Wall",
      },
    ],
  },
  {
    id: 4,
    type: "ADA Compliance",
    options: [
      {
        id: 1,
        name: "On Wall",
      },
      {
        id: 2,
        name: "On Wall",
      },
    ],
  },
  {
    id: 5,
    type: "Chilling Capacity",
    options: [
      {
        id: 1,
        name: "On Wall",
      },
      {
        id: 2,
        name: "On Wall",
      },
      {
        id: 3,
        name: "On Wall",
      },
    ],
  },
  {
    id: 6,
    type: "Installation Location",
    options: [
      {
        id: 1,
        name: "Indoor",
      },
      {
        id: 2,
        name: "Outdoor",
      },
      {
        id: 3,
        name: "Indoor + Outdoor",
      },
    ],
  },
];

// const filters = productData?.map((cat) => {
//   return {
//     id: cat?.id,
//     type: cat?.categoryName,
//     options: cat?.productList?.map((p) => {
//       return {
//         id: p?.id,
//         name: p?.mountingType,
//       };
//     }),
//   };
// });

export const meta: MetaFunction = () => {
  return [{title: "Product List"}];
};

export const loader: LoaderFunction = async ({request, params}) => {
  const productsResult = getStringFromUnknown(params.products);
  if (productsResult.success === false) {
    return new Response(null, {status: 404});
  }
  const categoryType = productsResult.ok;

  const categorizedProducts = productData.filter(
    (p) => p.id === categoryType,
  )[0];
  if (categorizedProducts?.productList == undefined) {
    throw new Error("Product List is undefined");
  }

  const loader: LoaderData = {
    products: categorizedProducts?.productList,
  };

  console.log(JSON.stringify(loader));
  return json(loader);
};

export default function ProductList() {
  const {products} = useLoaderData() as LoaderData;
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentProducts, setCurrentProducts] =
    useState<ProductListDTO[]>(products);

  useEffect(() => {
    // setCurrentProducts(
    //   productData?.flatMap((cat) =>
    //     cat?.productList?.filter((prod) => prod.mountingType === products),
    //   ),
    // );
    setCurrentProducts(products);
  }, []);

  console.log(products, currentProducts);

  function toggleFilter() {
    setFilterOpen(!filterOpen);
  }

  return (
    <>
      <main className="relative flex h-screen items-end bg-man-filling-glass bg-cover bg-no-repeat pb-20 pt-[var(--header-height)] text-white md:pb-[120px] xl:min-h-[640px]">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
        <div
          className="container isolate text-center"
          data-aos="fade-down"
        >
          <h5 className="wae-h5-lg font-secondary">
            Did you know? On average we use 5,500 liters of water a day! <br />{" "}
            That is a humungous amount of water!…
          </h5>
        </div>
      </main>

      <section className="py-20 md:py-[120px] 2xl:py-32">
        <div className="container grid gap-10 lg:gap-14 xl:grid-cols-[240px,_1fr]">
          <button
            onClick={toggleFilter}
            title={filterOpen ? "Close Filter" : "Open Filter"}
            className="wae-btn wae-btn-light col-span-full ml-auto gap-3 !rounded-lg px-4 py-3 xl:hidden"
          >
            Filter by {Icons.Filter}
          </button>
          <aside
            className={clsx(
              "fixed inset-0 z-[30] w-full max-w-full overflow-y-auto overflow-x-hidden p-4 shadow-md transition-transform max-lg:bg-black max-lg:pt-[var(--header-height)] sm:max-w-[300px] xl:sticky xl:!translate-x-0 xl:pr-1 xl:shadow-none",
              {
                "translate-x-0": filterOpen,
                "-translate-x-full": !filterOpen,
              },
            )}
          >
            <button
              onClick={toggleFilter}
              title={filterOpen ? "Close Filter" : "Open Filter"}
              className="isolate z-[40] mb-10 ml-auto flex h-10 w-10 items-center justify-center rounded-md border border-white bg-black p-1 text-white xl:hidden"
            >
              {filterOpen ? Icons.Close : Icons.Filter}
            </button>

            <div>
              <Accordion
                classNames={{
                  label: "p-0",
                  control: "p-0",
                  content: "p-0",
                }}
                multiple={true}
              >
                {filters.map((filter) => {
                  return (
                    <Accordion.Item
                      key={filter.id}
                      value={`${filter.id}`}
                      className="mb-5 border-none"
                    >
                      <Accordion.Control className="mb-4 active:bg-transparent max-lg:text-white">
                        {filter.type}
                      </Accordion.Control>
                      <Accordion.Panel>
                        {filter.options.map((option) => {
                          return (
                            <Checkbox
                              key={option.id}
                              label={option.name}
                            />
                          );
                        })}
                      </Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </aside>

          <div className="grid gap-10 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-[72px]">
            {currentProducts?.map((prod, idx) => {
              return (
                <Link
                  to={`/product-details/${prod?.name}`}
                  key={idx}
                  data-aos="fade-in"
                  data-aos-delay={`${idx}00`}
                >
                  <img
                    src={prod?.thumbnailUrl}
                    alt={prod?.name}
                    className="mb-5 aspect-square w-full object-cover"
                  />

                  <div className="text-center uppercase">{prod?.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
