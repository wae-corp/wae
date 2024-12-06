import {Link} from "@remix-run/react";
import {BrowseByMountingTypeProps} from "~/typeDefinitions";

export const BrowseByMountingType = ({
  mountingTypes,
}: BrowseByMountingTypeProps) => {
  return (
    <section className="container">
      <div className="grid gap-10 xl:grid-cols-2">
        {mountingTypes?.map((mounting, idx) => {
          return (
            <Link
              key={idx}
              to={mounting?.link}
              className="block"
              data-aos="fade-in"
            >
              <img
                src={mounting?.image}
                alt={mounting?.name}
                width={600}
                height={384}
                className="aspect-video w-full object-cover"
              />
              {mounting?.name && (
                <h5 className="mt-5 text-start text-base uppercase">
                  {mounting?.name}
                </h5>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
};
