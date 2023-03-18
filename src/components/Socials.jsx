import React from "react";
import { DPIconGithub, DPIconLinkedin, DPIconTwitter } from "../assets/svgs";

const Socials = () => {
  return (
    <div className=" flex flex-col gap-5 fixed top-[35%] right-3 lg:right-10">
      <DPIconGithub />
      <DPIconLinkedin />
      <DPIconTwitter />
    </div>
  );
};

export default Socials;
