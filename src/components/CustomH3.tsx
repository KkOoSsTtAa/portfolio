import { ReactNode } from "react";

import { anton } from "@/fonts";
import { cn } from "@/lib/utils";

type CustomH3Props = {
  children: ReactNode;
  variant: "yellow" | "black" | "white";
  className?: string;
};

export const CustomH3 = ({ children, variant, className }: CustomH3Props) => {
  return (
    <h3
      style={{ fontFamily: `${anton.style.fontFamily}` }}
      className={cn(
        "text-center text-5xl text-myBlack md:text-6xl lg:text-7xl xl:text-8xl",
        variant === "yellow"
          ? "text-myYellow"
          : variant === "black"
            ? "text-myBlack"
            : variant === "white"
              ? "text-white"
              : "",
        className,
      )}
    >
      {children}
    </h3>
  );
};
