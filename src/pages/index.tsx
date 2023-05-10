import Header from "components/Header";
import HomeSection from "components/HomeSection";
import { type NextPage } from "next";
import Head from "next/head";
import { useInView } from "react-intersection-observer";

const Home: NextPage = () => {
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.51 });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.51 });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.51 });
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.51 });

  const navLinks = [
    {
      label: "home",
      inView: inView1,
    },
    {
      label: "about",
      inView: inView2,
    },
    {
      label: "work",
      inView: inView3,
    },
    {
      label: "contact",
      inView: inView4,
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
        className={`duration-600 h-screen w-screen min-w-[360px] snap-y snap-mandatory overflow-x-hidden transition-all ${
          inView1
            ? "bg-white"
            : inView2
            ? "bg-red-500"
            : inView3
            ? "bg-slate-500"
            : inView4
            ? "bg-blue-500"
            : "bg-green-500"
        }`}
      >
        <Header navLinks={navLinks} />
        <div
          id="home"
          ref={ref1}
          className="flex h-screen snap-start items-center justify-center"
        >
          <HomeSection />
        </div>
        <div
          id="about"
          ref={ref2}
          className="flex h-screen snap-start items-center justify-center text-5xl"
        >
          2
        </div>
        <div
          id="work"
          ref={ref3}
          className="flex h-screen snap-start items-center justify-center text-5xl"
        >
          3
        </div>
        <div
          id="contact"
          ref={ref4}
          className="flex h-screen snap-start items-center justify-center text-5xl"
        >
          4
        </div>
      </main>
    </>
  );
};

export default Home;
