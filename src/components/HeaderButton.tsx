"use client";
import { motion } from "framer-motion";

import { fahkwang } from "@/fonts";
import { cn } from "@/lib/utils";

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
  const onClick = () => {
    const element = document.getElementById(children);
    if (!element) return;

    element.scrollIntoView(true);
  };

  return (
    <button
      className={cn(
        "md:text-md relative uppercase transition-all duration-200 lg:text-lg xl:text-xl",
        fahkwang.className,
        className,
      )}
      onClick={onClick}
    >
      {children}
      {active && (
        <motion.div
          className={cn(
            "absolute bottom-[-1px] left-0 right-0 h-[1px] bg-myBlack",
            motionDivClassName,
          )}
          layoutId="underline"
        />
      )}
    </button>
  );
};
