import React from "react";

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
  inView: { inView0, inView1, inView2, inView3, inView4, inView5 },
}: BackgroundCirclesProps) => {
  const black0 = "left-[-25%] top-[80%] h-[50vmax] w-[50vmax]";
  const black1 =
    "left-[50%] top-[95%] h-[25vmax] w-[25vmax] translate-x-[-50%]";
  const black2 =
    "left-[50%] top-[-15%] h-[45vmax] w-[45vmax] translate-x-[-50%] lg:top-[-40%]";
  const black34 =
    "left-[50%] top-[-60%] h-[75vmax] w-[75vmax] translate-x-[-50%] lg:top-[-50%] lg:h-[35vmax] lg:w-[35vmax]";
  const black5 =
    "left-[50%] top-[80%] h-[105vmax] w-[105vmax] translate-x-[-50%]";

  return (
    <>
      <div
        className={`fixed left-[50%] top-[-35vmax] h-[75vmax] w-[75vmax] transform rounded-full bg-myyellow transition-all duration-700 ${
          inView1
            ? "top-[-100vmax] h-[130vmax] w-[130vmax] translate-x-[-50%]"
            : ""
        } ${
          inView2 || inView3 || inView4 || inView5
            ? "top-[-100vmax] h-[130vmax] w-[130vmax] translate-x-[-50%] translate-y-[-50%]"
            : ""
        } `}
      />
      <div
        className={`fixed transform rounded-full bg-myblack transition-all duration-700 ${
          inView0 ? black0 : ""
        } ${inView1 ? black1 : ""} ${inView2 ? black2 : ""} ${
          inView3 || inView4 ? black34 : ""
        } ${inView5 ? black5 : ""}`}
      />
    </>
  );
};

export default BackgroundCircles;
