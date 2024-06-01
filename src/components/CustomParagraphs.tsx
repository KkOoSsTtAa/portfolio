import { fahkwang, fahkwang700 } from "@/fonts";
import { cn } from "@/lib/utils";

type CustomParagraphsProps = {
  text1: string;
  text2?: string;
};

export const CustomParagraphs = ({ text1, text2 }: CustomParagraphsProps) => {
  return (
    <>
      <p
        className={cn(
          "max-w-[90%] text-xs text-myBlack md:max-w-[60%] md:text-sm lg:text-base 2xl:text-lg",
          fahkwang.className,
        )}
      >
        {text1}
      </p>
      {text2 && (
        <p
          className={cn(
            "mt-4 max-w-[90%] text-xs text-myBlack md:max-w-[60%] md:text-sm lg:text-base 2xl:text-lg",
            fahkwang700.className,
          )}
        >
          {text2}
        </p>
      )}
    </>
  );
};
