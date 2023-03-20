import React from "react";
import { DPIcongitNav, DPIconLinkedin, DPIconTwitter } from "../assets/svgs";
import { socialLinks } from "../utils";

const Socials = () => {
  return (
    <div className="bg-transparent flex flex-col gap-5 fixed top-[60%] left-3 lg:left-10 z-10">
      {socialLinks?.map(({ icon, to }, idx) => {
        return (
          <a key={idx} href={to}>
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
