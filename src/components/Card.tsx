import React from "react";
import { fahkwang } from "~/fonts";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <span
      style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
      className="w-fit rounded-[25px] bg-myblack px-3 py-1 text-xs tracking-wide text-white"
    >
      {children}
    </span>
  );
};

export default Card;
