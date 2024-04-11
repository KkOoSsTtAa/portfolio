import React from "react";
import { heading1, heading2 } from "@/data";
import { fahkwang, anton } from "@/fonts";
import { CustomMotionDiv, CustomSection } from "@/components";

export const HomeSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <h1
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="text-myBlack -mt-28 mb-5 max-w-[80%] text-5xl sm:mt-0 md:mb-10 md:max-w-[50%] lg:text-6xl xl:text-7xl"
        >
          {heading1}
        </h1>
        <h2
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-myBlack tracking-wide sm:w-3/4 sm:text-lg lg:text-xl xl:text-2xl"
        >
          {heading2}
        </h2>
      </CustomSection>
    </CustomMotionDiv>
  );
};
