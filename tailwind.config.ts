import type {Config} from "tailwindcss";

export default {
    content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter"],
                secondary: ["Monschone"],
            },
            container: {
                padding: "12px",
                center: true,
            },
            colors: {},
            backgroundImage: {
                "window-pattern": "url('/images/covers/window-bg-pattern.jpg')",
                "water-drop": "url('/images/covers/water-drop.jpg')",
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
    plugins: [],
    // prefix: "tw-",
} satisfies Config;
