import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {notifications} from "@mantine/notifications";
import type {ActionFunction, MetaFunction} from "@remix-run/node";
import {Form, json, useActionData, useSubmit} from "@remix-run/react";
import clsx from "clsx";
import {useEffect, useState} from "react";
import {BrandSlider, FullscreenSlider, OurProductsSlider} from "~/components";
import {indianPhoneNumberValidationRegex} from "~/global--common-typescript/typeDefinations";
import {
  ActionData,
  EnquiryType as EnquiryTypeOne,
} from "~/backend/typeDefinations";
import {Icons, ProductList} from "~/static";
import {getErrorFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import {appendLandingLeadIntoSheet} from "~/backend/googleSheet.server";
import {z} from "zod";
import {Counter} from "~/components/Counter";

type EnquiryType = "Corporate" | "Architect" | "Consultant" | "Curious" | null;

type ErrorObject = {
  name?: string | null;
  companyName?: string | null;
  contact?: string | null;
  // city?: string | null;
  message?: string | null;
};

const sliderItemList = [
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/25cd406c-a8e7-449b-30ec-4824b6426800/public",
    title: "Keeping The Blue Planet Green",
    // subtitle: "NEPTUNE DUO",
    align: "center",
    isButton: false,
    isHeadingMax: true,
  },
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/25cd406c-a8e7-449b-30ec-4824b6426800/public",
    title: "Keeping The Blue Planet Green",
    subtitle: "NEPTUNE DUO",
    align: "end",
    isButton: true,
    isHeadingMax: false,
  },
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c4a6698c-b208-4a19-0de1-33dace0f1200/public",
    title:
      "Did you know? On average we use 5,500 liters of water a day! That is a humungous amount of water!…",
    subtitle: "NEPTUNE DUO",
    align: "center",
    isButton: true,
    isHeadingMax: false,
  },
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f96667c7-d0bb-48fe-9108-a8420e88dd00/public",
    title:
      "Did you know? On average we use 5,500 liters of water a day! That is a humungous amount of water!…",
    subtitle: "NEPTUNE DUO",
    align: "center",
    isButton: true,
    isHeadingMax: false,
  },
];

export const meta: MetaFunction = () => {
  return [
    {title: "Home"},
    {name: "description", content: "Keeping The Blue Planet Green"},
  ];
};

export const action: ActionFunction = async ({request}) => {
  let error: string | null = null;
  try {
    const formData = await request.formData();

    const formValues = {
      name: formData.get("name"),
      companyName: formData.get("companyName"),
      contact: formData.get("contact"),
      message: formData.get("message"),
      enquirer: formData.get("enquiryFor"),
    };

    const leadSchema = z.object({
      name: z.string().min(1, {message: "First Name is required"}),
      companyName: z.string().min(1, {message: "Company Name is required"}),
      contact: z
        .string()
        .regex(/^[0-9]{10}$/, {message: "Invalid contact number"}),
      message: z.string().min(1, {message: "Message cannot be empty"}),
      enquirer: z.nativeEnum(EnquiryTypeOne),
    });

    const parsedData = leadSchema.safeParse(formValues);

    if (!parsedData.success) {
      throw parsedData.error;
    }

    const response = await appendLandingLeadIntoSheet(parsedData.data);
    if (!response.success) {
      throw response.err;
    }
    console.log("Lead has been added to the sheet successfully");
    return {
      status: 200,
      body: JSON.stringify({message: "Action executed successfully"}),
    };
  } catch (_error) {
    const error_ = getErrorFromUnknown(_error);
    error = error_.message;

    console.log(
      "🤡 ~ file: landing-page-lead.tsx:39 ~ constaction:ActionFunction= ~ error:",
      error,
    );

    const actionData: ActionData = {
      error,
    };
    return json(actionData);
  }
};

