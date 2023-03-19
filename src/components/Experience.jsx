import React from "react";
import { biggorilla, curacel, zuri, fiver } from "../utils";
import Tab from "./Tab";
import WorkTemplate from "./WorkTemplate";

const Experience = () => {
  const exp = [
    {
      title: "Biggorillaapps ",
      component: <WorkTemplate works={biggorilla} />,
    },
    { title: "Curacel ", component: <WorkTemplate works={curacel} /> },
    { title: "Zuri ", component: <WorkTemplate works={zuri} /> },
    { title: "Fiver ", component: <WorkTemplate works={fiver} /> },
  ];
  return (
    <div className="lg:px-24 max-w-[985px] my-0 mx-auto">
      <h1 className="font-extrabold text-lg lg:text-3xl text-center my-10">
        Experience
      </h1>
      <Tab tabs={exp} />
      <div className="w-full lg:w-[60%] border-b border-grey my-0 mx-auto pt-16" />
    </div>
  );
};

export default Experience;