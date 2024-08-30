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
      <section className="bg-black py-44 text-white">
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
          <div className="bg-opacity-40px-40 flex w-1/2">
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
                    className="mt-12 flex h-16 w-full items-center justify-center rounded-xl border border-white px-4 py-3 text-center text-xl"
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
                    className="mt-12 flex h-16 w-full items-center justify-center rounded-xl border border-white px-4 py-3 text-center text-xl"
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
