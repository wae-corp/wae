import {Link} from "@remix-run/react";
import {Icons} from "~/static";

const footerLinks: {
  id: string;
  title: string;
  list: {
    id: string;
    name: string;
    link: string;
  }[];
}[] = [
  {
    id: "1",
    title: "Company",
    list: [
      {
        id: "1-1",
        link: "/",
        name: "Introducing",
      },
      {
        id: "1-2",
        link: "/",
        name: "Features",
      },
      {
        id: "1-3",
        link: "/",
        name: "News",
      },
      {
        id: "1-4",
        link: "/",
        name: "Waitlist",
      },
    ],
  },
  {
    id: "2",
    title: "Company",
    list: [
      {
        id: "2-1",
        link: "/",
        name: "Introducing",
      },
      {
        id: "2-2",
        link: "/",
        name: "Features",
      },
      {
        id: "2-3",
        link: "/",
        name: "News",
      },
      {
        id: "2-4",
        link: "/",
        name: "Waitlist",
      },
    ],
  },
  {
    id: "3",
    title: "Company",
    list: [
      {
        id: "3-1",
        link: "/",
        name: "Introducing",
      },
      {
        id: "3-2",
        link: "/",
        name: "Features",
      },
      {
        id: "3-3",
        link: "/",
        name: "News",
      },
      {
        id: "3-4",
        link: "/",
        name: "Waitlist",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative bg-black px-4 pb-11 pt-28 text-white">
      <img
        src="/images/logos/great-place.png"
        alt="Certificate of Great Place to Work"
        width={77}
        height={146}
        className="l-0 absolute top-0"
      />
      <div className="border-t-white/40 lg:border-t">
        <div className="mx-auto flex flex-col items-start justify-between lg:max-w-[85%] lg:flex-row">
          <div className="max-lg:w-full lg:-mt-16">
            <Link
              to={"/"}
              className="mx-auto mb-6 block lg:mr-0"
            >
              <img
                src="/images/logos/wae-logo.png"
                alt="Wae"
                width={120}
                height={60}
                className="mx-auto object-contain lg:ml-0"
              />
            </Link>

            <div className="mb-10 xl:mb-20">
              <label
                htmlFor="newsletter"
                className="mb-6 block font-secondary text-base"
              >
                Subscribe to our Newsletter
              </label>

              <form className="flex h-[54px] items-stretch overflow-hidden rounded-lg border border-[#303030] focus-within:border-white max-lg:w-full">
                <div className="relative flex flex-1 items-stretch">
                  <div className="left-5 top-1/2 hidden -translate-y-1/2 md:absolute lg:block">
                    {Icons.EnvelopeSquare}
                  </div>
                  <input
                    id="newsletter"
                    type="email"
                    name="newsletter-mail"
                    placeholder="Enter your email to get the latest news..."
                    className="w-full bg-black p-3 lg:pl-16 xl:w-[400px]"
                  />
                </div>

                <button className="wae-btn-light wae-btn-md px-5 py-2 font-medium">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="hidden text-xs text-[#f2f2f2] opacity-75 lg:block">
              <p className="mb-4">
                ©2024 Moxion Power / Manufactured in the USA
              </p>

              <p>
                1414 Harbour Way S #1201, <br />
                Richmond, CA 94804, USA
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-9 max-lg:w-full lg:-mt-10 lg:flex-nowrap">
            {footerLinks.map((col) => {
              return (
                <div key={col.id}>
                  <h6 className="mb-5 text-base sm:mb-10">{col.title}</h6>
                  <ul key={col.id}>
                    {col.list.map((listItem) => {
                      return (
                        <li
                          key={listItem.id}
                          className="mb-3 font-extralight last:mb-0"
                        >
                          <Link
                            to={listItem.link}
                            className="underline-offset-4 hover:underline"
                          >
                            {listItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-10 w-full text-center text-xs text-[#f2f2f2] opacity-75 lg:hidden">
            <p className="mb-4">
              ©2024 Moxion Power / Manufactured in the USA
            </p>

            <p>
              1414 Harbour Way S #1201, <br />
              Richmond, CA 94804, USA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
