export interface ProductSliderProps {
    productList: Product[];
}

export interface ProjectSliderProps {
    projectList: Project[];
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
