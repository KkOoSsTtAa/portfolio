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
          className="mb-5 max-w-[70%] text-5xl text-myblack md:mb-10 md:max-w-[50%] lg:text-6xl xl:text-7xl"
        >
          {heading1}
        </h1>
        <h2
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="tracking-wide text-myblack sm:w-3/4 sm:text-lg lg:text-xl xl:text-2xl"
        >
          {heading2}
        </h2>
      </CustomSection>
    </CustomMotionDiv>
  );
};

export default HomeSection;
