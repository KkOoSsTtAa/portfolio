"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

import {
  INITIAL_STYLE,
  IN_VIEW_1_ANIMATE,
  IN_VIEW_REST_ANIMATE,
  STYLE_0,
  STYLE_1,
  STYLE_2_1,
  STYLE_2_2,
  STYLE_3_AND_4_1,
  STYLE_3_AND_4_2,
  STYLE_5,
} from "@/constants";
import useWindowSize from "@/hooks/useWindowSize";

type BackgroundCirclesProps = {
  inView0: boolean;
  inView1: boolean;
  inView2: boolean;
  inView3: boolean;
  inView4: boolean;
  inView5: boolean;
};

export const BackgroundCircles = ({
  inView1,
  inView2,
  inView3,
  inView4,
  inView5,
}: BackgroundCirclesProps) => {
  const { width } = useWindowSize();

  const STYLE_2 = useMemo(
    () => (width && width > 1024 ? STYLE_2_1 : STYLE_2_2),
    [width],
  );

  const STYLE_3_AND_4 = useMemo(
    () => (width && width > 1024 ? STYLE_3_AND_4_1 : STYLE_3_AND_4_2),
    [width],
  );

  return (
    <>
      <motion.div
        className="fixed rounded-full bg-myYellow"
        initial={INITIAL_STYLE}
        animate={
          inView1
            ? IN_VIEW_1_ANIMATE
            : inView2 || inView3 || inView4 || inView5
              ? IN_VIEW_REST_ANIMATE
              : {}
        }
        transition={{
          ease: "linear",
          duration: 0.5,
        }}
      />
      <motion.div
        className="fixed rounded-full bg-myBlack"
        initial={STYLE_0}
        animate={
          inView1
            ? STYLE_1
            : inView2
              ? STYLE_2
              : inView3 || inView4
                ? STYLE_3_AND_4
                : inView5
                  ? STYLE_5
                  : {}
        }
        transition={{
          ease: "linear",
          duration: 0.5,
        }}
      />
    </>
  );
};
