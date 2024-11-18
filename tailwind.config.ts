import type {Config} from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
        secondary: ["Poppins"],
      },
      backgroundImage: {
        "water-machine-near-wall":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6e97d643-8468-4a4f-8cb3-62577cc81000/public')",
        footprint:
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/a5b5a4c4-26e1-4b5e-4700-7cef8fb94900/public')",
        "above-the-cloud":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f96667c7-d0bb-48fe-9108-a8420e88dd00/public')",
        "company-banner":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/be6724ec-9dd5-4059-d13e-2e3ac5aafb00/public')",
        "man-in-shadow":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f75719cb-555c-4140-dda8-3a10e84a7d00/public')",
        "hands-pointing-on-table":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/292515d8-68e3-4dea-3fd9-da6001dd8000/public')",
        "earth-from-space":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/25cd406c-a8e7-449b-30ec-4824b6426800/public')",
        "water-splash":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/b4381e7a-7a28-4d56-1d16-e744665db300/public')",
        "window-pattern":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0e5c4c44-74a1-4b7d-26df-f4676de61800/public')",
        "water-drop":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/ab0f010e-b026-45ff-2983-a6f2a543fd00/public')",
        "washing-hands":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d460dc5c-4c38-421d-befc-c6b02c473900/public')",
        "leaf-closeup":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/f18fad87-7a6c-4567-1984-21d155651100/public')",
        "earth-in-hands":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/dcd20ad3-c916-450f-494d-a5c3abb79600/public')",
        "product-details-banner":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d65a7aae-4e62-49d2-e4be-60b891e6da00/public')",
        "leaf-droplet":
          "url('https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/6f98cc10-fe4c-4c23-0fd6-189568739b00/public')",
      },
      // spacing: {
      //     default: "2rem",
      // },
      // borderRadius: {
      //     "sg-small": "4px",
      //     "sg-medium": "8px",
      //     "sg-large": "12px",
      // },
    },
  },
  plugins: [
    function ({addComponents}) {
      addComponents({
        ".container": {
          width: "100%",
          paddingLeft: "12px",
          paddingRight: "12px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "672px",
          },
          "@screen lg": {
            maxWidth: "920px",
          },
          "@screen xl": {
            maxWidth: "1080px",
          },
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
        ".container-lg": {
          width: "100%",
          paddingLeft: "12px",
          paddingRight: "12px",
          marginLeft: "auto",
          marginRight: "auto",
          "@screen md": {
            maxWidth: "100%",
          },
          "@screen lg": {
            maxWidth: "992px",
          },
          "@screen xl": {
            maxWidth: "1200px",
          },
          "@screen 2xl": {
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
  // prefix: "tw-",
} satisfies Config;
