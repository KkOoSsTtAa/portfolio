import { motion } from "framer-motion";
import React from "react";
import { fahkwang, anton, fahkwang700 } from "~/fonts";
import Card from "./Card";
import { skills } from "~/constants";

const AboutSection = () => {
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
          style={{ fontFamily: `${anton.style.fontFamily}` }}
          className="mb-5 text-center text-5xl text-myblack"
        >
          about
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-xs tracking-wide text-myblack"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rem
          repudiandae sapiente repellat maxime ipsam vel reprehenderit! Minima,
          tempora possimus. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Alias rem repudiandae sapiente repellat maxime ipsam vel
          reprehenderit! Minima, tempora possimus.
        </div>
        <div
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs tracking-wide text-myblack"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rem
          repudiandae sapiente repellat maxime ipsam vel reprehenderit!
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm tracking-wide"
        >
          My skills
        </div>
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
