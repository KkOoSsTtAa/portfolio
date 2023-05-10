import React from "react";
import HeaderButton from "./HeaderButton";
import { robotoMono500 } from "~/fonts";

const Header = ({
  navLinks,
}: {
  navLinks: {
    label: string;
    inView: boolean;
  }[];
}) => {
  return (
    <header className="absolute top-7 w-full">
      <nav className="flex w-full justify-center gap-10 text-sm">
        {navLinks.map((navLink, index) => (
          <HeaderButton key={index} active={navLink.inView}>
            {navLink.label}
          </HeaderButton>
        ))}
      </nav>
      <div className="mt-8 flex h-6 items-center justify-center gap-4 text-center">
        <div
          className={`h-7 w-7 ${
            !navLinks[0]?.inView ? "translate-x-[30px]" : ""
          } ${
            navLinks[2]?.inView ? "z-10" : ""
          } rounded-full bg-[#FFE793] transition-all duration-300`}
        />
        <div
          className={`overflow-x-hidden ${
            !navLinks[0]?.inView ? "w-0" : ""
          } transition-all duration-300`}
          style={{ fontFamily: `${robotoMono500.style.fontFamily}` }}
        >
          NEMANJA KOSTADINOVIĆ
        </div>
        <div
          className={`h-7 w-7 ${
            !navLinks[0]?.inView ? "-translate-x-[30px]" : ""
          } rounded-full bg-[#2F2F2F] transition-all duration-300 `}
        />
      </div>
    </header>
  );
};

export default Header;
