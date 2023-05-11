import React from "react";

type CustomSectionProps = {
  children: React.ReactNode;
};

const CustomSection = (props: CustomSectionProps) => {
  return (
    <section className="container px-5 lg:px-20 xl:px-40">
      {props.children}
    </section>
  );
};

export default CustomSection;
