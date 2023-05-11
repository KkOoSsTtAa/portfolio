import React from "react";

type SmallCircleProps = {
  navLinks: {
    label?: string;
    inView: boolean;
  }[];
  handleClick: () => void;
};

export const LeftCircle = ({ navLinks, handleClick }: SmallCircleProps) => {
  return (
    <div
      className={`h-7 w-7 ${!navLinks[0]?.inView ? "translate-x-[30px]" : ""} ${
        navLinks[5]?.inView ? "translate-x-[40px]" : ""
      } ${
        navLinks[2]?.inView || navLinks[3]?.inView || navLinks[4]?.inView
          ? "z-10"
          : ""
      } ${
        navLinks[3]?.inView
          ? "bg-mygreen"
          : navLinks[4]?.inView
          ? "bg-myblue"
          : "bg-myyellow"
      }  rounded-full  transition-all duration-300`}
      onClick={() => handleClick()}
    />
  );
};

export const RightCircle = ({ navLinks, handleClick }: SmallCircleProps) => {
  return (
    <div
      className={`h-7 w-7 ${
        !navLinks[0]?.inView ? "-translate-x-[30px]" : ""
      } ${
        navLinks[5]?.inView ? "-translate-x-[40px]" : ""
      } rounded-full bg-myblack transition-all duration-300 `}
      onClick={() => handleClick()}
    />
  );
};