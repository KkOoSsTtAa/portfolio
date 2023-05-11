import React from "react";
import { SocialIcon } from "react-social-icons";
import { links } from "~/constants";

const CustomSocialIconsLinks = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {links.map((link) => (
        <SocialIcon
          key={link}
          url={link}
          className="text-myblack"
          bgColor="#2F2F2F"
          style={{ height: 60, width: 60 }}
          target="_blank"
          rel="noopener noreferrer"
        />
      ))}
    </div>
  );
};

export default CustomSocialIconsLinks;
