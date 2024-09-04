export interface ProductSliderProps {
  productList: Product[];
}

export interface ProjectSliderProps {
  projectList: Project[];
  arrows?: boolean;
}

export interface ProjectImageSliderProps {
  images: string[];
  arrows?: boolean;
}

export interface Product {
  id: string;
  image: string;
  link: string;
  name?: string;
}

export interface Project {
  id: string;
  image: string;
  link: string;
  name?: string;
}

export interface ProductDetails {
  id?: string;
  images?: string[];
  type?: ["Water", "Ice", "Hot"];
  features?: string[];
  description?: string;
  link?: string;
}
