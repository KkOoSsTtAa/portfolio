import React from "react";
import { fahkwang } from "~/fonts";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div
      style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
      className="w-fit rounded-[25px] bg-myblack px-3 py-1 text-xs tracking-wide text-white"
    >
      {children}
    </div>
  );
};

export default Card;
