import {json, type ActionFunction, type MetaFunction} from "@remix-run/node";
import {Tabs} from "@mantine/core";
import {Icons} from "~/static";
import {useEffect, useState} from "react";
import {
  getErrorFromUnknown,
  getStringFromUnknown,
} from "~/global--common-typescript/utilities/typeValidationUtils";
import {ActionData} from "~/backend/typeDefinations";
import {z} from "zod";
import {appendContactInfoIntoSheet} from "~/backend/googleSheet.server";
import {Form, useActionData, useSubmit} from "@remix-run/react";
import {notifications} from "@mantine/notifications";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {indianPhoneNumberValidationRegex} from "~/global--common-typescript/typeDefinations";
import {unwrap} from "~/global--common-typescript/utilities/errorHandling";

type ErrorObject = {
  name?: string | null;
  email?: string | null;
  contact?: string | null;
  companyName?: string | null;
  type?: string | null;
};

export const meta: MetaFunction = () => {
  return [
    {title: "Contact"},
    {name: "description", content: "Get in touch with us"},
  ];
};

export const action: ActionFunction = async ({request}) => {
  let error: string | null = null;
  try {
    const body = await request.formData();
    const name = unwrap(
      getStringFromUnknown(body.get("name")),
      "383ce9f7-15d4-4537-8faf-0b88e2311193",
    );
    const email = unwrap(
      getStringFromUnknown(body.get("email")),
      "15351830-908d-4171-aa4c-2596c8656eb3",
    );
    const contact = unwrap(
      getStringFromUnknown(body.get("contact")),
      "259c4795-d03a-4851-b0bb-b98f31ed31c3",
    );
    const companyName = unwrap(
      getStringFromUnknown(body.get("companyName")),
      "8da118b1-40fa-47ea-bd64-2cb5e9ab6bea",
    );
    const type = unwrap(
      getStringFromUnknown(body.get("type")),
      "adb1d1bb-36b2-4685-9ae5-32502da2b1c2",
    );
    if (!name || !email || !contact || !companyName || !type) {
      throw new Error("All fields are required");
    }
    const formValues = {
      name: name,
      email: email,
      contact: contact,
      companyName: companyName,
      type: type,
    };
    const schema = z.object({
      name: z.string().min(1, {message: "Name is required"}),
      email: z.string().email({message: "Invalid email"}),
      contact: z.string().min(10, {message: "Contact number is required"}),
      companyName: z.string().min(1, {message: "Company name is required"}),
      type: z.enum(["distributor", "supplier"]),
    });
    const parsedData = schema.safeParse(formValues);
    if (!parsedData.success) {
      throw parsedData.error;
    }
    const response = await appendContactInfoIntoSheet(parsedData.data);
    if (!response.success) {
      throw response.err;
    }
    console.log("Form submitted successfully");
    return {
      status: 200,
      body: json({message: "Form submitted successfully"}),
    };
  } catch (_error) {
    const error_ = getErrorFromUnknown(_error);
    error = error_.message;

    console.log(
      "🤡 ~ file: contact.tsx:67 ~ constaction:ActionFunction= ~ error:",
      error,
    );

    const actionData: ActionData = {
      error,
    };
    return json(actionData);
  }
};

