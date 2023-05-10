import { motion } from "framer-motion";
import React from "react";
import { fahkwang, robotoMono700 } from "~/fonts";

const HomeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <section className="container px-5">
        <div
          style={{ fontFamily: `${robotoMono700.style.fontFamily}` }}
          className="mb-5 text-4xl tracking-tighter"
        >
          Frontend web developer
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="tracking-wide"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rem
          repudiandae sapiente repellat maxime ipsam vel reprehenderit! Minima,
          tempora possimus.
        </div>
      </section>
    </motion.div>
  );
};

export default HomeSection;
