import React from "react";

import { contactHeading } from "@/data";
import { CustomH3, CustomMotionDiv, CustomSection } from "@/components";
import { SocialIcons } from "@/components/SocialIcons";

export const ContactSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <CustomH3 variant="black" className="-mt-10 mb-5">
          {contactHeading}
        </CustomH3>
        <SocialIcons />
      </CustomSection>
    </CustomMotionDiv>
  );
};
