import React from "react";
import { DPIconGit } from "../assets/svgs";
import "./comp.css";
const Works = () => {
  return (
    <div className="mt-16 mx-auto w-[80%] text-onyx">
      <h1 className="font-extrabold text-lg lg:text-3xl text-center my-10">
        Some Things I’ve Built
      </h1>

      <div className="flex justify-around items-center mb-16 lg:mb-24">
        <div className="hidden lg:block max-w-[600px]">
          <h2 className="text-3xl font-extrabold py-2">Scientific Calc</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-3 mt-2">
            <button className="py-3 px-4 border border-onyx font-semibold">
              Preview
            </button>
            <button className="flex items-center gap-2 font-semibold py-3 px-4 border border-onyx ">
              <span>
                <DPIconGit />
              </span>
              Github
            </button>
          </div>
        </div>
        <div>
          <div className=" flex items-center pl-10 work-img">
            <div className=" lg:hidden z-10">
              <h2 className="text-2xl font-semibold py-2">Scientific Calc</h2>
              <p className="text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-3 mt-2 text-sm">
                <button className="py-1 px-4 border border-onyx font-semibold">
                  Preview
                </button>
                <button className="flex items-center gap-2 font-semibold py-1 px-4 border border-onyx ">
                  <span>
                    <DPIconGit />
                  </span>
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-around items-center mb-16 lg:mb-24 text-right">
        <div className="hidden lg:block max-w-[600px]">
          <h2 className="text-3xl font-extrabold py-2">Biggorilla Webpage</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://www.biggorillaapps.com/"
              className="py-3 px-4 border border-onyx font-semibold"
            >
              Preview
            </a>
            {/* <a className="flex items-center gap-2 font-semibold py-3 px-4 border border-onyx ">
              <span>
                <DPIconGit />
              </span>
              Github
            </a> */}
          </div>
        </div>
        <div>
          <div className=" flex items-center pr-10 work-img">
            <div className=" lg:hidden z-10 ">
              <h2 className="text-2xl font-semibold py-2">Scientific Calc</h2>
              <p className="text-sm">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex justify-end gap-3 mt-2 text-sm">
                <a
                  href="https://www.biggorillaapps.com/"
                  className="py-1 px-4 border border-onyx font-semibold"
                >
                  Preview
                </a>
                {/* <a className="flex items-center gap-2 font-semibold py-1 px-4 border border-onyx ">
                  <span>
                    <DPIconGit />
                  </span>
                  Github
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center font-semibold text-2xl lg:mt-10 cursor-pointer hover:underline">
        View the archives
      </p>
    </div>
  );
};

export default Works;
