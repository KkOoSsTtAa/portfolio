import { CustomH3, CustomSection, SocialIcons } from "@/components";
import { HEADING_CONTACT } from "@/data";

export const ContactSection = () => {
  return (
    <CustomSection>
      <CustomH3 variant="black" className="-mt-10 mb-5">
        {HEADING_CONTACT}
      </CustomH3>
      <SocialIcons />
    </CustomSection>
  );
};
