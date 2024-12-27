import {Link} from "@remix-run/react";

export const BrowseBySlider = ({
  productList,
}: {
  productList: {
    id: string;
    image: string;
    link: string;
    name: string;
  }[];
}) => {
  return (
    <section className="container">
      <div className="grid gap-10 xl:grid-cols-2">
        {productList.map((product, idx) => {
          return (
            <Link
              key={idx}
              to={product?.link}
              className="block"
              data-aos="fade-in"
            >
              <img
                src={product?.image}
                alt={product?.name}
                width={600}
                height={384}
                className="aspect-video w-full object-cover"
              />
              {product?.name && (
                <h5 className="mt-5 text-start text-base uppercase">
                  {product?.name}
                </h5>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
