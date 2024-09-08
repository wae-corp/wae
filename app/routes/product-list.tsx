import {Accordion} from "@mantine/core";
import {Link, MetaFunction} from "@remix-run/react";
import {Icons, ProductsPageListing} from "~/static";
import {Checkbox} from "~/components";
import {useState} from "react";
import clsx from "clsx";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Product List",
    },
  ];
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

export default function ProductList() {
  const [filterOpen, setFilterOpen] = useState(false);

  function toggleFilter() {
    setFilterOpen(!filterOpen);
  }

  return (
    <>
      <main className="relative flex min-h-[600px] items-end bg-washing-hands bg-cover bg-no-repeat pb-32 pt-[var(--header-height)] text-white">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
        <div className="container isolate text-center">
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
              "fixed inset-0 z-[30] w-full max-w-[320px] overflow-y-auto overflow-x-hidden bg-white p-6 shadow-md transition-transform sm:sticky sm:top-[var(--header-height)] sm:h-screen sm:max-h-[700px] sm:!translate-x-0 sm:pr-1 sm:shadow-none",
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
            {ProductsPageListing.map((_, idx) => {
              return (
                <Link
                  to={"/product-details"}
                  key={idx}
                >
                  <img
                    src="/images/covers/trublu.jpg"
                    alt="Trublu"
                    className="mb-1 aspect-square object-cover sm:mb-6"
                  />

                  <div className="wae-h6-lg text-center uppercase">ROBUSTO</div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
