import { motion } from "framer-motion";
import React from "react";
import { fahkwang, anton, fahkwang700 } from "~/fonts";
import Card from "./Card";
import { order_back_tech_stack, order_front_tech_stack } from "~/constants";
import {
  backendTechnologies,
  firstProjectHeading,
  firstProjectText1,
  firstProjectText2,
  frontendTechnologies,
} from "~/data";
import CustomLink from "./CustomLink";

const FirstProjectSection = () => {
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
          className="mb-5 mt-24 text-center text-5xl text-white"
        >
          <span className="text-black">project</span> {firstProjectHeading}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-xs text-myblack"
        >
          {firstProjectText1}
        </div>
        <div
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs text-myblack"
        >
          {firstProjectText2}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm"
        >
          {frontendTechnologies}
        </div>
        <div className="flex flex-wrap gap-[2px]">
          {order_front_tech_stack.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm"
        >
          {backendTechnologies}
        </div>
        <div className="flex flex-wrap gap-[2px]">
          {order_back_tech_stack.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
        <CustomLink href="https://order-mu.vercel.app/" />
      </section>
    </motion.div>
  );
};

export default FirstProjectSection;
