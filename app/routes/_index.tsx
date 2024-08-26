import type {MetaFunction} from "@remix-run/node";
import {OurProductsSlider} from "~/components";
import {ProductList} from "~/static";

export const meta: MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export default function Index() {
    return (
        <>
            <main className="h-screen flex items-center pb-10 justify-center relative">
                <div className="absolute inset-0 w-full h-full -z-[1]">
                    <div className="bg-gradient-to-b from-black via-transparent to-black absolute w-full h-full z-[1]"></div>
                    <img
                        src="/images/covers/earth-banner.jpg"
                        className="object-cover h-full w-full"
                        width={1920}
                        height={1080}
                    />
                </div>

                <div className="text-center text-white self-end">
                    <h1 className="wae-h1 font-secondary">
                        Keeping The Blue Planet Green
                    </h1>

                    <p className="max-w-[600px] uppercase font-normal mx-auto">
                        Nec massa viverra eget feugiat pellentesque. Feugiat
                        adipiscing massa vitae auctor mi massa. Sodales libero
                        viverra cursus sed duis luctus nulla. In malesuada.
                    </p>
                </div>
            </main>

            <section className="bg-black min-h-screen text-white text-center flex items-center justify-center py-8">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h6 className="uppercase">SUSTAINABILITY</h6>

                        <h2 className="wae-h2 font-secondary mt-10 leading-tight mb-[100px]">
                            Did you know? On average we use 5,500 liters of
                            water a day! That is a humungous amount of water!…
                        </h2>

                        <p className="uppercase">
                            EXPLORE THE SYSTEM ALL AROUND
                        </p>
                    </div>
                </div>
            </section>

            <section className="min-h-screen flex items-center py-10">
                <div className="container">
                    <OurProductsSlider productList={ProductList} />
                    <div className="grid gap-8 grid-cols-12">
                        <div className="col-span-8 flex justify-center flex-col">
                            <h3 className="font-secondary text-4xl mb-10">
                                A 100% Made in India
                            </h3>
                            <p className="uppercase mb-12 ml-28 max-w-[80%]">
                                Like the design, the production of our kitchens
                                also takes place entirely within our company and
                                is the result of a process in which human
                                qualities are fundamental, together with the
                                quality of technologies and materials.
                            </p>

                            <p className="uppercase">Production</p>
                        </div>
                        <div className="col-span-4">
                            <img
                                src="/images/covers/bowl-with-chopsticks.jpg"
                                alt="bowl-with-chopsticks"
                                width={370}
                                height={460}
                                className="object-cover ml-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black min-h-screen text-white text-center flex items-center justify-center py-[100px]">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h6 className="uppercase">SUSTAINABILITY</h6>

                        <h2 className="wae-h2 font-secondary mt-10 leading-tight mb-[100px]">
                            Projects created by our customers to draw
                            inspiration from
                        </h2>

                        <p className="uppercase">You see everyone</p>
                    </div>
                </div>
            </section>
        </>
    );
}
