import React, { useState } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="overflow-x-scroll lg:overflow-visible flex mb-10 lg:mb-0 lg:block lg:border-l border-grey mr-5 pb-3">
        {tabs?.map((tab, index) => (
          <div key={index}>
            <button
              className={` ${
                activeTab === index ? "active-tab-button" : "tab-button"
              } dark:text-[#fbfbff]`}
              onClick={() => {
                console.log("first");
                setActiveTab(index);
              }}
            >
              {tab.title}
            </button>
          </div>
        ))}
      </div>

      <div className="tab-content">
        {tabs && tabs[activeTab] && tabs[activeTab]?.component}
      </div>
    </div>
  );
};

export default Tab;
