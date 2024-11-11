import {Link} from "@remix-run/react";
import {ReactNode} from "react";
import {Product} from "~/typeDefinitions";

export const ProductList: Product[] = [
  {
    id: "1",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
  {
    id: "2",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
  {
    id: "3",
    name: "Drinking Water Station",
    link: "/",
    image:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/cecde014-4dfc-4dae-42aa-9a381a59a000/public",
  },
  {
    id: "4",
    name: "Drinking Water Station",
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
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
    id: "6",
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
  thumbnailUrl?: string;
  name?: string;
  mountingType?: string;
  description?: string | ReactNode;
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
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescription:
      "Water dispensers with inbuilt purification —pure, safe water delivered efficiently. Designed to reduce plastic waste and energy consumption, making sustainability easy.",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    productList: [
      {
        id: "01",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c71da7df-b279-441d-63ca-cab312e82600/public",
        name: "VAR",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c4f8921a-e7a7-42c4-e262-6f9c6d027b00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/17f24c63-1749-4fda-fc44-7b30aac2bd00/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/236d75bb-7256-4b8c-837c-834515144200/public",
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
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/699b0801-c2dc-41d0-136f-0b5d54990b00/public",
        name: "ENKI",
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
        id: "03",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b173ac87-c1ea-4c9b-b4dc-9dfe9d7e4100/public",
        name: "POS",
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
        id: "04",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9df2b276-67da-412e-b944-137e68fa3500/public",
        name: "ROM GRANDE",
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
        id: "05",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52cfd172-76d2-4471-8083-4a8d9a8caf00/public",
        name: "REVA",
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
        id: "06",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ec6c91fe-22a7-45bb-3aee-5e6720147000/public",
        name: "ASSISTIFLOW",
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
        id: "07",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6865cefc-5a2e-43c5-5d73-438cfac6c800/public",
        name: "ENKI.CT",
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
        id: "08",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/54008031-5666-4934-a9d4-6fdc01030e00/public",
        name: "VAR.CT",
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
        id: "09",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/52dd58ea-1d30-4397-6ba0-df78adaeaa00/public",
        name: "ROM.CT",
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
    ],
  },
  {
    id: "02",
    categoryName: "DRINKING WATER DISPENSER - TRUBLU Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
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
        name: "ALFA.TL",
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
        name: "ALFA.BL",
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
        name: "ALFA",
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
        name: "ALFA.CT",
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
        // missing images
        id: "05",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9422e84d-41cc-45bf-2b65-9e8cdfd68200/public",
        name: "BETA(ss model)",
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
      {
        id: "06",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/e670b1ee-b32c-4a6a-5d51-ed03fa81c400/public",
        name: "AENON",
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
        id: "07",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f339b126-7cad-4942-91ee-8f535507f600/public",
        name: "DELTA",
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
        id: "08",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c16970c2-a74d-4b1e-b0b0-e88ee58be000/public",
        name: "GAMMA",
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
        id: "09",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9fabbc11-9a7d-4170-ba47-9f20621fb500/public",
        name: "BREEZE BLUE(usha)",
        mountingType: "Free-Standing",
        description:
          "A Floor-standing model designed for convenient placement on the ground.",
        images: [
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/60abc267-69cc-4696-1726-ddc460dbb500/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/9c437901-5173-40be-175e-5233a8654700/public",
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/c92b73ed-a8ad-4976-4460-cfdd8ef4f200/public",
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
        id: "10",
        thumbnailUrl:
          "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b92f8428-83ae-45b4-fccf-465b18193500/public",
        name: "LAGOON",
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
    categoryName: "WATER COOLER & FOUNTAINS - ZVR Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "Our Water Coolers and Fountains are designed to elevate hydration in high-traffic spaces like airports. Whether wall-mounted or floor-standing, each unit is customizable to provide pure, refreshing drinking water at the touch of a button. Built for convenience and durability, they seamlessly blend into any environment while delivering reliable hydration, making them a smart, eco-friendly choice for travelers on the go.",
    categoryDescriptionThree:
      "Customization meets innovation with our water coolers and fountains. Engineered for heavy use, these units offer advanced filtration and are crafted to minimize environmental impact. Whether you're looking for a sleek wall unit or a robust floor-standing option, they’re designed to deliver clean water efficiently, reducing plastic waste while keeping passengers refreshed and airports sustainable.",
    categoryDescription:
      "Water coolers cum bubblers provide chilled water on demand. Built to be energy-efficient, they’re ideal for public spaces, reducing both costs and plastic waste.",
    productList: [
      {
        id: "01",
        name: "ZALE",
        mountingType: "On Wall",
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
      {
        id: "02",
        name: "IBIS",
        mountingType: "On Wall",
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
      {
        id: "03",
        name: "CONTOUR",
        mountingType: "On Wall",
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
      {
        id: "04",
        name: "PLUS ULTRA",
        mountingType: "On Wall",
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
      {
        id: "05",
        name: "NT 01",
        mountingType: "In wall",
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
      {
        id: "06",
        name: "YAMI",
        mountingType: "Floor-standing",
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
      {
        id: "07",
        name: "VOLTURNUS",
        mountingType: "Floor-standing",
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
      {
        id: "08",
        name: "URB",
        mountingType: "Outdoor",
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
      {
        id: "09",
        name: "KANO",
        mountingType: "Outdoor",
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
      {
        id: "10",
        name: "KEMPTY",
        mountingType: "Outdoor",
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
      {
        id: "10",
        name: "PENGUIN",
        mountingType: "Outdoor",
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
    id: "04",
    categoryName: "PUBLIC UTILITY SYSTEMS - PUS Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "Our Public Utility Systems are built for scale, designed to meet the hydration needs of large public spaces with ease. Whether it’s parks, schools, or industrial areas, these systems provide reliable access to clean drinking water, reducing the reliance on bottled alternatives. Engineered for durability and efficiency, they’re made to handle high demand while lowering environmental impact. It's sustainable hydration on a grand scale.",
    categoryDescriptionThree:
      "Innovation doesn’t stop at convenience—it extends to responsibility. Our public utility systems not only deliver water where it’s needed most, but they do it with minimal waste. Crafted for long-term performance, these systems align with your commitment to a greener, more efficient future. Because when it comes to public spaces, clean water should be a given—not a challenge.",
    categoryDescription:
      "Designed for large public spaces, PUS systems ensure clean, accessible water. Engineered for durability and eco-friendliness, they support sustainable communities.",
    productList: [
      {
        id: "01",
        name: "HYDROBANK XL",
        mountingType: "On Wall",
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
      {
        id: "02",
        name: "HYDROBANK L",
        mountingType: "On Wall",
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
      {
        id: "03",
        name: "HYDROBANK M",
        mountingType: "On Wall",
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
      {
        id: "04",
        name: "HYDROBANK",
        mountingType: "On Wall",
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
      {
        id: "05",
        name: "AQUA",
        mountingType: "Free Standing",
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
    id: "05",
    categoryName: "DRINKING WATER FAUCETS - WATERMATIC Series",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "Our Drinking Water Faucets are a perfect blend of elegance and functionality. With their minimalist design, these faucets deliver pure, refreshing water with effortless precision. Crafted to enhance any space, they offer a sleek, modern solution that not only looks good but performs exceptionally well. When paired with our UTC(under the counter) Units for water storage, you get seamless access to clean water—without the clutter.",
    categoryDescriptionThree:
      "The UTC Units are designed for those who value simplicity and efficiency. Compact yet powerful, they store water discreetly, ensuring a constant supply while keeping your space organized. Together, our faucets and UTC Units bring you an elegant, space-saving solution that’s both stylish and sustainable. Hydration has never looked—or worked—this good.",
    categoryDescription:
      "Drinking water faucets with under the counter storage units to make access to fresh water simple. Precision-engineered for smooth flow, with a focus on reducing waste and energy use.",
    productList: [
      {
        id: "01",
        name: "MOSES",
        mountingType: "Counter-top",
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
      {
        id: "02",
        name: "PIPER",
        mountingType: "Counter-top",
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
      {
        id: "03",
        name: "TOUCH",
        mountingType: "Counter-top",
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
      {
        id: "04",
        name: "INDUS",
        mountingType: "Counter-top",
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
      {
        id: "05",
        name: "TRX.TL",
        mountingType: "Counter-top",
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
      {
        id: "06",
        name: "HKN",
        mountingType: "Counter-top",
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
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "Power your facility with our large-scale hydration plants. Scalable and efficient, they offer high-volume water solutions with a commitment to sustainability",
    productList: [
      {
        id: "01",
        name: "BLUEBOX",
        mountingType: "Closed-skid",
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
      {
        id: "02",
        name: "INRO",
        mountingType: "Open-skid",
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
      {
        id: "03",
        name: "WATERMAKER",
        mountingType: "Free Standing",
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
    id: "07",
    categoryName: "UTC UNITS",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "UTC units provide a space-saving solution for clean water. Ideal for compact areas, they combine smart design with environmental responsibility.",
    productList: [
      {
        id: "01",
        name: "GRAND PRISMATIC",
        mountingType: "Under Counter",
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
      {
        id: "02",
        name: "NUMERO UNO",
        mountingType: "Under Counter",
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
    id: "08",
    categoryName: "SMALL RO UNITS",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "Maximize your space with our sleek wall hanging units. Perfect for areas with limited room, they deliver reliable, sustainable water access.",
    productList: [
      {
        id: "01",
        name: "ROBUSTO",
        mountingType: "Wall Hanging",
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
    id: "09",
    categoryName: "COMMUNITY WATER SOLUTIONS",
    categoryImage:
      "https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8c012f39-61c7-4dec-42ff-e257d65f9100/public",
    categoryDescriptionTwo:
      "At WAE, we're dedicated to developing solutions that are fundamentally aligned with the principles of SDG 6: Clean Water and Sanitation. Every water system we craft is designed not only to provide pure hydration but also to drastically reduce reliance on single-use plastics. Built entirely from metal, our products contribute to zero landfill waste, combining sustainability with energy efficiency. Choosing WAE means making a meaningful commitment to a smarter, greener future, where hydration meets ecological responsibility.",
    categoryDescriptionThree:
      "When innovation meets durability, you get more than just a water dispenser—you get a solution for the future. Our stainless steel dispensers are made to endure and perform, giving you reliable hydration while reducing your environmental footprint. It’s a simple, elegant choice for anyone committed to sustainability without sacrificing style or quality.",
    categoryDescription:
      "Bringing clean water to communities, our solutions offer sustainable hydration for all. Designed to be efficient, reliable, and environmentally responsible.",
    productList: [
      {
        id: "01",
        name: "QUALEASE",
        mountingType: "Under Discussion",
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
];

export * from "./Icons";
