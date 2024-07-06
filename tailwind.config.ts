import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customSliver: 'rgb(102, 102, 104)',
        customGray:'rgb(31, 31, 33)',
        customBlack:'rgb(40, 40, 42)',
        customHovercolour:'rgb(59, 59, 61)',
      },
      
     
    },
  },
  plugins: [],
};
export default config;
