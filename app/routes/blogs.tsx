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
  return (
    <main className="pt-[var(--header-height)]">
      <div className="container my-14 flex max-w-screen-xl flex-col justify-center">
        <section>
          <img
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/7470b245-fdde-4302-b0af-00d7dc136a00/public"
            alt="Blog hero banner"
            className="min-h-3/5 mb-6 w-full"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-offset="200"
            data-aos-duration="500"
          />
          <div className="flex flex-col">
            <h3 className="mb-10 align-middle font-medium uppercase xl:mb-[60px]">
              <span className="prefix-dot pl-4"></span> General / 24 aug 2024
            </h3>
            <h2 className="wae-h5 mb-6 font-secondary">
              Nec massa viverra eget feugiat pellentesque.
            </h2>
            <p className="wae-h6 mb-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a
              justo auctor, vehicula sem et, tristique mi. Aenean cursus turpis
              ut erat suscipit, ac imperdiet nibh facilisis.
            </p>
            <p className="text-sm font-normal">
              Read More <span className="pl-4">→</span>
            </p>
          </div>
        </section>
        <div className="my-10 border-t-2 border-gray-300" />
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
    <div className="flex w-full flex-col border-b-2 border-gray-300">
      <img
        src={imageUrl}
        alt={title}
        className="aspect-[21/9] w-full object-cover"
      />
      <div className="flex flex-1 flex-col justify-between py-4">
        <div className="flex flex-col space-y-4">
          <h3 className="text-base font-medium uppercase">
            <span className="prefix-dot pl-4"></span> {category} / {date}
          </h3>
          <h2 className="font-secondary text-2xl">{title}</h2>
        </div>
        <div className="flex-grow">
          <p className="mt-2 line-clamp-3 overflow-hidden text-base">
            {description}
          </p>
        </div>
        <p className="mt-2 text-base font-medium">
          Read More <span className="pl-4">→</span>
        </p>
      </div>
    </div>
  );
}