export default function Index() {
  const [enquiryFor, setEnquiryFor] = useState<EnquiryType>(null);
  const [errors, setErrors] = useState<ErrorObject>({
    name: null,
    companyName: null,
    contact: null,
    message: null,
  });
  const actionData = useActionData() as ActionData;
  const submit = useSubmit();
  useEffect(() => {
    if (actionData != null) {
      if (actionData.error != null) {
        notifications.show({
          title: "Error",
          message: actionData.error,
          color: "red",
          icon: (
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{color: "red", fontSize: "18px"}}
            />
          ),
        });
      } else {
        notifications.show({
          title: "Success",
          message: "Form submitted successfully",
          color: "green",
          icon: (
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{color: "green", fontSize: "18px"}}
            />
          ),
        });
        const form = document.querySelector("form") as HTMLFormElement;
        if (form) {
          form.reset();
        }
        setEnquiryFor(null);
      }
    }
  }, [actionData]);

  const validateForm = (formData: FormData) => {
    const name = formData.get("name") as string;
    const companyName = formData.get("companyName") as string;
    const contact = formData.get("contact") as string;
    const message = formData.get("message") as string;
    const newErrors = {
      name: name ? null : "Name is required",
      companyName: companyName ? null : "Company Name is required",
      contact: contact
        ? indianPhoneNumberValidationRegex.test(contact)
          ? null
          : "Invalid contact number"
        : "Contact is required",
      message: message
        ? message.length !== 0
          ? null
          : "Message cannot be empty"
        : "Message is required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (enquiryFor) {
      formData.append("enquiryFor", enquiryFor);
    }
    if (validateForm(formData)) {
      submit(formData, {method: "post"});
    }
  };

  const specifications = [
    {
      id: 1,
      title: 1012120.25,
      details: "Tonnes CO2 Emissions Saved",
    },
    {
      id: 2,
      title: 12185.43,
      details: "million gallons Water Saved",
    },
    {
      id: 3,
      title: 22253.65,
      details: "Tonnes Plastic Removed",
    },
  ];

  return (
    <>
      <FullscreenSlider items={sliderItemList} />
      {/* <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center justify-center text-center text-white">
              {Icons.ArrowDown}
              Scroll
            </div> */}
      <section className="bg-black py-12">
        <div
          className="flex flex-col items-center justify-center text-center text-white"
          // data-aos="fade-down"
        >
          {Icons.ArrowDown}
          <p className="wae-p pt-2">Scroll</p>
        </div>
      </section>

      <section className="flex min-h-screen items-center justify-center bg-black py-8 text-center text-white">
        <div className="container">
          <div
            className="mx-auto max-w-4xl"
            data-aos="fade-up"
          >
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mb-10 mt-10 font-secondary !leading-none lg:mb-[100px]">
              WAE embraces a commitment to sustainability, ensuring our blue
              planet stays green for future generations. By championing
              eco-friendly practices, we harmonize progress with nature's
              preservation.
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span> EXPLORE SUSTAINABILITY
            </p>
          </div>
        </div>
      </section>

      <section className="wae-gap-lg flex flex-col bg-window-pattern bg-cover bg-no-repeat py-20 lg:py-[180px]">
        <section className="container">
          <p
            className="mb-12 text-sm uppercase"
            // data-aos="fade-right"
          >
            WHO WE ARE
          </p>

          <div className="flex flex-col items-center justify-between lg:mb-8 lg:flex-row">
            <h4
              className="wae-h4 mb-12 font-secondary lg:mb-0"
              // data-aos="fade-right"
            >
              WAE is an activist company passionately committed to protecting
              our most vital resource—water. We advocate for sustainable
              development and implement innovative water solutions that balance
              human needs with environmental stewardship. Our mission is to
              ensure that every drop is preserved, cherished, and used
              responsibly, paving the way for a future where water
              sustainability is at the heart of global progress.
            </h4>
          </div>

          <p
            className="uppercase"
            data-aos="fade-right"
          >
            <span className="prefix-dot"></span>
            You Discover Demo Kitchens
          </p>
        </section>

        <section className="container">
          <div className="flex flex-col gap-8 xl:flex-row xl:gap-[120px]">
            <div>
              <h3 className="wae-h4 mb-10 font-secondary">Made in India</h3>
              <p
                className="mb-10 uppercase md:ml-28 xl:max-w-[80%]"
                // data-aos="fade-right"
              >
                WAE proudly represents India's spirit of innovation, combining
                traditional wisdom with advanced technology to create solutions
                that drive sustainable progress. Our 'Made in India' approach is
                about more than just products—it's about building a better
                future for communities and showcasing the true potential of
                Indian ingenuity on a global scale.
              </p>
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="200"
              data-aos-duration="500"
              className="flex-shrink-0 pl-8 xl:max-w-[400px] xl:pl-0"
            >
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dbf8595a-24c0-49f4-883a-0692dd6a8500/public"
                alt="gray-meshed-backdrop"
                width={370}
                height={460}
                className="ml-auto object-cover md:mr-auto xl:mr-0"
              />
            </div>
          </div>
        </section>

        <section className="container">
          <OurProductsSlider productList={ProductList} />
        </section>
      </section>

      <section className="wae-pt-lg wae-pb-lg bg-black text-center text-white">
        <div className="container">
          <div
            className="wae-mb-lg mx-auto max-w-5xl"
            data-aos="fade-down"
          >
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mb-10 mt-10 font-secondary !leading-none lg:mb-[100px]">
              WAE leads transformative projects and develops cutting-edge
              purification systems, all aimed at ensuring a sustainable future.
            </h2>

            <p className="uppercase">
              <span className="prefix-dot"></span>
              DISCOVER SUSTAINABILITY
            </p>
          </div>

          <div className="mb-20 flex flex-col flex-wrap justify-center gap-8 max-sm:items-center lg:flex-nowrap xl:flex-row">
            {specifications.map((spec, idx) => {
              return (
                <div
                  key={spec.id}
                  className="lg:w-full"
                  data-aos="fade-in"
                  data-aos-delay={`${idx}00`}
                >
                  <div className="mb-5 font-secondary text-4xl md:text-5xl xl:text-[64px]">
                    {/* {spec.title} */}
                    <Counter
                      end={spec.title}
                      duration={1}
                      separator=","
                      decimals={2}
                      decimal="."
                    />
                  </div>

                  <div className="font-extralight uppercase">
                    {spec.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-20 xl:mt-60">
          <BrandSlider
            brandsList={[
              "/images/logos/cbre.png",
              "/images/logos/samsung.png",
              "/images/logos/netflix.png",
              "/images/logos/google.png",
              "/images/logos/cbre.png",
              "/images/logos/samsung.png",
              "/images/logos/netflix.png",
              "/images/logos/google.png",
            ]}
          />
        </div>
      </section>

      <section className="wae-pb-lg wae-pt-lg bg-man-in-shadow bg-cover bg-no-repeat text-white 2xl:min-h-screen">
        <div className="container">
          <div className="flex flex-col gap-8 lg:w-full lg:flex-row lg:justify-between lg:gap-[140px]">
            <div
            // data-aos="fade-right"
            >
              <h3 className="wae-h4 mb-10 font-secondary">Life @ wae</h3>
              <div className="flex items-center gap-4">
                <div className="prefix-dot"></div>
                <p className="uppercase">Explore Careers</p>
              </div>
            </div>
            <div
              // data-aos="fade-left"
              className="flex-shrink-0 lg:max-w-[400px]"
            >
              <p className="wae-h6 uppercase">
                Life at WAE is all about bringing your whole self to work. Our
                diverse and inclusive culture thrives on the unique perspectives
                of our team, making every day an opportunity to learn, connect,
                and grow together. It’s a place where your ideas shine, your
                voice is heard, and you feel right at home no matter where
                you’re from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="md:flex">
        <div className="bg-white py-20 md:w-1/2 md:px-14 md:py-20 xl:px-40 xl:py-36">
          <div
            className="container"
            data-aos="fade-in"
          >
            <p className="uppercase">LIFE @ WAE</p>

            <div className="my-12 max-w-[360px]">
              <h5 className="wae-h5 mb-5 font-secondary">Join Our Team</h5>
              <p>
                Stay connected with WAE Foundation. Get the latest news,
                updates, and stories delivered straight to your inbox.
              </p>
            </div>

            <button className="wae-btn wae-btn-md wae-btn-dark min-w-[200px]">
              Join
            </button>
          </div>
        </div>
        <div className="relative flex flex-col justify-center bg-black bg-opacity-40 bg-water-drop bg-cover bg-bottom bg-no-repeat py-36 text-white md:w-1/2 md:px-14 md:py-28 xl:px-32 xl:py-28 2xl:px-40 2xl:py-36">
          <div className="container">
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div
              className="isolate"
              data-aos="fade-in"
            >
              <div className="mb-8 text-sm lg:text-base">We're looking for</div>
              <Link
                to={"/"}
                className="flex items-center justify-between border-b border-white pb-2 transition-colors hover:bg-gray-800"
              >
                <span className="wae-h6-lg font-secondary">
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
        </div>
      </section> */}

      <section className="wae-pt-lg wae-pb-lg bg-[#e0e0e0]">
        <div className="container">
          <div className="grid grid-cols-1 gap-[60px] sm:grid-cols-2 lg:gap-0">
            <div data-aos="fade-in">
              <h3 className="wae-h3 mb-4 font-secondary">
                Get in Touch with Us
              </h3>
              <p className="font-secondary">Talk to our Water Expert</p>

              <div className="wae-h6 mt-10">
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
            <div
              className="mx-auto w-full"
              data-aos="fade-in"
            >
              <Form
                method="POST"
                onSubmit={handleSubmit}
              >
                <div
                  className={clsx({
                    hidden: enquiryFor !== null,
                  })}
                >
                  <h5 className="lg:wae-h6-lg mb-5 text-2xl">I am</h5>

                  <div className="col grid grid-cols-[repeat(2,130px)] grid-rows-[repeat(2,130px)] gap-5 lg:grid-cols-[repeat(2,200px)] lg:grid-rows-[repeat(2,200px)]">
                    {["Corporate", "Architect", "Consultant", "Curious"].map(
                      (type) => (
                        <div
                          className="aspect-square max-w-[200px]"
                          key={type}
                        >
                          <input
                            id={`${type}-enquiry`}
                            type="radio"
                            name="enquiry"
                            checked={enquiryFor === type}
                            aria-checked={enquiryFor === type}
                            value={type}
                            onChange={(e) =>
                              setEnquiryFor(
                                e.currentTarget.value as EnquiryType,
                              )
                            }
                            className="peer hidden"
                          />
                          <label
                            htmlFor={`${type}-enquiry`}
                            className="group flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-black bg-transparent transition-colors hover:bg-black hover:text-white peer-checked:bg-black peer-checked:text-white"
                          >
                            {type === "Corporate"
                              ? "A Corporate"
                              : type === "Architect"
                                ? "An Architect"
                                : type === "Consultant"
                                  ? "A Consultant"
                                  : "Just Curious"}

                            <div className="mt-2 hidden group-hover:block">
                              <svg
                                width="42"
                                height="16"
                                viewBox="0 0 42 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M41.2071 8.70711C41.5976 8.31658 41.5976 7.68342 41.2071 7.29289L34.8431 0.928932C34.4526 0.538408 33.8195 0.538408 33.4289 0.928932C33.0384 1.31946 33.0384 1.95262 33.4289 2.34315L39.0858 8L33.4289 13.6569C33.0384 14.0474 33.0384 14.6805 33.4289 15.0711C33.8195 15.4616 34.4526 15.4616 34.8431 15.0711L41.2071 8.70711ZM0.5 9H40.5V7H0.5V9Z"
                                  fill="white"
                                />
                              </svg>
                            </div>
                          </label>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                <div
                  className={clsx({
                    hidden: enquiryFor === null,
                  })}
                >
                  <div className="mb-5 flex items-center lg:mb-10">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.currentTarget.closest("form")?.reset();
                        setEnquiryFor(null);
                      }}
                      className="wae-btn carousel-nav-btn mr-3 border-black"
                    >
                      {Icons.ChevronLeft}
                    </button>
                    Back
                  </div>

                  <input
                    type="text"
                    className="wae-input mt-6 !border-black lg:mb-10"
                    name="name"
                    placeholder="Name"
                  />
                  {errors.name && <p className="text-red-500">{errors.name}</p>}
                  <input
                    type="text"
                    className="wae-input mt-6 !border-black lg:mb-10"
                    name="companyName"
                    placeholder="Company Name"
                  />
                  {errors.companyName && (
                    <p className="text-red-500">{errors.companyName}</p>
                  )}
                  <input
                    type="tel"
                    className="wae-input mt-6 !border-black lg:mb-10"
                    name="contact"
                    placeholder="Contact"
                  />
                  {errors.contact && (
                    <p className="text-red-500">{errors.contact}</p>
                  )}
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="wae-input mt-6 !h-auto w-full resize-none !border-black lg:mb-10"
                    rows={3}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500">{errors.message}</p>
                  )}

                  <button
                    type="submit"
                    className="wae-btn wae-btn-lg mt-6 w-full border-black lg:mt-12"
                  >
                    Send
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
