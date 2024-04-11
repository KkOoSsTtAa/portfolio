import React from "react";

import { MailIcon, GithubIcon, LinkedInIcon } from "@/icons";

export const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <MailIcon />
      <GithubIcon />
      <LinkedInIcon />
    </div>
  );
};
