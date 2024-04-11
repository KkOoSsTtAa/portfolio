import { motion } from "framer-motion";
import React from "react";

import { fahkwang } from "@/fonts";

type Props = {
  children: string;
  active: boolean;
  className?: string;
  motionDivClassName?: string;
};

export const HeaderButton = ({
  children,
  active,
  className,
  motionDivClassName,
}: Props) => {
  return (
    <button
      className={`md:text-md relative uppercase transition-all duration-200 lg:text-lg xl:text-xl ${
        className ?? ""
      }`}
      style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
      onClick={() => {
        const element = document.getElementById(children);
        if (element) {
          element.scrollIntoView(true);
        }
      }}
    >
      {children}
      {active && (
        <motion.div
          className={`bg-myBlack absolute bottom-[-1px] left-0 right-0 h-[1px] ${
            motionDivClassName ?? ""
          }`}
          layoutId="underline"
        />
      )}
    </button>
  );
};
