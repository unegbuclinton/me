import React, { useState } from "react";
import { DPIconClose, DPIconMenu } from "../assets/svgs";
import "./comp.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className=" flex justify-end pt-5">
      <div className="hidden w-full lg:flex justify-center items-center gap-6 text-onyx text-base font-bold pt-5 ">
        <p className="cursor-pointer">Work</p>
        <p className="cursor-pointer">About me</p>
        <p className="cursor-pointer">Contact Me</p>
        <button className="p-2 text-sm font-semibold border border-onyx rounded-lg">
          Resume
        </button>
      </div>
      <div className="z-20 " onClick={toggleMenu}>
        {open ? <DPIconMenu /> : <DPIconClose />}
      </div>
      <div
        className={`${
          open ? "no-slides" : "slides"
        } fixed h-screen w-[40%] top-0 right-0 bg-onyx z-10 `}
      ></div>
    </div>
  );
};

export default Nav;
