import React, { useState } from "react";

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="flex flex-col lg:flex-row">
      <div className=" w-full overflow-auto flex mb-10 lg:mb-0 lg:block lg:border-l border-grey mr-5">
        {tabs?.map((tab, index) => (
          <div key={index}>
            <button
              //   active={activeTab === index}
              className={` ${
                activeTab === index ? "active-tab-button" : "tab-button"
              }`}
              onClick={() => {
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
