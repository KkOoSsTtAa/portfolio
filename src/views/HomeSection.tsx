import { CustomMotionDiv, CustomSection } from "@/components";
import { HEADING1, HEADING2 } from "@/data";
import { anton, fahkwang } from "@/fonts";

export const HomeSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <h1
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="-mt-28 mb-5 max-w-[80%] text-5xl text-myBlack sm:mt-0 md:mb-10 md:max-w-[50%] lg:text-6xl xl:text-7xl"
        >
          {HEADING1}
        </h1>
        <h2
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="tracking-wide text-myBlack sm:w-3/4 sm:text-lg lg:text-xl xl:text-2xl"
        >
          {HEADING2}
        </h2>
      </CustomSection>
    </CustomMotionDiv>
  );
};
