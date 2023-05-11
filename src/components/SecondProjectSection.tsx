import { motion } from "framer-motion";
import React from "react";
import { fahkwang, anton, fahkwang700 } from "~/fonts";
import Card from "./Card";
import { efood_back_tech_stack, efood_front_tech_stack } from "~/constants";
import {
  backendTechnologies,
  frontendTechnologies,
  secondProjectHeading,
  secondProjectText1,
  secondProjectText2,
} from "~/data";
import CustomLink from "./CustomLink";

const SecondProjectSection = () => {
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
          className="mb-5 mt-32 text-center text-5xl text-white"
        >
          <span className="text-black">project</span> {secondProjectHeading}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-xs tracking-wide text-myblack"
        >
          {secondProjectText1}
        </div>
        <div
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs tracking-wide text-myblack"
        >
          {secondProjectText2}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm tracking-wide"
        >
          {frontendTechnologies}
        </div>
        <div className="flex flex-wrap gap-[2px]">
          {efood_front_tech_stack.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm tracking-wide"
        >
          {backendTechnologies}
        </div>
        <div className="flex flex-wrap gap-[2px]">
          {efood_back_tech_stack.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
        <CustomLink href="https://efood.onrender.com/" />
      </section>
    </motion.div>
  );
};

export default SecondProjectSection;
