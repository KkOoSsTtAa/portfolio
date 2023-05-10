import { motion } from "framer-motion";
import React from "react";
import { fahkwang } from "~/fonts";

const HeaderButton = ({
  children,
  active,
}: {
  children: string;
  active: boolean;
}) => {
  return (
    <button
      className="relative uppercase"
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
          className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-[#2F2F2F]"
          layoutId="underline"
        />
      )}
    </button>
  );
};

export default HeaderButton;
