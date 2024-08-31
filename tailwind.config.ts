import type {Config} from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Monschone"],
      },
      container: {
        screens: {
          //   sm: "640px",
          //   md: "768px",
          //   lg: "1024px",
          xl: "1080px",
          "2xl": "1440px",
        },
        padding: "12px",
        center: true,
      },
      colors: {},
      backgroundImage: {
        "window-pattern": "url('/images/covers/window-bg-pattern.jpg')",
        "water-drop": "url('/images/covers/water-drop.jpg')",
        "washing-hands": "url('/images/covers/washing-hands.jpg')",
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
    function ({addComponents}: any) {
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
      });
    },
  ],
  // prefix: "tw-",
} satisfies Config;
