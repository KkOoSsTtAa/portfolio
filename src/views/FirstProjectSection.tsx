import {
  ChipList,
  CustomH3,
  CustomParagraphs,
  CustomSection,
} from "@/components";
import {
  BACKEND_TECH,
  FRONTEND_TECH,
  HEADING_FIRST_PROJ,
  ORDER_PROJ_BACK_TECH_STACK,
  ORDER_PROJ_FRONT_TECH_STACK,
  ORDER_PROJ_LINK_EXPLANATION,
  TEXT_FIRST_PROJ_1,
  TEXT_FIRST_PROJ_2,
} from "@/data";

export const FirstProjectSection = () => {
  return (
    <CustomSection centered>
      <CustomH3 variant="white" className="mb-5 mt-24">
        {HEADING_FIRST_PROJ}
      </CustomH3>
      <CustomParagraphs text1={TEXT_FIRST_PROJ_1} text2={TEXT_FIRST_PROJ_2} />
      <ChipList title={FRONTEND_TECH} chips={ORDER_PROJ_FRONT_TECH_STACK} />
      <ChipList title={BACKEND_TECH} chips={ORDER_PROJ_BACK_TECH_STACK} />
      {/* <CustomLink href={URL_FIRST_PROJ} /> */}
      <span className="mt-5 max-w-md text-center text-xs">
        {ORDER_PROJ_LINK_EXPLANATION}
      </span>
    </CustomSection>
  );
};