export default function Contact() {
  const [errors, setErrors] = useState<ErrorObject>({
    name: null,
    companyName: null,
    contact: null,
    email: null,
    type: null,
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
      }
      setErrors({
        name: null,
        companyName: null,
        contact: null,
        email: null,
      });
    }
  }, [actionData]);

  const validateForm = (formData: FormData) => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const contact = formData.get("contact") as string;
    const companyName = formData.get("companyName") as string;
    const type = formData.get("type") as string;

    const newErrors = {
      name: name ? null : "Name is required",
      email: email ? null : "Email is required",
      contact: contact
        ? indianPhoneNumberValidationRegex.test(contact)
          ? null
          : "Invalid contact number"
        : "Contact is required",
      companyName: companyName ? null : "Company Name is required",
      type: type ? null : "Type is required",
    };

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (validateForm(formData)) {
      submit(form, {method: "post"});
    }
  };
  return (
    <>
      <main className="wae-pb-md pt-[var(--header-height)]">
        <div className="container">
          <section className="pt-10 xl:pt-20">
            <h5 className="mb-10 text-center text-sm md:mb-[60px] md:text-base xl:mb-20 xl:text-xl">
              Locate Us
            </h5>
            <div className="mb-20 grid gap-y-10 sm:grid-cols-2 md:mb-[120px] md:gap-x-10 md:gap-y-20">
              <div
                className="text-center"
                // data-aos="fade-down"
              >
                <h5 className="mb-5 flex min-h-[52px] items-center justify-center bg-black text-center text-xl font-extrabold text-white sm:mb-5 md:min-h-[58px] md:text-2xl md:text-[32px] xl:min-h-[70px] xl:text-[32px]">
                  Noida Office
                </h5>
                <div className="text-sm md:text-base xl:text-xl">
                  <address className="font-secondary not-italic">
                    WAE Ltd. <br /> WAE Corp India Ltd. <br /> H-18, Sector 63,
                    <br /> Noida, Uttar Pradesh 201301
                    <br /> Tel.
                  </address>

                  <a
                    href="tel:9101204069800"
                    className="mt-5 inline-flex gap-3"
                  >
                    <img
                      src="/images/icons/dialer.svg"
                      alt="Dialer"
                      width={24}
                      height={24}
                      className="object-contain"
                    />{" "}
                    +91 01204069800
                  </a>
                </div>
              </div>
              <div
                className="text-center"
                // data-aos="fade-down"
              >
                <h5 className="mb-5 flex min-h-[52px] items-center justify-center bg-black text-center text-xl font-extrabold text-white sm:mb-5 md:min-h-[58px] md:text-2xl md:text-[32px] xl:min-h-[70px] xl:text-[32px]">
                  Mumbai Office
                </h5>
                <div className="text-sm md:text-base xl:text-xl">
                  <address className="font-secondary not-italic">
                    WAE Corp India Ltd. <br /> 91 Springboard Business Hub{" "}
                    <br /> Godrej & Boyce, Gate no. 2
                    <br />
                    LBS Marg, Vikhroli
                    <br /> Mumbai - 400079
                  </address>
                  <a
                    href="tel:9101204069800"
                    className="mt-5 inline-flex gap-3"
                  >
                    <img
                      src="/images/icons/dialer.svg"
                      alt="Dialer"
                      width={24}
                      height={24}
                      className="object-contain"
                    />{" "}
                    +91 01204069800
                  </a>
                </div>
              </div>

              <div
                className="text-center"
                // data-aos="fade-down"
              >
                <h5 className="mb-5 flex min-h-[52px] items-center justify-center bg-black text-center text-xl font-extrabold text-white sm:mb-5 md:min-h-[58px] md:text-2xl md:text-[32px] xl:min-h-[70px] xl:text-[32px]">
                  Bengaluru Office
                </h5>
                <div className="text-sm md:text-base xl:text-xl">
                  <address className="font-secondary not-italic">
                    WAE Corp India Ltd. <br /> 91, springboard George Thangaiah
                    <br /> Complex. 13. 80 Feet Rd. near Sir CV
                    <br /> Roman Hospital Indiranagar
                    <br />
                    Bengaluru, Karnataka 560038
                  </address>

                  <a
                    href="tel:9101204069800"
                    className="mt-5 inline-flex gap-3"
                  >
                    <img
                      src="/images/icons/dialer.svg"
                      alt="Dialer"
                      width={24}
                      height={24}
                      className="object-contain"
                    />{" "}
                    +91 01204069800
                  </a>
                </div>
              </div>
              <div
                className="text-center"
                // data-aos="fade-down"
              >
                <h5 className="mb-5 flex min-h-[52px] items-center justify-center bg-black text-center text-xl font-extrabold text-white sm:mb-5 md:min-h-[58px] md:text-2xl md:text-[32px] xl:min-h-[70px] xl:text-[32px]">
                  Hyderabad Office
                </h5>

                <div className="text-sm md:text-base xl:text-xl">
                  <address className="font-secondary not-italic">
                    WAE Corp India Ltd.
                    <br /> Survey No. 55, Plot No. 108, <br /> NYN Arcade, 3rd
                    Floor Lumbini Society <br /> Off, Hitech City Main Rd,
                    <br /> next to Euro School, Gachibowli,
                    <br /> Hyderabad Telangana 500032
                  </address>

                  <a
                    href="tel:9101204069800"
                    className="mt-5 inline-flex gap-3"
                  >
                    <img
                      src="/images/icons/dialer.svg"
                      alt="Dialer"
                      width={24}
                      height={24}
                      className="object-contain"
                    />{" "}
                    +91 01204069800
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div
              className="text-center"
              // data-aos="fade-down"
            >
              <h5 className="mb-10 text-center text-sm md:mb-[60px] md:text-base xl:mb-20 xl:text-xl">
                Write to Us
              </h5>

              <div className="mb-[60px] flex flex-col items-center justify-between md:mb-[120px] lg:flex-row xl:mb-[170px]">
                <a
                  href="mailTo:info@waecorp.com"
                  className="flex items-center gap-5 font-secondary text-xl underline hover:no-underline md:mb-8 md:text-2xl xl:text-[32px]"
                >
                  <img
                    src="/images/icons/envelope.svg"
                    alt="EMail"
                    width={24}
                    height={24}
                    className="object-contain md:w-6 lg:w-9"
                  />
                  info@waecorp.com
                </a>
                <a
                  href="mailTo:marketing@waecorp.com"
                  className="flex items-center gap-5 font-secondary text-xl underline hover:no-underline md:mb-8 md:text-2xl xl:text-[32px]"
                >
                  <img
                    src="/images/icons/envelope.svg"
                    alt="EMail"
                    width={24}
                    height={24}
                    className="object-contain md:w-6 lg:w-9"
                  />
                  marketing@waecorp.com
                </a>
              </div>

              <div className="relative">
                <img
                  src={
                    "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dcf2bf23-343f-4c08-5f4f-bf51106cf100/public"
                  }
                  alt="Map of countries where we have presence"
                  className="mx-auto object-contain"
                  width={1920}
                  height={532}
                  data-aos="fade-zoom-in"
                  data-aos-easing="ease-in-back"
                  data-aos-offset="200"
                  data-aos-duration="500"
                />

                {/* <div>
                  <div>
                    <img
                      src="/images/icons/location-marker.svg"
                      alt="Marker"
                      className="mr-3 aspect-square w-[22px] md:w-9"
                    />
                    <div>
                      <strong>Office </strong>
                      <div>Locations</div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </main>

      <section className="wae-pt-lg wae-pb-lg bg-black text-white">
        <div className="container">
          <div className="mb-10 text-center md:mb-[60px] xl:mb-[100px]">
            <h3 className="mb-4 font-secondary text-2xl md:mb-6 md:text-[32px] md:leading-normal xl:text-[40px]">
              For more info/site assessment
            </h3>
            <p className="mb-8 text-sm xl:text-base">
              Talk to our Water Expert
            </p>
          </div>
          <div className="mx-auto max-w-[800px]">
            <Tabs
              variant="pills"
              defaultValue="distributor"
              className="wae-tabs w-full"
            >
              <Tabs.List>
                <Tabs.Tab value="distributor">Sales</Tabs.Tab>
                <Tabs.Tab value="supplier">Service & Support</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="distributor">
                <Form
                  className="w-full"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  {errors.name && (
                    <p className="mb-2 text-red-500">{errors.name}</p>
                  )}
                  <input
                    type="email"
                    className="wae-input mb-10"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  {errors.email && (
                    <p className="mb-2 text-red-500">{errors.email}</p>
                  )}
                  <input
                    type="tel"
                    className="wae-input mb-10"
                    name="contact"
                    placeholder="Contact No."
                    required
                  />
                  {errors.contact && (
                    <p className="mb-2 text-red-500">{errors.contact}</p>
                  )}
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="companyName"
                    placeholder="Company Name"
                  />
                  {errors.companyName && (
                    <p className="mb-2 text-red-500">{errors.companyName}</p>
                  )}
                  <input
                    type="hidden"
                    name="type"
                    value="distributor"
                  />

                  <button
                    type="submit"
                    className="wae-btn wae-btn-lg mt-3 w-full gap-3 md:mt-12"
                  >
                    Contact Us {Icons.ArrowRightLong}
                  </button>
                </Form>
              </Tabs.Panel>
              <Tabs.Panel value="supplier">
                <Form
                  method="POST"
                  onSubmit={handleSubmit}
                  className="w-full"
                >
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  {errors.name && (
                    <p className="mb-2 text-red-500">{errors.name}</p>
                  )}
                  <input
                    type="email"
                    className="wae-input mb-10"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                  {errors.email && (
                    <p className="mb-2 text-red-500">{errors.email}</p>
                  )}
                  <input
                    type="tel"
                    className="wae-input mb-10"
                    name="contact"
                    placeholder="Contact No."
                    required
                  />
                  {errors.contact && (
                    <p className="mb-2 text-red-500">{errors.contact}</p>
                  )}
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="companyName"
                    placeholder="Company Name"
                  />
                  {errors.companyName && (
                    <p className="mb-2 text-red-500">{errors.companyName}</p>
                  )}
                  <input
                    type="hidden"
                    name="type"
                    value="supplier"
                  />

                  <button
                    type="submit"
                    className="wae-btn wae-btn-lg mt-3 w-full gap-3 md:mt-12"
                  >
                    Contact Us {Icons.ArrowRightLong}
                  </button>
                </Form>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
