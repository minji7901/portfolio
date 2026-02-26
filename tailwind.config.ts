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
          DEFAULT: "#FAF9F6", // main background
          section: "#F3EFE7", // section background
          card: "#FFFFFF", // card background
        },
        
        /* 전체 배경 */
        base: {
          background: "#FFFFFF",
          section: "#F9FAFB",
        },

        /* 히어로 전용 */
        hero: {
          from: "#FDECEC", // 연한 로즈
          via: "#FAF3F3", // 거의 화이트
          to: "#FFF8F6", // 크림톤
        },

        /* 포인트 (블루 말고 딥 플럼) */
        accent: {
          DEFAULT: "#7C3AED",
          hover: "#6D28D9",
          soft: "#F3E8FF",
        },

        text: {
          primary: "#111827",
          secondary: "#4B5563",
          muted: "#9CA3AF",
        },

        line: "#E5E7EB",
      },
    },
  },
};

export default config;
