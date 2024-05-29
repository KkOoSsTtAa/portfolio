import {
  ChipList,
  CustomH3,
  CustomMotionDiv,
  CustomParagraphs,
  CustomSection,
} from "@/components";
import {
  ABOUT_MY_SKILLS,
  HEADING_ABOUT,
  SKILLS,
  TEXT_ABOUT_1,
  TEXT_ABOUT_2,
} from "@/data";

export const AboutSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection centered>
        <CustomH3 variant="black" className="mb-5">
          {HEADING_ABOUT}
        </CustomH3>
        <CustomParagraphs text1={TEXT_ABOUT_1} text2={TEXT_ABOUT_2} />
        <ChipList title={ABOUT_MY_SKILLS} chips={SKILLS} />
      </CustomSection>
    </CustomMotionDiv>
  );
};
