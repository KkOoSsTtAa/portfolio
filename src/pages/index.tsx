import Header from "~/components/Header";
import HomeSection from "~/views/HomeSection";
import { type NextPage } from "next";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import BackgroundCircles from "~/components/BackgroundCircles";
import AboutSection from "~/views/AboutSection";
import ContactSection from "~/views/ContactSection";
import WorkSection from "~/views/WorkSection";
import FirstProjectSection from "~/views/FirstProjectSection";
import SecondProjectSection from "~/views/SecondProjectSection";
import SectionWrapper from "~/components/SectionWrapper";

const Home: NextPage = () => {
  const { ref: ref0, inView: inView0 } = useInView({ threshold: 0.51 });
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.51 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.51 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.51 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.51 });
  const { ref: ref5, inView: inView5 } = useInView({ threshold: 0.51 });

  const navLinks = [
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
  ];

  return (
    <>
      <Head>
        <title>Nemanja Kostadinović</title>
        <meta
          name="description"
          content="Nemanja Kostadinović | KkOoSsTtAa | web developer | personal portfolio"
        />
      </Head>
      <main
        className={`h-screen w-screen min-w-[360px] snap-y snap-mandatory overflow-x-hidden transition-all duration-1000 scrollbar-thin  scrollbar-thumb-myblack  ${
          inView3 ? "bg-mygreen" : inView4 ? "bg-myblue" : "bg-white"
        }`}
        style={{ height: "100dvh" }}
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
        {/* <SectionWrapper ref={ref4}>
          <SecondProjectSection />
        </SectionWrapper> */}
        <SectionWrapper id="contact" ref={ref5}>
          <ContactSection />
        </SectionWrapper>
      </main>
      <BackgroundCircles
        inView={{ inView0, inView1, inView2, inView3, inView4, inView5 }}
      />
    </>
  );
};

export default Home;
