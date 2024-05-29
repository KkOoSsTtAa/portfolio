import { ReactNode } from "react";

import { fahkwang } from "@/fonts";

type ChipProps = {
  children: ReactNode;
};

export const Chip = ({ children }: ChipProps) => {
  return (
    <span
      style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
      className="w-fit rounded-[25px] bg-myBlack px-3 py-1 text-xs tracking-wide text-white md:text-sm"
    >
      {children}
    </span>
  );
};
