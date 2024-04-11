import React from "react";
import { robotoMono500 } from "@/fonts";

type Props = {
  fullyVisible: boolean;
};

const NameComponent = ({ fullyVisible }: Props) => {
  return (
    <div
      className={`overflow-x-hidden md:text-lg lg:text-xl xl:text-2xl ${
        fullyVisible ? "w-0" : ""
      } transition-all duration-300`}
      style={{ fontFamily: `${robotoMono500.style.fontFamily}` }}
    >
      NEMANJA KOSTADINOVIĆ
    </div>
  );
};

export default NameComponent;
