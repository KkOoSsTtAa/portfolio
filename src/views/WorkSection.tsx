import { CustomH3, CustomParagraphs, CustomSection } from "@/components";
import { HEADING_WORK, TEXT_WORK_1, TEXT_WORK_2 } from "@/data";

export const WorkSection = () => {
  return (
    <CustomSection centered>
      <CustomH3 variant="yellow" className="mb-32 mt-24">
        {HEADING_WORK}
      </CustomH3>
      <CustomParagraphs text1={TEXT_WORK_1} text2={TEXT_WORK_2} />
    </CustomSection>
  );
};
