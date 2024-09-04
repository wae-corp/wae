import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
import {ProjectSlider} from "~/components";
import {Icons, ProductsPageListing, ProjectList} from "~/static";

export const meta: MetaFunction = () => {
  return [{title: "Browse Products"}];
};

export default function BrowseProducts() {
  return (
    <>
      <main className="relative flex min-h-screen items-center bg-washing-hands bg-cover bg-bottom bg-no-repeat pt-[var(--header-height)] text-white">
        <div className="from- absolute inset-0 bg-gradient-to-t from-black to-[rgba(0,0,0,.6)]"></div>
        <div className="container isolate text-center">
          <h6 className="wae-h6 mb-10 font-extrabold uppercase">
            Drinking Water Solutions
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
            className="wae-btn wae-btn-pill wae-btn-md border-white px-6"
          >
            View All Products
          </Link>
        </div>
      </main>

      <section className="wae-pt-md wae-pb-md bg-black text-white">
        <div className="container flex items-center">
          <div className="flex gap-8">
            <div className="flex flex-col justify-start md:col-span-8">
              <h3 className="wae-h4 mb-10 font-secondary">
                Drinking Water Solutions
              </h3>
              <p className="mb-10 max-w-[80%] uppercase md:ml-28">
                Life at WAE is vibrant and inspiring. Our culture is a tapestry
                of collaboration, inclusivity, and continuous learning. Here,
                your professional growth is as important as your personal
                well-being. Enjoy a work environment that fosters creativity,
                supports balance, and celebrates every success. At WAE, your
                journey is our story.
              </p>
              <p className="uppercase">
                <span className="prefix-dot"></span> You discover Life at WAE
              </p>
            </div>
            <div className="flex-shrink-0 md:max-w-[400px]">
              <p className="wae-h6-lg uppercase">
                WAE is more than a job - it's a journey. We offer competitive
                benefits, a supportive and inclusive community, and countless
                opportunities for personal and professional growth. Join us and
                be part of a team that values your contributions and helps you
                reach your full potential. Let's create a brighter future
                together.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg">
        <section>
          <div className="container mb-20 text-center">
            <h6 className="mb-12 font-light">Products</h6>

            <h2 className="wae-h2 mb-12 font-secondary">
              Browse by Product Type
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              You discover Doimo Kitchens
            </p>
          </div>

          <ProjectSlider projectList={ProjectList} />

          <div className="container mt-20 flex items-center">
            <div className="flex gap-8">
              <div className="flex flex-col justify-start md:col-span-7">
                <p className="max-w-[80%] uppercase">
                  Life at WAE is vibrant and inspiring. Our culture is a
                  tapestry of collaboration, inclusivity, and continuous
                  learning. Here, your professional growth is as important as
                  your personal well-being. Enjoy a work environment that
                  fosters creativity, supports balance, and celebrates every
                  success. At WAE, your journey is our story.
                </p>
              </div>
              <div className="flex-shrink-0 md:max-w-[400px]">
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
          <div className="container mb-20 text-center">
            <h6 className="mb-12 font-light">Products</h6>

            <h2 className="wae-h2 mb-12 font-secondary">
              Browse by Application
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              You discover Doimo Kitchens
            </p>
          </div>

          <ProjectSlider projectList={ProjectList} />

          <div className="wae-pt-lg container max-w-[1080px]">
            <div className="flex flex-col gap-[120px]">
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
      </section>
    </>
  );
}
