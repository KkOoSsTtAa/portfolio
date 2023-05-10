import { motion } from "framer-motion";
import React from "react";
import { fahkwang } from "~/fonts";

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
      className={`relative uppercase transition-all duration-200 ${
        className ?? ""
      }`}
      style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
      onClick={() => {
        const element = document.getElementById(children);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
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
