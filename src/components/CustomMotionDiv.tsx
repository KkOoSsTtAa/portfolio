import { motion } from "framer-motion";
import React from "react";

type CustomMotionDivProps = {
  children: React.ReactNode;
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
