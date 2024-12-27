import {Link, useFetcher} from "@remix-run/react";
import {useEffect, useState} from "react";
import {ActionData} from "~/backend/typeDefinations";
import {Icons} from "~/static";
import {showNotification} from "@mantine/notifications";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {emailIdValidationRegex} from "~/global--common-typescript/typeDefinations";

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
    title: "About Us",
    list: [
      {
        id: "1-1",
        link: "/company",
        name: "Company",
      },
      {
        id: "1-2",
        link: "/brand",
        name: "Brand",
      },
      {
        id: "1-3",
        link: "/sustainability",
        name: "Sustanability",
      },
      {
        id: "1-4",
        link: "/products",
        name: "Product & Services",
      },
      {
        id: "1-5",
        link: "/",
        name: "News & Updates",
      },
    ],
  },
  {
    id: "2",
    title: "Legal",
    list: [
      {
        id: "2-1",
        link: "/",
        name: "Data Policy",
      },
      {
        id: "2-2",
        link: "/",
        name: "Privacy Policy",
      },
      {
        id: "2-3",
        link: "/",
        name: "Ethics  & Compliances",
      },
      {
        id: "2-4",
        link: "/",
        name: "Terms & Conditions",
      },
      {
        id: "2-5",
        link: "/",
        name: "Cookies",
      },
    ],
  },
  {
    id: "3",
    title: "Social",
    list: [
      {
        id: "3-1",
        link: "/",
        name: "LinkedIn",
      },
      {
        id: "3-2",
        link: "/",
        name: "Twitter",
      },
      {
        id: "3-3",
        link: "/",
        name: "Instagram",
      },
      {
        id: "3-4",
        link: "/",
        name: "Facebook",
      },
      {
        id: "3-5",
        link: "/",
        name: "Youtube",
      },
    ],
  },
  {
    id: "4",
    title: "Contact",
    list: [
      {
        id: "4-1",
        link: "/careers",
        name: "Careers",
      },
      {
        id: "4-2",
        link: "/contact",
        name: "Office Locations",
      },
      // {
      //   id: "4-3",
      //   link: "/blogs",
      //   name: "News",
      // },
      // {
      //   id: "4-4",
      //   link: "/contact",
      //   name: "Waitlist",
      // },
    ],
  },
];

export const Footer = () => {
  const [email, setEmail] = useState<string>("");
  const [formErrors, setFormErrors] = useState<string | null>(null);

  const formFetcher = useFetcher<ActionData>();
  useEffect(() => {
    if (formFetcher.data !== null) {
      if (formFetcher.data?.error != null) {
        showNotification({
          title: "Error",
          message: formFetcher.data.error,
          color: "red",
          icon: (
            <FontAwesomeIcon
              icon={faTimesCircle}
              style={{color: "red", fontSize: "18px"}}
            />
          ),
        });
      }
    }
  }, [formFetcher]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Clear previous errors
    setFormErrors(null);

    // Email validation
    if (!emailIdValidationRegex.test(email)) {
      setFormErrors("Invalid email format");
      return;
    }

    // Submit the form using fetcher
    formFetcher.submit(
      {"newsletter-mail": email},
      {
        method: "post",
        action: "/api/subscribe-to-newsletter",
      },
    );

    // Reset form on successful submission
    setEmail("");
  };

  return (
    <footer className="relative bg-black px-4 pb-11 pt-32 text-white">
      {/* <img
        src="/images/logos/great-place.png"
        alt="Certificate of Great Place to Work"
        width={77}
        height={146}
        className="l-0 absolute top-0"
      /> */}
      <div className="border-t-white/40 xl:border-t">
        <div className="mx-auto flex flex-col items-center justify-between gap-[60px] xl:max-w-[85%] xl:flex-row xl:items-start xl:gap-24">
          <div className="max-xl:w-full xl:-mt-16">
            <Link
              to={"/"}
              className="mx-auto -mt-2 mb-12 block xl:mr-0"
            >
              <img
                src="/images/logos/wae-logo.svg"
                alt="Wae"
                width={120}
                height={60}
                className="mx-auto object-contain xl:ml-0"
              />
            </Link>

            <div className="mb-0 xl:mb-20">
              <label
                htmlFor="newsletter"
                className="mb-6 block font-secondary text-sm uppercase md:text-base"
              >
                Join our community to stay updated on our latest news and
                innovative water projects. Subscribe to Our Newsletter
              </label>

              <formFetcher.Form
                onSubmit={handleSubmit}
                className="flex h-[54px] items-stretch overflow-hidden rounded-lg border border-[#303030] focus-within:border-white max-xl:w-full"
              >
                <div className="relative flex flex-1 items-stretch">
                  <div className="left-5 top-1/2 hidden -translate-y-1/2 md:absolute xl:block">
                    {Icons.EnvelopeSquare}
                  </div>
                  <input
                    id="newsletter"
                    type="email"
                    name="newsletter-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email to get the latest news..."
                    className="w-full bg-black p-3 xl:pl-16"
                  />
                </div>

                <button
                  type="submit"
                  className="wae-btn-light wae-btn-md px-5 py-2 font-medium"
                >
                  Subscribe
                </button>
              </formFetcher.Form>
              {formErrors && (
                <p className="mt-2 text-sm text-red-500">{formErrors}</p>
              )}
            </div>

            <div className="hidden text-xs text-[#f2f2f2] opacity-75 xl:block">
              <p className="mb-4">@ 2024 WAE Ltd.</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8 xl:-mt-10 xl:gap-9">
            {footerLinks.map((col) => {
              return (
                <div
                  key={col.id}
                  className="col-span-2 sm:col-span-1"
                >
                  <h6 className="mb-5 text-base xl:mb-10">{col.title}</h6>
                  <ul key={col.id}>
                    {col.list.map((listItem) => {
                      return (
                        <li
                          key={listItem.id}
                          className="mb-3 text-sm font-extralight opacity-80 last:mb-0"
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

          <div className="w-full text-center text-xs text-[#f2f2f2] opacity-75 xl:hidden">
            <p>@ 2024 WAE Ltd.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
