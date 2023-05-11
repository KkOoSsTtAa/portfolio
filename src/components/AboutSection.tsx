import { motion } from "framer-motion";
import React from "react";
import { fahkwang, anton, fahkwang700 } from "~/fonts";
import Card from "../components/Card";
import { skills } from "~/constants";
import { aboutHeading, aboutMySkills, aboutText1, aboutText2 } from "~/data";

const AboutSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
      }}
    >
      <section className="container px-5">
        <h3
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="mb-5 text-center text-5xl text-myblack"
        >
          {aboutHeading}
        </h3>
        <p
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-xs text-myblack"
        >
          {aboutText1}
        </p>
        <p
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs text-myblack"
        >
          {aboutText2}
        </p>
        <h4
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm"
        >
          {aboutMySkills}
        </h4>
        <div className="flex flex-wrap gap-[2px]">
          {skills.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
