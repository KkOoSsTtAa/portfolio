import React from "react";

type BackgroundCirclesProps = {
  inView1: boolean;
  inView2: boolean;
  inView3: boolean;
  inView4: boolean;
};

const BackgroundCircles = ({
  inView1,
  inView2,
  inView3,
  inView4,
}: BackgroundCirclesProps) => {
  return (
    <>
      <div
        className={`fixed right-[-80vw] top-[-40vh] h-[80vh] w-[80vh] rounded-full bg-myyellow transition-all duration-700 ease-in-out ${
          inView2 ? "-translate-x-[30vh]" : ""
        } ${inView3 ? "-translate-x-[30vh] -translate-y-[60vh]" : ""} ${
          inView4 ? "-translate-x-[30vh] -translate-y-[60vh]" : ""
        }`}
      />
      <div
        className={`fixed bottom-[-45vh] left-[-40vw] h-[60vh] w-[60vh] rounded-full bg-myblack transition-all duration-700 ease-in-out ${
          inView2 ? "translate-x-[20vh] translate-y-[20vh]" : ""
        } ${inView3 ? "-translate-y-[120vh] translate-x-[20vh]" : ""} ${
          inView4 ? "translate-x-[20vh] translate-y-[5vh]" : ""
        }`}
      />
    </>
  );
};

export default BackgroundCircles;
