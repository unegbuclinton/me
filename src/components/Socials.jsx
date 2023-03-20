import React from "react";
import { DPIcongitNav, DPIconLinkedin, DPIconTwitter } from "../assets/svgs";

const Socials = () => {
  const socialLinks = [
    { icon: <DPIcongitNav />, to: "https://github.com/unegbuclinton" },
    { icon: <DPIconLinkedin />, to: "https://linkedin.com/in/clinton-unegbu" },
    { icon: <DPIconTwitter />, to: "https://twitter.com/_klintonunegbu" },
  ];
  return (
    <div className="bg-transparent flex flex-col gap-5 fixed top-[60%] left-3 lg:left-10 z-10">
      {socialLinks?.map(({ icon, to }, idx) => {
        return (
          <a
            className="hover:translate-x-1 hover:shadow-2xl transition-all"
            key={idx}
            href={to}
          >
            {icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
