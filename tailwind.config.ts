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
        secondary: ["Monschone"],
      },
      backgroundImage: {
        "water-machine-near-wall":
          "url('/images/covers/water-machine-near-wall.jpg')",
        "granite-river": "url('/images/covers/granite-river.jpg')",
        "above-the-cloud": "url('/images/covers/above-the-clouds.jpg')",
        "company-banner": "url('/images/covers/company-banner.jpg')",
        "man-in-shadow": "url('/images/covers/man-in-shadow.jpg')",
        "hands-pointing-on-table":
          "url('/images/covers/hands-pointing-on-table.jpg')",
        "earth-from-space": "url('/images/covers/earth-from-space.jpg')",
        "water-splash": "url('/images/covers/water-splash.jpg')",
        "window-pattern": "url('/images/covers/window-bg-pattern.jpg')",
        "water-drop": "url('/images/covers/water-drop.jpg')",
        "washing-hands": "url('/images/covers/washing-hands.jpg')",
        "leaf-closeup": "url('/images/covers/leaf-closeup.jpg')",
        "earth-in-hands": "url('/images/covers/earth-in-hand.jpg')",
        "product-details-banner":
          "url('/images/covers/vending-machine-in-a-room.jpg')",
        "leaf-droplet": "url('/images/covers/leaf-droplet.png')",
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
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1024px",
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
