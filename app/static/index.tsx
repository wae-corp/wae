import {Link} from "@remix-run/react";
import {Product} from "~/typeDefinitions";

export const ProductList: Product[] = [
  {
    id: "1",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
  {
    id: "2",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
  {
    id: "3",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
  {
    id: "4",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
  {
    id: "5",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
  {
    id: "6",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
  {
    id: "7",
    name: "Drinking Water Station",
    link: "/",
    image: "/images/covers/drinking-water-station.jpg",
  },
];

export const SecondaryProducts: Product[] = [
  {
    id: "1",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
  {
    id: "2",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
  {
    id: "3",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
  {
    id: "4",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
  {
    id: "5",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
  {
    id: "6",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
  {
    id: "7",
    name: "YOU SEE EVERYONE",
    link: "/",
    image: "/images/covers/vending-machine-near-wall.jpg",
  },
];

export const productsByApplication: Product[] = [
  {
    id: "1",
    image: "/images/covers/vending-machine-near-wall.jpg",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-details"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "2",
    image: "/images/covers/vending-machine-near-wall.jpg",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-details"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "3",
    image: "/images/covers/vending-machine-near-wall.jpg",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-details"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "4",
    image: "/images/covers/vending-machine-near-wall.jpg",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-details"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "5",
    image: "/images/covers/vending-machine-near-wall.jpg",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-details"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "6",
    image: "/images/covers/vending-machine-near-wall.jpg",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-details"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
];

export const ProductsPageListing = [
  {
    id: "01",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "02",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "03",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "04",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "05",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
];

export const ProductImageSliderData = [
  "/images/covers/trublu.jpg",
  "/images/covers/trublu.jpg",
];

export const specifications = [
  {
    id: 1,
    title: "Height",
    value: "1690mm",
    subtitle: "World-first design",
  },
  {
    id: 2,
    title: "Chilled temperature",
    value: "2°C",
    subtitle: "Maximum 12°C",
  },
  {
    id: 3,
    title: "Hot temperature",
    value: "69°C",
    subtitle: "Degrees celsius",
  },
  {
    id: 4,
    title: "Chilled capacity",
    value: "80L/h",
    subtitle: "Litres per hour",
  },
  {
    id: 5,
    title: "Hot capacity",
    value: "16L/h",
    subtitle: "Litres per hour",
  },
];

export const careers = [
  {
    id: 1,
    type: "Apprenticeship",
    details:
      "Step into the professional world with hands-on experience and expert mentorship. Ideal for those eager to learn and grow.",
    link: "/careers/apprenticeship",
  },
  {
    id: 2,
    type: "Full-Time Positions",
    details:
      "Dive into diverse roles that challenge and excite you. From engineering to marketing, we are on the lookout for passionate professionals ready to innovate.",
    link: "/careers/full-time",
  },
  {
    id: 3,
    type: "Internship",
    details:
      "Our internships offer more than just experience. They're gateways to your future career, providing real-world skills and professional development.",
    link: "/careers/internship",
  },
  {
    id: 4,
    type: "Short Term Projects",
    details:
      "Engage in unique, high-impact projects. Perfect for specialists looking to contribute their expertise on a flexible basis.",
    link: "/careers/short-term",
  },
];

export const coreValues = [
  {
    id: 1,
    image: "/images/icons/magnifying-glass-with-gear.svg",
    value: "Research-Driven",
    details: "We prioritize research and technology over market trends.",
  },
  {
    id: 2,
    image: "/images/icons/person-with-leaves.svg",
    value: "Environmental and Human Service",
    details: "Our top priority is serving the planet and humanity.",
  },
  {
    id: 3,
    image: "/images/icons/hand-with-checkmark.svg",
    value: "Responsibility",
    details:
      "We hold ourselves accountable to our employees, customers, associates, and society, upholding the highest standards in all engagements",
  },
  {
    id: 4,
    image: "/images/icons/employee-value.svg",
    value: "Employee Value",
    details:
      "Our future hinges on our employees' knowledge, attitude, skills, teamwork, and integrity, which we hold in the highest esteem.",
  },
  {
    id: 5,
    image: "/images/icons/hand-with-checkmark.svg",
    value: "Participative Management",
    details:
      "We champion participative management, productivity, and profit-sharing.",
  },
  {
    id: 6,
    image: "/images/icons/handshake-verified.svg",
    value: "Quality Commitment",
    details:
      "We commit to quality in our products, services, relationships, communications, and promises",
  },
];

export * from "./Icons";
