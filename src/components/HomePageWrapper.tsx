"use client";
import { ReactNode, useMemo } from "react";
import { useInView } from "react-intersection-observer";

import { BackgroundCircles, Header, SectionWrapper } from "@/components";
import { cn } from "@/lib/utils";

const threshold = 0.51;

// components sent via props can still be server components
type Props = {
  homeSection: ReactNode;
  aboutSection: ReactNode;
  workSection: ReactNode;
  firstProjectSection: ReactNode;
  contactSection: ReactNode;
};

const HomePageWrapper = ({
  homeSection,
  aboutSection,
  workSection,
  firstProjectSection,
  contactSection,
}: Props) => {
  const { ref: ref0, inView: inView0 } = useInView({ threshold });
  const { ref: ref1, inView: inView1 } = useInView({ threshold });
  const { ref: ref2, inView: inView2 } = useInView({ threshold });
  const { ref: ref3, inView: inView3 } = useInView({ threshold });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref: ref4, inView: inView4 } = useInView({ threshold });
  const { ref: ref5, inView: inView5 } = useInView({ threshold });

  const navLinks = useMemo(
    () => [
      {
        label: "home",
        inView: inView0,
      },
      {
        label: "about",
        inView: inView1,
      },
      {
        label: "work",
        inView: inView2,
      },
      {
        inView: inView3,
      },
      {
        inView: inView4,
      },
      {
        label: "contact",
        inView: inView5,
      },
    ],
    [inView0, inView1, inView2, inView3, inView4, inView5],
  );

  return (
    <>
      <main
        className={cn(
          "h-screen w-screen min-w-[360px] snap-y snap-mandatory overflow-x-hidden transition-all duration-1000 scrollbar-thin  scrollbar-thumb-myBlack",
          inView3 ? "bg-myGreen" : inView4 ? "bg-myBlue" : "bg-white",
        )}
      >
        <Header navLinks={navLinks} />
        <SectionWrapper id="home" ref={ref0}>
          {homeSection}
        </SectionWrapper>
        <SectionWrapper id="about" ref={ref1}>
          {aboutSection}
        </SectionWrapper>
        <SectionWrapper id="work" ref={ref2}>
          {workSection}
        </SectionWrapper>
        <SectionWrapper ref={ref3}>{firstProjectSection}</SectionWrapper>
        <SectionWrapper id="contact" ref={ref5}>
          {contactSection}
        </SectionWrapper>
      </main>
      <BackgroundCircles
        inView0={inView0}
        inView1={inView1}
        inView2={inView2}
        inView3={inView3}
        inView4={inView4}
        inView5={inView5}
      />
    </>
  );
};

export default HomePageWrapper;
