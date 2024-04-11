import React, { forwardRef } from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
  id?: string;
};

export const SectionWrapper = forwardRef(function SectionWrapper(
  { children, id }: SectionWrapperProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div
      id={id}
      ref={ref}
      className="relative z-10 flex h-screen snap-start items-center justify-center"
    >
      {children}
    </div>
  );
});
