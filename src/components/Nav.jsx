import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { DPIconClose, DPIconMenu } from "../assets/svgs";
import { navLinks } from "../utils/utils";
import Button from "./Button";
import "./comp.css";
import pdfFile from "../document/resume.pdf";
import Switch from "./Switch";
import { useRef } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(false);
  const sideNavRef = useRef(null);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };
  const closeMenu = () => setOpen(false);
  const getPdf = () => {
    window.open(pdfFile);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      setOpen(false);
    }
  }
  return (
    <div
      className={` fixed top-0 w-full px-10 flex justify-end bg-flash-white dark:bg-dark dark:text-[#fbfbff] md:pb-5 lg:pt-3 z-10`}
    >
      <div className="hidden w-full md:flex justify-between items-center gap-6 text-onyx dark:text-[#fbfbff]  text-base font-bold pt-5 ">
        <Link
          data-aos="fade-right"
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          activeClass="border-b border-onyx"
          className="text-2xl text-onyx font-bold dark:text-[#fbfbff]"
          href="#"
        >
          CodeClown
        </Link>
        <div>
          {navLinks?.map(({ title, to, offset }, idx) => {
            return (
              <Link
                key={idx}
                to={to}
                spy={true}
                smooth={true}
                offset={offset}
                duration={500}
                activeClass="border-b-2 border-[#343A40]"
                className="cursor-pointer hover:border-b-2 md:ml-5 lg:ml-10 border-black transition-all"
              >
                {title}
              </Link>
            );
          })}
          <Button text={"Resume"} onClick={getPdf} className="ml-10" />
        </div>
      </div>
      <div
        className=" fixed bg-flash-white shadow-xxl rounded-[5px] top-10 left-6 z-20 md:hidden "
        onClick={toggleMenu}
      >
        {!open ? <DPIconMenu /> : <DPIconClose />}
      </div>
      <div
        className={`${
          open ? "slides" : "no-slides"
        } flex fixed h-screen w-[60%] top-0 right-0 bg-onyx z-[10] lg:hidden `}
      >
        <div
          ref={sideNavRef}
          className="w-full flex flex-col justify-center items-center"
        >
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
                activeClass="border-b-2 "
                className="text-center mb-5"
              >
                <p className="text-white -text-sm">{`0${idx + 1}.`}</p>
                <p className="text-white">{title}</p>
              </Link>
            );
          })}
          <Button
            text={"Resume"}
            onClick={getPdf}
            className="border-white text-white font-normal w-[80%] mb-10"
          />
          <div>
            <Switch
              onClick={() => setTheme((theme) => !theme)}
              text={theme ? "Dark" : "Light"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
