import Header from "~/components/Header";
import HomeSection from "~/components/HomeSection";
import { type NextPage } from "next";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import BackgroundCircles from "~/components/BackgroundCircles";
import AboutSection from "~/components/AboutSection";
import ContactSection from "~/components/ContactSection";
import WorkSection from "~/components/WorkSection";
import FirstProjectSection from "~/components/FirstProjectSection";
import SecondProjectSection from "~/components/SecondProjectSection";

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
        className={`h-screen w-screen min-w-[360px] snap-y snap-mandatory overflow-x-hidden transition-all duration-1000 ${
          inView3 ? "bg-mygreen" : inView4 ? "bg-myblue" : "bg-white"
        }`}
      >
        <Header navLinks={navLinks} />
        <div
          id="home"
          ref={ref0}
          className="relative z-10 flex h-screen snap-start items-center justify-center"
        >
          <HomeSection />
        </div>
        <div
          id="about"
          ref={ref1}
          className="relative z-10 flex h-screen snap-start items-center justify-center"
        >
          <AboutSection />
        </div>
        <div
          id="work"
          ref={ref2}
          className="relative z-10 flex h-screen snap-start items-center justify-center"
        >
          <WorkSection />
        </div>
        <div
          ref={ref3}
          className="relative z-10 flex h-screen snap-start items-center justify-center"
        >
          <FirstProjectSection />
        </div>
        <div
          ref={ref4}
          className="relative z-10 flex h-screen snap-start items-center justify-center"
        >
          <SecondProjectSection />
        </div>
        <div
          id="contact"
          ref={ref5}
          className="relative z-10 flex h-screen snap-start items-center justify-center"
        >
          <ContactSection />
        </div>
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
