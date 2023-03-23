import React from "react";

const WorkTemplate = ({ works }) => {
  const { companyName, duration, duties, history } = works;
  return (
    <div>
      <h1 data-aos="fade-up" className="font-bold mb-2">
        {`Frontend Engineer @ ${companyName}`}
      </h1>
      <h2
        data-aos="fade-down"
        data-aos-duration="2500"
        className="font-medium text-sm mb-2"
      >
        {history}
      </h2>
      <i className="">{duration}</i>
      <ul className="mt-2 list-[circle]">
        {duties?.map(({ tasks, timing }, id) => {
          return (
            <li
              data-aos="fade-left"
              data-aos-duration={timing}
              key={id}
              className="mb-3 list-circle"
            >
              {tasks}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WorkTemplate;
