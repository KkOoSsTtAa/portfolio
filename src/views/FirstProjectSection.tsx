import React from "react";
import { order_back_tech_stack, order_front_tech_stack } from "~/constants";
import {
  backendTechnologies,
  firstProjectHeading,
  firstProjectText1,
  firstProjectText2,
  frontendTechnologies,
} from "~/data";
import CustomLink from "../components/CustomLink";
import CustomH3 from "../components/CustomH3";
import CustomSection from "../components/CustomSection";
import CustomParagraphs from "../components/CustomParagraphs";
import CardList from "../components/CardList";
import CustomMotionDiv from "../components/CustomMotionDiv";

const FirstProjectSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <CustomH3 variant="white" className="mt-24">
          {firstProjectHeading}
        </CustomH3>
        <CustomParagraphs text1={firstProjectText1} text2={firstProjectText2} />
        <CardList title={frontendTechnologies} cards={order_front_tech_stack} />
        <CardList title={backendTechnologies} cards={order_back_tech_stack} />
        <CustomLink href="https://order-mu.vercel.app/" />
      </CustomSection>
    </CustomMotionDiv>
  );
};

export default FirstProjectSection;
