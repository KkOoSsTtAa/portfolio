"use client";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

type CustomMotionDivProps = {
  children: ReactNode;
};

export const CustomMotionDiv = ({ children }: CustomMotionDivProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-100",
        inView ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0",
      )}
    >
      {children}
    </div>
  );
};
