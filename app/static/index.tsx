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

export const championsSpotlight = [
  {
    id: 1,
    image: "/images/covers/citibank.png",
    title: "Citibank: Banking on a Greener Tomorrow",
    subtitle:
      "Citibank has deployed 105 water-refill stations across its Indian offices, turning everyday hydration into an act of environmental stewardship.",
    statement: "an equivalent of planting thousands of trees.",
    achievments: [
      {
        id: 1,
        title: "14,173 kg",
        subtitle: "plastic waste Removed",
      },
      {
        id: 2,
        title: "16.5m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 3,
        title: "94,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 2,
    image: "/images/covers/credit-suisse.jpg",
    title: "Credit Suisse: A Fresh Start for a Sustainable Future",
    subtitle:
      "Credit Suisse has integrated 70 refill stations in Pune, Gurgaon, and Mumbai, making clean, green hydration accessible to its workforce.",
    statement: "an equivalent of planting thousands of trees.",
    achievments: [
      {
        id: 1,
        title: "17m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "98,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 3,
    image: "/images/covers/deutsche-bank.jpg",
    title: "Deutsche Bank: Banking on Blue",
    subtitle:
      "Deutsche Bank's 73 refill stations are reducing reliance on bottled water across India.",
    statement: "an equivalent of planting thousands of trees.",
    achievments: [
      {
        id: 1,
        title: "23m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "132,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 4,
    image: "/images/covers/ericsson.jpg",
    title: "Ericsson: Connecting the Dots to a Greener Future",
    subtitle:
      "Ericsson's installation of 138 water-refill stations across India showcases their commitment to sustainable practices",
    statement:
      "Ericsson's initiative is like removing the equivalent of two medium-sized SUVs from the roads each month.",
    achievments: [
      {
        id: 1,
        title: "55m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "315,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 5,
    image: "/images/covers/icici.jpg",
    title: "ICICI Bank: A Ripple of Change",
    subtitle:
      "ICICI Bank leads the pack with 624 water-refill stations across India.",
    statement: "turning everyday hydration into a force for good.",
    achievments: [
      {
        id: 1,
        title: "53m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "299,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 6,
    image: "/images/covers/jp-morgan.jpg",
    title: "J.P. Morgan: Investing in a Greener Tomorrow",
    subtitle:
      "J.P. Morgan has turned 241 locations into green spaces with their water-refill stations.",
    statement:
      "J.P. Morgan is redefining the meaning of “investment” by investing in the planet.",
    achievments: [
      {
        id: 1,
        title: "105m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "90,288 kg",
        subtitle: "plastic waste Removed",
      },
    ],
    link: "/",
  },
  {
    id: 7,
    image: "/images/covers/max-life.jpg",
    title: "Max Life: Securing a Greener Future",
    subtitle:
      "Max Life has installed 323 refill stations, securing their commitment to sustainability.",
    statement:
      "Max Life's initiative underscores the power of green practices in everyday operations.",
    achievments: [
      {
        id: 1,
        title: "50m litres",
        subtitle: "plastic waste Removed",
      },
      {
        id: 2,
        title: "283,000 kg",
        subtitle: "Water saved annually",
      },
    ],
    link: "/",
  },
  {
    id: 8,
    image: "/images/covers/morgan-stanley.jpg",
    title: "Morgan Stanley: Reimagining Impact",
    subtitle:
      "Morgan Stanley's 47 refill stations in Mumbai and Bangalore are more than water sources—they're symbols of change.",
    statement:
      "Morgan Stanley's commitment to sustainability is evident in every sip.",
    achievments: [
      {
        id: 1,
        title: "18m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "103,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
  {
    id: 9,
    image: "/images/covers/rbs.jpg",
    title: "RBS (Royal Bank of Scotland): A Fresh Take on Finance",
    subtitle:
      "RBS has implemented 127 refill stations across major Indian cities, championing a fresh approach to hydration.",
    statement:
      "RBS is making a powerful statement about the future of finance and the planet.",
    achievments: [
      {
        id: 1,
        title: "26m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "21,978 kg",
        subtitle: "plastic waste Removed",
      },
    ],
    link: "/",
  },
  {
    id: 10,
    image: "/images/covers/citibank.png",
    title: "Sapient: Redefining Smart Solutions",
    subtitle:
      "Sapient's 103 refill stations in Gurgaon are helping redefine what it means to be a smart, sustainable business.",
    statement:
      "Sapient's actions speak louder than words, showing that smart solutions are sustainable solutions.",
    achievments: [
      {
        id: 1,
        title: "27m litres",
        subtitle: "Water saved annually",
      },
      {
        id: 2,
        title: "154,000 kg",
        subtitle: "CO2 emissions reduced",
      },
    ],
    link: "/",
  },
];

export * from "./Icons";
