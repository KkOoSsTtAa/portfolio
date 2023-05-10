import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { links } from "~/constants";
import { anton } from "~/fonts";

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
          className="mb-10 text-center text-5xl text-myblack"
        >
          contact
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          {links.map((link) => (
            <SocialIcon
              key={link}
              url={link}
              className="text-myblack"
              bgColor="#2F2F2F"
              style={{ height: 60, width: 60 }}
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default AboutSection;
