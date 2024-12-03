import {ReactNode} from "react";
import {ProductData} from "./static";

export interface ProductSliderProps {
  productList: ProductData[];
  arrows?: boolean;
  centered?: boolean;
}

export interface BrowseByMountingTypeProps {
  mountingTypes: Array<{
    id: string;
    image: string;
    link: string;
    name: string;
  }>;
  arrows?: boolean;
  centered?: boolean;
}

export interface ProductDetailImageSliderProps {
  images: string[];
  arrows?: boolean;
}

export interface Product {
  id?: string;
  image?: string;
  link?: string;
  name?: string;
  details?: ReactNode;
}

export interface ProductDetails {
  id?: string;
  images?: string[];
  type?: ["Water", "Ice", "Hot"];
  features?: string[];
  description?: string;
  link?: string;
}
