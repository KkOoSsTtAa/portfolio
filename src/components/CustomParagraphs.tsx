import React from "react";
import { fahkwang, fahkwang700 } from "~/fonts";

type CustomParagraphsProps = {
  text1: string;
  text2?: string;
};

const CustomParagraphs = (props: CustomParagraphsProps) => {
  return (
    <>
      <p
        style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
        className="text-xs text-myblack md:text-sm lg:text-base 2xl:text-lg"
      >
        {props.text1}
      </p>
      {props.text2 && (
        <p
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs text-myblack md:text-sm lg:text-base 2xl:text-lg"
        >
          {props.text2}
        </p>
      )}
    </>
  );
};

export default CustomParagraphs;
