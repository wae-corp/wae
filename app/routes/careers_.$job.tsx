import {LoaderFunction} from "@remix-run/node";
import {json, useLoaderData} from "@remix-run/react";
import {useEffect, useState} from "react";
import {getStringFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import {Icons, productData} from "~/static";

type LoaderData = {
  job: string;
};

export const loader: LoaderFunction = async ({request, params}) => {
  const jobTypeResult = getStringFromUnknown(params.job);
  if (jobTypeResult.success === false) {
    return new Response(null, {status: 404});
  }
  const jobType = jobTypeResult.ok;

  const loader: LoaderData = {
    job: jobType,
  };
  console.log(JSON.stringify(loader));
  return json(loader);
};

export default function Job() {
  const {job} = useLoaderData() as LoaderData;

  return (
    <>
      <main className="mt-[var(--header-height)]">
        <div className="container py-10 text-center md:pb-[60px] md:pt-[90px]">
          <h2
            className="mb-4 font-secondary text-[32px] leading-normal xl:text-[54px]"
            data-aos="fade-down"
          >
            Join Our Team
          </h2>
          <p className="text-sm xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo
            auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat
            suscipit, ac imperdiet nibh facilisis.
          </p>
        </div>
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/44dd4192-0be3-4c9d-3e9b-07a71c1bb300/public"
          alt="Washing Hands"
          width={1920}
          height={450}
          className="h-[200px] object-cover md:h-56 xl:h-auto"
        />
      </main>

      <section className="wae-pb-lg pt-10 md:pt-[60px]">
        <div className="container">
          <div className="flex flex-col items-start gap-10 md:gap-[60px] lg:flex-row">
            <div
              className="left-0 top-[var(--header-height)] flex-shrink-0 lg:sticky"
              data-aos="right"
            >
              <div className="mb-6 uppercase">
                <span className="prefix-dot"></span>
                {job} / on-site
              </div>
              <h5 className="font-secondary text-xl">
                Senior Corporate Manager
              </h5>
              <button className="wae-btn mt-5 min-w-[200px] gap-2 border-black max-sm:hidden">
                Apply Now {Icons.ArrowTopRight}
              </button>
            </div>
            <div
            // data-aos="fade-down"
            >
              <div className="mb-10 lg:mb-[60px]">
                <h6 className="mb-5 text-xl font-extrabold md:text-base">
                  Job Description
                </h6>
                <p className="text-sm md:text-base">
                  dolor sit amet, consectetur adipiscing elit. Ut a justo
                  auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut
                  erat suscipit, ac imperdiet nibh facilisis. Sed tincidunt enim
                  quis aliquam ornare. Vivamus ut urna elementum, auctor purus
                  sit amet, vulputate ipsum. Ut dictum semper arcu, non vehicula
                  enim cursus et.
                </p>
              </div>
              <div className="mb-10 lg:mb-[60px]">
                <h6 className="mb-5 text-xl font-extrabold md:text-base">
                  Qualification
                </h6>
                <ul className="text-sm md:text-base">
                  <li className="mb-3 last:mb-0">
                    - Ut ipsum lectus, auctor non nisl sed, imperdiet feugiat
                    nulla. Integer placerat dui laoreet nisi posuere, vehicula
                    volutpat{" "}
                  </li>
                  <li className="mb-3 last:mb-0">
                    - Ut ipsum lectus, auctor non nisl sed, imperdiet feugiat
                    nulla. Integer placerat dui laoreet nisi posuere, vehicula
                    volutpat{" "}
                  </li>
                  <li className="mb-3 last:mb-0">
                    - Ut ipsum lectus, auctor non nisl sed, imperdiet feugiat
                    nulla. Integer placerat dui laoreet nisi posuere, vehicula
                    volutpat{" "}
                  </li>
                </ul>
              </div>
              <div className="mb-10 lg:mb-[60px]">
                <h6 className="mb-5 text-xl font-extrabold md:text-base">
                  Responsibility
                </h6>
                <ul className="text-sm md:text-base">
                  <li className="mb-3 last:mb-0">
                    - Ut ipsum lectus, auctor non nisl sed, imperdiet feugiat
                    nulla. Integer placerat dui laoreet nisi posuere, vehicula
                    volutpat{" "}
                  </li>
                  <li className="mb-3 last:mb-0">
                    - Ut ipsum lectus, auctor non nisl sed, imperdiet feugiat
                    nulla. Integer placerat dui laoreet nisi posuere, vehicula
                    volutpat{" "}
                  </li>
                  <li className="mb-3 last:mb-0">
                    - Ut ipsum lectus, auctor non nisl sed, imperdiet feugiat
                    nulla. Integer placerat dui laoreet nisi posuere, vehicula
                    volutpat{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="mb-5 text-xl font-extrabold md:text-base">
                  Skills
                </h6>
                <ul className="flex flex-wrap items-start gap-2">
                  <li className="rounded-lg bg-[#e0e0e0] px-3 py-2 text-sm">
                    Design
                  </li>
                  <li className="rounded-lg bg-[#e0e0e0] px-3 py-2 text-sm">
                    Prototyping
                  </li>
                  <li className="rounded-lg bg-[#e0e0e0] px-3 py-2 text-sm">
                    Management
                  </li>
                  <li className="rounded-lg bg-[#e0e0e0] px-3 py-2 text-sm">
                    Documentation
                  </li>
                </ul>
                <button className="wae-btn mt-[60px] w-full gap-2 border-black py-3 md:hidden">
                  Apply Now {Icons.ArrowTopRight}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
