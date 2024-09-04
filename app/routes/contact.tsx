import type {MetaFunction} from "@remix-run/node";
import {Tabs} from "@mantine/core";
import {Icons} from "~/static";

export const meta: MetaFunction = () => {
  return [
    {title: "Contact"},
    {name: "description", content: "Get in touch with us"},
  ];
};

export default function Contact() {
  return (
    <>
      <main className="wae-pb-md pt-[var(--header-height)]">
        <div className="container">
          <section className="wae-mb-md wae-pt-md">
            <div className="text-center">
              <h6 className="wae-h6 mb-8">Contact Us</h6>

              <a
                href="mailTo:info@waecorp.com"
                className="wae-h2 mb-8 block font-secondary hover:underline"
              >
                info@waecorp.com
              </a>
              <a
                href="mailTo:marketing@waecorp.com"
                className="wae-h2 mb-8 block font-secondary hover:underline"
              >
                marketing@waecorp.com
              </a>
            </div>
          </section>

          <section className="mb-[100px] grid grid-cols-2 gap-x-8 gap-y-[100px]">
            <div className="text-center">
              <h5 className="wae-h5-lg mb-5 font-extrabold">Noida Office</h5>
              <address className="wae-h6 font-secondary not-italic">
                WAE Ltd. <br /> WAE Corp India Ltd. <br /> H-18, Sector 63,
                <br /> Noida, Uttar Pradesh 201301
                <br /> Tel. +91 01204069800
              </address>
            </div>
            <div className="text-center">
              <h5 className="wae-h5-lg mb-5 font-extrabold">Mumbai Office</h5>

              <address className="wae-h6 font-secondary not-italic">
                WAE Corp India Ltd. <br /> 91 Springboard Business Hub <br />{" "}
                Godrej & Boyce, Gate no. 2
                <br />
                LBS Marg, Vikhroli
                <br /> Mumbai - 400079
              </address>
            </div>
            <div className="text-center">
              <h5 className="wae-h5-lg mb-5 font-extrabold">
                Hyderabad Office
              </h5>
              <address className="wae-h6 font-secondary not-italic">
                WAE Corp India Ltd.
                <br /> Survey No. 55, Plot No. 108, <br /> NYN Arcade, 3rd Floor
                Lumbini Society <br /> Off, Hitech City Main Rd,
                <br /> next to Euro School, Gachibowli,
                <br /> Hyderabad Telangana 500032
              </address>
            </div>
            <div className="text-center">
              <h5 className="wae-h5-lg mb-5 font-extrabold">
                Bengaluru Office
              </h5>
              <address className="wae-h6 font-secondary not-italic">
                WAE Corp India Ltd. <br /> 91, springboard George Thangaiah
                <br /> Complex. 13. 80 Feet Rd. near Sir CV
                <br /> Roman Hospital Indiranagar
                <br />
                Bengaluru, Karnataka 560038
              </address>
            </div>
          </section>

          <section>
            <div className="mb-[100px] flex gap-8">
              <div className="flex flex-1 items-start">
                <div className="mr-5 h-14 w-14 flex-shrink-0 bg-black"></div>
                Manufacturing hubs- India, China and S. Korea
              </div>
              <div className="flex flex-1 items-start">
                <div className="mr-5 h-14 w-14 flex-shrink-0 bg-[#4d4d4d]"></div>
                Existing Markets- India, U.S, China, Europe, Africa and Middle
                East
              </div>
              <div className="flex flex-1 items-start">
                <div className="mr-5 h-14 w-14 flex-shrink-0 bg-[#999999]"></div>
                Emerging Markets- S. America, Canada, Russia and Oceania
              </div>
            </div>

            <img
              src={"/images/covers/map.png"}
              alt="Map of countries where we have presence"
              className="mx-auto object-contain"
              width={1920}
              height={532}
            />
          </section>
        </div>
      </main>

      <section className="wae-pt-lg wae-pb-lg bg-black text-white">
        <div className="container flex">
          <div className="w-1/2">
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
          <div className="flex w-1/2 bg-opacity-40">
            <Tabs
              variant="pills"
              defaultValue="distributor"
              className="wae-tabs w-full max-w-xl"
            >
              <Tabs.List>
                <Tabs.Tab value="distributor">Distributor</Tabs.Tab>
                <Tabs.Tab value="supplier">Supplier</Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="distributor">
                <form className="w-full">
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="distributor-name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="wae-input mb-10"
                    name="distributor-email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="tel"
                    className="wae-input mb-10"
                    name="distributor-contact"
                    placeholder="Contact No."
                    required
                  />
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="distributor-company"
                    placeholder="Company Name"
                  />

                  <button
                    type="submit"
                    className="wae-btn wae-btn-lg mt-12 w-full"
                  >
                    Contact Us {Icons.ChevronRight}
                  </button>
                </form>
              </Tabs.Panel>
              <Tabs.Panel value="supplier">
                <form className="w-full">
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="supplier-name"
                    placeholder="Name"
                    required
                  />
                  <input
                    type="email"
                    className="wae-input mb-10"
                    name="supplier-email"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    type="tel"
                    className="wae-input mb-10"
                    name="supplier-contact"
                    placeholder="Contact No."
                    required
                  />
                  <input
                    type="text"
                    className="wae-input mb-10"
                    name="supplier-company"
                    placeholder="Company Name"
                  />

                  <button
                    type="submit"
                    className="wae-btn wae-btn-lg mt-12 w-full"
                  >
                    Contact Us {Icons.ChevronRight}
                  </button>
                </form>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
