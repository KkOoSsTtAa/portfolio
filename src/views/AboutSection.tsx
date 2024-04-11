import React from "react";

import { skills } from "@/constants";
import { aboutHeading, aboutMySkills, aboutText1, aboutText2 } from "@/data";
import {
  CardList,
  CustomH3,
  CustomMotionDiv,
  CustomParagraphs,
  CustomSection,
} from "@/components";

export const AboutSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection centered>
        <CustomH3 variant="black" className="mb-5">
          {aboutHeading}
        </CustomH3>
        <CustomParagraphs text1={aboutText1} text2={aboutText2} />
        <CardList title={aboutMySkills} cards={skills} />
      </CustomSection>
    </CustomMotionDiv>
  );
};
