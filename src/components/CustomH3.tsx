import React from "react";
import { anton } from "~/fonts";

type CustomH3Props = {
  children: React.ReactNode;
  variant: "yellow" | "black" | "white";
  className?: string;
};

const CustomH3 = (props: CustomH3Props) => {
  return (
    <h3
      style={{ fontFamily: `${anton.style.fontFamily}` }}
      className={`mb-5 text-center text-5xl text-myblack md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ${
        props.variant === "yellow"
          ? "text-myyellow"
          : props.variant === "black"
          ? "text-myblack"
          : props.variant === "white"
          ? "text-white"
          : ""
      } ${props.className ?? ""}}`}
    >
      {props.children}
    </h3>
  );
};

export default CustomH3;
