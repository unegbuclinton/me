import React from "react";

const WorkTemplate = ({ works }) => {
  const { companyName, duration, duties } = works;
  return (
    <div>
      <h1 className="font-bold mb-2">{`Frontend Engineer @ ${companyName}`}</h1>
      <i className="">{duration}</i>
      <ul className="mt-2 list-[circle]">
        {duties?.map(({ tasks }, id) => {
          return (
            <li key={id} className="mb-3 list-circle">
              {tasks}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkTemplate;
