import React from "react";
import {
  DPIconGit,
  DPIconGItMobile,
  DPIconPreview,
  DPIconPreviewMobile,
} from "../assets/svgs";
import img from "../assets/images/project1.png";
import "./comp.css";
const Works = () => {
  return (
    <div id="works" className="my-16 lg:mx-auto lg:w-[80%] text-onyx">
      <h1 className="font-extrabold text-lg lg:text-3xl text-center mb-5 lg:my-20">
        Some Things I’ve Built
      </h1>

      <div className="flex justify-around items-center lg:mb-24">
        <div className="hidden lg:block max-w-[600px]">
          <h2 className="text-3xl font-extrabold py-2">Scientific Calc</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-5 font-medium">React, Tailwind, Axios, Redux</p>
          <div className="flex gap-3 mt-2">
            <a
              href="#"
              className="py-3 px-2 font-semibold hover:-translate-y-2 transition-all"
            >
              <DPIconGit />
            </a>
            <a
              href="#"
              className="font-semibold py-3 px-2 hover:-translate-y-2 transition-all"
            >
              <DPIconPreview />
            </a>
          </div>
        </div>
        <div>
          <div
            data-aos="flip-left"
            className="hidden lg:flex items-center pl-10 work-img"
          >
            <img src={img} alt="" />
          </div>
          {/* mobile view */}
          <div>
            <div
              data-aos="flip-left"
              className={` relative h-[250px] lg:hidden mobile-work__img`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-10 left-2 right-1 text-white">
                <h2 className="text-lg font-semibold py-2">Scientific Calc</h2>
                <p className="text-sm">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="mt-5 font-medium">
                  React, Tailwind, Axios, Redux
                </p>
                <div className="flex mt-4 text-sm">
                  <a
                    href="#"
                    className="py-1 px-2  lg:border-onyx font-semibold"
                  >
                    <DPIconPreviewMobile />
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold py-1 px-2 lg:border-onyx "
                  >
                    <span>
                      <DPIconGItMobile />
                    </span>
                    {/* Github */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center mt-3 font-medium text-sm lg:mt-10 cursor-pointer hover:underline">
        View the archives
      </p>
    </div>
  );
};

export default Works;
