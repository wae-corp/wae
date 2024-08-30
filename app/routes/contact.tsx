import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";
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
      <section className="flex bg-white">
        <div className="w-1/2 px-40 py-36">
          <div className="container">
            <div className="my-12 max-w-[360px]">
              <h5 className="wae-h5 mb-5 font-secondary">
                For more info/site assessment
              </h5>
              <p>Talk to our Water Expert</p>
            </div>

            <div className="mt-10 text-xl text-white">
              <div className="flex">
                {Icons.Dialer}
                <a
                  href="tel:+91120687068"
                  className="mb-6 hover:underline"
                >
                  +91 120687068
                </a>
              </div>
              <div className="flex">
                {Icons.Envelope}

                <div>
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

            <button className="h-14 min-w-[200px] rounded-xl bg-black px-4 py-2 tracking-wide text-white">
              Join
            </button>
          </div>
        </div>
        <div className="relative flex w-1/2 flex-col justify-center bg-black bg-opacity-40 bg-water-drop bg-cover bg-bottom bg-no-repeat px-40 py-36 text-white">
          <div className="absolute inset-0 bg-black opacity-60"></div>

          <div className="isolate">
            <div className="mb-8">We're looking for</div>
            <Link
              to={"/"}
              className="flex items-center justify-between border-b border-white pb-2 transition-colors hover:bg-gray-800"
            >
              <span className="font-secondary text-2xl">
                Senior Corporate Manager
              </span>
              <span>{Icons.ChevronRight}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
