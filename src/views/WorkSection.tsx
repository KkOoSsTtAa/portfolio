import React from "react";
import { workHeading, workText1, workText2 } from "~/data";
import CustomH3 from "../components/CustomH3";
import CustomSection from "../components/CustomSection";
import CustomParagraphs from "../components/CustomParagraphs";
import CustomMotionDiv from "../components/CustomMotionDiv";

const WorkSection = () => {
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

export default WorkSection;
