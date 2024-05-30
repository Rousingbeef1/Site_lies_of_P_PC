import { EB_Garamond, Sansita } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      fontFamily:{
        sans: ['var(--Eb_Font)']
      }
    }
  },
  plugins: [],
};
export default config;
