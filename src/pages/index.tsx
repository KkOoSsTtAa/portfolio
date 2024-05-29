import { type NextPage } from "next";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

import { BackgroundCircles, Header, SectionWrapper } from "@/components";
import { META_DESCRIPTION, TITLE } from "@/data";
import { cn } from "@/lib/utils";
import {
  AboutSection,
  ContactSection,
  FirstProjectSection,
  HomeSection,
  WorkSection,
} from "@/views";
import { useMemo } from "react";

const threshold = 0.51;

const Home: NextPage = () => {
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
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
      </Head>
      <main
        className={cn(
          "h-screen w-screen min-w-[360px] snap-y snap-mandatory overflow-x-hidden transition-all duration-1000 scrollbar-thin  scrollbar-thumb-myBlack",
          inView3 ? "bg-myGreen" : inView4 ? "bg-myBlue" : "bg-white",
        )}
      >
        <Header navLinks={navLinks} />
        <SectionWrapper id="home" ref={ref0}>
          <HomeSection />
        </SectionWrapper>
        <SectionWrapper id="about" ref={ref1}>
          <AboutSection />
        </SectionWrapper>
        <SectionWrapper id="work" ref={ref2}>
          <WorkSection />
        </SectionWrapper>
        <SectionWrapper ref={ref3}>
          <FirstProjectSection />
        </SectionWrapper>
        <SectionWrapper id="contact" ref={ref5}>
          <ContactSection />
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

export default Home;
