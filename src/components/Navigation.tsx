import React from "react";

import { type NavLinks, HeaderButton } from "@/components";

type NavigationProps = {
  navLinks: NavLinks[];
};

export const Navigation = ({ navLinks }: NavigationProps) => {
  return (
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
              navLinks[2]?.inView || navLinks[3]?.inView || navLinks[4]?.inView
                ? "text-white"
                : "text-myBlack"
            }`}
            motionDivClassName={`${
              navLinks[2]?.inView || navLinks[3]?.inView || navLinks[4]?.inView
                ? "bg-white"
                : ""
            }`}
          >
            {navLink.label}
          </HeaderButton>
        );
      })}
    </nav>
  );
};
