"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type CustomMotionDivProps = {
  children: ReactNode;
};

export const CustomMotionDiv = ({ children }: CustomMotionDivProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
};
