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
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "Institution",
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
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47fb19bd-1386-4567-74c9-d49b3e49c500/public",
    name: "Corporates",
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
      "Build your skills through hands-on training and guidance from experienced professionals, laying the groundwork for a successful career in water solutions.",
    link: "/careers/apprenticeship",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3101c190-ebdc-4e39-16d0-a79cef6a0e00/public",
  },
  {
    id: 2,
    type: "Full-Time Positions",
    details:
      "Take on impactful roles where your expertise drives innovation and contributes to delivering advanced, reliable water solutions for the future.",
    link: "/careers/full-time",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dc8fc541-4998-4084-1d3f-620b9d5e1f00/public",
  },
  {
    id: 3,
    type: "Internship",
    details:
      "Gain practical experience by working on real-world projects, developing skills that prepare you to tackle challenges in water management and technology.",
    link: "/careers/internship",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e7c9f066-cf23-4012-2342-0161f4f52b00/public",
  },
  {
    id: 4,
    type: "Short Term Projects",
    details:
      "Make a meaningful contribution by applying your expertise to focused, results-driven projects that address specific challenges in water solutions.",
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
    details:
      "Our primary focus is delivering solutions that benefit both the planet and humanity, driven by responsibility, innovation, and purpose.",
  },
  {
    id: 3,
    image: "/images/icons/hand-with-checkmark.svg",
    value: "Responsibility",
    details:
      "We are accountable to our employees, customers, associates, and society, consistently upholding the highest standards in every interaction and commitment.",
  },
  {
    id: 4,
    image: "/images/icons/employee-value.svg",
    value: "Employee Value",
    details:
      "Our future relies on the knowledge, attitude, skills, teamwork, and integrity of our employees, qualities we deeply value and respect.",
  },
  {
    id: 5,
    image: "/images/icons/hand-with-checkmark.svg",
    value: "Participative Management",
    details:
      "We advocate participative management, drive productivity, and promote shared success to foster collective growth and achievement.",
  },
  {
    id: 6,
    image: "/images/icons/handshake-verified.svg",
    value: "Quality Commitment",
    details:
      "We are committed to delivering quality in our products, services, relationships, communications, and the promises we make.",
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

export enum Temprature {
  COLD = "Cold",
  Ambient = "Warm",
  HOT = "Hot",
}

export interface ProductData {
  id?: string;
  categoryName?: string;
  categoryImage?: string;
  categoryDescription?: string;
  categoryDescriptionTwo?: string;
  categoryDescriptionThree?: string;
  productList?: ProductList[];
  categoryBanner: string;
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
  specifications?: {
    id: number;
    title: string;
    value: string;
    subtitle: string;
  }[];
  features?: {
    title: string;
    description: string;
  }[];
  tempratureOptions?: Temprature[];
}

export const productData: ProductData[] = [
  {
    id: "01",
    categoryName: "DRINKING WATER STATION - BLUWAE Series",
    categoryBanner:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e74621c8-4c5d-42a1-b566-5cc9af63c700/public",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/989b9ed7-8668-4a62-7bf6-f32a540d2f00/public",
    categoryDescription:
      "The BLUWAE Series features point-of-use water dispensers with inbuilt RO purification, delivering pure, safe water with hot, cold, and ambient options. Designed to eliminate plastic water bottles and jars, it ensures efficient, sustainable hydration.",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It's a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    productList: [
      {
        id: "01",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/699b0801-c2dc-41d0-136f-0b5d54990b00/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl: "",
        name: "BLUWAE ENKI FS",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/db728b19-a0dd-45a4-812b-e7594a1b6900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a86f6929-a0fb-44d1-f78f-b4d0a7049600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1f9571c7-362c-4490-95d3-f9072bbe5500/public",
        ],
        features: [
          {
            title: "Touch free Operation",
            description:
              "Enjoy sensor-based, hygienic water dispensing that's quick, easy, and completely touchless.",
          },
          {
            title: "Clean Flow, Minimal Splash",
            description:
              "Engineered for a smooth, laminar ow that minimizes spillage, complemented by an efficient drainage system.",
          },
          {
            title: "LED UV-C Technology",
            description:
              "Advanced UV-C technology deactivates bacteria, viruses, and other pathogens, delivering water that's 99.99% pure.",
          },
          {
            title: "Effortless Integration",
            description:
              "Easily connects with carbonated beverage dispensers and coffee/tea vending machines, offering a versatile hydration solution.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "ENKI 25/50",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "02",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b173ac87-c1ea-4c9b-b4dc-9dfe9d7e4100/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl: "",
        name: "BLUWAE POS",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2e1a6e7f-0b55-4344-4ff9-8dba915a3300/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6b2da797-9d52-40d1-3323-c86ddd384c00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8fab5f68-c2e5-4ec8-f700-cfcea83f7600/public",
        ],
        features: [
          {
            title: "Touch-Free Dispensing",
            description:
              "Experience seamless, sensor-based water dispensing that's hygienic and completely touchless.",
          },
          {
            title: "Smooth, Splash-Free FLOW",
            description:
              "Designed for a clean, laminar water ow that minimizes spillage, paired with an efficient drainage system.",
          },
          {
            title: "Powerful LED UV-C Purication",
            description:
              "Eliminates bacteria, viruses, and pathogens, ensuring water is purified up to 99.99% for safe, refreshing hydration.",
          },
          {
            title: "Versatile Integration",
            description:
              "Effortlessly integrates with carbonated beverage dispensers and coffee/tea vending machines, providing a flexible, all-in-one hydration solution.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "BLUWAE POS",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "950 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50°C",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8°C",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "03",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9df2b276-67da-412e-b944-137e68fa3500/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl: "",
        name: "BLUWAE ROM",
        mountingType: "Free-Standing",
        description:
          "A compact, counter-top model designed for easy placement on counters",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ad1ea063-3e9d-494e-262b-9e0dfec7e500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c0002234-c76a-48ba-6b12-308e26b39f00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b6fd26a4-7fe7-4df7-b4b7-b58aae572200/public",
        ],
        features: [
          {
            title: "Sensor-Based Operation",
            description:
              "Touchless and hygienic dispensing ensures a seamless and safe user experience.",
          },
          {
            title: "Effortless Drainage",
            description:
              "Equipped with a generous drip tray to efficiently collect accidental spillage, maintaining cleanliness.",
          },
          {
            title: "LED UV-C Technology",
            description:
              "Incorporates advanced UV-C technology that reduces the risk of bacteria, viruses, and other pathogens at the point of dispensing, ensuring water purity up to 99.99%.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "CT",
            subtitle: "ROM 25/50",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "04",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52cfd172-76d2-4471-8083-4a8d9a8caf00/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e176d978-6656-4570-d8f7-01bf8c822500/public",
        name: "BLUWAE REVA",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/afee7058-847e-4a58-55d9-ede5da5c6800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a8f5a00e-0285-460b-f009-fa5a3a4d8c00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/07be5d57-d7fd-444f-52f5-6062969b5200/public",
        ],
        features: [
          {
            title: "Robust & Durable Build",
            description:
              "Constructed with premium Stainless Steel (SS-304) and corrosion-resistant GI, ensuring food-grade safety and long-lasting durability.",
          },
          {
            title: "Touchless Dispensing",
            description:
              "Experience the convenience of sensor-based technology for hygienic, hands-free water dispensing.",
          },
          {
            title: "Advanced LED UV-C Technology",
            description:
              "Effectively neutralizes bacteria, viruses, and other pathogens,  delivering water that's purified up to 99.99%.",
          },
          {
            title: "Real-Time Monitoring",
            description:
              "Stay informed with an intuitive IoT  display powered by CIRCLE OF BLUE, showcasing key data and performance metrics in real-time.",
          },
          {
            title: "Effortless Integration ",
            description:
              "Seamlessly connects with  carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "REVA 50/100",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "1000 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "05",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ec6c91fe-22a7-45bb-3aee-5e6720147000/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl: "",
        name: "BLUWAE ASSISTIFLOW",
        mountingType: "Free-Standing",
        description: "",
        images: [
          // "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4740edc0-da36-41cd-f5ab-9c7f6faad000/public"
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/616ddb64-9272-4c5a-8630-63109c9ba600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6cbe11d1-d684-43fd-b674-e948d745eb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/875719ac-2f9e-456b-662f-d437c10dca00/public",
        ],
        features: [
          {
            title: "Built to Last",
            description:
              "Steel (SS-304) and corrosion-resistant Galvanized Iron (GI), ensuring durability and safety with food-grade materials.",
          },
          {
            title: "Effortless Integration",
            description:
              "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution",
          },
          {
            title: "Advanced Purication",
            description:
              "LED UV-C technology neutralizes up to 99.99% of bacteria, viruses, and other pathogens, ensuring every sip is pure.",
          },
          {
            title: "Designed for Everyone",
            description:
              "Thoughtfully engineered to be accessible for seniors, kids, and those with special needs, making hydration easy for all.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "ASSISTIFLOW",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "1000ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50°C",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8°C",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "06",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6865cefc-5a2e-43c5-5d73-438cfac6c800/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl: "",
        name: "BLUWAE ENKI CT",
        mountingType: "Counter-Top",
        description:
          "A sleek, compact countertop model designed for convenient placement.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f1ad952b-5360-4a2d-e17e-13ad12147a00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/68c42af9-cb08-4755-4b76-b31697ee9500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/125ecf0e-cdbd-428b-d234-f4bd1f7e4300/public",
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
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "BLUWAE POS",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "950 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50°C",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8°C",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "07",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/54008031-5666-4934-a9d4-6fdc01030e00/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        // bannerImageUrl: "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0fa29c2f-fb31-4b18-a131-bdc52c514700/public",
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c4be2941-7f78-4327-4bb7-3fc4f4788000/public",
        name: "BLUWAE VAR CT",
        mountingType: "Counter-Top",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/655fd93e-7fb0-4449-1f7a-92458eb28700/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/de777aae-d5fd-4dde-d64a-ca8692543800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/faf6ac94-974b-4aa3-6175-0fa59d586200/public",
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
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "CT",
            subtitle: "VAR 150/ 100/ 50",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "1000ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      {
        id: "08",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52dd58ea-1d30-4397-6ba0-df78adaeaa00/public",
        keyPoints: [
          "Plug and Play Operation.",
          "Inbuilt 5 stages of purification.",
          "Can be customized as per client needs.",
        ],
        bannerImageUrl: "",
        name: "BLUWAE ROM CT",
        mountingType: "Counter-Top",
        description:
          "A compact, counter-top model designed for easy placement on counters",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/79ef281c-75c0-416b-1928-023fa3f58300/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bdfd78c7-de80-4e95-20be-ffea6b5c5c00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/833cb87f-1ba5-45f8-6f61-fa5cf48a7200/public",
        ],
        features: [
          {
            title: "Sensor-Based Operation",
            description:
              "Touchless and hygienic dispensing ensures a seamless and safe user experience.",
          },
          {
            title: "Effortless Drainage",
            description:
              "Equipped with a generous drip tray to efficiently collect accidental spillage, maintaining cleanliness.",
          },
          {
            title: "LED UV-C Technology",
            description:
              "Incorporates advanced UV-C technology that reduces the risk of bacteria, viruses, and other pathogens at the point of dispensing, ensuring water purity up to 99.99%.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "CT",
            subtitle: "ROM 25/50",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
      },
      // Below product images and data are placeholder for VAR FS product
      // {
      //   id: "09",
      //   thumbnailUrl:
      //     "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52dd58ea-1d30-4397-6ba0-df78adaeaa00/public",
      //   keyPoints: [
      //     "Plug and Play Operation.",
      //     "Inbuilt 5 stages of purification.",
      //     "Can be customized as per client needs.",
      //   ],
      //   bannerImageUrl: "",
      //   name: "BLUWAE VAR FS",
      //   mountingType: "Free-Standing",
      //   description:
      //     "A Floor-standing model designed for convenient placement on the ground.",
      //   images: [
      //     "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/bfbf1885-b5d9-483d-0137-0a78cf5fed00/public",
      //     "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8f660606-e5e1-4be5-4358-aa9e93e87000/public",
      //     "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/aa9f4a85-2918-4429-5834-9f9510b0fb00/public",
      //   ],
      //   features: [
      //     {
      //       title: "Touch-Free Dispensing",
      //       description:
      //         "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
      //     },
      //     {
      //       title: "Effortless Integration",
      //       description:
      //         "Seamlessly connects with carbonated beverage dispensers and coffee/tea vending machines for a versatile, all-in-one solution",
      //     },
      //     {
      //       title: "Built Tough, Made to Last",
      //       description:
      //         "Crafted from premium Stainless Steel (SS-304) and corrosion-resistant GI, this unit is food-grade approved and built for enduring performance.",
      //     },
      //     {
      //       title: "No Mess, No Stress",
      //       description:
      //         "An efficient drip tray with generous capacity catches spills, keeping the space clean and orderly.",
      //     },
      //   ],
      //   specifications: [
      //     {
      //       id: 1,
      //       title: "Variant",
      //       value: "FS",
      //       subtitle: "BLUWAE POS",
      //     },
      //     {
      //       id: 2,
      //       title: "Drip Tray Capacity",
      //       value: "950 ml",
      //       subtitle: "Milli Litres",
      //     },
      //     {
      //       id: 3,
      //       title: "Hot temperature",
      //       value: "30°C- 80°C",
      //       subtitle: "Default 50°C",
      //     },
      //     {
      //       id: 4,
      //       title: "Cold temperature",
      //       value: "5°C- 24°C",
      //       subtitle: "Default 8°C",
      //     },
      //     {
      //       id: 5,
      //       title: "Compressor",
      //       value: "220V/50 HZ",
      //       subtitle: "RZ 134a 1/8 HP",
      //     },
      //   ],
      //   tempratureOptions: [
      //     Temprature.HOT,
      //     Temprature.COLD,
      //     Temprature.Ambient,
      //   ],
      // },
    ],
  },
  {
    id: "02",
    categoryName: "WATER DISPENSER (W/O RO) - TRUBLU Series",
    categoryBanner: "/images/banners/trublu-banner.jpg",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/708253cf-b3b1-4b4c-e9ed-73f9c05aa400/public",
    categoryDescriptionTwo:
      "Our Stainless Steel Water Dispensers aren’t just built to dispense water—they’re built to last. Crafted from durable stainless steel 304, they offer pure, refreshing water. Designed for sustainability, these dispensers help you cut down on waste while delivering energy-efficient performance that saves both the planet and your budget. It’s hydration that works smarter.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "The TRUBLU Series high-capacity water dispensers feature Intank LED UV-C technology for pure, safe water. Built with durable Stainless Steel 304, they offer reliable performance, sustainability, and efficient hydration for any environment.",
    productList: [
      {
        id: "01",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU ALFA TL",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8a7824d7-7f82-49fd-10cf-aaae8610e100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f2a3cb85-9bb6-42ce-54c5-35f6bd266000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3b80e936-57ba-457d-a11b-85833225c200/public",
        ],
        features: [
          {
            title: "Top-Load Ready",
            description:
              "Enjoy eortless, hygienic water access with sensor-based, touchless technology.",
          },
          {
            title: "Sleek Design",
            description:
              "Modern, space-saving design that ts perfectly in any setting.",
          },
          {
            title: "Power Saver",
            description: "Consumes 25% less energy than regular dispensers.",
          },
          {
            title: "Quick Clean",
            description:
              "Removable drip tray for easy cleaning and maintenance",
          },
          {
            title: "Touch-Free Convenience",
            description: "Effortless, hands-free dispensing for ultimate ease.",
          },
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "ALFA.TL",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750 ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50°C",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8°C",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a 1/8 HP",
          },
        ],
      },
      {
        id: "02",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU ALFA BL",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b9b68bc5-70be-4303-fb96-b90fbbf77c00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6f56ccc0-e0b5-4fa1-467d-db93eb6b3b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/7dee6e9b-96e0-4236-49ee-b9e36ffedf00/public",
        ],
        features: [
          {
            title: "Pure Inside",
            description:
              "Lead-free, anti-corrosive tubing ensures clean, bacteria-free water flow.",
          },
          {
            title: "Touch-Free Dispense",
            description:
              "Enjoy hassle-free, hygienic dispensing with a simple touch.",
          },
          {
            title: "Boom-Load Ease",
            description:
              "Place jars or boles below for easy water collection and reduced lifting.",
          },
          {
            title: "Spill-Free Design",
            description:
              "Dishwasher-safe drip tray minimizes spills, making cleanup a breeze.",
          },
          {
            title: "Power Smart",
            description:
              "Cuts energy use by 25%, making it eco-friendly and cost-effective.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "ALFA.BL",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750ml",
            subtitle: "Milli Ltires",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "03",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU ALFA 100",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/beff5c3b-301a-466d-8b0f-e9fe77bcd200/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a850b11e-b4e6-4413-1035-e76da3736100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c9e2f1ea-74ff-48fc-c0d7-cb5f23c1ea00/public",
        ],
        features: [
          {
            title: "Plumbed-In",
            description:
              "Can be directly connected to the input water supply (RO water).",
          },
          {
            title: "Built to Last",
            description:
              "Premium SS-304 stainless steel tank combines durability with sustainability.",
          },
          {
            title: "Pure Inside Out",
            description:
              "Lead-free, corrosion-resistant tubing keeps water safe, fresh, and free from harmful bacteria.",
          },
          {
            title: "Hygiene at Your Fingertips",
            description:
              "Experience effortless,  touch-free dispensing that puts cleanliness first.",
          },
          {
            title: "Perfectly Paired",
            description:
              "Seamlessly integrates with coffee or tea vending machines.",
          },
          {
            title: "Clean and Carefree",
            description:
              "Dishwasher-safe drip  tray keeps maintenance to a minimum.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Indoor",
            subtitle: "Contour",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "Contour",
            subtitle: "Milli Liters",
          },
          {
            id: 3,
            title: "Shipping Weight",
            value: "11.0/ 12.0",
            subtitle: "Kilograms (packaged)",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "2l to 4l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "04",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU ALFA CT",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6e759543-fba1-46e0-1171-9ca6f9d6d200/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/21128a4c-a5ff-4368-3a5b-12bd72c06b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d64a8674-1e83-4cdf-b733-9881bb65da00/public",
        ],
        features: [
          {
            title: "Counter-Top Friendly",
            description:
              "Compact design ts perfectly  on counters and in tight spaces.",
          },
          {
            title: "Perfect Pairing",
            description:
              "Easily integrates with coffee and tea vending machines for a seamless setup.",
          },
          {
            title: "Top-Load Flexibility",
            description:
              "Easily place a jar or bole on top for effortless water collection.",
          },
          {
            title: "Spill-Proof Tray",
            description:
              "Dishwasher-safe drip tray minimizes spills and simplifies cleaning.",
          },
          {
            title: "Power Saver",
            description:
              "Consumes 25% less energy, making it an eco-friendly choice.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "ALFA.CT",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750ml",
            subtitle: "Milli Ltires",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "05",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e670b1ee-b32c-4a6a-5d51-ed03fa81c400/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1b7181e2-f370-4d0c-a50c-8e305347f700/public",
        name: "TRUBLU AENON",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9a539ab1-e7f5-48ea-dff3-0c8071dcf300/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/25531713-c7e1-40c9-eb1b-44c3c9127400/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a814e21b-b816-4241-14e5-2fb4e5bf4f00/public",
        ],
        features: [
          {
            title: "Heavy-Duty Build",
            description:
              "Rugged stainless-steel construction ensures durability and zero landll impact.",
          },
          {
            title: "Seamless Integration",
            description:
              "Effortlessly pairs with carbonated drink dispensers and coffee/tea machines.",
          },
          {
            title: "Generous Drainage",
            description:
              "Large drip tray captures spills, reducing water waste and simplifying cleanup.",
          },
          {
            title: "Energy Efficient",
            description:
              "Space-saving size ts neatly into any environment, from home counters to commercial settings.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "AENON 36, 45,75",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "1000ml",
            subtitle: "Milli Ltires",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "06",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f339b126-7cad-4942-91ee-8f535507f600/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU DELTA",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/267d6f4b-afd7-42d1-c948-02c0cc588b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/30dcf033-c808-4aba-1f0c-fa72e4022300/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/774bf3ad-1dc7-4ad2-5779-ab2d15f20700/public",
        ],
        features: [
          {
            title: "Pure Water flow",
            description:
              "Lead-free, bacteria-resistant tubings for safe, clean water.",
          },
          {
            title: "Energy Efficient",
            description: "Uses 25% less power, saving on energy costs.",
          },
          {
            title: "fast TOUCHLESS DISPENSING",
            description: "Delivers ice-cold and hot water twice as fast.",
          },
          {
            title: "Seamless Integration",
            description:
              "Connects easily with coffee, tea, and beverage machines.",
          },
          {
            title: "Easy Maintenance",
            description:
              "Spill-resistant, dishwasher-safe drip tray for hassle-free upkeep.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "DELTA",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750ml",
            subtitle: "Milli Ltires",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "07",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c16970c2-a74d-4b1e-b0b0-e88ee58be000/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU GAMMA",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/79ce8da9-daaa-4bad-c80a-5a5f47af3c00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4eb27063-2310-4888-4f1c-9f4b02493d00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c96d8adb-e99f-4181-f45f-1bbd40918c00/public",
        ],
        features: [
          {
            title: "Clean and SAFE WATER",
            description:
              "Lead-free, bacteria-resistant tubing ensures pure and contaminant-free hydration.",
          },
          {
            title: "Energy SMART",
            description:
              "Operates with 25% less power, reducing your energy expenses.",
          },
          {
            title: "RAPID TOUCHLESS DISPENSING",
            description:
              "Provides ice-cold and hot  water at twice the speed of standard models.",
          },
          {
            title: "Effortless Integration",
            description:
              "Connects seamlessly with coffee, tea, and beverage machines for a complete solution.",
          },
          {
            title: "Low-Maintenance Design",
            description:
              "Features a spill-resistant,  dishwasher-safe drip tray for easy, hassle-free cleaning.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "GAMMA",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750ml",
            subtitle: "Milli Ltires",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "08",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b92f8428-83ae-45b4-fccf-465b18193500/public",
        keyPoints: [
          "Modern and Compact Design.",
          "Advanced 3 stage purification (UV, UF & LED-UVC)",
          "Touchless/Sensor-based operation",
        ],
        bannerImageUrl: "",
        name: "TRUBLU LAGOON",
        mountingType: "Free-Standing",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f6efba25-b43c-449d-d14d-a785f6e61b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/70fa9ba1-f0e8-490b-fe4a-4ca531a63700/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/89fe9111-df3e-44fd-146b-913905054100/public",
        ],
        features: [
          {
            title: "Premium Storage Tank",
            description:
              "High-quality Stainless Steel (SS-304) for corrosion resistance and no bad odors or microbial growth.",
          },
          {
            title: "Efficient Drainage System  ",
            description:
              "Dishwasher-safe drip tray minimizes spillage and simplifies cleaning.",
          },
          {
            title: "Safe Internal Tubings",
            description:
              "Lead-free, bacteria-resistant, and corrosion-resistant for pure water.",
          },
          {
            title: "Seamless Integration",
            description:
              "Connects effortlessly with carbonated beverage dispensers and coffee/tea machines.",
          },
          {
            title: "Rapid Touchless Dispensing",
            description:
              "Fast, touchless access to chilled and hot water for enhanced convenience.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "LAGOON",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "750ml",
            subtitle: "Milli Ltires",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50oC",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8oC",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
    ],
  },
  {
    id: "03",
    categoryName: "DRINKING WATER FAUCETS - WATERMATIC Series",
    categoryBanner: "/images/banners/faucet-banner.jpg",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c4cd452c-211e-455a-dad5-148c57878000/public",
    categoryDescriptionTwo:
      "Drinking water faucets with under the counter storage units to make access to fresh water simple. Precision-engineered for smooth flow, with a focus on reducing waste and energy use.",
    categoryDescriptionThree:
      "Customization meets innovation with our water coolers and fountains. Engineered for heavy use, these units offer advanced filtration and are crafted to minimize environmental impact. Whether you're looking for a sleek wall unit or a robust floor-standing option, they’re designed to deliver clean water efficiently, reducing plastic waste while keeping passengers refreshed and airports sustainable.",
    categoryDescription:
      "The WATERMATIC Series offers advanced drinking water faucets with HYDROPAC under-the-counter purification. Engineered for efficiency and reliability, it delivers clean, safe drinking water through precise, compact, and modern water treatment technology.",
    productList: [
      {
        id: "01",
        name: "Piper",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/14dbff34-7f49-49a5-3837-64b6880ac000/public",
        keyPoints: [
          "Built with durable SS-304 stainless steel for heavy-duty performance",
          "Integrated with under the counter(UTC) storage unit - Hydropac and RO/booster unit(optional).",
          "Designed as a zero-landfill product, prioritizing sustainability and environmental responsibility.",
        ],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b7008673-8a2f-4b22-94a4-a72513ceb300/public",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/55199965-30ce-4ef8-abf9-78a654bd3b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/576c6473-9649-4eee-e31c-0e4ee5cc0d00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e4aee070-6aa9-430d-5009-f51a13b48800/public",
        ],
        features: [
          {
            title: "Built to Endure ",
            description:
              "Triple-coated galvanized iron with a protective powder finish.",
          },
          {
            title: "Pure & Safe Storage",
            description:
              "Stainless steel tank guarantees 99.99% pure, contaminant-free water.",
          },
          {
            title: "Extended Durability",
            description:
              "Optional anti-rust treatment and stainless steel 304 overhead protection.",
          },
          {
            title: "Longer Lifespan",
            description:
              "Customizable design, easy maintenance, and energy-efficient operation.",
          },
          {
            title: "High Capacity",
            description:
              "Designed to handle heavy water demand in busy environments.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Faucet",
            subtitle: "AQUA 100 /200",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Pressure",
            value: "15-75 PSI",
            subtitle: "PSI",
          },
          {
            id: 4,
            title: "Height of spout",
            value: "310 mm",
            subtitle: "With Riser",
          },
          {
            id: 5,
            title: "Height of spout",
            value: "215 mm",
            subtitle: "Without Riser",
          },
        ],
      },
      {
        id: "02",
        name: "Indus",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/530b6e77-4a94-4c07-5fe6-e7a902d39200/public",
        keyPoints: [
          "Built with durable SS-304 stainless steel for heavy-duty performance.",
          "Integrated with under the counter(UTC) storage unit - Hydropac and RO/booster unit(optional).",
          "Designed as a zero-landfill product, prioritizing sustainability and environmental responsibility.",
        ],
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/02dfe0c0-93c7-4086-6508-6ea0bc1b2a00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/27e09afa-2851-4872-bb0a-29b397568000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1a765a6d-b8e2-457a-150d-efcbe1fffa00/public",
        ],
        features: [
          {
            title: "Touchless & TOUCH BASED OPERATION",
            description:
              "Equipped with three IR sensors and touch panels for a superior and flexible hydration experience.",
          },
          {
            title: "Durable Construction",
            description:
              "Made from high-quality stainless steel for enduring performance and reliability.",
          },
          {
            title: "Real-Time OLED Display",
            description:
              "Clearly shows the water temperature for accurate and convenient selection.",
          },
          {
            title: "Spill-Proof Drip Tray",
            description:
              "Includes a spill-proof drip  tray to maintain a clean and dry area.",
          },
          {
            title: "Adjustable Flow Control",
            description:
              "Tailor the water ow to your preference, from quick sips to lling larger containers.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Faucet",
            subtitle: "AQUA 100 /200",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Pressure",
            value: "15-75 PSI",
            subtitle: "PSI",
          },
          {
            id: 4,
            title: "Height of spout",
            value: "310 mm",
            subtitle: "With Riser",
          },
          {
            id: 5,
            title: "Height of spout",
            value: "215 mm",
            subtitle: "Without Riser",
          },
        ],
      },
      {
        id: "03",
        name: "Touch",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/32cdc632-c6bd-4d5a-a851-993f0b468600/public",
        keyPoints: [
          "Built with durable SS-304 stainless steel for heavy-duty performance",
          "Integrated with under the counter(UTC) storage unit - Hydropac and RO/booster unit(optional).",
          "Designed as a zero-landfill product, prioritizing sustainability and environmental responsibility.",
        ],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b264d25e-1ff2-4916-1487-4a3b9fbfa500/public",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/3b24c06b-1752-47a0-4499-be61a2497800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0b994225-97de-4679-daf1-8e5008e73500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a1a596c2-4a97-4da4-72a4-577ccb20a900/public",
        ],
        features: [
          {
            title: "TOUCH BASED OPERATION",
            description:
              "Enjoy 24*7 pure water with just a touch, providing an exceptional hydration experience.",
          },
          {
            title: "Durable Construction",
            description:
              "High-quality stainless steel material ensure long-lasting performance and reliability.",
          },
          {
            title: "Real-Time OLED Display",
            description:
              "Easily see the dispensing water temperature for precise selection.",
          },
          {
            title: "Spill-Proof Drip Tray",
            description:
              "Features a spill-proof drip tray to keep the area clean and dry.",
          },
          {
            title: "Adjustable Flow Control",
            description:
              "Customize water ow to suit your needs, whether for a  quick sip or filling larger containers.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Faucet",
            subtitle: "TOUCH",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Pressure",
            value: "15-75 PSI",
            subtitle: "PSI",
          },
          {
            id: 4,
            title: "Height of Spout",
            value: "310 mm",
            subtitle: "With Riser",
          },
          {
            id: 5,
            title: "Compressor",
            value: "215 mm",
            subtitle: "Without Riser",
          },
        ],
      },
      {
        id: "04",
        name: "Moses",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2f8b4ab6-9dde-4f8b-4ac8-795976314100/public",
        keyPoints: [
          "Built with durable SS-304 stainless steel for heavy-duty performance",
          "Integrated with under the counter(UTC) storage unit - Hydropac and RO/booster unit(optional).",
          "Designed as a zero-landfill product, prioritizing sustainability and environmental responsibility.",
        ],
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/47b3d27b-b65b-4e94-26d1-ac8bb35afd00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0a6c1075-ac97-4c46-d1b9-42d3b6d82900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8440a366-f65d-40b0-7b2c-582ad7f8cc00/public",
        ],
        features: [
          {
            title: "Sensor Activated",
            description:
              "Touchless operation with auto shut-o for maximum hygiene.",
          },
          {
            title: "Anti-Splash Drip Tray",
            description:
              "Smart drip tray with sensors for mess-free dispensing of hot, cold, and ambient water.",
          },
          {
            title: "Corrosion- Resistant",
            description:
              "Stainless steel built ensures clean, durable, and corrosion-free water.",
          },
          {
            title: "Braille & Color Blind Friendly",
            description:
              "Features Braille and high- contrast colors for easy, inclusive use.",
          },
          {
            title: "Accessible Design",
            description:
              "Easy for seniors, children, and those with special needs to use comfortably.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Faucet",
            subtitle: "MOSES",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic",
          },
          {
            id: 3,
            title: "Pressure",
            value: "15-75 PSI",
            subtitle: "PSI",
          },
          {
            id: 4,
            title: "Height of Spout",
            value: "300 mm",
            subtitle: "With Riser",
          },
          {
            id: 5,
            title: "Tank Volume",
            value: "10 L",
            subtitle: "Cold and Hot",
          },
        ],
      },
      {
        id: "05",
        name: "TRX.TL",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/213a7aa6-0b7c-466a-1583-353000287100/public",
        keyPoints: [
          "Built with durable SS-304 stainless steel for heavy-duty performance",
          "Integrated with under the counter(UTC) storage unit - Hydropac and RO/booster unit(optional).",
          "Designed as a zero-landfill product, prioritizing sustainability and environmental responsibility.",
        ],
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0a63f294-a33c-470e-8aba-f6bef589a600/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5a89b2db-4c37-4e75-40cc-0d5afa2fac00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e0460e14-5904-4c18-9dc4-1cf913d7da00/public",
        ],
        features: [
          {
            title: "Touchless Operation",
            description:
              "Sensor-activated taps with auto shut-o for a hygienic, hands-free experience.",
          },
          {
            title: "Energy Efficient",
            description:
              "Low power consumption for cost-effective, sustainable performance.",
          },
          {
            title: "Sleek & Compact",
            description:
              "Stylish, slim faucets that fit effortlessly into any indoor commercial space.",
          },
          {
            title: "Easy Maintenance",
            description:
              "Quick installation and minimal upkeep for hassle-free operation.",
          },
          {
            title: "Premium Build",
            description:
              "High-quality steel ensure durability and a modern aesthetic.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Faucet",
            subtitle: "TRX.TL",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic",
          },
          {
            id: 3,
            title: "Pressure",
            value: "15-75 PSI",
            subtitle: "PSI",
          },
          {
            id: 4,
            title: "Height of Spout",
            value: "248 mm",
            subtitle: "With Riser",
          },
          {
            id: 5,
            title: "Tank Volume",
            value: "10 L",
            subtitle: "Cold and Hot",
          },
        ],
      },
      {
        id: "06",
        name: "HKN",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a1d7989c-aec8-48b3-9c33-5ed1f22b0700/public",
        keyPoints: [
          "Built with durable SS-304 stainless steel for heavy-duty performance",
          "Integrated with under the counter(UTC) storage unit - Hydropac and RO/booster unit(optional).",
          "Designed as a zero-landfill product, prioritizing sustainability and environmental responsibility.",
        ],
        bannerImageUrl: "",
        mountingType: "Counter-Top",
        description: "",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/76de532d-a762-4789-d348-ffa6ddab9700/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2e897fea-6219-4096-1989-ac1855719800/public",
          // "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
        ],
        features: [
          {
            title: "Manual Operation",
            description:
              "Pure, sparkling water in chilled, hot, and ambient temperatures",
          },
          {
            title: "User-Friendly Controls",
            description:
              "Easy-to-use knob for selecting and adjusting the water flow.",
          },
          {
            title: "Convenient & Clean",
            description:
              "Drip-free and corrosion-  resistant trays to reduce spillage and waste.",
          },
          {
            title: "Sleek & Compact Design",
            description:
              "Slim, stylish faucets perfect for any indoor commercial space.",
          },
          {
            title: "Corrosion- Resistant & Food-Grade",
            description: "SS-304 ensures pure, corrosion-free water 24/7.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Faucet",
            subtitle: "HKN",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Pressure",
            value: "15-75 PSI",
            subtitle: "PSI",
          },
          {
            id: 4,
            title: "Height of Spout",
            value: "285 mm",
            subtitle: "With Riser",
          },
          {
            id: 5,
            title: "Tank Volume",
            value: "10 L",
            subtitle: "Cold and Hot",
          },
        ],
      },
    ],
  },
  {
    id: "04",
    categoryName: "WATER COOLER & FOUNTAINS - ZVR Series",
    categoryBanner: "/images/banners/zvr-banner.jpg",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5b540d2d-79e7-4028-5ab8-a94abec08700/public",
    categoryDescriptionTwo:
      "Water coolers cum bubblers provide chilled water on demand. Built to be energy-efficient, they’re ideal for public spaces, reducing both costs and plastic waste.",
    categoryDescriptionThree:
      "Innovation doesn’t stop at convenience—it extends to responsibility. Our public utility systems not only deliver water where it’s needed most, but they do it with minimal waste. Crafted for long-term performance, these systems align with your commitment to a greener, more efficient future. Because when it comes to public spaces, clean water should be a given—not a challenge.",
    categoryDescription:
      "Water coolers and fountains deliver high-efficiency cooling with optional purification for clean, safe water. Designed for durability and performance, they are ideal for public utilities, institutions, schools, and industrial high-demand environments.",
    productList: [
      {
        id: "01",
        name: "PENGUIN",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/187c4f6d-5652-4697-063b-74913cc85200/public",
        keyPoints: [
          "Provides clean drinking water conveniently with dual or triple bubbler heads.",
          "Traditional oor-standing design, specically made for outdoor environments.",
          "Durable SS-304 exterior ensures high resistance to corrosion and long-lasting quality.",
        ],
        bannerImageUrl: "",
        mountingType: "Fountain",
        // description:
        //   "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Heavy-Duty Construction",
            description:
              "Features a highly durable  SS-304 body that is completely corrosion-resistant.",
          },
          {
            title: "Efficient Drainage",
            description:
              "Includes a well-designed drainage system to remove accumulated water.",
          },
          {
            title: "Bubbler Head",
            description:
              "Equipped with a polished, chrome-plated brass bubbler head and a basin for direct water use.",
          },
          {
            title: "User-Friendly Operation",
            description:
              "Designed for straightforward use and minimal maintenance.",
          },
          {
            title: "Seamless Integration",
            description:
              "Compatible with in-wall and remote chillers, effective within 10 to 15 feet.",
          },
        ],
        tempratureOptions: [Temprature.COLD, Temprature.Ambient],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Fountain",
            subtitle: "PENGUIN",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Power Consumption",
            value: "94 W",
            subtitle: "Watts",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "3l to 10l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "02",
        name: "YAMI",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/1c00eef0-3d07-4b2a-d4fa-886365c43b00/public",
        keyPoints: [
          "Vandal-resistant, modular design with a stylish ZERO landfill body.",
          "Traditional floor-standing unit for flexible placement.",
          "Optional integration with a remote water chiller.",
        ],
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        // description:
        //   "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4617ef86-d822-4f26-a0e8-d81be539da00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/85bdf8ae-9a9c-4e51-262c-3086fce40d00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/916a4dbf-24a7-4130-00bf-c35c5693ce00/public",
        ],
        features: [
          {
            title: "Sleek Bubbler Head",
            description:
              "Chrome-plated brass head with a polished finish for a refined look and smooth water flow.",
          },
          {
            title: "Efficient Drainage",
            description:
              "Efficient drainage eliminates standing water, keeping the area clean and dry.",
          },
          {
            title: "Hygienic Tubing",
            description:
              "100% lead-free, anti-bacterial tubes eliminate cross-contamination risks, ensuring pure, safe water.",
          },
          {
            title: "Fully Accessible",
            description:
              "ADA-compliant design ensures effortless use for everyone.",
          },
          {
            title: "Splash-Free Experience",
            description:
              "Engineered for a clean, controlled ow that minimizes spillage and water waste.",
          },
        ],
        tempratureOptions: [Temprature.COLD, Temprature.Ambient],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Fountain",
            subtitle: "PENGUIN",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Power Consumption",
            value: "94 W",
            subtitle: "Watts",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "3l to 10l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "03",
        name: "PLUSULTA",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        keyPoints: [
          "Vandal-resistant, modular design with a stylish ZERO landfill body.",
          "Traditional floor-standing unit for flexible placement.",
          "Optional integration with a remote water chiller.",
        ],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/be455110-a0e3-4ea9-2da6-090148dfac00/public",
        mountingType: "Free-Standing",
        // description:
        //   "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9db14c02-30db-4131-3b6d-7c5b2fa3fb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c274a381-1fe3-48ce-37e1-296ff4719900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/5fcb76d0-46a1-4f0e-37f0-a1b53c6b3600/public",
        ],
        features: [
          {
            title: "Heavy-Duty Build",
            description:
              "High-quality SS-304 stainless steel with a vandal-resistant boom plate for superior durability.",
          },
          {
            title: "Optional Purification",
            description: "Customizable back-end purification available.",
          },
          {
            title: "Efficient Drainage",
            description:
              "Designed with a proper drainage system to eliminate standing water.",
          },
          {
            title: "Easy Installation",
            description: "Quick wall-hanging or wall-mount setup.",
          },
          {
            title: "Bubbler Heads",
            description:
              "Polished single or dual bubble heads with a convenient basin.",
          },
        ],
        tempratureOptions: [Temprature.COLD, Temprature.Ambient],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Fountain",
            subtitle: "PLUSULTRA",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Power Consumption",
            value: "94 W",
            subtitle: "Watts",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "3l to 10l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "04",
        name: "ZALE",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        keyPoints: [
          "Instant bole filler with optional backend purification.",
          "Built with heavy-duty SS-304 steel and galvanized iron.",
          "Sustainable and fully customizable to your needs.",
        ],
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        // description:
        //   "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Wall-Mount Option",
            description:
              "Easily mounts to any wall, making it ideal for indoor commercial settings.",
          },
          {
            title: "Minimal Splashing",
            description:
              "Designed for a smooth, laminar ow to minimize spillage and water waste.",
          },
          {
            title: "Installation & Integration",
            description:
              "Features three dedicated sensors for dispensing hot, cold, and ambient water.",
          },
          {
            title: "Durable Construction",
            description: "Durable Construction",
          },
          {
            title: "Hands-Free/ Touchless Operation",
            description:
              "Sensor-activated bole filler ensures efficient, clean, and hygienic dispensing.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Fountain",
            subtitle: "ZALE",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "1000ml",
            subtitle: "Hydropac Classic.TL",
          },
          {
            id: 3,
            title: "Shipping Weight",
            value: "12.0-15.0",
            subtitle: "Kilograms (packaged)",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "2l to 3l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "05",
        name: "CONTOUR",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        keyPoints: [
          "Instant bole filler with optional backend purification.",
          "Built with heavy-duty SS-304 steel and galvanized iron.",
          "Sustainable and fully customizable to your needs.",
        ],
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        // description:
        //   "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Wall-Mount Option",
            description:
              "Perfectly ts on walls, ideal for indoor commercial environments.",
          },
          {
            title: "Minimal Splashing",
            description:
              "Provides a clean, laminar flow to reduce splashing and water wastage.",
          },
          {
            title: "Easy Installation & Integration",
            description: "Quick setup with an option for backend purification.",
          },
          {
            title: "Efficient Drainage",
            description:
              "Built-in drainage system effectively removes standing water.",
          },
          {
            title: "Touchless Operation",
            description:
              "Infrared sensor-activated tap for hygienic, hands-free water dispensing.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Indoor",
            subtitle: "Contour",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "Contour",
            subtitle: "Milli Liters",
          },
          {
            id: 3,
            title: "Shipping Weight",
            value: "11.0/ 12.0",
            subtitle: "Kilograms (packaged)",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "2l to 4l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "06",
        name: "IBIS",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        keyPoints: [
          "Instant bole filler with optional backend purification.",
          "Built with heavy-duty SS-304 steel and galvanized iron.",
          "Sustainable and fully customizable to your needs.",
        ],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/7dea3faf-3dbe-42e6-b02a-6b7fb105e200/public",
        mountingType: "Free-Standing",
        // description:
        //   "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Wall-Mount Option",
            description:
              "Perfectly ts on walls, ideal for indoor commercial environments.",
          },
          {
            title: "Minimal Splashing",
            description:
              "Provides a clean, laminar flow to reduce splashing and water wastage.",
          },
          {
            title: "Easy Installation & Integration",
            description: "Quick setup with an option for backend purification.",
          },
          {
            title: "Efficient Drainage",
            description:
              "Built-in drainage system effectively removes standing water.",
          },
          {
            title: "Touchless Operation",
            description:
              "Infrared sensor-activated tap for hygienic, hands-free water dispensing.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "Indoor",
            subtitle: "Contour",
          },
          {
            id: 2,
            title: "UTC Variant",
            value: "Contour",
            subtitle: "Milli Liters",
          },
          {
            id: 3,
            title: "Shipping Weight",
            value: "11.0/ 12.0",
            subtitle: "Kilograms (packaged)",
          },
          {
            id: 4,
            title: "Water Dispenser",
            value: "2l to 4l",
            subtitle: "Per Minute",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
    ],
  },
  {
    id: "05",
    categoryName: "PUBLIC UTILITY SYSTEMS - PUS Series",
    categoryBanner: "/images/banners/pus-banner.jpg",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ea8e8ad2-6510-4b28-65df-3ad71fa75f00/public",
    categoryDescriptionTwo:
      "Designed for large public spaces, PUS systems ensure clean, accessible water. Engineered for durability and eco-friendliness, they support sustainable communities.",
    categoryDescriptionThree:
      "The UTC Units are designed for those who value simplicity and efficiency. Compact yet powerful, they store water discreetly, ensuring a constant supply while keeping your space organized. Together, our faucets and UTC Units bring you an elegant, space-saving solution that’s both stylish and sustainable. Hydration has never looked—or worked—this good.",
    categoryDescription:
      "The Public Utility Series (PUS) is designed for high-footfall areas, providing reliable hydration with robust durability and efficient performance. Ideal for public spaces, it ensures consistent, clean water delivery in demanding environments.",
    productList: [
      {
        id: "01",
        name: "AQUA SERIES",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6eb23111-0afb-443c-fc7b-9ace1c910700/public",
        keyPoints: [],
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "Featuring an inbuilt RO system and chiller, this station is designed for high-footfall public areas, ensuring reliable hydration with durability and efficiency.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/11983264-8f58-4311-ec84-225eacf9c000/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/972917c4-f986-4a07-11e3-4f5ad123cb00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/41448980-c47f-4212-9bca-68bfd7c3db00/public",
        ],
        features: [
          {
            title: "Built to Endure",
            description:
              "Triple-coated galvanized iron with a protective powder finish.",
          },
          {
            title: "Pure & Safe Storage",
            description:
              "Stainless steel tank guarantees 99.99% pure, contaminant-free water.",
          },
          {
            title: "Extended Durability",
            description:
              "Optional anti-rust treatment and stainless steel 304 overhead protection.",
          },
          {
            title: "Longer Lifespan",
            description:
              "Customizable design, easy maintenance, and energy-efficient operation.",
          },
          {
            title: "High Capacity",
            description:
              "Designed to handle heavy water demand in busy environments.",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "AQUA 100 /200",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "1000ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50°C",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8°C",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
      {
        id: "02",
        name: "HYDROBANKSERIES",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a0b94ed2-b259-493e-5f36-61699c8d1f00/public",
        keyPoints: [],
        bannerImageUrl: "",
        mountingType: "Free-Standing",
        description:
          "Designed for high-capacity areas, this modular drinking water system features integrated glass holders, shelves, and concealed dustbins for a clean and organized setup.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
        ],
        features: [
          {
            title: "Installation",
            description: "Wall-mounted drinking water dispenser and fountain.",
          },
          {
            title: "Optional Upgrades",
            description:
              "Swap the washer and dustbin for a built-in RO unit, ensuring purified water on demand.",
          },
          {
            title: "Material & Construction",
            description:
              "Durable stainless steel 304 with galvanized iron for long-lasting performance.",
          },
          {
            title: "Customization",
            description:
              "The backend unit is fully customizable to t any space or design requirements.",
          },
          {
            title: "Operation",
            description:
              "Convenient push-tap system for direct drinking (optional swan-neck taps available).",
          },
        ],
        tempratureOptions: [
          Temprature.HOT,
          Temprature.COLD,
          Temprature.Ambient,
        ],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "AQUA",
          },
          {
            id: 2,
            title: "Drip Tray Capacity",
            value: "1000ml",
            subtitle: "Milli Litres",
          },
          {
            id: 3,
            title: "Hot temperature",
            value: "30°C- 80°C",
            subtitle: "Default 50°C",
          },
          {
            id: 4,
            title: "Cold temperature",
            value: "5°C- 24°C",
            subtitle: "Default 8°C",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
    ],
  },
  {
    id: "06",
    categoryName: "COMMERCIAL/INDUSTRIAL PLANTS",
    categoryBanner: "/images/banners/commercial-banner.jpg",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/72054beb-9d63-4ef9-e169-b7594a898f00/public",
    categoryDescriptionTwo:
      "Power your facility with our large-scale hydration plants. Scalable and efficient, they offer high-volume water solutions with a commitment to sustainability.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "Commercial and industrial plants with high storage capacity offer quick, clean water bottle filling, integrated with optional purification. Ideal for waiting areas, pantries, lobbies, and break rooms, they ensure efficient and reliable water delivery.",
    productList: [
      {
        id: "01",
        name: "WATERMAKER",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6240473c-a65e-43cf-e01e-62974647f500/public",
        keyPoints: [],
        bannerImageUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/37bfd514-b180-45cf-1585-4dee3a381e00/public",
        mountingType: "Free-Standing",
        description:
          "A quick clean water bole ll Integrated with optional purication ideal for waiting areas, pantries, lobbies & break rooms",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cf295a79-b5ab-4529-e647-7f565151a900/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c3a75e54-c4e3-4b15-2e1c-94df658f8800/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/2156f3d9-8d99-482e-ec18-555c478ba900/public",
        ],
        features: [
          {
            title: "Robust construct",
            description:
              "Heavy duty RO system designed for industrial applications",
          },
          {
            title: "Anti-bacterial",
            description: "Provides protection against bacteria, mould & fungi",
          },
          {
            title: "Pre-engineered & Pre-assembled",
            description:
              "A pre-assembled factory tested units to reduce installation & set up time",
          },
          {
            title: "Application",
            description:
              "Commercial kitchens, pantries, washing units & hospitality sector",
          },
          {
            title: "5 - stage purification",
            description: "Ensures pure water from any raw water source",
          },
        ],
        tempratureOptions: [Temprature.Ambient],
        specifications: [
          {
            id: 1,
            title: "Variant",
            value: "FS",
            subtitle: "WATERMAKER",
          },
          {
            id: 2,
            title: "Storage Capacity",
            value: "150 - 250",
            subtitle: "Liters",
          },
          {
            id: 3,
            title: "Water Filling Speed",
            value: "10 liters",
            subtitle: "Per Minute",
          },
          {
            id: 4,
            title: "Shipping Weight",
            value: "172 / 180",
            subtitle: "Kilograms",
          },
          {
            id: 5,
            title: "Compressor",
            value: "220V/50 HZ",
            subtitle: "RZ 134a1/8 HP",
          },
        ],
      },
    ],
  },
];

type MountingType = "Free Standing" | "Counter Top" | "Fountain" | "Indoor";

export interface MountingTypeInfo {
  type: MountingType;
  image: string;
}

export interface CategoryMounting {
  categoryId: string;
  categoryName: string;
  mountingTypes: MountingTypeInfo[];
}

export const categoryMountingMap: CategoryMounting[] = [
  {
    categoryId: "01",
    categoryName: "Drinking Water Station - BLUWAE Series",
    mountingTypes: [
      {
        type: "Free Standing",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4e8f900d-ed31-40b1-1acb-a32b0a4d8800/public",
      },
      {
        type: "Counter Top",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/159ba402-e1aa-494d-4e87-e0d55b0f4a00/public",
      },
    ],
  },
  {
    categoryId: "02",
    categoryName: "Water Dispenser (W/O RO) - TRUBLU Series",
    mountingTypes: [
      {
        type: "Free Standing",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0fa34c2b-4dc1-47d4-e09e-709f52215800/public",
      },
      {
        // TODO: REPLACE THIS WITH CORRECT IMAGE
        type: "Counter Top",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0fa34c2b-4dc1-47d4-e09e-709f52215800/public",
      },
    ],
  },
  {
    categoryId: "03",
    categoryName: "Drinking Water Faucets - WATERMATIC Series",
    mountingTypes: [
      {
        type: "Counter Top",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fea50c0c-fbed-4995-fb0d-1833e624b000/public",
      },
    ],
  },
  {
    categoryId: "04",
    categoryName: "Water Cooler & Fountains - ZVR Series",
    mountingTypes: [
      {
        // TODO: REPLACE THIS WITH CORRECT IMAGE
        type: "Fountain",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fea50c0c-fbed-4995-fb0d-1833e624b000/public",
      },
      {
        // TODO: REPLACE THIS WITH CORRECT IMAGE
        type: "Indoor",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fea50c0c-fbed-4995-fb0d-1833e624b000/public",
      },
    ],
  },
  {
    categoryId: "05",
    categoryName: "Public Utility Systems - PUS Series",
    mountingTypes: [
      {
        // TODO: REPLACE THIS WITH CORRECT IMAGE
        type: "Free Standing",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/fea50c0c-fbed-4995-fb0d-1833e624b000/public",
      },
    ],
  },
  {
    categoryId: "06",
    categoryName: "Commercial/Industrial Plants",
    mountingTypes: [
      {
        type: "Free Standing",
        image:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/49e6178c-9578-4c43-471b-3172bad79600/public",
      },
    ],
  },
];

export const homeRelatedInfoListing = [
  {
    id: 1,
    title: "Awards and Other Information",
    img: "/images/cards/related-img-1.jpg",
    description:
      "Information regarding awards received by the Hitachi Group in various fields and related announcements.",
    link: "/blogs",
  },
  {
    id: 1,
    title: "News And Updates",
    img: "/images/cards/related-img-1.jpg",
    description:
      "Information regarding awards received by the Hitachi Group in various fields and related announcements.",
    link: "/blogs",
  },
  {
    id: 1,
    title: "Impact We Enable For You",
    img: "/images/cards/related-img-2.jpg",
    description:
      "Information regarding awards received by the Hitachi Group in various fields and related announcements.",
    link: "/blogs",
  },
  {
    id: 1,
    title: "Our Sustainable Water Solutions",
    img: "/images/cards/related-img-3.jpg",
    description:
      "Information regarding awards received by the Hitachi Group in various fields and related announcements.",
    link: "/blogs",
  },
];

export * from "./Icons";
