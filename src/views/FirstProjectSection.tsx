import React from "react";
import { order_back_tech_stack, order_front_tech_stack } from "@/constants";
import {
  backendTechnologies,
  firstProjectHeading,
  firstProjectText1,
  firstProjectText2,
  firstProjectUrl,
  frontendTechnologies,
} from "@/data";
import {
  CardList,
  CustomH3,
  CustomLink,
  CustomMotionDiv,
  CustomParagraphs,
  CustomSection,
} from "@/components";

export const FirstProjectSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection centered>
        <CustomH3 variant="white" className="mb-5 mt-24">
          {firstProjectHeading}
        </CustomH3>
        <CustomParagraphs text1={firstProjectText1} text2={firstProjectText2} />
        <CardList title={frontendTechnologies} cards={order_front_tech_stack} />
        <CardList title={backendTechnologies} cards={order_back_tech_stack} />
        <CustomLink href={firstProjectUrl} />
      </CustomSection>
    </CustomMotionDiv>
  );
};
