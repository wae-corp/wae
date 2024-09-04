import {Accordion} from "@mantine/core";
import {Link, MetaFunction} from "@remix-run/react";
import {ProductsPageListing} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Product List",
    },
  ];
};

export default function ProductList() {
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
      <section className="py-32">
        <div className="container grid grid-cols-[240px,_1fr] gap-14">
          <aside className="sticky top-[var(--header-height)] max-h-[600px] overflow-y-auto">
            <h6 className="mb-6 font-extrabold">Filter By</h6>
            <div>
              <Accordion
                classNames={{
                  label: "p-0",
                  control: "p-0",
                  content: "p-0",
                }}
              >
                <Accordion.Item value="filter-category">
                  <Accordion.Control>Category</Accordion.Control>
                  <Accordion.Panel>Hey</Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </aside>
          <div className="grid gap-[72px] lg:grid-cols-2 2xl:grid-cols-3">
            {ProductsPageListing.map((_, idx) => {
              return (
                <Link
                  to={"/product-details"}
                  key={idx}
                >
                  <img
                    src="/images/covers/trublu.jpg"
                    alt="Trublu"
                    className="mb-6 aspect-square object-cover"
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
