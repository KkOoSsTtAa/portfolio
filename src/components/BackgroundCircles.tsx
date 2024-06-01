"use client";
import { useMemo } from "react";

import {
  circle_1_inView_1,
  circle_1_inView_rest,
  circle_2_inView_1,
  circle_2_inView_2_1,
  circle_2_inView_2_2,
  circle_2_inView_3_and_4_1,
  circle_2_inView_3_and_4_2,
  circle_2_inView_5,
} from "@/constants";
import useWindowSize from "@/hooks/useWindowSize";
import { cn } from "@/lib/utils";

type BackgroundCirclesProps = {
  inView0: boolean;
  inView1: boolean;
  inView2: boolean;
  inView3: boolean;
  inView4: boolean;
  inView5: boolean;
};

const duration = "duration-500";

export const BackgroundCircles = ({
  inView1,
  inView2,
  inView3,
  inView4,
  inView5,
}: BackgroundCirclesProps) => {
  const { width } = useWindowSize();

  const circle_2_inView_2 = useMemo(
    () => (width && width > 1024 ? circle_2_inView_2_1 : circle_2_inView_2_2),
    [width],
  );

  const circle_2_inView_3_and_4 = useMemo(
    () =>
      width && width > 1024
        ? circle_2_inView_3_and_4_1
        : circle_2_inView_3_and_4_2,
    [width],
  );

  return (
    <>
      <div
        className={cn(
          "fixed left-[50%] top-[-35vmax] h-[75vmax] w-[75vmax] rounded-full bg-myYellow transition-all ease-linear",
          duration,
          inView1
            ? circle_1_inView_1
            : inView2 || inView3 || inView4 || inView5
              ? circle_1_inView_rest
              : {},
        )}
      />
      <div
        className={cn(
          "fixed left-[-25%] top-[80%] h-[50vmax] w-[50vmax] rounded-full bg-myBlack transition-all ease-linear",
          duration,
          inView1
            ? circle_2_inView_1
            : inView2
              ? circle_2_inView_2
              : inView3 || inView4
                ? circle_2_inView_3_and_4
                : inView5
                  ? circle_2_inView_5
                  : {},
        )}
      />
    </>
  );
};
