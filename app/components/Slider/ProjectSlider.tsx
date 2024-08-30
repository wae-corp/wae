import {Carousel, Embla} from "@mantine/carousel";
import {Link} from "@remix-run/react";
import {useState} from "react";
import {ProjectSliderProps} from "~/typeDefinitions";

export const ProjectSlider = ({
  projectList,
  arrows = false,
}: ProjectSliderProps) => {
  const [embla, setEmbla] = useState<Embla | null>();

  return (
    <section>
      <Carousel
        getEmblaApi={setEmbla}
        loop={true}
        classNames={{
          slide: "basis-[500px] mr-[60px] 2xl:basis-[600px] 2xl:mr-[100px]",
          controls: "hidden",
        }}
      >
        {projectList?.map((project, idx) => {
          return (
            <Carousel.Slide key={idx}>
              <Link to={project?.link}>
                <img
                  src={project?.image}
                  alt={project?.name}
                  width={600}
                  height={384}
                  className="aspect-video object-cover"
                />
                <h5 className="mt-5 text-start">{project?.name}</h5>
              </Link>
            </Carousel.Slide>
          );
        })}
      </Carousel>
      {arrows && (
        <div className="container mt-20 flex items-center justify-end gap-4">
          <button
            onClick={() => embla?.scrollPrev()}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-white transition-colors hover:bg-gray-800 active:bg-gray-700"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 12.5L1.5 7L6.5 1.5"
                stroke="white"
              />
            </svg>
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-white transition-colors hover:bg-gray-800 active:bg-gray-700"
          >
            <svg
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 1.5L6.5 7L1.5 12.5"
                stroke="white"
              />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};
