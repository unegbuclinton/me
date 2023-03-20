import React from "react";
import { DPIcongitNav, DPIconLinkedin, DPIconTwitter } from "../assets/svgs";

const Socials = () => {
  return (
    <div className="bg-transparent flex flex-col gap-5 fixed top-[60%] left-3 lg:left-10 z-[5]">
      <a href="https://github.com/unegbuclinton">
        <DPIcongitNav />
      </a>
      <a href="https://linkedin.com/in/clinton-unegbu">
        <DPIconLinkedin />
      </a>
      <a href="https://twitter.com/_klintonunegbu">
        <DPIconTwitter />
      </a>
    </div>
  );
};

export default Socials;
