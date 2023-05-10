import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblack: "#2F2F2F",
        myyellow: "#FFE793",
      },
    },
  },
  plugins: [],
} satisfies Config;
