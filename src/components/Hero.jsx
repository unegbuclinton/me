import React from "react";
import "./comp.css";
import me from "../assets/images/me.png";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <>
      <div className=" lg:flex items-center pb-6">
        <div className="flex justify-center pt-20 flex-1">
          <div className="img-container">
            <img src={me} alt="" className="me-img" />
          </div>
        </div>
        <div className="flex-1 lg:pt-20 ">
          <div className="text-center lg:text-left">
            <h1 className=" text-2xl mt-5 font-bold">HI,</h1>
            <h2 className=" text-2xl font-bold">I'm Clinton a</h2>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={["Frontend Developer", 1000, "UI Designer", 1500]}
              speed={50} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "24px", fontWeight: "900" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            {/* <h3 className=" text-2xl font-extrabold">Frontend Developer</h3> */}
            <p className=" my-5 lg:max-w-[400px]">
              I build products for the digital World with quality, and provide
              unique digital experienece to users.
            </p>
            <p className="font-semibold text-sm">Let's work together?</p>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <button className="p-2 text-sm font-semibold border border-onyx mt-3 rounded-lg">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16" />
    </>
  );
};

export default Hero;
