import {MetaFunction} from "@remix-run/react";
import {ProductImageSlider, ProjectSlider} from "~/components";
import {Icons, ProductImageSliderData, ProductList} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Products Details",
    },
  ];
};

export default function ProductDetails() {
  return (
    <>
      <main className="flex min-h-[500px] items-center bg-product-details-banner bg-cover bg-no-repeat pb-12 pt-[var(--header-height)] text-white xl:min-h-screen xl:bg-center">
        <div className="container-lg">
          <div className="max-w-3xl">
            <h6 className="wae-h6 mb-4 font-extrabold uppercase">
              NEPTUNE DUO
            </h6>

            <h1 className="wae-h3-lg font-secondary !leading-normal">
              Did you know? On average we use 5,500 liters of water a day! That
              is a humungous amount of water!…
            </h1>
          </div>
        </div>
      </main>

      <section className="wae-pt-lg wae-pb-lg">
        <div className="container">
          <div className="flex flex-col items-center gap-10 xl:flex-row xl:items-start xl:justify-start">
            <div className="flex max-w-[600px] flex-shrink-0 justify-center">
              <ProductImageSlider images={ProductImageSliderData} />
            </div>
            <div>
              <h6 className="wae-h6-lg mb-5 font-light md:mb-10">
                Ligature-resistant
              </h6>

              <div className="mb-6 flex items-center justify-between gap-2">
                <h4 className="wae-h4 font-extrabold uppercase">NEPTUNE DUO</h4>

                <div className="flex items-center gap-5">
                  {Icons.Sun}
                  {Icons.IceCrystal}
                  {Icons.LiquidDrop}
                </div>
              </div>

              <div className="wae-h3 mb-5 font-light leading-tight md:mb-10">
                Shallow, safe, surface-mounted ligature-resistant drinking water
                tap.
              </div>

              <div className="mb-5 flex items-center gap-4 text-lg md:mb-10">
                <span>ProCore</span> <span>- DryChill</span>
                <span> - Totality</span>
              </div>

              <p className="mb-10 text-sm uppercase md:mb-20">
                Our planet and its globalizing economy face a worldwide resource
                challenge. Survival in the long run presents a new set of
                leadership challenges for both business and public institutions
                to take on the impediments of coupling economic growth with the
                millennium sustainable development goals. for both business and
                public institutions to take on the impediments of coupling
                economic growth with the millennium sustainable development
                goals
              </p>

              <button className="wae-btn wae-btn-pill border-black px-6 py-2">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg bg-black text-white">
        <div className="container-lg">
          <div className="wae-h3 mb-14 text-center font-light lg:text-left">
            Specifications
          </div>

          <div className="mb-20 flex flex-wrap items-start justify-center gap-8 max-sm:justify-start lg:flex-nowrap">
            <div className="lg:w-full">
              <div className="mb-5 font-extralight">Height</div>

              <div className="wae-h2 mb-5">1690mm</div>

              <div className="font-extralight">World-first design</div>
            </div>

            <div className="lg:w-full">
              <div className="mb-5 font-extralight">Chilled temperature</div>

              <div className="wae-h2 mb-5">2°C</div>

              <div className="font-extralight">Maximum 12oC</div>
            </div>

            <div className="lg:w-full">
              <div className="mb-5 font-extralight">Hot temperature</div>

              <div className="wae-h2 mb-5">69°C</div>

              <div className="font-extralight">Degrees celsius</div>
            </div>

            <div className="lg:w-full">
              <div className="mb-5 font-extralight">Chilled capacity</div>

              <div className="wae-h2 mb-5">80L/h</div>

              <div className="font-extralight">Litres per hour</div>
            </div>

            <div className="lg:w-full">
              <div className="mb-5 font-extralight">Hot capacity</div>

              <div className="wae-h2 mb-5">16L/h</div>

              <div className="font-extralight">Litres per hour</div>
            </div>
          </div>

          <div className="flex justify-center">
            <a
              href="/"
              download
              className="wae-btn wae-btn-pill wae-btn-md gap-4 px-6 py-2"
            >
              Download Brochure
              {Icons.Download}
            </a>
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg">
        <h6 className="mb-6 text-center text-sm uppercase">Other Products</h6>
        <ProjectSlider
          projectList={ProductList.map((p) => {
            delete p.name;
            return p;
          })}
        />
      </section>

      <section className="wae-pt-lg bg-black pb-6 text-white">
        <div className="container gap-4 sm:flex">
          <div className="mb-12 sm:mb-0 sm:w-1/2">
            <div className="mb-12 max-w-[360px]">
              <h3 className="wae-h3 mb-5 font-secondary">
                For more info/site assessment
              </h3>
            </div>

            <div className="mt-10 text-xl">
              <p className="mb-8">Talk to our Water Expert</p>
              <div className="flex">
                {Icons.Dialer}
                <a
                  href="tel:+91120687068"
                  className="mb-6 ml-3 hover:underline"
                >
                  +91 120687068
                </a>
              </div>
              <div className="flex">
                {Icons.Envelope}

                <div className="ml-3">
                  <a
                    href="mailTo:xyzwae@gmail.com"
                    className="block hover:underline"
                  >
                    xyz@gmail.com
                  </a>
                  <a
                    href="mailTo:xyzwae@gmail.com"
                    className="block hover:underline"
                  >
                    xyzwae@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[440px] bg-opacity-40 sm:w-1/2">
            <form className="w-full">
              <input
                type="text"
                className="wae-input mb-10"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="wae-input mb-10"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                className="wae-input mb-10"
                name="contact"
                placeholder="Contact No."
                required
              />
              <input
                type="text"
                className="wae-input mb-10"
                name="company"
                placeholder="Company Name"
              />

              <button
                type="submit"
                className="wae-btn wae-btn-lg mt-6 w-full md:mt-12"
              >
                Contact Us {Icons.ChevronRight}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
