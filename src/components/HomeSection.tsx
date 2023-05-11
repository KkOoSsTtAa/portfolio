import { motion } from "framer-motion";
import React from "react";
import { heading1, heading2 } from "~/data";
import { fahkwang, anton } from "~/fonts";

const HomeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section className="container px-5">
        <h1
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="mb-5 text-5xl text-myblack"
        >
          {heading1}
        </h1>
        <h2
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="tracking-wide text-myblack"
        >
          {heading2}
        </h2>
      </section>
    </motion.div>
  );
};

export default HomeSection;
