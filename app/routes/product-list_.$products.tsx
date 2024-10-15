import {Accordion} from "@mantine/core";
import {json, Link, MetaFunction, useLoaderData} from "@remix-run/react";
import {Icons, productData, ProductsPageListing} from "~/static";
import {Checkbox} from "~/components";
import {useEffect, useState} from "react";
import clsx from "clsx";
import {LoaderFunction} from "@remix-run/node";
import {getStringFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";

type LoaderData = {
  products: string;
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

  const loader: LoaderData = {
    products: categoryType,
  };

  console.log(JSON.stringify(loader));
  return json(loader);
};

export default function ProductList() {
  const {products} = useLoaderData() as LoaderData;
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    setCurrentProducts(
      productData?.flatMap((cat) =>
        cat?.productList?.filter((prod) => prod.mountingType === products),
      ),
    );
  }, []);

  console.log(products, currentProducts);

  function toggleFilter() {
    setFilterOpen(!filterOpen);
  }

  return (
    <>
      <main className="relative flex min-h-[600px] items-end bg-washing-hands bg-cover bg-no-repeat pb-32 pt-[var(--header-height)] text-white">
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
      <section className="py-16 2xl:py-32">
        <button
          onClick={toggleFilter}
          title={filterOpen ? "Close Filter" : "Open Filter"}
          className="fixed bottom-6 right-6 isolate z-[40] flex h-10 w-10 items-center justify-center rounded-md border border-white bg-black p-1 text-white sm:hidden"
        >
          {filterOpen ? Icons.Close : Icons.Filter}
        </button>
        <div className="container grid gap-8 sm:grid-cols-[240px,_1fr] lg:gap-14">
          <aside
            aria-expanded={filterOpen ? "true" : "false"}
            className={clsx(
              "fixed inset-0 top-[var(--header-height)] z-[30] w-full max-w-[320px] overflow-y-auto overflow-x-hidden bg-white p-6 shadow-md transition-transform sm:sticky sm:top-[var(--header-height)] sm:h-screen sm:max-h-[700px] sm:!translate-x-0 sm:pr-1 sm:shadow-none",
              {
                "translate-x-0": filterOpen,
                "-translate-x-full": !filterOpen,
              },
            )}
          >
            <div>
              <h6 className="mb-6 font-extrabold">Filter By</h6>
            </div>

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
                      value={`${filter.id}`}
                      className="mb-5 border-none"
                    >
                      <Accordion.Control className="mb-4">
                        {filter.type}
                      </Accordion.Control>
                      <Accordion.Panel>
                        {filter.options.map((option) => {
                          return <Checkbox label={option.name} />;
                        })}
                      </Accordion.Panel>
                    </Accordion.Item>
                  );
                })}
              </Accordion>
            </div>
          </aside>

          <div className="grid grid-cols-2 gap-3 sm:gap-8 2xl:grid-cols-3 2xl:gap-[72px]">
            {currentProducts?.map((prod, idx) => {
              return (
                <Link
                  to={`/product-details/${prod?.name}`}
                  key={idx}
                  data-aos="fade-in"
                  data-aos-delay={`${idx}00`}
                >
                  <img
                    src={prod?.images[0]}
                    alt={prod?.name}
                    className="mb-1 aspect-square object-cover sm:mb-6"
                  />

                  <div className="wae-h6-lg text-center uppercase">
                    {prod?.name}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
