import {Link, MetaFunction} from "@remix-run/react";
import {ProjectSlider} from "~/components";
import {Icons, ProductsPageListing, ProjectList} from "~/static";

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
          <div className="mx-auto mt-40 max-w-3xl">
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mt-10 font-secondary leading-tight">
              Did you know? On average we use 5,500 liters of water a day! That
              is a humungous amount of water!…
            </h2>
          </div>
        </div>
      </main>

      <section className="bg-window-pattern bg-cover bg-left bg-no-repeat py-72">
        <section className="container mb-[212px]">
          <p className="mb-12 text-sm uppercase">WHO WE ARE</p>

          <div className="mb-8 flex items-center justify-between">
            <h4 className="wae-h4 max-w-[592px] font-secondary">
              We are thought that becomes action. Matter that transforms into
              emotion. Invisible yet concrete values, to give a new meaning to
              an interior place.
            </h4>
            <p className="basis-60 uppercase">
              <strong className="font-extrabold">
                We are thought that becomes action.
              </strong>{" "}
              Matter that transforms into emotion. Invisible yet concrete
              values,{" "}
              <strong className="font-extrabold">
                to give a new meaning to an interior place.
              </strong>
            </p>
          </div>

          <p className="uppercase">
            <span className="prefix-dot"></span>
            You Discover Demo Kitchens
          </p>
        </section>

        <section>
          <div className="container">
            <div className="wae-gap-lg flex flex-col">
              {ProductsPageListing.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex gap-[110px] even:flex-row-reverse"
                  >
                    <div className="flex-1">
                      <img
                        src="/images/covers/trublu.jpg"
                        alt="TruBlu"
                        className="aspect-square object-cover"
                        width="500"
                        height="500"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="mb-14 flex flex-col gap-10">
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
                        to={"/product"}
                        className="rounded-full border border-black px-5 py-3 transition-colors hover:bg-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-10 flex items-center justify-center py-40 text-center text-black">
          <div className="container">
            <div className="mx-auto max-w-[845px]">
              <h6 className="uppercase">HOW DOES IT WORK?</h6>

              <h2 className="wae-h2 mb-[100px] mt-10 font-secondary leading-tight">
                Once you have chosen the style of the product or its type, let
                yourself be guided by your taste for materials and their
                finishes and by your needs.
              </h2>

              <p className="uppercase">
                <span className="prefix-dot"></span> Design freedom
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <p className="mb-6 text-center text-sm uppercase">Other Products</p>
          </div>
          <ProjectSlider projectList={ProjectList} />
        </section>
      </section>
    </>
  );
}
