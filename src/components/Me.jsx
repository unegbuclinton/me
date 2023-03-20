import React from "react";
import "./comp.css";
import me from "../assets/images/me.png";

const Me = () => {
  return (
    <div id="about-me" className="mt-16">
      <h1 className="font-extrabold text-lg lg:text-3xl text-center">
        About Me
      </h1>
      <div className="flex justify-center pt-8 lg:pt-20 flex-1">
        <div className="about-img-container">
          <img src={me} alt="" className="about-me-img" />
        </div>
      </div>
      <p className="text-center w-full lg:w-[80%] my-0 mx-auto lg:text-xl">
        I started my tech journey in 2020 where I joined a small team of
        community learning about the web, that fueled my interest about the web
        and it's superpowers. <br /> Fast forward to today i have had the
        opportunity to work in great teams like{" "}
        <a className="metag" href="https://www.curacel.co/">
          Curacel
        </a>
        ,{" "}
        <a className="metag" href="https://www.biggorillaapps.com/">
          Biggorrillapps
        </a>
        ,{" "}
        <a className="metag" href="https://zuri.team/">
          zuri
        </a>{" "}
        My goal these days is building products for the digital world with
        quality, and provide unique digital experienece to users
      </p>

      <h3 className="font-semibold text-center my-4">
        Here are few technologies i have worked with recently:
      </h3>
      <ul className=" list">
        <li>Javascript(ES6)</li>
        <li>React</li>
        <li>NextJs</li>
        <li>NodeJs</li>
        <li>Redux toolKit</li>
        <li>Tailwind</li>
      </ul>
      <div className="w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16" />
    </div>
  );
};

export default Me;
