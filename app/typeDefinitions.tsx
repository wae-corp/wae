export interface ProductSliderProps {
  productList: Product[];
}

export interface ProjectSliderProps {
  projectList: Project[];
  arrows?: boolean;
}

export interface Product {
  id: string;
  image: string;
  link: string;
  name: string;
}

export interface Project {
  id: string;
  image: string;
  link: string;
  name: string;
}

export interface ProductDetails {
  id: string;
  type: ["Water", "Ice", "Hot"];
}
