import {LoaderFunction} from "@remix-run/node";
import {json, MetaFunction, useLoaderData} from "@remix-run/react";
import {getErrorFromUnknown} from "~/global--common-typescript/utilities/typeValidationUtils";
import type {Blog} from "~/routes/blogs";
import {BlogCard, blogPosts} from "~/routes/blogs";

type LoaderData = {
  blog: Blog;
};

export const meta: MetaFunction<Blog> = ({params}) => {
  const {id} = params;
  return [
    {
      title: `Blog Post: ${id}`,
    },
  ];
};

export const loader: LoaderFunction = async ({params}) => {
  try {
    const {id} = params;
    if (
      !id ||
      typeof id !== "string" ||
      !Number.isInteger(parseInt(id)) ||
      parseInt(id) <= 0
    ) {
      return new Response(null, {status: 400});
    }
    const blog = blogPosts.find((post) => post.id === parseInt(id));
    if (!blog) {
      return new Response(null, {status: 404});
    }
    const loader: LoaderData = {
      blog: blog,
    };
    return json(loader);
  } catch (error) {
    const error_ = getErrorFromUnknown(error);
    return new Response(JSON.stringify({error: error_.message}), {status: 500});
  }
};

export default function BlogPost() {
  const {blog} = useLoaderData() as LoaderData;
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <main className="pt-[var(--header-height)]">
      <section>
        <div className="my-6 flex flex-col gap-4 px-20">
          <h2 className="text-center font-secondary text-4xl">
            News & Updates
          </h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos natus
            itaque et, similique nemo doloribus, veritatis quidem architecto, id
            consequuntur at nobis beatae neque laudantium dolor sequi pariatur
            tempore sapiente quo aliquam necessitatibus impedit! Ratione,
            aliquam? Error nesciunt sapiente aliquam suscipit et, facere aliquid
            rerum, explicabo praesentium ad commodi autem.
          </p>
        </div>
        <img
          src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0d41d832-bf9a-4dd4-532d-1213835bb900/public"
          alt="Blog hero banner"
          className="mb-5 w-full md:mb-6"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="200"
          data-aos-duration="500"
        />
      </section>
      <section className="container mt-12 grid grid-cols-2 gap-6">
        <div className="max-w-[80%]">
          <h3 className="mb-10 align-middle text-sm font-normal uppercase xl:mb-[40px]">
            <span className="prefix-dot pl-4"></span> General / {blog.date}
          </h3>
          <h2 className="mb-5 font-secondary text-xl md:mb-3 md:text-2xl xl:text-[32px] xl:leading-normal">
            {blog.title}
          </h2>
        </div>
        <div>
          <p className="mb-5 text-xs md:mb-10 md:text-sm xl:text-lg">
            {/* {blog.content} */}
            Health experts or doctors recommend that we should drink at least
            about 2 litres of pure and safe water in a day! This is considered
            to be the ideal or perfect amount to keep the average you in a
            perfect physical and mental condition. But if your quest for optimum
            hydration sees you reaching for plastic water bottles, you need to
            be conscious and careful. The following are a few harmful effects of
            plastic bottled water and plastic water bottles that will have you
            reach out for the tap or filter or any drinking water machine like
            drinking water fountains, water dispensers, coolers, etc.
          </p>
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f7f8bbad-d608-449b-de12-aeab8dd3c300/public"
            alt="Blog hero"
            className="mb-5 aspect-video w-full md:mb-6"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
          />
          <p className="mb-5 text-xs md:mb-10 md:text-sm xl:text-lg">
            {/* {blog.content} */}
            In fact, the question that ponders every mind is that why is bottled
            water bad or harmful to us? This is because as time passes by, the
            chemicals present in plastic bottles or jars leach into the water.
            And once, they get mixed in the drinking  water and reach our
            bloodstream, these dangerous toxins cause innumerable health
            disorders, such as liver and kidney damage, breast and uterine
            cancers, etc. 
          </p>
        </div>
      </section>
      <hr className="border-t-1 container my-10 border-black/20" />
      <section className="container">
        <div className="grid grid-cols-1 gap-6 gap-y-10 md:grid-cols-2">
          {blogPosts.slice(0, 2).map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              date={post.date}
              category={post.category}
              description={post.description}
              imageUrl={post.imageUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
