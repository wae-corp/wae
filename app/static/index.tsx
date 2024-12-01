import {Link} from "@remix-run/react";
import {ReactNode} from "react";
import {Product} from "~/typeDefinitions";

export const ProductList: Product[] = [
  {
    id: "1",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52cfd172-76d2-4471-8083-4a8d9a8caf00/public",
  },
  {
    id: "2",
    name: "Water Dispenser",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c71da7df-b279-441d-63ca-cab312e82600/public",
  },
  {
    id: "3",
    name: "PUS (Public Utility Series)",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/83142f24-ef73-4e1a-ae83-f863dff91b00/public",
  },
  {
    id: "4",
    name: "Drinking Water Faucets",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
  {
    id: "5",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
  {
    id: "6",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
  {
    id: "7",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
];

export const SecondaryProducts: Product[] = [
  {
    id: "1",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
  {
    id: "2",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
  {
    id: "3",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
  {
    id: "4",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
  {
    id: "5",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
  {
    id: "6",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
  {
    id: "7",
    name: "YOU SEE EVERYONE",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
  },
];

export const productsByApplication: Product[] = [
  {
    id: "01",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-list/01"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "02",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-list/01"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "03",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-list/01"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "04",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-list/01"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "05",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-list/01"}
          className="wae-btn wae-btn-pill wae-btn-md mt-8 border-black px-12"
        >
          View All Products
        </Link>
      </div>
    ),
  },
  {
    id: "06",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "YOU SEE EVERYONE",
    details: (
      <div className="mt-5">
        <p className="text-sm uppercase leading-normal">
          This is the All-arounD variant with an aluminum structure, 100%
          recyclable, visible on the inside of the door.{" "}
        </p>

        <Link
          to={"/product-list/01"}
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
    name: "DRINKING WATER STATION - BLUWAE Series",
    description:
      "Water dispensers with inbuilt purification —pure, safe water delivered efficiently. Designed to reduce plastic waste and energy consumption, making sustainability easy.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "02",
    name: "DRINKING WATER DISPENSERS - TRUBLU Series",
    description:
      "Stainless steel water dispensers give you fresh, clean water anytime. Compact, energy-efficient, and perfect for spaces where RO water is not readily available.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "03",
    name: "DRINKING WATER FAUCETS - WATERMATIC Series",
    description:
      "Drinking water faucets with under the counter storage units to make access to fresh water simple. Precision-engineered for smooth flow, with a focus on reducing waste and energy use.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "04",
    name: "WATER COOLER & FOUNTAINS - ZVR Series",
    description:
      "Water coolers cum bubblers provide chilled water on demand. Built to be energy-efficient, they’re ideal for public spaces, reducing both costs and plastic waste.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "05",
    name: "PUBLIC UTILITY SYSTEMS - PUS Series",
    description:
      "Designed for large public spaces, PUS systems ensure clean, accessible water. Engineered for durability and eco-friendliness, they support sustainable communities.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "06",
    name: "COMMERCIAL/INDUSTRIAL PLANTS",
    description:
      "Power your facility with our large-scale hydration plants. Scalable and efficient, they offer high-volume water solutions with a commitment to sustainability.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "07",
    name: "UTC UNITS",
    description:
      "UTC units provide a space-saving solution for clean water. Ideal for compact areas, they combine smart design with environmental responsibility.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "08",
    name: "SMALL RO UNITS",
    description:
      "Maximize your space with our sleek wall hanging units. Perfect for areas with limited room, they deliver reliable, sustainable water access.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
  {
    id: "09",
    name: "COMMUNITY WATER SOLUTIONS",
    description:
      "Bringing clean water to communities, our solutions offer sustainable hydration for all. Designed to be efficient, reliable, and environmentally responsible.",
    types: ["Water", "Ice", "Hot"],
    link: "/product-list",
    image: "",
  },
];

export const ProductImageSliderData = [
  "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
  "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
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
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3101c190-ebdc-4e39-16d0-a79cef6a0e00/public",
  },
  {
    id: 2,
    type: "Full-Time Positions",
    details:
      "Dive into diverse roles that challenge and excite you. From engineering to marketing, we are on the lookout for passionate professionals ready to innovate.",
    link: "/careers/full-time",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dc8fc541-4998-4084-1d3f-620b9d5e1f00/public",
  },
  {
    id: 3,
    type: "Internship",
    details:
      "Our internships offer more than just experience. They're gateways to your future career, providing real-world skills and professional development.",
    link: "/careers/internship",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e7c9f066-cf23-4012-2342-0161f4f52b00/public",
  },
  {
    id: 4,
    type: "Short Term Projects",
    details:
      "Engage in unique, high-impact projects. Perfect for specialists looking to contribute their expertise on a flexible basis.",
    link: "/careers/short-term",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3a620cb2-0eb9-41e1-b854-85428c926d00/public",
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

export const championsSpotlight = [
  {
    id: 1,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/02e2d2f7-c2d4-4d19-be69-1684be511000/public",
    title: "Citibank: Banking on a Greener Tomorrow",
    subtitle:
      "Citibank has deployed 105 water-refill stations across its Indian offices, turning everyday hydration into an act of environmental stewardship.",
    statement: "an equivalent of planting thousands of trees.",
    achievments: [
      {
        id: 1,
        title: 14173,
        unit: "kg",
        subtitle: "plastic waste Removed",
      },
      {
        id: 2,
        title: 16.5,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 3,
        title: 94000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 2,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b0b9d990-4e76-4efa-7339-b9452dff1a00/public",
    title: "Credit Suisse: A Fresh Start for a Sustainable Future",
    subtitle:
      "Credit Suisse has integrated 70 refill stations in Pune, Gurgaon, and Mumbai, making clean, green hydration accessible to its workforce.",
    statement: "an equivalent of planting thousands of trees.",
    achievments: [
      {
        id: 1,
        title: 17,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 98000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 3,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/357b68ab-9cf2-4f08-dd98-a6f2f5617700/public",
    title: "Deutsche Bank: Banking on Blue",
    subtitle:
      "Deutsche Bank's 73 refill stations are reducing reliance on bottled water across India.",
    statement: "an equivalent of planting thousands of trees.",
    achievments: [
      {
        id: 1,
        title: 23,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 132000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 4,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5df4da60-914c-4da4-ca96-be24e6a1d300/public",
    title: "Ericsson: Connecting the Dots to a Greener Future",
    subtitle:
      "Ericsson's installation of 138 water-refill stations across India showcases their commitment to sustainable practices",
    statement:
      "Ericsson's initiative is like removing the equivalent of two medium-sized SUVs from the roads each month.",
    achievments: [
      {
        id: 1,
        title: 55,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 315000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 5,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d17954d5-2247-42eb-1929-d19645ec7700/public",
    title: "ICICI Bank: A Ripple of Change",
    subtitle:
      "ICICI Bank leads the pack with 624 water-refill stations across India.",
    statement: "turning everyday hydration into a force for good.",
    achievments: [
      {
        id: 1,
        title: 53,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 299000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 6,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6e4d9ec6-c406-4210-0a2d-7b3f1f565300/public",
    title: "J.P. Morgan: Investing in a Greener Tomorrow",
    subtitle:
      "J.P. Morgan has turned 241 locations into green spaces with their water-refill stations.",
    statement:
      "J.P. Morgan is redefining the meaning of “investment” by investing in the planet.",
    achievments: [
      {
        id: 1,
        title: 105,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 90288,
        unit: "kg",
        subtitle: "plastic waste Removed",
      },
    ],
    link: "/",
  },
  {
    id: 7,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/61fc43fb-c3e1-476e-e4d9-acb357351900/public",
    title: "Max Life: Securing a Greener Future",
    subtitle:
      "Max Life has installed 323 refill stations, securing their commitment to sustainability.",
    statement:
      "Max Life's initiative underscores the power of green practices in everyday operations.",
    achievments: [
      {
        id: 1,
        title: 50,
        unit: "m litres",
        subtitle: "plastic waste Removed",
      },
      {
        id: 2,
        title: 283000,
        unit: "kg",
        subtitle: "Water saved annually",
      },
    ],
    link: "/",
  },
  {
    id: 8,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/865a532f-8c29-47ca-0728-e7e928016600/public",
    title: "Morgan Stanley: Reimagining Impact",
    subtitle:
      "Morgan Stanley's 47 refill stations in Mumbai and Bangalore are more than water sources—they're symbols of change.",
    statement:
      "Morgan Stanley's commitment to sustainability is evident in every sip.",
    achievments: [
      {
        id: 1,
        title: 18,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 103000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 9,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c90562f2-1332-4cf4-6463-de6782ba7700/public",
    title: "RBS (Royal Bank of Scotland): A Fresh Take on Finance",
    subtitle:
      "RBS has implemented 127 refill stations across major Indian cities, championing a fresh approach to hydration.",
    statement:
      "RBS is making a powerful statement about the future of finance and the planet.",
    achievments: [
      {
        id: 1,
        title: 26,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 21978,
        unit: "kg",
        subtitle: "plastic waste Removed",
      },
    ],
    link: "/",
  },
  {
    id: 10,
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/02e2d2f7-c2d4-4d19-be69-1684be511000/public",
    title: "Sapient: Redefining Smart Solutions",
    subtitle:
      "Sapient's 103 refill stations in Gurgaon are helping redefine what it means to be a smart, sustainable business.",
    statement:
      "Sapient's actions speak louder than words, showing that smart solutions are sustainable solutions.",
    achievments: [
      {
        id: 1,
        title: 27,
        unit: "m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: 154000,
        unit: "kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
];

export interface ProductData {
  id?: string;
  categoryName?: string;
  categoryImage?: string;
  categoryDescription?: string;
  categoryDescriptionTwo?: string;
  categoryDescriptionThree?: string;
  productList?: ProductList[];
}

export interface ProductList {
  id?: string;
  bannerImageUrl?: string;
  thumbnailUrl?: string;
  name?: string;
  mountingType?: string;
  description?: string | ReactNode;
  keyPoints?: string[];
  images?: string[];
  features?: {
    title: string;
    description: string;
  }[];
}

export const productData: ProductData[] = [
  {
    id: "01",
    categoryName: "DRINKING WATER STATION - BLUWAE Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/989b9ed7-8668-4a62-7bf6-f32a540d2f00/public",
    categoryDescription:
      "Water dispensers with inbuilt purification —pure, safe water delivered efficiently. Designed to reduce plastic waste and energy consumption, making sustainability easy.",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It's a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    productList: [
      {
        id: "01",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/699b0801-c2dc-41d0-136f-0b5d54990b00/public",
        bannerImageUrl: "",
        name: "BLUWAE ENKI FS",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bfc477ef-9633-42cb-2059-00898188c200/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6fc445ac-0336-4f77-7e19-983923501a00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4fde63dc-3340-4d08-e45d-bc81f5232000/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "02",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b173ac87-c1ea-4c9b-b4dc-9dfe9d7e4100/public",
        bannerImageUrl: "",
        name: "BLUWAE POS",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/60624bcd-8cdd-4a32-9b52-20f1c69e9c00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/7ab00856-13bf-49cc-1d90-90574762c500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0c68e87a-ef91-4741-d3e4-6db5abb44e00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "03",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9df2b276-67da-412e-b944-137e68fa3500/public",
        bannerImageUrl: "",
        name: "BLUWAE ROM FS",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/804b5858-eda8-484c-f194-08c421e1d400/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4dd89f6a-b1ea-46ed-86e5-8747b5432100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e6718c14-1c8a-432f-17d5-31c0f4f51800/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "04",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52cfd172-76d2-4471-8083-4a8d9a8caf00/public",
        bannerImageUrl: "",
        name: "BLUWAE REVA",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9b7a8014-1ca5-4095-2753-ba366ec52100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/25e93e1d-1cd8-47e2-16d5-957e84a9f400/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/539051e8-c36f-4ea5-f1b3-d337cb2e4100/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "05",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ec6c91fe-22a7-45bb-3aee-5e6720147000/public",
        bannerImageUrl: "",
        name: "BLUWAE ASSISTIFLOW",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/58af2736-2da1-4a98-cfc0-7b1a76125600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9a20872c-9962-4ec0-2110-e4fee558c700/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5bd1f03d-81b3-47e8-56d0-e6f594ca2800/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "06",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6865cefc-5a2e-43c5-5d73-438cfac6c800/public",
        bannerImageUrl: "",
        name: "BLUWAE ENKI CT",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/332d6670-16ff-49da-e386-748fe618ff00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/adfff61c-94be-410f-f389-21510a0a2800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f78f518e-87fc-4884-d1b7-530193737400/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "07",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/54008031-5666-4934-a9d4-6fdc01030e00/public",
        bannerImageUrl: "",
        name: "BLUWAE VAR CT",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/19fa333f-7d0e-4108-5640-9679d8d0ad00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/231a38c3-97b7-4d4b-85a7-cdc42584c100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4d4be20d-fe61-44bc-18c5-b66877c46700/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "08",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52dd58ea-1d30-4397-6ba0-df78adaeaa00/public",
        bannerImageUrl: "",
        name: "BLUWAE ROM CT",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bfbf1885-b5d9-483d-0137-0a78cf5fed00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8f660606-e5e1-4be5-4358-aa9e93e87000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/aa9f4a85-2918-4429-5834-9f9510b0fb00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      // Below product images and data are placeholder for VAR FS product
      {
        id: "09",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52dd58ea-1d30-4397-6ba0-df78adaeaa00/public",
        bannerImageUrl: "",
        name: "BLUWAE VAR FS",
        mountingType: "Free-Standing",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bfbf1885-b5d9-483d-0137-0a78cf5fed00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8f660606-e5e1-4be5-4358-aa9e93e87000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/aa9f4a85-2918-4429-5834-9f9510b0fb00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
    ],
  },
  {
    id: "02",
    categoryName: "DRINKING WATER DISPENSER - TRUBLU Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/708253cf-b3b1-4b4c-e9ed-73f9c05aa400/public",
    categoryDescriptionTwo:
      "Our Stainless Steel Water Dispensers aren’t just built to dispense water—they’re built to last. Crafted from durable stainless steel 304, they offer pure, refreshing water. Designed for sustainability, these dispensers help you cut down on waste while delivering energy-efficient performance that saves both the planet and your budget. It’s hydration that works smarter.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "Stainless steel water dispensers give you fresh, clean water anytime. Compact, energy-efficient, and perfect for spaces where RO water is not readily available.",
    productList: [
      {
        id: "01",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        bannerImageUrl: "",
        name: "TRUBLU ALFA TL",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6dbddbd4-1786-42d8-16f2-ab78afe10100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3f6a334f-3ab9-42b1-a732-cbc289ab9000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11628173-98f1-4dd8-3209-cd5b7fbd2400/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "02",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        bannerImageUrl: "",
        name: "TRUBLU ALFA BL",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6232b01c-a47f-460c-455c-6b083de73900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4418b950-683f-43ff-416b-a8594738fb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/20c55d69-f031-4a70-1c50-03d0002a7100/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "03",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        bannerImageUrl: "",
        name: "TRUBLU ALFA 100",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8b6f2fee-336a-4736-bd52-230ae7f15900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c2fc11a1-dbb6-49cc-1dd2-cffbcfe4d300/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/de420d3a-dc02-4df1-d78d-293893cba500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cb2a8039-3c66-4c54-d029-0b3fa4f63d00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/33949b56-807e-4cef-93a0-db7e189f8400/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4cbb98a1-d2e7-4e8c-3ff6-9028f7b55400/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "04",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        bannerImageUrl: "",
        name: "TRUBLU ALFA CT",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ed60afe4-3381-4dd8-38a6-21a600df4000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47685348-649b-4234-fd99-b1bd4fa74800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/94046aa6-df9e-429e-d03d-11ff25706a00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "05",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e670b1ee-b32c-4a6a-5d51-ed03fa81c400/public",
        bannerImageUrl: "",
        name: "TRUBLU AENON",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9fa50ce5-7fc6-4260-4546-3b009f3d8100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/13f45d36-c6c9-43e4-7079-fa7860877800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8676f367-6f7d-4ab4-324c-f97fcf5a4b00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "06",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f339b126-7cad-4942-91ee-8f535507f600/public",
        bannerImageUrl: "",
        name: "TRUBLU DELTA",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e464f3c6-cb5d-448c-da7a-0c6c5c4d9500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a661576f-abcf-4d53-b111-35d7660d1600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a8aca47b-7fcd-4037-0afe-66ac58720300/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "07",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c16970c2-a74d-4b1e-b0b0-e88ee58be000/public",
        bannerImageUrl: "",
        name: "TRUBLU GAMMA",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3934c66e-2576-4aea-714f-d11f6cd10200/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/15a33428-ea01-4719-1066-428a16b9fc00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6d12257c-d3c3-48b0-f944-6ac2867af200/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "08",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b92f8428-83ae-45b4-fccf-465b18193500/public",
        bannerImageUrl: "",
        name: "TRUBLU LAGOON",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6b93eb3c-5858-4baf-e08c-d8c2afe65800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/92c186cd-310f-4f6b-edd7-31c488d7f600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b66d148e-af49-4a90-02a8-3518b2106f00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
    ],
  },
  {
    id: "03",
    categoryName: "DRINKING WATER FAUCETS - WATERMATIC Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ac71707c-d21b-4121-80b9-26e66359d100/public",
    categoryDescriptionTwo:
      "Drinking water faucets with under the counter storage units to make access to fresh water simple. Precision-engineered for smooth flow, with a focus on reducing waste and energy use.",
    categoryDescriptionThree:
      "Customization meets innovation with our water coolers and fountains. Engineered for heavy use, these units offer advanced filtration and are crafted to minimize environmental impact. Whether you're looking for a sleek wall unit or a robust floor-standing option, they’re designed to deliver clean water efficiently, reducing plastic waste while keeping passengers refreshed and airports sustainable.",
    categoryDescription:
      "Water coolers cum bubblers provide chilled water on demand. Built to be energy-efficient, they’re ideal for public spaces, reducing both costs and plastic waste.",
    productList: [
      {
        id: "01",
        name: "Piper",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/14dbff34-7f49-49a5-3837-64b6880ac000/public",
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/55199965-30ce-4ef8-abf9-78a654bd3b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/576c6473-9649-4eee-e31c-0e4ee5cc0d00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4aee070-6aa9-430d-5009-f51a13b48800/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "02",
        name: "Indus",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/530b6e77-4a94-4c07-5fe6-e7a902d39200/public",
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/02dfe0c0-93c7-4086-6508-6ea0bc1b2a00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/27e09afa-2851-4872-bb0a-29b397568000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1a765a6d-b8e2-457a-150d-efcbe1fffa00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "03",
        name: "Touch",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/32cdc632-c6bd-4d5a-a851-993f0b468600/public",
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3b24c06b-1752-47a0-4499-be61a2497800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0b994225-97de-4679-daf1-8e5008e73500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a1a596c2-4a97-4da4-72a4-577ccb20a900/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "04",
        name: "Moses",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2f8b4ab6-9dde-4f8b-4ac8-795976314100/public",
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47b3d27b-b65b-4e94-26d1-ac8bb35afd00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0a6c1075-ac97-4c46-d1b9-42d3b6d82900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8440a366-f65d-40b0-7b2c-582ad7f8cc00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "05",
        name: "TRX.TL",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/213a7aa6-0b7c-466a-1583-353000287100/public",
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0a63f294-a33c-470e-8aba-f6bef589a600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5a89b2db-4c37-4e75-40cc-0d5afa2fac00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e0460e14-5904-4c18-9dc4-1cf913d7da00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "06",
        name: "HKN",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a1d7989c-aec8-48b3-9c33-5ed1f22b0700/public",
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/76de532d-a762-4789-d348-ffa6ddab9700/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2e897fea-6219-4096-1989-ac1855719800/public",
          // "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
    ],
  },
  {
    id: "04",
    categoryName: "WATER COOLER & FOUNTAINS - ZVR Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ac71707c-d21b-4121-80b9-26e66359d100/public",
    categoryDescriptionTwo:
      "Water coolers cum bubblers provide chilled water on demand. Built to be energy-efficient, they’re ideal for public spaces, reducing both costs and plastic waste.",
    categoryDescriptionThree:
      "Innovation doesn’t stop at convenience—it extends to responsibility. Our public utility systems not only deliver water where it’s needed most, but they do it with minimal waste. Crafted for long-term performance, these systems align with your commitment to a greener, more efficient future. Because when it comes to public spaces, clean water should be a given—not a challenge.",
    categoryDescription:
      "Designed for large public spaces, PUS systems ensure clean, accessible water. Engineered for durability and eco-friendliness, they support sustainable communities.",
    productList: [
      {
        id: "01",
        name: "PENGUIN",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/187c4f6d-5652-4697-063b-74913cc85200/public",
        bannerImageUrl: "",
        mountingType: "Fountain",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "02",
        name: "YAMI",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1c00eef0-3d07-4b2a-d4fa-886365c43b00/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4617ef86-d822-4f26-a0e8-d81be539da00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/85bdf8ae-9a9c-4e51-262c-3086fce40d00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/916a4dbf-24a7-4130-00bf-c35c5693ce00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "03",
        name: "PLUSULTA",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9db14c02-30db-4131-3b6d-7c5b2fa3fb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c274a381-1fe3-48ce-37e1-296ff4719900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5fcb76d0-46a1-4f0e-37f0-a1b53c6b3600/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "04",
        name: "ZALE",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "05",
        name: "CONTOUR",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "06",
        name: "IBIS",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
    ],
  },
  {
    id: "05",
    categoryName: "PUBLIC UTILITY SYSTEMS - PUS Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ac71707c-d21b-4121-80b9-26e66359d100/public",
    categoryDescriptionTwo:
      "Designed for large public spaces, PUS systems ensure clean, accessible water. Engineered for durability and eco-friendliness, they support sustainable communities.",
    categoryDescriptionThree:
      "The UTC Units are designed for those who value simplicity and efficiency. Compact yet powerful, they store water discreetly, ensuring a constant supply while keeping your space organized. Together, our faucets and UTC Units bring you an elegant, space-saving solution that’s both stylish and sustainable. Hydration has never looked—or worked—this good.",
    categoryDescription:
      "Drinking water faucets with under the counter storage units to make access to fresh water simple. Precision-engineered for smooth flow, with a focus on reducing waste and energy use.",
    productList: [
      {
        id: "01",
        name: "AQUA SERIES",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
      {
        id: "02",
        name: "HYDROBANKSERIES",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a0b94ed2-b259-493e-5f36-61699c8d1f00/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
    ],
  },
  {
    id: "06",
    categoryName: "COMMERCIAL/INDUSTRIAL PLANTS",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ac71707c-d21b-4121-80b9-26e66359d100/public",
    categoryDescriptionTwo:
      "Power your facility with our large-scale hydration plants. Scalable and efficient, they offer high-volume water solutions with a commitment to sustainability.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "Power your facility with our large-scale hydration plants. Scalable and efficient, they offer high-volume water solutions with a commitment to sustainability",
    productList: [
      {
        id: "01",
        name: "WATERMAKER",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6240473c-a65e-43cf-e01e-62974647f500/public",
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cf295a79-b5ab-4529-e647-7f565151a900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c3a75e54-c4e3-4b15-2e1c-94df658f8800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2156f3d9-8d99-482e-ec18-555c478ba900/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
          {
            title: "Built Tough, Made to Last",
            description:
              "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
          },
          {
            title: "No Mess, No Stress",
            description:
              "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
          },
        ],
      },
    ],
  },
];

export * from "./Icons";
