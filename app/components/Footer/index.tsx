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
      <div className="border-t border-t-white/40">
        <div className="mx-auto flex max-w-[85%] items-start justify-between">
          <div className="-mt-16">
            <Link
              to={"/"}
              className="mb-6 block"
            >
              <img
                src="/images/logos/wae-logo.png"
                alt="Wae"
                width={120}
                height={60}
                className="object-contain"
              />
            </Link>

            <div className="mb-20">
              <label
                htmlFor="newsletter"
                className="mb-6 block font-secondary text-base"
              >
                Subscribe to our Newsletter
              </label>

              <form className="flex h-12 items-stretch overflow-hidden rounded-lg border border-[#303030] focus-within:border-white">
                <div className="relative flex items-stretch">
                  <div className="absolute left-5 top-1/2 -translate-y-1/2">
                    {Icons.EnvelopeSquare}
                  </div>
                  <input
                    id="newsletter"
                    type="email"
                    name="newsletter-mail"
                    placeholder="Enter your email to get the latest news..."
                    className="w-[400px] bg-black p-3 pl-16"
                  />
                </div>

                <button className="bg-white px-5 py-2 font-medium text-black transition-colors hover:bg-gray-200 active:bg-gray-300">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="text-xs text-[#f2f2f2] opacity-75">
              <p className="mb-4">
                ©2024 Moxion Power / Manufactured in the USA
              </p>

              <p>
                1414 Harbour Way S #1201, <br />
                Richmond, CA 94804, USA
              </p>
            </div>
          </div>
          <div className="-mt-10 flex gap-9">
            {footerLinks.map((col) => {
              return (
                <div key={col.id}>
                  <h6 className="mb-10 text-base">{col.title}</h6>
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
        </div>
      </div>
    </footer>
  );
};
