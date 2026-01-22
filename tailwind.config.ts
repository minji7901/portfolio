import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1200px",
      },
      colors: {
        primary: {
          DEFAULT: "#FFF4C7",
          dark: "#FDD175",
        },
        pastel: {
          beige: "#EEE8DD",
          green: "#DCE6DF",
          blue: "#E3E8F0",
          pink: "#F2D6D0",
        },
        base: {
          primary: "#2B2B2B",
          secondary: "#4A4A4A",
        },
        line: "#E7E7E2",
        navi: "#1F2A44",
      },
    },
  },
};
export default config;
