import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { DPIconClose, DPIconMenu } from "../assets/svgs";
import "./comp.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  const controlNav = () => {
    if (window.scrollY >= 100) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  });

  const navLinks = [
    { title: "About me", to: "about-me" },
    { title: "My Experience", to: "experience" },
    { title: "Projects", to: "works" },
    { title: "Contact me", to: "contact-me" },
  ];
  const closeMenu = () => setOpen(false);
  return (
    <div
      className={` fixed top-0 w-full ${
        show ? "" : ""
      } flex justify-end bg-flash-white lg:pb-5 lg:pt-3 z-10`}
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
              className="cursor-pointer"
            >
              {title}
            </Link>
          );
        })}
        <button className="p-2 text-sm font-semibold border border-onyx rounded-lg">
          Resume
        </button>
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
          <button className="w-[85%] p-2 text-sm text-white font-semibold border border-white rounded-lg">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
