import {
  CardList,
  CustomH3,
  CustomMotionDiv,
  CustomParagraphs,
  CustomSection,
} from "@/components";
import {
  BACKEND_TECH,
  FRONTEND_TECH,
  HEADING_FIRST_PROJ,
  ORDER_PROJ_BACK_TECH_STACK,
  ORDER_PROJ_FRONT_TECH_STACK,
  TEXT_FIRST_PROJ_1,
  TEXT_FIRST_PROJ_2,
} from "@/data";

export const FirstProjectSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection centered>
        <CustomH3 variant="white" className="mb-5 mt-24">
          {HEADING_FIRST_PROJ}
        </CustomH3>
        <CustomParagraphs text1={TEXT_FIRST_PROJ_1} text2={TEXT_FIRST_PROJ_2} />
        <CardList title={FRONTEND_TECH} cards={ORDER_PROJ_FRONT_TECH_STACK} />
        <CardList title={BACKEND_TECH} cards={ORDER_PROJ_BACK_TECH_STACK} />
        {/* <CustomLink href={URL_FIRST_PROJ} /> */}
        <span className="mt-5 max-w-md text-center text-xs">
          Link not available - I was using Planetscale and since their
          cancelation of free plan, I didn't have time to migrate the data.
        </span>
      </CustomSection>
    </CustomMotionDiv>
  );
};
