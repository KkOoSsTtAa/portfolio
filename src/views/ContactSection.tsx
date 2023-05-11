import React from "react";
import CustomH3 from "../components/CustomH3";
import CustomSection from "../components/CustomSection";
import CustomMotionDiv from "../components/CustomMotionDiv";
import CustomSocialIconsLinks from "../components/CustomSocialIconsLinks";
import { contactHeading } from "~/data";

const AboutSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <CustomH3 variant="black" className="-mt-10 mb-5">
          {contactHeading}
        </CustomH3>
        <CustomSocialIconsLinks />
      </CustomSection>
    </CustomMotionDiv>
  );
};

export default AboutSection;
