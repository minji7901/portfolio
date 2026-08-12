import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        orbit: "orbit 25s linear infinite",
      },
      maxWidth: {
        container: "1400px",
      },
      keyframes: {
        orbit: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      colors: {
        warm: {
          DEFAULT: "#FAFAF8",
          section: "#FAFAF8",
          card: "#FFFFFF",
        },
        base: {
          background: "#FFFFFF",
          section: "#FAFAF8",
        },
        hero: {
          from: "#FFFDF5",
          via: "#FFFFFF",
          to: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#F4D96B",
          hover: "#EBCB4F",
          soft: "#FFF7D6",
        },
        text: {
          primary: "#171717",
          secondary: "#5F5F5F",
          muted: "#999999",
        },
        line: "#EAEAEA",
      },
    },
  },
};

export default config;
