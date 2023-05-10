import React from "react";
import HeaderButton from "./HeaderButton";
import { robotoMono500 } from "~/fonts";

const Header = ({
  navLinks,
}: {
  navLinks: {
    label?: string;
    inView: boolean;
  }[];
}) => {
  const handleClick = () => {
    const element = document.getElementById("home");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header className="fixed top-7 z-20 w-full">
      <nav className="flex w-full justify-center gap-10 text-sm">
        {navLinks.map((navLink, index) => {
          if (!navLink.label) return null;
          let active = navLink.inView;
          if (navLink.label === "work") {
            active =
              navLinks[2]?.inView ||
              navLinks[3]?.inView ||
              navLinks[4]?.inView ||
              false;
          }
          return (
            <HeaderButton
              key={index}
              active={active}
              className={`${
                navLinks[2]?.inView ||
                navLinks[3]?.inView ||
                navLinks[4]?.inView
                  ? "text-white"
                  : "text-myblack"
              }`}
              motionDivClassName={`${
                navLinks[2]?.inView ||
                navLinks[3]?.inView ||
                navLinks[4]?.inView
                  ? "bg-white"
                  : ""
              }`}
            >
              {navLink.label}
            </HeaderButton>
          );
        })}
      </nav>
      <div className="mt-8 flex h-6 items-center justify-center gap-4 text-center">
        <div
          className={`h-7 w-7 ${
            !navLinks[0]?.inView ? "translate-x-[30px]" : ""
          } ${navLinks[5]?.inView ? "translate-x-[40px]" : ""} ${
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
          } ${
            navLinks[5]?.inView ? "-translate-x-[40px]" : ""
          } rounded-full bg-myblack transition-all duration-300 `}
          onClick={() => handleClick()}
        />
      </div>
    </header>
  );
};

export default Header;
