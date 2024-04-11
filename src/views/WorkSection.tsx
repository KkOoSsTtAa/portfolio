import React from "react";
import { workHeading, workText1, workText2 } from "@/data";
import {
  CustomH3,
  CustomMotionDiv,
  CustomParagraphs,
  CustomSection,
} from "@/components";

export const WorkSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection centered>
        <CustomH3 variant="yellow" className="mb-32 mt-24">
          {workHeading}
        </CustomH3>
        <CustomParagraphs text1={workText1} text2={workText2} />
      </CustomSection>
    </CustomMotionDiv>
  );
};
