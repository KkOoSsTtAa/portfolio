import React from "react";

import { anton } from "@/fonts";

type CustomH3Props = {
  children: React.ReactNode;
  variant: "yellow" | "black" | "white";
  className?: string;
};

export const CustomH3 = ({ children, variant, className }: CustomH3Props) => {
  return (
    <h3
      style={{ fontFamily: `${anton.style.fontFamily}` }}
      className={`text-myBlack text-center text-5xl md:text-6xl lg:text-7xl xl:text-8xl ${
        variant === "yellow"
          ? "text-myYellow"
          : variant === "black"
            ? "text-myBlack"
            : variant === "white"
              ? "text-white"
              : ""
      } ${className ?? ""}`}
    >
      {children}
    </h3>
  );
};
