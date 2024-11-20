import {MetaFunction} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Blogs",
    },
  ];
};

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Nec massa viverra eget feugiat pellentesque.",
      date: "24 Aug 2024",
      category: "General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat suscipit, ac imperdiet nibh facilisis.",
      imageUrl:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b903776e-8e76-4c6c-972d-574ad3933a00/public",
    },
    {
      id: 2,
      title: "Fusce ultricies dui eget velit fermentum.",
      date: "18 Aug 2024",
      category: "Technology",
      description:
        "Pellentesque nec libero sed nisl lacinia feugiat. Donec ac lacus ultricies, gravida metus vitae, pharetra felis.",
      imageUrl:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b903776e-8e76-4c6c-972d-574ad3933a00/public",
    },
    {
      id: 3,
      title: "Nec massa viverra eget feugiat pellentesque.",
      date: "24 Aug 2024",
      category: "General",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a justo auctor, vehicula sem et, tristique mi. Aenean cursus turpis ut erat suscipit, ac imperdiet nibh facilisis.",
      imageUrl:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b903776e-8e76-4c6c-972d-574ad3933a00/public",
    },
    {
      id: 4,
      title: "Fusce ultricies dui eget velit fermentum.",
      date: "18 Aug 2024",
      category: "Management",
      description:
        "Pellentesque nec libero sed nisl lacinia feugiat. Donec ac lacus ultricies, gravida metus vitae, pharetra felis.",
      imageUrl:
        "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b903776e-8e76-4c6c-972d-574ad3933a00/public",
    },
  ];

  const categories = [
    "Design",
    "Prototyping",
    "Management",
    "Management",
    "Management",
  ];

  return (
    <main className="pt-[var(--header-height)]">
      <div className="container my-14 flex flex-col justify-center">
        <div className="mb-10 flex flex-wrap gap-3 md:mb-[60px] md:gap-5">
          {categories.map((category) => (
            <button
              key={category}
              className="rounded-lg bg-[#e0e0e0] px-4 py-2 transition-colors hover:bg-gray-300 md:px-5 md:py-[10px] md:text-base xl:text-xl"
            >
              {category}
            </button>
          ))}
        </div>

        <section>
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/7470b245-fdde-4302-b0af-00d7dc136a00/public"
            alt="Blog hero banner"
            className="mb-5 aspect-video w-full md:mb-6"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
          />
          <div className="flex flex-col">
            <h3 className="mb-10 align-middle text-sm font-medium uppercase xl:mb-[60px]">
              <span className="prefix-dot pl-4"></span> General / 24 aug 2024
            </h3>
            <h2 className="mb-5 font-secondary text-xl font-semibold md:mb-3 md:text-2xl xl:text-[32px] xl:leading-normal">
              Nec massa viverra eget feugiat pellentesque.
            </h2>
            <p className="mb-5 text-xs md:mb-10 md:text-sm xl:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
              justo auctor, vehicula sem et, tristique mi. Aenean cursus turpis
              ut erat suscipit, ac imperdiet nibh facilisis.
            </p>
            <p className="text-sm font-normal xl:text-base">
              Read More <span className="pl-4">→</span>
            </p>
          </div>
        </section>
        <hr className="border-t-1 my-10 border-black/20" />
        <section>
          <div className="grid grid-cols-1 gap-6 gap-y-10 md:grid-cols-2">
            {blogPosts.map((post) => (
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
      </div>
    </main>
  );
}

interface BlogCardProps {
  title: string;
  date: string;
  category: string;
  description: string;
  imageUrl: string;
}
function BlogCard({
  title,
  date,
  category,
  description,
  imageUrl,
}: BlogCardProps) {
  return (
    <div className="flex w-full flex-col border-b border-black/20 pb-10">
      <img
        src={imageUrl}
        alt={title}
        className="min-h-3/5 mb-5 w-full md:mb-6"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="200"
        data-aos-duration="500"
      />
      <div className="flex flex-col">
        <h3 className="mb-10 align-middle text-sm font-medium uppercase md:mb-6 md:text-xs xl:mb-8 xl:text-sm">
          <span className="prefix-dot pl-4"></span> {category} / {date}
        </h3>
        <h2 className="mb-5 font-secondary text-xl font-semibold md:mb-3 md:text-base xl:mb-4 xl:text-xl">
          {title}
        </h2>
        <p className="mb-5 text-xs md:mb-4 xl:mb-6 xl:text-sm">{description}</p>
        <p className="text-sm font-normal xl:text-base">
          Read More <span className="pl-4">→</span>
        </p>
      </div>
    </div>
  );
}
