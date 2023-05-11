import { motion } from "framer-motion";
import React from "react";
import { fahkwang, anton, fahkwang700 } from "~/fonts";
import Card from "./Card";
import { order_back_tech_stack, order_front_tech_stack } from "~/constants";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

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
          <span className="text-myblack">project</span> order
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="text-xs tracking-wide text-myblack"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias rem
          repudiandae sapiente repellat maxime ipsam vel reprehenderit! Minima,
          tempora possimus. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </div>
        <div
          style={{ fontFamily: `${fahkwang700.style.fontFamily}` }}
          className="mt-4 text-xs tracking-wide text-myblack"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm tracking-wide"
        >
          Frontend tech stack:
        </div>
        <div className="flex flex-wrap gap-[2px]">
          {order_front_tech_stack.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
        <div
          style={{ fontFamily: `${fahkwang.style.fontFamily}` }}
          className="mb-1 mt-4 text-sm tracking-wide"
        >
          Backend tech stack:
        </div>
        <div className="flex flex-wrap gap-[2px]">
          {order_back_tech_stack.map((skill) => (
            <Card key={skill}>{skill}</Card>
          ))}
        </div>
        <a
          href="https://order-mu.vercel.app/"
          className="mt-4 flex flex-col items-center justify-center gap-1"
          target="_blank"
        >
          <SocialIcon
            bgColor="white"
            style={{ width: "40px", height: "40px" }}
          />
          <div className="text-white">Visit</div>
        </a>
      </section>
    </motion.div>
  );
};

export default FirstProjectSection;
