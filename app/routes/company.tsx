import {MetaFunction} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Company",
    },
  ];
};

export default function Company() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center bg-white bg-gradient-to-b from-[#6d6d6d] from-0% to-white py-8 text-center text-black">
        <div className="container">
          <div className="mx-auto mt-40 max-w-3xl">
            <h6 className="uppercase">SUSTAINABILITY</h6>

            <h2 className="wae-h2 mt-10 font-secondary leading-tight">
              Did you know? On average we use 5,500 liters of water a day! That
              is a humungous amount of water!…
            </h2>
          </div>
        </div>
      </main>
    </>
  );
}
