import { motion } from "framer-motion";
import React from "react";
import useWindowSize from "~/hooks/useWindowSize";

type BackgroundCirclesProps = {
  inView: {
    inView0: boolean;
    inView1: boolean;
    inView2: boolean;
    inView3: boolean;
    inView4: boolean;
    inView5: boolean;
  };
};

const BackgroundCircles = ({
  inView: { inView1, inView2, inView3, inView4, inView5 },
}: BackgroundCirclesProps) => {
  const { width } = useWindowSize();

  const style0 = {
    left: "-25%",
    top: "80%",
    height: "50vmax",
    width: "50vmax",
  };

  const style1 = {
    left: "50%",
    top: "95%",
    height: "25vmax",
    width: "25vmax",
    translateX: "-50%",
  };

  const style2 =
    width && width > 1024
      ? {
          left: "50%",
          top: "-40%",
          height: "45vmax",
          width: "45vmax",
          translateX: "-50%",
        }
      : {
          left: "50%",
          top: "-15%",
          height: "45vmax",
          width: "45vmax",
          translateX: "-50%",
        };

  const style34 =
    width && width > 1024
      ? {
          left: "50%",
          top: "-50%",
          height: "35vmax",
          width: "35vmax",
          translateX: "-50%",
        }
      : {
          left: "50%",
          top: "-60%",
          height: "75vmax",
          width: "75vmax",
          translateX: "-50%",
        };

  const style5 = {
    left: "50%",
    top: "80%",
    height: "105vmax",
    width: "105vmax",
    translateX: "-50%",
  };

  return (
    <>
      <motion.div
        className="fixed rounded-full bg-myyellow"
        initial={{
          left: "50%",
          top: "-35vmax",
          height: "75vmax",
          width: "75vmax",
        }}
        animate={
          inView1
            ? {
                top: "-100vmax",
                height: "130vmax",
                width: "130vmax",
                translateX: "-50%",
              }
            : inView2 || inView3 || inView4 || inView5
            ? {
                top: "-100vmax",
                height: "130vmax",
                width: "130vmax",
                translateX: "-50%",
                translateY: "-50%",
              }
            : {}
        }
        transition={{
          ease: "linear",
          duration: 0.5,
        }}
      />
      <motion.div
        className="fixed rounded-full bg-myblack"
        initial={style0}
        animate={
          inView1
            ? style1
            : inView2
            ? style2
            : inView3 || inView4
            ? style34
            : inView5
            ? style5
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

export default BackgroundCircles;
