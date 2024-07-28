"use client";
import { useMemo } from "react";

import {
  CIRCLE_1_DEFAULT_STYLES,
  CIRCLE_1_IN_VIEW_1_STYLES,
  CIRCLE_1_IN_VIEW_REST_STYLES,
  CIRCLE_2_DEFAULT_STYLES,
  CIRCLE_2_IN_VIEW_1_STYLES,
  CIRCLE_2_IN_VIEW_2_1_STYLES,
  CIRCLE_2_IN_VIEW_2_2_STYLES,
  CIRCLE_2_IN_VIEW_3_AND_4_1_STYLES,
  CIRCLE_2_IN_VIEW_3_AND_4_2_STYLES,
  CIRCLE_2_IN_VIEW_5_STYLES,
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
    () =>
      width && width > 1024
        ? CIRCLE_2_IN_VIEW_2_1_STYLES
        : CIRCLE_2_IN_VIEW_2_2_STYLES,
    [width],
  );

  const circle_2_inView_3_and_4 = useMemo(
    () =>
      width && width > 1024
        ? CIRCLE_2_IN_VIEW_3_AND_4_1_STYLES
        : CIRCLE_2_IN_VIEW_3_AND_4_2_STYLES,
    [width],
  );

  return (
    <>
      <div
        className={cn(
          CIRCLE_1_DEFAULT_STYLES,
          duration,
          inView1
            ? CIRCLE_1_IN_VIEW_1_STYLES
            : inView2 || inView3 || inView4 || inView5
              ? CIRCLE_1_IN_VIEW_REST_STYLES
              : {},
        )}
      />
      <div
        className={cn(
          CIRCLE_2_DEFAULT_STYLES,
          duration,
          inView1
            ? CIRCLE_2_IN_VIEW_1_STYLES
            : inView2
              ? circle_2_inView_2
              : inView3 || inView4
                ? circle_2_inView_3_and_4
                : inView5
                  ? CIRCLE_2_IN_VIEW_5_STYLES
                  : {},
        )}
      />
    </>
  );
};
