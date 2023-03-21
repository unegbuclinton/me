import React from "react";

const MoreInfo = () => {
  return (
    <div className="hidden md:block fixed bottom-[105px] left-auto right-[20px] text-onyx w-[40px] z-10">
      <div className="relative flex flex-col items-center ">
        <a
          className="hang-email my-20px mx-auto p-[10px] text-base space-[0.1em]"
          href="mailto:unegbucinton5@gmail.com"
        >
          Unegbuclinton5@gmail.com
        </a>
      </div>
    </div>
  );
};

export default MoreInfo;
