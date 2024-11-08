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
  productList?: {
    id?: string;
    name?: string;
    mountingType?: string;
    description?: string | ReactNode;
    images?: string[];
    features?: {
      title: string;
      description: string;
    }[];
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
        name: "VAR",
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
        id: "02",
        name: "ENKI",
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
        id: "03",
        name: "POS",
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
        id: "04",
        name: "ROM GRANDE",
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
        id: "05",
        name: "REVA",
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
        name: "ASSISTIFLOW",
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
        id: "07",
        name: "ENKI.CT",
        mountingType: "Counter-Top",
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
        name: "VAR.CT",
        mountingType: "Counter-Top",
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
        name: "ROM.CT",
        mountingType: "Counter-Top",
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
        name: "ALFA.TL",
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
        id: "02",
        name: "ALFA.BL",
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
        id: "03",
        name: "ALFA",
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
        id: "04",
        name: "ALFA.CT",
        mountingType: "Counter-Top",
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
        name: "AENON",
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
        id: "07",
        name: "DELTA",
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
        id: "08",
        name: "GAMMA",
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
        id: "09",
        name: "BREEZE BLUE(usha)",
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
        id: "10",
        name: "LAGOON",
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
