import React, { ComponentProps } from "react";

type Props = ComponentProps<"svg"> & {
  href: string;
};

export const IconsSvgWrapper = (props: Props) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <svg
        className="fill-myBlack h-[60px] w-[60px] transition-all duration-300 ease-in-out hover:scale-105 hover:fill-black"
        {...props}
      />
    </a>
  );
};
