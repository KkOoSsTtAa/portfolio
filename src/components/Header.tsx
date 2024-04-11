import React from "react";

import {
  LeftCircle,
  RightCircle,
  Navigation,
  NameComponent,
} from "@/components";

export type NavLinks = {
  label?: string;
  inView: boolean;
};

type HeaderProps = {
  navLinks: NavLinks[];
};

export const Header = ({ navLinks }: HeaderProps) => {
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
      <Navigation navLinks={navLinks} />
      <div className="mt-8 flex h-6 items-center justify-center gap-4 text-center">
        <LeftCircle navLinks={navLinks} handleClick={handleClick} />
        <NameComponent fullyVisible={!navLinks[0]?.inView} />
        <RightCircle navLinks={navLinks} handleClick={handleClick} />
      </div>
    </header>
  );
};
