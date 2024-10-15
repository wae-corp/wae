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
        <div
          className="container pb-[60px] pt-[90px] text-center"
          data-aos="fade-down"
        >
          <h2 className="wae-h2 mb-4 font-secondary">Join Our Team</h2>
          <p className="wae-h6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo
            auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat
            suscipit, ac imperdiet nibh facilisis.
          </p>
        </div>
        <img
          src="/images/covers/washing-hands.jpg"
          alt="Washing Hands"
          width={1920}
          height={450}
          className="h-40 object-cover md:h-56 xl:h-auto"
        />
      </main>

      <section className="wae-pb-lg pt-[60px]">
        <div className="container">
          <div className="flex flex-col items-start gap-[60px] lg:flex-row">
            <div
              className="left-0 top-[var(--header-height)] flex-shrink-0 lg:sticky"
              data-aos="right"
            >
              <div className="mb-6 uppercase">
                <span className="prefix-dot"></span>
                {job} / on-site
              </div>
              <h5 className="wae-h5 mb-6 font-secondary">
                Senior Corporate Manager
              </h5>
              <button className="wae-btn min-w-[200px] gap-2 border-black">
                Apply Now {Icons.ArrowTopRight}
              </button>
            </div>
            <div data-aos="fade-down">
              <div className="mb-10 lg:mb-[60px]">
                <h6 className="wae-h6 mb-5 font-extrabold">Job Description</h6>
                <p className="wae-h6">
                  dolor sit amet, consectetur adipiscing elit. Ut a justo
                  auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut
                  erat suscipit, ac imperdiet nibh facilisis. Sed tincidunt enim
                  quis aliquam ornare. Vivamus ut urna elementum, auctor purus
                  sit amet, vulputate ipsum. Ut dictum semper arcu, non vehicula
                  enim cursus et.
                </p>
              </div>
              <div className="mb-10 lg:mb-[60px]">
                <h6 className="wae-h6 mb-5 font-extrabold">Qualification</h6>
                <ul className="wae-h6">
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
                <h6 className="wae-h6 mb-5 font-extrabold">Responsibility</h6>
                <ul className="wae-h6">
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
                <h6 className="wae-h6 mb-5 font-extrabold">Skills</h6>
                <ul className="flex flex-wrap items-start gap-2">
                  <li className="wae-h6 rounded-lg bg-[#e0e0e0] px-3 py-2">
                    Design
                  </li>
                  <li className="wae-h6 rounded-lg bg-[#e0e0e0] px-3 py-2">
                    Prototyping
                  </li>
                  <li className="wae-h6 rounded-lg bg-[#e0e0e0] px-3 py-2">
                    Management
                  </li>
                  <li className="wae-h6 rounded-lg bg-[#e0e0e0] px-3 py-2">
                    Documentation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
