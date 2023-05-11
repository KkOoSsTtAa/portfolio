import { motion } from "framer-motion";
import React from "react";
import { workHeading, workText1, workText2 } from "~/data";
import { fahkwang, anton, fahkwang700 } from "~/fonts";

const WorkSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section className="container px-5">
        <div
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="mb-32 mt-20 text-center text-5xl text-myyellow"
        >
          {workHeading}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-sm text-myblack"
        >
          {workText1}
        </div>
        <div
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-sm text-myblack"
        >
          {workText2}
        </div>
      </section>
    </motion.div>
  );
};

export default WorkSection;
