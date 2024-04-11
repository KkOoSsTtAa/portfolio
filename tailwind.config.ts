import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myBlack: "#2F2F2F",
        myYellow: "#FFE793",
        myGreen: "#1ac073",
        myBlue: "#1976d2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
