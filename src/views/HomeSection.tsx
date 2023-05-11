import React from "react";
import { heading1, heading2 } from "~/data";
import { fahkwang, anton } from "~/fonts";
import CustomSection from "../components/CustomSection";
import CustomMotionDiv from "../components/CustomMotionDiv";

const HomeSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <h1
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="mb-5 text-5xl text-myblack md:mb-10 md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl"
        >
          {heading1}
        </h1>
        <h2
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="tracking-wide text-myblack md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          {heading2}
        </h2>
      </CustomSection>
    </CustomMotionDiv>
  );
};

export default HomeSection;
