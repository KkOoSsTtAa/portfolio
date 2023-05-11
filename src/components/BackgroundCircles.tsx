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
        } ${
          inView2 || inView3 || inView4
            ? "-translate-x-[30vh] -translate-y-[60vh]"
            : ""
        } ${inView5 ? "-translate-x-[30vh] -translate-y-[60vh]" : ""}`}
      />
      <div
        className={`fixed -left-[30%] top-[70%] h-[60vmax] w-[60vmax] rounded-full bg-myblack transition-all duration-700 ease-in-out ${
          inView1
            ? "h-[40vmax] w-[40vmax] translate-x-[70%] translate-y-[30%] transform"
            : ""
        } ${
          inView2
            ? "h-[90vmax] w-[90vmax] -translate-y-[110vmax] translate-x-[0vmax] transform sm:-translate-y-[100vmax] sm:translate-x-[26vmax] md:-translate-y-[105vmax] xl:-translate-y-[97vmax]"
            : ""
        } ${
          inView3 || inView4
            ? "translate-x-[20vmax] translate-y-[-105vmax] transform md:translate-x-[40vmax] md:translate-y-[-100vmax] lg:translate-x-[50vmax] lg:translate-y-[-90vmax] "
            : ""
        } ${inView5 ? "translate-x-[20vh] translate-y-[5vh]" : ""}`}
      />
    </>
  );
};

export default BackgroundCircles;
