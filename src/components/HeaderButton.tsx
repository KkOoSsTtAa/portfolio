import { motion } from "framer-motion";
import React from "react";
import { fahkwang } from "@/fonts";

const HeaderButton = ({
  children,
  active,
  className,
  motionDivClassName,
}: {
  children: string;
  active: boolean;
  className?: string;
  motionDivClassName?: string;
}) => {
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
          className={`absolute bottom-[-1px] left-0 right-0 h-[1px] bg-myblack ${
            motionDivClassName ?? ""
          }`}
          layoutId="underline"
        />
      )}
    </button>
  );
};

export default HeaderButton;
