import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { DPIconClose, DPIconMenu } from "../assets/svgs";
import { navLinks } from "../utils";
import Button from "./Button";
import "./comp.css";
import pdfFile from "../document/resume.pdf";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const closeMenu = () => setOpen(false);

  const getPdf = () => {
    window.open(pdfFile);
  };
  return (
    <div
      className={` fixed top-0 w-full  flex justify-end bg-flash-white lg:pb-5 lg:pt-3 z-10`}
    >
      <div className="hidden w-full lg:flex justify-center items-center gap-6 text-onyx text-base font-bold pt-5 ">
        {navLinks?.map(({ title, to }, idx) => {
          return (
            <Link
              key={idx}
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer hover:border-b-2 border-black transition-all"
            >
              {title}
            </Link>
          );
        })}
        <Button text={"Resume"} onClick={getPdf} />
      </div>
      <div
        className=" fixed bg-flash-white shadow-xxl rounded-[5px] top-10 left-6 z-20 md:hidden "
        onClick={toggleMenu}
      >
        {open ? <DPIconClose /> : <DPIconMenu />}
      </div>
      <div
        className={`${
          open ? "no-slides" : "slides"
        } flex fixed h-screen w-[60%] top-0 right-0 bg-onyx z-[10] lg:hidden `}
      >
        <div className="w-full flex flex-col justify-center items-center">
          {navLinks?.map(({ title, to }, idx) => {
            return (
              <Link
                key={idx}
                to={to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={closeMenu}
                className="text-center mb-3"
              >
                <p className="text-white -text-sm">{`0${idx + 1}.`}</p>
                <p className="text-white pb-4">{title}</p>
              </Link>
            );
          })}
          <Button
            text={"Resume"}
            onClick={getPdf}
            className="border-white text-white font-normal w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
