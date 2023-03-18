import React from "react";
import "./comp.css";
import me from "../assets/images/me.png";

const Me = () => {
  return (
    <div className="mt-16">
      <h1 className="font-extrabold text-lg lg:text-3xl text-center">
        About Me
      </h1>
      <div className="flex justify-center pt-8 lg:pt-20 flex-1">
        <div className="about-img-container">
          <img src={me} alt="" className="about-me-img" />
        </div>
      </div>
      <p className="text-center w-full lg:w-[80%] my-0 mx-auto lg:text-xl">
        I am a Frontend developer with three years experience working with, web
        development technologies. I work with
        <span> JAVASCRIPT, React,NextJs, NodeJs,Vite,Redux </span> etc. Also
        comfortable using UI technologies, like FIGMA and it's plugins.
      </p>

      <div className="w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16" />
    </div>
  );
};

export default Me;
