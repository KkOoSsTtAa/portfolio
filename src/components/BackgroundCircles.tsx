import React from "react";

type BackgroundCirclesProps = {
  inView0: boolean;
  inView1: boolean;
  inView2: boolean;
  inView3: boolean;
  inView4: boolean;
  inView5: boolean;
};

const BackgroundCircles = ({
  inView0,
  inView1,
  inView2,
  inView3,
  inView4,
  inView5,
}: BackgroundCirclesProps) => {
  return (
    <>
      <div
        className={`fixed right-[-80vw] top-[-40vh] h-[80vh] w-[80vh] rounded-full bg-myyellow transition-all duration-700 ease-in-out ${
          inView1 ? "-translate-x-[30vh]" : ""
        } ${
          inView2 || inView3 || inView4
            ? "-translate-x-[30vh] -translate-y-[60vh]"
            : ""
        } ${inView5 ? "-translate-x-[30vh] -translate-y-[60vh]" : ""}`}
      />
      <div
        className={`fixed bottom-[-45vh] left-[-40vw] h-[60vh] w-[60vh] rounded-full bg-myblack transition-all duration-700 ease-in-out ${
          inView1 ? "translate-x-[20vh] translate-y-[20vh]" : ""
        } ${inView2 ? "-translate-y-[96vh] translate-x-[20vh]" : ""} ${
          inView3 || inView4 ? "-translate-y-[120vh] translate-x-[20vh]" : ""
        } ${inView5 ? "translate-x-[20vh] translate-y-[5vh]" : ""}`}
      />
    </>
  );
};

export default BackgroundCircles;
