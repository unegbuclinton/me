import React from "react";
import { DPIconGithub, DPIconLinkedin, DPIconTwitter } from "../assets/svgs";

const Socials = () => {
  return (
    <div className=" flex flex-col gap-5 fixed top-[35%] right-3 lg:right-10 z-50">
      <a href="https://github.com/unegbuclinton">
        <DPIconGithub />
      </a>
      <a href="linkedin.com/in/clinton-unegbu">
        <DPIconLinkedin />
      </a>
      <a href="https://twitter.com/_klintonunegbu">
        <DPIconTwitter />
      </a>
    </div>
  );
};

export default Socials;
