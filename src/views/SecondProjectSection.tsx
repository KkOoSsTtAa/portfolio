import React from "react";
import { efood_back_tech_stack, efood_front_tech_stack } from "~/constants";
import {
  backendTechnologies,
  frontendTechnologies,
  secondProjectHeading,
  secondProjectText1,
  secondProjectText2,
} from "~/data";
import CustomLink from "../components/CustomLink";
import CustomH3 from "../components/CustomH3";
import CustomSection from "../components/CustomSection";
import CustomParagraphs from "../components/CustomParagraphs";
import CardList from "../components/CardList";
import CustomMotionDiv from "../components/CustomMotionDiv";

const SecondProjectSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection centered>
        <CustomH3 variant="white" className="mb-5 mt-32">
          {secondProjectHeading}
        </CustomH3>
        <CustomParagraphs
          text1={secondProjectText1}
          text2={secondProjectText2}
        />
        <CardList title={frontendTechnologies} cards={efood_front_tech_stack} />
        <CardList title={backendTechnologies} cards={efood_back_tech_stack} />
        <CustomLink href="https://efood.onrender.com/" />
      </CustomSection>
    </CustomMotionDiv>
  );
};

export default SecondProjectSection;
