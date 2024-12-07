import {Modal} from "@mantine/core";
import {LoaderFunction} from "@remix-run/node";
import {json, MetaFunction, useLoaderData} from "@remix-run/react";
import {ReactNode, useState} from "react";
import {
  ProductImageSlider,
  ProjectSlider,
  TestimonialSlider,
} from "~/components";
import {getStringFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import {Icons, productData, specifications, Temprature} from "~/static";
import {useDisclosure} from "@mantine/hooks";

type LoaderData = {
  id?: string;
  name?: string;
  description?: string | ReactNode;
  mountingType?: string;
  keyPoints?: string[];
  category: string;
  types?: string[];
  image?: string[];
  tempratureOptions?: Array<Temprature>;
  features?: Array<{title: string; description: string}>;
  specifications?: Array<{
    id: number;
    title: string;
    value: string;
    subtitle: string;
  }>;
};

export const meta: MetaFunction = () => {
  return [
    {
      title: "Products Details",
    },
  ];
};

export const loader: LoaderFunction = async ({request, params}) => {
  const productIdResult = getStringFromUnknown(params.product);
  console.log(productIdResult);

  if (productIdResult.success === false) {
    return new Response(null, {status: 404});
  }
  const productName = productIdResult.ok;

  const productDetails = productData
    ?.map((cat) =>
      cat?.productList?.find((prod) => prod.name === productName)
        ? {
            ...cat?.productList?.find((prod) => prod.name === productName),
            category: cat.categoryName,
          }
        : null,
    )
    .filter((product) => product != null);

  if (!productDetails) {
    return new Response(null, {status: 404});
  }
  const loaderData: LoaderData = {
    id: productDetails[0]?.id,
    name: productDetails[0]?.name,
    description: productDetails[0]?.description,
    category: productDetails[0]?.category ?? "",
    mountingType: productDetails[0]?.mountingType,
    keyPoints: productDetails[0]?.keyPoints,
    types: ["Water", "Ice", "Hot"],
    image: productDetails[0]?.images,
    features: productDetails[0]?.features,
    specifications: productDetails[0]?.specifications,
    tempratureOptions: productDetails[0]?.tempratureOptions,
  };

  return json(loaderData);
};

export default function ProductDetails() {
  const [
    isDownloadFormOpen,
    {open: openDownloadForm, close: closeDownloadForm},
  ] = useDisclosure(false);
  const [
    isDownloadSuccessOpen,
    {open: openDownloadSuccess, close: closeDownloadSuccess},
  ] = useDisclosure(false);

  const {
    id,
    name,
    description,
    mountingType,
    keyPoints,
    category,
    types,
    specifications,
    image,
    features,
    tempratureOptions,
  } = useLoaderData() as LoaderData;

  console.log(category);

  return (
    <>
      <main className="flex h-screen items-end bg-man-filling-bottle bg-cover bg-center bg-no-repeat pb-20 pt-[var(--header-height)] text-white md:pb-[120px] xl:min-h-[640px] xl:pb-[140px]">
        <div className="container-lg">
          <div
            className="max-w-3xl"
            // data-aos="fade-down"
          >
            <h6 className="mb-4 text-base font-extrabold uppercase md:text-xl">
              {name}
            </h6>

            <h1 className="font-secondary text-2xl md:text-[32px] md:!leading-normal xl:text-5xl">
              Did you know? On average we use 5,500 liters of water a day! That
              is a humungous amount of water!…
            </h1>
          </div>
        </div>
      </main>

      <section className="py-20 md:py-[120px] xl:py-[180px]">
        <div className="container">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-start">
            <div
              className="flex flex-shrink-0 justify-center md:w-[300px] xl:w-[600px]"
              // data-aos="zoom-in"
            >
              <ProductImageSlider images={image} />
            </div>
            <div
            // data-aos="fade-left"
            >
              <h6 className="mb-5 text-base font-light md:mb-10 xl:mb-[68px] xl:text-2xl">
                {category}
              </h6>

              <div className="mb-6 flex items-center justify-between gap-2">
                <h4 className="text-xl font-extrabold md:text-2xl xl:text-[32px] xl:leading-normal">
                  {mountingType}
                </h4>
              </div>

              <div className="mb-5 text-2xl font-light leading-tight md:mb-8 md:text-[32px] md:leading-relaxed xl:mb-10 xl:text-[40px]">
                {name}
              </div>

              <div className="mb-5 flex items-center gap-4 text-lg md:mb-8 lg:gap-9 xl:mb-10">
                {tempratureOptions?.map((temp) => (
                  <div
                    className="flex flex-col items-center justify-center gap-3"
                    key={temp}
                  >
                    {temp === Temprature.HOT
                      ? Icons.Sun
                      : temp === Temprature.Ambient
                        ? Icons.LiquidDrop
                        : Icons.IceCrystal}
                    <h6 className="text-lg">
                      {temp === Temprature.HOT
                        ? "Hot"
                        : temp === Temprature.Ambient
                          ? "Ambient"
                          : "Cold"}
                    </h6>
                  </div>
                ))}
              </div>

              <div className="mb-4 text-sm uppercase xl:mb-6 xl:max-w-[60%]">
                {description}
              </div>

              {keyPoints && (
                <ul className="mb-10 md:mb-[60px] xl:mb-[75px]">
                  {keyPoints.map((keyPoint, idx) => {
                    return (
                      <li
                        key={idx}
                        className="mb-3 flex items-center text-sm uppercase last:mb-0 xl:text-base"
                      >
                        <div className="mr-2 h-2 w-2 rounded-full bg-black xl:mr-4 xl:h-4 xl:w-4"></div>
                        {keyPoint}
                      </li>
                    );
                  })}
                </ul>
              )}

              <button className="wae-btn !rounded-lg border-black px-6 py-2">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="wae-pt-lg wae-pb-lg bg-black text-white">
        <div className="container">
          <div className="mb-[60px] xl:mb-20">
            <div className="mb-10 text-center font-secondary text-[32px] font-light uppercase leading-normal md:text-left xl:mb-[60px] xl:text-[40px]">
              Features
            </div>
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              {features?.map((feature, idx) => {
                return (
                  <div
                    key={feature.title}
                    className="lg:w-full"
                    data-aos="fade-in"
                    data-aos-delay={`${idx}00`}
                  >
                    <p className="mb-4 font-extralight uppercase xl:mb-5">
                      <span className="prefix-dot"></span>
                      {feature.title}
                    </p>
                    <p className="text-sm font-light leading-tight xl:text-lg">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-[60px] xl:mb-20">
            <div className="mb-10 text-center font-secondary text-[32px] font-light uppercase leading-normal md:text-left xl:mb-[60px] xl:text-[40px]">
              Specifications
            </div>

            <div className="grid grid-cols-2 justify-center gap-10 md:grid-cols-3 md:gap-8 xl:grid-cols-5">
              {specifications?.map((spec, idx) => {
                return (
                  <div
                    key={spec.id}
                    className="lg:w-full"
                    data-aos="fade-in"
                    data-aos-delay={`${idx}00`}
                  >
                    <div className="mb-3 font-secondary text-sm md:mb-4 xl:mb-5 xl:text-base">
                      {spec.title}
                    </div>

                    <div className="mb-3 text-[32px] font-extralight leading-normal md:mb-4 xl:mb-5 xl:text-4xl">
                      {spec.value}
                    </div>

                    <div className="text-sm font-extralight xl:text-base">
                      {spec.subtitle}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mb-[60px] xl:mb-20">
            <div className="mb-10 text-center font-secondary text-[32px] font-light uppercase leading-normal md:text-left xl:mb-[60px] xl:text-[40px]">
              Testimonials
            </div>
            <div>
              <TestimonialSlider />
            </div>
          </div>

          <div>
            <div className="wae-h3 mb-14 text-center font-secondary font-light uppercase md:text-left">
              Downloads
            </div>
            <div>
              <button
                onClick={openDownloadForm}
                className="wae-btn wae-btn-md gap-4 px-6 py-2"
              >
                Download Brochure
                {Icons.Download}
              </button>
              <p className="wae-p mt-8 opacity-60">
                Enter your email address to receive the brochure directly in
                your inbox.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[120px] xl:py-[180px]">
        <div className="mb-10 text-center font-secondary text-sm font-light uppercase md:mb-[60px] xl:mb-20">
          Other Products
        </div>
        <ProjectSlider
          arrows={true}
          productList={productData
            .flatMap((cat) => cat.productList)
            .map((p) => {
              return {
                id: p?.id,
                image: p?.images ? p?.images[0] : "",
                link: `/product-details/${p?.name}`,
                name: p?.name,
              };
            })}
        />
      </section>

      {/* <section className="wae-pt-lg bg-black pb-6 text-white">
        <div className="container gap-4 sm:flex">
          <div className="mb-12 sm:mb-0 sm:w-1/2">
            <div data-aos="fade-in">
              <h3 className="mb-4 font-secondary text-[32px] leading-normal xl:text-[40px]">
                For more info/site assessment
              </h3>
              <p className="font-secondary text-sm xl:text-base">
                Talk to our Water Expert
              </p>

              <div className="mt-10 text-base xl:text-xl">
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
                    href="tel:+91 1204069800"
                    className="mb-6 hover:underline"
                  >
                    +91 1204069800
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
                      href="mailTo:info@waecorp.com"
                      className="block underline hover:no-underline"
                    >
                      info@waecorp.com
                    </a>
                    <a
                      href="mailTo:marketing@waecorp.com"
                      className="block underline hover:no-underline"
                    >
                      marketing@waecorp.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-[440px] bg-opacity-40 sm:w-1/2">
            <form className="w-full">
              <input
                type="text"
                className="wae-input mb-10 placeholder-white"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="wae-input mb-10 placeholder-white"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="tel"
                className="wae-input mb-10 placeholder-white"
                name="contact"
                placeholder="Contact No."
                required
              />
              <input
                type="text"
                className="wae-input mb-10 placeholder-white"
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
      </section> */}

      <Modal
        opened={isDownloadFormOpen}
        onClose={closeDownloadForm}
        withCloseButton={false}
        classNames={{
          body: "bg-black text-white p-8 xl:p-10 border border-[#DDE1E6]/50",
          content: "w-full md:w-[400px] xl:w-[600px]",
        }}
        overlayProps={{
          className: "bg-white/20 backdrop-blur-sm",
        }}
        size={"auto"}
        centered
      >
        <h2 className="mb-10 text-center text-2xl xl:text-[40px] xl:leading-normal">
          Download Brochure
        </h2>

        <form className="w-full">
          <input
            type="email"
            className="wae-input mb-10 placeholder-white"
            name="brochure-email"
            placeholder="Enter Email Address"
            required
          />

          <p className="text-lg text-white/50">
            Enter your email address to receive the brochure directly in your
            inbox.
          </p>

          <button
            className="wae-btn wae-btn-light mt-10 w-full gap-5 py-3 md:mt-[60px]"
            onClick={() => {
              closeDownloadForm();
              openDownloadSuccess();
            }}
          >
            Download {Icons.ArrowRightLong}
          </button>
        </form>
      </Modal>

      <Modal
        opened={isDownloadSuccessOpen}
        onClose={closeDownloadSuccess}
        withCloseButton={false}
        classNames={{
          body: "bg-black text-white p-8 xl:p-10 border border-[#DDE1E6]/50",
          content: "w-full md:w-[400px] xl:w-[600px]",
        }}
        overlayProps={{
          className: "bg-white/20 backdrop-blur-sm",
        }}
        size={"auto"}
        centered
      >
        <h2 className="mb-10 text-center text-2xl xl:text-[40px] xl:leading-normal">
          Brochure Successfully Sent!
        </h2>

        <p className="text-lg text-white/50">
          Please check your email inbox in a few minutes to receive the
          brochure.
        </p>

        <button
          className="wae-btn mt-10 w-full py-3 md:mt-[60px]"
          onClick={closeDownloadSuccess}
        >
          Close
        </button>
      </Modal>
    </>
  );
}
