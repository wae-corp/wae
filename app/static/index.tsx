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
    link: "/product",
    image: "",
  },
  {
    id: "02",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product",
    image: "",
  },
  {
    id: "03",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product",
    image: "",
  },
  {
    id: "04",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product",
    image: "",
  },
  {
    id: "05",
    name: "TRUBLU",
    description:
      "This is the All-around variant with an aluminum structure, 100% recyclable, visible on the inside of the door. The exterior is covered with panels of your choice in lacquered glass, wood, Stratified HPL, stoneware, MDi or Fenix NTM® and NTA®. The thickness of the door is 20 or 23 mm and the opening systems provided are groove or push-pull.",
    types: ["Water", "Ice", "Hot"],
    link: "/product",
    image: "",
  },
];

export const ProductImageSliderData = [
  "/images/covers/trublu.jpg",
  "/images/covers/trublu.jpg",
];

export * from "./Icons";
