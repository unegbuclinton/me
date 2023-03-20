import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <div id="contact-me" className="text-center max-w-[600px] my-0 mx-auto">
      <h3 className="font-semibold text-lg lg:text-3xl text-center mb-2 lg:my-5">
        What's Next?
      </h3>
      <h1 className="font-semibold text-3xl lg:text-xl">Get in Touch</h1>
      <p className="mt-3 mb-7 lg:mb-4">
        I’m currently available for new opportunities, my inbox is always open.
        Whether you have a question or open role, I’ll get back to you!
      </p>
      <a className=" p-2 text-sm font-semibold border border-onyx hover:bg-onyx hover:text-flash-white rounded-lg w-[60%] ">
        Drop a Message
      </a>
    </div>
  );
};

export default Contact;
