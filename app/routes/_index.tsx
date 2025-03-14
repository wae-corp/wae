import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {notifications} from "@mantine/notifications";
import type {ActionFunction, MetaFunction} from "@remix-run/node";
import {Form, json, Link, useActionData, useSubmit} from "@remix-run/react";
import clsx from "clsx";
import {useEffect, useRef, useState} from "react";
import {
  BrandSlider,
  ExpandingSlider,
  FullscreenSlider,
  OurProductsSlider,
} from "~/components";
import {indianPhoneNumberValidationRegex} from "~/global--common-typescript/typeDefinations";
import {
  ActionData,
  EnquiryType as EnquiryTypeOne,
} from "~/backend/typeDefinations";
import {homeRelatedInfoListing, Icons} from "~/static";
import {getErrorFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import {appendLandingLeadIntoSheet} from "~/backend/googleSheet.server";
import {set, z} from "zod";
import {Counter} from "~/components/Counter";
import {Modal} from "@mantine/core";

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
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cbed1e2a-0ea3-40f2-6ad4-fc63a4461c00/public",
    title: "Disrupting",
    title2: "the status quo",
    align: "center" as const,
    isButton: false,
  },
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a13fd704-40a3-4216-4d58-d0da64a73600/public",
    title: "Green By Design",
    align: "end" as const,
    isButton: true,
    buttonText: "Explore Products",
  },
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47dc0a5a-cc20-4aca-cae4-cfa2bf102a00/public",
    title: "Planet Over Profit",
    align: "end" as const,
    isButton: true,
    buttonText: "Explore WAE Foundation",
    buttonLink: "/",
  },
  {
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/17077c03-3855-4e09-f60b-9b41b40c6c00/public",
    title: "Break The Cycle",
    align: "end" as const,
    isButton: true,
    buttonText: "Explore Sustainability",
    buttonLink: "/sustainability",
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
  const [contactOpen, setContactOpen] = useState(false);
  const [calcFootprintOpen, setCalcFootprintOpen] = useState(false);
  const [footprintResultOpen, setFootprintResultOpen] = useState(false);
  const [enquiryFor, setEnquiryFor] = useState<EnquiryType>(null);
  const [errors, setErrors] = useState<ErrorObject>({
    name: null,
    companyName: null,
    contact: null,
    message: null,
  });
  const actionData = useActionData() as ActionData;
  const submit = useSubmit();
  const stickySectionRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    let hasBeenSticky = false;
    function handleScroll() {
      const sectionRect = stickySectionRef.current?.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

      if (!hasBeenSticky && sectionRect && sectionRect.top <= 0) {
        hasBeenSticky = true;
      }

      if (
        sectionRect &&
        hasBeenSticky &&
        sectionRect.top > 0 &&
        sectionRect.top < viewportHeight &&
        stickySectionRef.current
      ) {
        stickySectionRef.current.style.position = "static";
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

      <section className="bg-black xl:py-12">
        <div
          className="flex flex-col items-center justify-center text-center text-white"
          // data-aos="fade-down"
        >
          {Icons.ArrowDown}
          <p className="wae-p pt-2">Scroll</p>
        </div>
      </section>

      <section
        ref={stickySectionRef}
        className={
          "sticky top-0 -z-[1] flex items-center justify-center bg-black pb-20 pt-10 text-center text-white md:py-[100px]"
        }
      >
        <div className="container">
          <div
            className="mx-auto max-w-[1080px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h6 className="mb-12 md:text-sm xl:text-base">Our Purpose</h6>

            <h3 className="mb-8 text-[28px] font-light md:text-[32px] md:leading-relaxed">
              Being Sustainable
            </h3>

            <h2 className="mb-12 font-secondary text-[28px] leading-normal md:text-[32px] md:leading-relaxed xl:leading-relaxed">
              The underlying natural order of the universe - circular continuity
              of the natural world. Undifferentiated, endlessly
              self-replenishing, immensely powerful and impassively generous.
            </h2>

            <Link
              to="/sustainability"
              className="uppercase hover:underline md:text-sm xl:text-base"
            >
              <span className="prefix-dot"></span> EXPLORE SUSTAINABILITY
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-window-pattern bg-cover bg-no-repeat py-20 md:gap-[120px] md:py-[120px]">
        <section className="container max-w-[1300px]">
          {/* <p
            className="mb-14 text-center text-sm uppercase xl:mb-12"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            Our Brand
          </p> */}

          <picture
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <source
              src=""
              media="(max-width: 767px)"
              className="h-full w-full object-cover"
            />
            <source
              media="(min-width: 1199px)"
              className="h-full w-full object-cover"
            />
            <img
              src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d3a7d5b9-b62f-4c75-3179-f892318dfa00/public"
              alt="Core values of WAE"
              //className="h-full w-full object-contain"
              style={{
                width: '1076px', // Set desired width
                height: 'auto', // Maintain aspect ratio
                maxWidth: '100%', // Ensure responsiveness
                maxHeight: '757px', // Limit height to maintain aspect ratio
                display: 'block', // Ensure the image behaves as a block element
                margin: '0 auto' // Center horizontally 
              }}
            />
          </picture>
        </section>

        <section className="container">
          <ExpandingSlider />
        </section>
      </section>

      <section className="wae-pt-lg wae-pb-lg bg-black text-center text-white">
        <div className="container">
          <div
            className="wae-mb-lg mx-auto max-w-5xl"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-offset="200"
          >
            <h6 className="uppercase md:text-sm xl:text-base">
              SUSTAINABILITY
            </h6>

            <h2 className="my-12 font-secondary text-[32px] font-light leading-normal md:text-4xl md:leading-[1.35] xl:text-[56px]">
              WAE leads transformative projects and develops cutting-edge
              purification systems, all aimed at ensuring a sustainable future.
            </h2>

            <Link
              className="uppercase hover:underline md:text-sm xl:text-base"
              to={"/sustainability-case-study"}
            >
              <span className="prefix-dot"></span>
              DISCOVER SUSTAINABILITY
            </Link>
          </div>

          <div className="flex flex-col flex-wrap justify-center gap-[60px] max-sm:items-center md:flex-nowrap lg:flex-row">
            {specifications.map((spec, idx) => {
              return (
                <div
                  key={spec.id}
                  className="lg:w-full"
                  data-aos="fade-in"
                  data-aos-delay={`${idx}00`}
                >
                  <div className="mb-5 font-secondary text-4xl font-semibold md:text-5xl xl:text-[64px]">
                    {/* {spec.title} */}
                    <Counter
                      end={spec.title}
                      duration={1}
                      separator=","
                      decimals={2}
                      decimal="."
                    />
                  </div>

                  <div className="text-base font-extralight uppercase md:text-sm xl:text-xl">
                    {spec.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
{/*         <div className="my-[60px] text-center md:my-[160px] xl:my-[180px]">
          <button
            onClick={() => setCalcFootprintOpen(true)}
            className="wae-btn wae-btn-md px-5 xl:px-10"
          >
            Calculate your carbon footprint
          </button>
        </div> */}
        <div className="mt-[30px] md:mt-[80px] xl:mt-[90px]">
          <BrandSlider />
        </div>
      </section>

      <section className="bg-white">
      <div className="container py-20 md:py-[120px]">
        <div className="flex flex-col gap-10 md:gap-[60px] xl:flex-row xl:gap-[120px]">
          <div>
            <h3 className="mb-[60px] font-secondary text-2xl md:mb-10 md:text-[32px] md:leading-normal">
              Made in India
            </h3>
            <p
              className="uppercase md:pl-20 md:text-sm xl:text-base"
              // data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-offset="200"
            >
              WAE captures the heart of Indian innovation by seamlessly blending
              the time-honoured ideals with the latest technology. We are driven
              by the mission to build a brand that not only saves the planet but
              also creates a potent impact on future generations for the
              country's advancements, integrity & innovation. Our approach
              strengthens community resilience while showcasing India's
              Intellectual capital on the world stage.
            </p>
          </div>
          <div
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
            className="flex-shrink-0 xl:max-w-[400px] xl:pl-0"
          >
            <div className="ml-auto w-[260px] overflow-hidden md:mr-auto md:w-[370px] xl:mr-0">
              <img
                src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dbf8595a-24c0-49f4-883a-0692dd6a8500/public"
                alt="gray-meshed-backdrop"
                width={370}
                height={460}
                className="object-cover transition-transform duration-500 ease-in-out hover:scale-150"
              />
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="wae-pb-lg wae-pt-lg bg-man-in-shadow bg-cover bg-no-repeat text-white">
        <div className="container">
          <div className="flex flex-col gap-12 md:gap-[60px] lg:w-full lg:flex-row lg:justify-between lg:gap-[140px]">
            <div data-aos="fade-right">
              <h3 className="mb-[60px] font-secondary text-[32px] leading-normal md:mb-9 md:text-4xl xl:mb-12">
                Life @ WAE
              </h3>
              <Link
                to={"/careers"}
                className="flex items-center gap-4 text-base hover:underline"
              >
                <div className="prefix-dot"></div>
                <p className="uppercase">Explore Careers</p>
              </Link>
            </div>
            <div
              // data-aos="fade-left"
              className="flex-shrink-0 lg:max-w-[400px]"
            >
              <p className="text-base font-light uppercase md:text-xl">
                Life at WAE is all about bringing your whole self to work. Our
                diverse and inclusive culture thrives on the unique perspectives
                of our team, making every day an opportunity to learn, connect,
                and grow together. It's a place where your ideas shine, your
                voice is heard, and you feel right at home no matter where
                you're from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fcfcfc] py-20 md:py-[120px]">
        <div className="container">
          <h3 className="mb-10 font-secondary text-2xl md:text-[32px] md:leading-normal">
            Related Information
          </h3>

          <div className="grid items-stretch gap-5 min-[375px]:grid-cols-2 md:grid-cols-3 md:gap-8 xl:grid-cols-4">
            {homeRelatedInfoListing.map((item, idx) => {
              return (
                <Link
                  to={item.link}
                  className="flex flex-col bg-white"
                  key={idx}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    height={83}
                    width={"100%"}
                    className="h-[82px] object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between p-4 md:pt-[35px]">
                    <div className="mb-6 md:mb-[50px]">
                      <h5 className="mb-1 text-sm font-semibold sm:text-base">
                        {item.title}
                      </h5>
                      <p className="text-xs">{item.description}</p>
                    </div>

                    <div className="mt-auto flex justify-end">
                      {Icons.ChevronRight}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-[60px] flex justify-center xl:justify-end">
            <button
              onClick={() => setContactOpen(true)}
              className="wae-btn wae-btn-md wae-btn-dark gap-4 px-5 xl:px-10"
            >
              Get in touch <div className="h-6 w-6">{Icons.Envelope}</div>
            </button>
          </div>
        </div>
      </section>

      {/* <section className="wae-pt-lg wae-pb-lg bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 lg:gap-0">
            <div data-aos="fade-in">
              <h3 className="mb-4 font-secondary text-[32px] leading-normal xl:text-[40px]">
                Get in Touch with Us
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
            <div
              className="mx-auto w-full max-lg:order-first"
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

                  <div className="col grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] justify-center gap-5 md:grid-cols-[repeat(2,240px)] lg:grid-rows-[repeat(2,240px)] lg:justify-start">
                    {["Corporate", "Architect", "Consultant", "Curious"].map(
                      (type) => (
                        <div
                          className="aspect-square lg:max-w-[240px]"
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
      </section> */}

      <Modal
        opened={contactOpen}
        onClose={() => setContactOpen(false)}
        classNames={{
          body: "bg-white text-black p-8 xl:p-10 xl:py-20 border border-[#DDE1E6]/50",
          content: "w-full xl:w-[1200px]",
          header: "hidden",
        }}
        overlayProps={{
          className: "bg-white/20 backdrop-blur-sm",
        }}
        size={"auto"}
        centered
      >
        <button
          className="absolute right-4 top-4"
          onClick={() => setContactOpen(false)}
        >
          {Icons.Close}
        </button>
        <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 lg:gap-0">
          <div data-aos="fade-in">
            <h3 className="mb-4 font-secondary text-[32px] leading-normal xl:text-[40px]">
              Get in Touch with Us
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
          <div
            className="mx-auto w-full max-lg:order-first"
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

                <div className="col grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] justify-center gap-5 md:grid-cols-[repeat(2,200px)] lg:justify-start xl:grid-cols-[repeat(2,240px)]">
                  {["Corporate", "Architect", "Consultant", "Curious"].map(
                    (type) => (
                      <div
                        className="aspect-square lg:max-w-[240px]"
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
                            setEnquiryFor(e.currentTarget.value as EnquiryType)
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
                  className="wae-btn wae-btn-lg mt-8 w-full border-black lg:mt-12"
                >
                  Send
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Modal>

      <Modal
        opened={calcFootprintOpen}
        onClose={() => setCalcFootprintOpen(false)}
        classNames={{
          body: "bg-black text-white p-8 xl:p-10 border border-[#DDE1E6]/50",
          content: "w-full xl:w-[1000px]",
          header: "hidden",
        }}
        overlayProps={{
          className: "bg-white/20 backdrop-blur-sm",
        }}
        size={"auto"}
        centered
      >
        <h2 className="mb-10 text-center text-2xl xl:text-[40px] xl:leading-normal">
          Calculate Your Carbon Footprint
        </h2>
        <div className="mt-6 flex items-center gap-10">
          <div className="flex-1">
            <label
              htmlFor="plasticBottles"
              className="text-base md:text-xl"
            >
              Consumption of 20L plastic bottles Per month
            </label>
            <input
              type="text"
              className="wae-input !h-10 !border-white"
              name="plasticBottles"
            />
          </div>
          <div>
            <input
              type="text"
              className="wae-input max-w-[50px] rounded-lg border !border-white !px-0 text-right text-base md:max-w-[200px]"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center gap-10">
          <div className="flex-1">
            <label
              htmlFor="plasticBottles"
              className="text-base md:text-xl"
            >
              No. of bottles used yearly
            </label>
            <input
              type="text"
              className="wae-input !h-10 !border-white"
              name="plasticBottles"
            />
          </div>
          <div>
            <input
              type="text"
              className="wae-input max-w-[50px] rounded-lg border !border-white !px-0 text-right text-base md:max-w-[200px]"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center gap-10">
          <div className="flex-1">
            <label
              htmlFor="plasticBottles"
              className="text-base md:text-xl"
            >
              Total CO2 emissions
            </label>
            <input
              type="text"
              className="wae-input !h-10 !border-white"
              name="plasticBottles"
            />
          </div>
          <div>
            <input
              type="text"
              className="wae-input max-w-[50px] rounded-lg border !border-white !px-0 text-right text-base md:max-w-[200px]"
            />
          </div>
        </div>
        <div className="mt-10 flex items-center gap-10">
          <div className="flex-1">
            <label
              htmlFor="plasticBottles"
              className="text-base md:text-xl"
            >
              Water wasted
            </label>
            <input
              type="text"
              className="wae-input !h-10 !border-white"
              name="plasticBottles"
            />
          </div>
          <div>
            <input
              type="text"
              className="wae-input max-w-[50px] rounded-lg border !border-white !px-0 text-right text-base md:max-w-[200px]"
            />
          </div>
        </div>

        <p className="my-10 text-center text-base xl:text-xl">
          Our sustainable solutions can help you save all of this [xxxxxxx]
          liters of water every year and reduce [xxxxxx] kgs of carbon emission.
        </p>

        <button className="wae-btn wae-btn-light wae-btn-lg w-full gap-2">
          Check again {Icons.ArrowRightLong}
        </button>
      </Modal>

      {/* <Modal
        opened={footprintResultOpen}
        onClose={() => setFootprintResultOpen(false)}
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
      </Modal> */}
    </>
  );
}
