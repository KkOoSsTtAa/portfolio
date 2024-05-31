"use client";
import { ReactNode, Ref, RefObject, forwardRef } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  ref: RefObject<HTMLDivElement>;
  id?: string;
};

export const SectionWrapper = forwardRef(function SectionWrapper(
  { children, id }: SectionWrapperProps,
  ref: Ref<HTMLDivElement>,
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
