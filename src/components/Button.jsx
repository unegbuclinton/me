import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} p-2 text-sm font-semibold border dark:border-[#fbfbff] border-onyx hover:bg-onyx hover:text-flash-white rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
