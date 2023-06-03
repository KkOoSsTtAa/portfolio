import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myblack: "#2F2F2F",
        myyellow: "#FFE793",
        mygreen: "#1ac073",
        myblue: "#1976d2",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
} satisfies Config;
