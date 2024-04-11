import React from "react";

import { contactHeading } from "@/data";
import {
  CustomH3,
  CustomMotionDiv,
  CustomSection,
  CustomSocialIconsLinks,
} from "@/components";

export const ContactSection = () => {
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
