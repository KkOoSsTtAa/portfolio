import React from "react";

type CustomSectionProps = {
  children: React.ReactNode;
  centered?: boolean;
};

export const CustomSection = ({ children, centered }: CustomSectionProps) => {
  return (
    <section
      className={`container px-5 lg:px-20 xl:px-40 ${
        centered ? "flex flex-col items-center" : ""
      }`}
    >
      {children}
    </section>
  );
};
