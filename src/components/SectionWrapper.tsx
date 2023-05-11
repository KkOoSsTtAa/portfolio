import React, { forwardRef } from "react";

type SectionWrapperProps = {
  children: React.ReactNode;
  ref: React.RefObject<HTMLDivElement>;
  id?: string;
};

const SectionWrapper = forwardRef(function SectionWrapper(
  props: SectionWrapperProps,
  ref: React.Ref<HTMLDivElement>
) {
  return (
    <div
      id={props.id}
      ref={ref}
      className="relative z-10 flex h-screen snap-start items-center justify-center"
    >
      {props.children}
    </div>
  );
});

export default SectionWrapper;
