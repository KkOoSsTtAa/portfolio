import React from "react";

import { fahkwang } from "@/fonts";

type CardProps = {
  children: React.ReactNode;
};

export const Card = ({ children }: CardProps) => {
  return (
    <span
      style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
      className="bg-myBlack w-fit rounded-[25px] px-3 py-1 text-xs tracking-wide text-white md:text-sm"
    >
      {children}
    </span>
  );
};
