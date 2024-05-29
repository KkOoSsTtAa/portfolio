import { fahkwang, fahkwang700 } from "@/fonts";

type CustomParagraphsProps = {
  text1: string;
  text2?: string;
};

export const CustomParagraphs = ({ text1, text2 }: CustomParagraphsProps) => {
  return (
    <>
      <p
        style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
        className="text-xs text-myBlack md:max-w-[60%] md:text-sm lg:text-base 2xl:text-lg"
      >
        {text1}
      </p>
      {text2 && (
        <p
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs text-myBlack md:max-w-[60%] md:text-sm lg:text-base 2xl:text-lg"
        >
          {text2}
        </p>
      )}
    </>
  );
};
