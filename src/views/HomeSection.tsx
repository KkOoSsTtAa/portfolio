import { CustomMotionDiv, CustomSection } from "@/components";
import { HEADING1, HEADING2 } from "@/data";
import { anton, fahkwang } from "@/fonts";
import { cn } from "@/lib/utils";

export const HomeSection = () => {
  return (
    <CustomMotionDiv>
      <CustomSection>
        <h1
          className={cn(
            "-mt-28 mb-5 max-w-[80%] text-5xl text-myBlack sm:mt-0 md:mb-10 md:max-w-[50%] lg:text-6xl xl:text-7xl",
            anton.className,
          )}
        >
          {HEADING1}
        </h1>
        <h2
          className={cn(
            "tracking-wide text-myBlack sm:w-3/4 sm:text-lg lg:text-xl xl:text-2xl",
            fahkwang.className,
          )}
        >
          {HEADING2}
        </h2>
      </CustomSection>
    </CustomMotionDiv>
  );
};
