import React from "react";

type BackgroundCirclesProps = {
  inView: {
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
  return (
    <>
      <div
        className={`fixed left-1/2 right-[-80vw] top-[-45vmax] h-[80vmax] w-[80vmax] rounded-full bg-myyellow transition-all duration-700 ease-in-out ${
          inView1 ? "translate-x-[-50%]" : ""
        } ${inView2 ? "-translate-x-[30vh] -translate-y-[60vh]" : ""} ${
          inView3 || inView4 ? "-translate-x-[30vh] -translate-y-[90vh]" : ""
        } ${inView5 ? "-translate-x-[30vh] -translate-y-[50vh]" : ""}`}
      />
      <div
        className={`fixed -left-[30%] top-[80%] h-[60vmax] w-[60vmax] rounded-full bg-myblack transition-all duration-700 ease-in-out ${
          inView1
            ? "h-[40vmax] w-[40vmax] translate-x-[70%] translate-y-[30%] transform"
            : ""
        } ${
          inView2
            ? "h-[150vmax] w-[150vmax] -translate-y-[130%] translate-x-[0%] transform lg:-translate-y-[125%] xl:-translate-y-[120%] 2xl:-translate-y-[115%]"
            : ""
        } ${
          inView3 || inView4
            ? "translate-x-[40%] translate-y-[-180%] md:translate-x-[80%] lg:translate-y-[-160%] xl:translate-y-[-150%]"
            : ""
        } ${inView5 ? "translate-x-[20vh] translate-y-[5vh]" : ""}`}
      />
    </>
  );
};

export default BackgroundCircles;
