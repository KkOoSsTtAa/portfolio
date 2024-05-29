import { CustomH3, CustomMotionDiv, CustomSection } from "@/components";
import { SocialIcons } from "@/components/SocialIcons";
import { HEADING_CONTACT } from "@/data";

export const ContactSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <CustomH3 variant="black" className="-mt-10 mb-5">
          {HEADING_CONTACT}
        </CustomH3>
        <SocialIcons />
      </CustomSection>
    </CustomMotionDiv>
  );
};
