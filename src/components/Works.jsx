import React from "react";
import "./comp.css";
import { projects } from "../utils/work";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
const Works = () => {
  return (
    <div id="works" className="my-16 lg:mx-auto lg:w-[80%]">
      <h1 className="font-extrabold text-lg lg:text-3xl text-center mb-5 lg:my-20">
        Some Things I’ve Built
      </h1>

      <div className="lg:mb-24">
        {projects?.map(
          ({ img, title, desc, technologies, repo, live }, idx) => {
            return (
              <div
                key={idx}
                className="wrapper hidden lg:flex gap-[12px] mb-24"
              >
                <div>
                  <h2 className="text-3xl font-extrabold py-2">{title}</h2>
                  <p>{desc}</p>
                  <p className="mt-5 font-semibold">{technologies}</p>
                  <div className="flex items-center gap-3 mt-2 mx-5">
                    {repo.length > 1 && (
                      <a
                        href={repo}
                        className="py-3 px-2 font-semibold hover:-translate-y-2 transition-all"
                      >
                        <AiFillGithub size={25} />
                      </a>
                    )}
                    <a
                      href={live}
                      className="font-semibold py-3 px-2 hover:-translate-y-2 transition-all"
                    >
                      <BsBoxArrowUpRight size={20} />
                    </a>
                  </div>
                </div>
                <div
                  data-aos="flip-left"
                  className="hidden lg:flex items-center work-img"
                >
                  <img src={img} alt="" />
                </div>
              </div>
            );
          }
        )}

        <div>
          {/* mobile view */}

          {projects?.map(({ img, title, desc, technologies, repo, live }) => (
            <div className="mb-4">
              <div
                data-aos="flip-left"
                className={` relative h-[250px] lg:hidden mobile-work__img`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
                <div className="absolute top-10 left-2 right-1 text-white">
                  <h2 className="text-lg font-semibold py-2">{title}</h2>
                  <p className="text-sm">{desc}</p>
                  <p className="mt-5 font-medium">{technologies}</p>
                  <div className="flex mt-4 text-sm">
                    <a
                      href={live}
                      className="py-1 px-2  lg:border-onyx font-semibold"
                    >
                      <BsBoxArrowUpRight />
                    </a>
                    <a
                      href={repo}
                      className="flex items-center gap-2 font-semibold py-1 px-2 lg:border-onyx "
                    >
                      <span>
                        <AiFillGithub />
                      </span>
                      {/* Github */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-3 font-medium text-sm lg:mt-10 cursor-pointer hover:underline">
        View the archives
      </p>
    </div>
  );
};

export default Works;
