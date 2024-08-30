import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
import {OurProductsSlider, ProjectSlider} from "~/components";
import {ProductList, ProjectList} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {title: "Home"},
    {name: "description", content: "Keeping The Blue Planet Green"},
  ];
};

export default function Index() {
  return (
    <>
      <main className="relative flex h-screen items-center justify-center pb-10">
        <div className="absolute inset-0 -z-[1] h-full w-full">
          <div className="absolute z-[1] h-full w-full bg-gradient-to-b from-black via-transparent to-black"></div>
          <img
            src="/images/covers/earth-in-hands.jpg"
            alt="Hands holding earth"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
        </div>

        <div className="self-end text-center text-white">
          <h1 className="wae-h1 mb-40 font-secondary">
            Keeping The Blue Planet Green
          </h1>

          <p className="mx-auto max-w-[600px] font-normal uppercase">
            Nec massa viverra eget feugiat pellentesque. Feugiat adipiscing
            massa vitae auctor mi massa. Sodales libero viverra cursus sed duis
            luctus nulla. In malesuada.
          </p>
        </div>
      </main>

      <section className="flex min-h-screen items-center justify-center bg-black py-8 text-center text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mb-[100px] mt-10 font-secondary leading-tight">
              Did you know? On average we use 5,500 liters of water a day! That
              is a humungous amount of water!…
            </h2>

            <p className="uppercase">
              <span className="mr-2 inline-block h-4 w-4 rounded-full bg-current align-middle"></span>{" "}
              EXPLORE THE SYSTEM ALL AROUND
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[180px] bg-window-pattern bg-cover bg-no-repeat py-72">
        <section className="container">
          <p className="mb-12 text-sm uppercase">WHO WE ARE</p>

          <div className="mb-8 flex items-center justify-between">
            <h4 className="wae-h4 max-w-[592px] font-secondary">
              We are thought that becomes action. Matter that transforms into
              emotion. Invisible yet concrete values, to give a new meaning to
              an interior place.
            </h4>
            <p className="basis-60 uppercase">
              <strong>We are thought that becomes action.</strong> Matter that
              transforms into emotion. Invisible yet concrete values,{" "}
              <strong>to give a new meaning to an interior place.</strong>
            </p>
          </div>

          <p className="uppercase">
            <span className="mr-2 inline-block h-4 w-4 rounded-full bg-current align-middle"></span>
            You Discover Demo Kitchens
          </p>
        </section>

        <section className="container">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="flex flex-col justify-start md:col-span-8">
              <h3 className="mb-10 font-secondary text-4xl">
                A 100% Made in India
              </h3>
              <p className="mb-10 max-w-[80%] uppercase md:ml-28">
                Like the design, the production of our kitchens also takes place
                entirely within our company and is the result of a process in
                which human qualities are fundamental, together with the quality
                of technologies and materials.
              </p>

              <p className="uppercase">
                <span className="mr-2 inline-block h-4 w-4 rounded-full bg-current align-middle"></span>{" "}
                You discover Doimo Kitchens
              </p>
            </div>
            <div className="md:col-span-4">
              <img
                src="/images/covers/bowl-with-chopsticks.jpg"
                alt="bowl-with-chopsticks"
                width={370}
                height={460}
                className="ml-auto object-cover"
              />
            </div>
          </div>
        </section>

        <OurProductsSlider productList={ProductList} />
      </section>

      <section className="flex flex-col items-center justify-center bg-black py-[180px] text-center text-white">
        <div className="container">
          <div className="mx-auto mb-[180px] max-w-5xl">
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mb-[100px] mt-10 font-secondary leading-tight">
              Projects created by our <br /> customers to draw inspiration from
            </h2>

            <p className="uppercase">
              <span className="mr-2 inline-block h-4 w-4 rounded-full bg-current align-middle"></span>
              You Discover Demo Kitchens
            </p>
          </div>
        </div>
        <ProjectSlider projectList={ProjectList} />
      </section>

      <section className="flex">
        <div className="w-1/2 bg-white px-40 py-36">
          <div className="container">
            <p className="uppercase">LIFE @ WAE</p>

            <div className="my-12 max-w-[360px]">
              <h5 className="wae-h5 mb-5 font-secondary">Join Our Team</h5>
              <p>
                Stay connected with WAE Foundation. Get the latest news,
                updates, and stories delivered straight to your inbox.
              </p>
            </div>

            <button className="h-14 min-w-[200px] rounded-xl bg-black px-4 py-2 tracking-wide text-white">
              Join
            </button>
          </div>
        </div>
        <div className="relative flex w-1/2 flex-col justify-center bg-black bg-opacity-40 bg-water-drop bg-cover bg-bottom bg-no-repeat px-40 py-36 text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="isolate">
            <div className="mb-8">We're looking for</div>
            <Link
              to={"/"}
              className="flex items-center justify-between border-b border-white pb-2 transition-colors hover:bg-gray-800"
            >
              <span className="font-secondary text-2xl">
                Senior Corporate Manager
              </span>
              <span>
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18.5L15 12.5L9 6.5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#e0e0e0] py-40">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="wae-h3 mb-4 font-secondary">
                Get in Touch with Us
              </h3>
              <p className="font-secondary">Talk to our Water Expert</p>

              <div className="mt-10 text-xl">
                <div className="flex">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 flex-shrink-0"
                  >
                    <path
                      d="M11.1737 11.8042C12.1017 13.7371 13.3667 15.5486 14.9689 17.1507C16.571 18.7528 18.3825 20.0178 20.3153 20.9458C20.4816 21.0257 20.5647 21.0656 20.6699 21.0962C21.0437 21.2052 21.5027 21.1269 21.8193 20.9002C21.9083 20.8365 21.9846 20.7602 22.137 20.6078C22.6031 20.1417 22.8362 19.9086 23.0706 19.7562C23.9544 19.1816 25.0938 19.1816 25.9777 19.7562C26.2121 19.9086 26.4451 20.1417 26.9113 20.6078L27.1711 20.8677C27.8797 21.5762 28.234 21.9305 28.4265 22.311C28.8092 23.0678 28.8092 23.9615 28.4265 24.7182C28.234 25.0987 27.8797 25.453 27.1711 26.1616L26.9609 26.3718C26.2548 27.078 25.9017 27.431 25.4216 27.7007C24.889 27.9999 24.0616 28.2151 23.4507 28.2133C22.9001 28.2116 22.5238 28.1048 21.7712 27.8912C17.7267 26.7433 13.9102 24.5773 10.7262 21.3933C7.54224 18.2093 5.37627 14.3929 4.22831 10.3483C4.0147 9.59574 3.9079 9.21944 3.90626 8.66885C3.90444 8.05788 4.11959 7.23056 4.41882 6.69789C4.68848 6.21785 5.04157 5.86476 5.74773 5.1586L5.95791 4.94842C6.6665 4.23983 7.02079 3.88554 7.4013 3.69308C8.15805 3.31032 9.05174 3.31032 9.80848 3.69308C10.189 3.88554 10.5433 4.23983 11.2519 4.94842L11.5117 5.20825C11.9778 5.67439 12.2109 5.90746 12.3633 6.14183C12.938 7.02568 12.938 8.16512 12.3633 9.04898C12.2109 9.28335 11.9778 9.51642 11.5117 9.98256C11.3593 10.135 11.2831 10.2112 11.2193 10.3003C10.9926 10.6168 10.9143 11.0759 11.0233 11.4497C11.054 11.5548 11.0939 11.638 11.1737 11.8042Z"
                      stroke="#697077"
                      strokeOpacity="0.7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <a
                    href="tel:+91120687068"
                    className="mb-6 hover:underline"
                  >
                    +91 120687068
                  </a>
                </div>
                <div className="flex">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 flex-shrink-0"
                  >
                    <path
                      d="M2.6665 9.33325L13.5531 16.9538C14.4346 17.5709 14.8754 17.8795 15.3549 17.999C15.7784 18.1046 16.2213 18.1046 16.6448 17.999C17.1243 17.8795 17.565 17.5709 18.4466 16.9538L29.3332 9.33325M9.0665 26.6666H22.9332C25.1734 26.6666 26.2935 26.6666 27.1491 26.2306C27.9018 25.8471 28.5137 25.2352 28.8972 24.4825C29.3332 23.6269 29.3332 22.5068 29.3332 20.2666V11.7333C29.3332 9.49304 29.3332 8.37294 28.8972 7.51729C28.5137 6.76464 27.9018 6.15272 27.1491 5.76923C26.2935 5.33325 25.1734 5.33325 22.9332 5.33325H9.0665C6.82629 5.33325 5.70619 5.33325 4.85054 5.76923C4.09789 6.15272 3.48597 6.76464 3.10248 7.51729C2.6665 8.37294 2.6665 9.49304 2.6665 11.7333V20.2666C2.6665 22.5068 2.6665 23.6269 3.10248 24.4825C3.48597 25.2352 4.09789 25.8471 4.85054 26.2306C5.70619 26.6666 6.82629 26.6666 9.0665 26.6666Z"
                      stroke="#697077"
                      strokeOpacity="0.7"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div>
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
            <div className="mx-auto">
              <h5 className="mb-5 text-2xl">I am</h5>

              <div className="col grid grid-cols-[repeat(2,200px)] grid-rows-[repeat(2,200px)] gap-5">
                <div className="flex items-center justify-center rounded-xl border border-black">
                  A Corporate
                </div>
                <div className="flex items-center justify-center rounded-xl border border-black">
                  An Architect
                </div>
                <div className="flex items-center justify-center rounded-xl border border-black">
                  A Consultant
                </div>
                <div className="flex items-center justify-center rounded-xl border border-black">
                  Just Curious
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
