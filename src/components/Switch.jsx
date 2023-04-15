import React from "react";

const Switch = ({ onClick, text }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="relative inline-block w-10 mr-2 align-middle select-none ease-in"
      >
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-dark border-4 appearance-none cursor-pointer"
        />
        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-dark cursor-pointer"></label>
      </div>
      <label className="text-base font-semibold dark:text-dark text-white">
        {text}
      </label>
    </>
  );
};

export default Switch;
