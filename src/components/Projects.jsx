import React from "react";
import { CARDS_LIST } from "../utils/helper";
import Heading from "../common/Heading";
const Projects = () => {
  return (
    <div id="projects" className="bg-projects-bg bg-cover bg-center bg-no-repeat h-[902px] max-xl:h-full relative text-center px-5">
      <div className="container pt-24 max-xl:py-32 max-xl:max-w-[875px]">
        <div className="max-w-[540px] mx-auto relative max-sm:max-w-[320px]">
          <img
            src="./assets/text-black-border.webp"
            alt="border"
            className="absolute -top-7 left-[15%] max-xl:-top-8 max-md:-top-8 max-sm:max-w-[261px] max-sm:-top-5"
          />
          <Heading  text="Projects" headingClass="!text-black"
          />
        </div>
        <p className="text-center max-w-[532px] mx-auto text-dark-black text-base leading-6 font-normal pt-6 max-xl:pt-12 max-sm:pt-6 ">
          Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh
          egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna
          id nisl quis vestibulum rhoncus.
        </p>
        <div className="flex max-w-[1140px] pt-[53px] gap-y-6 max-lg:gap-6 w-full max-xl:justify-center mx-auto flex-wrap max-lg:gap-y-4 max-md:gap-y-2 max-lg:pt-12 max-md:pt-11 max-sm:pt-9">
          {CARDS_LIST.map((item, index) => (
            <div
              key={index}
              className={`w-3/12 flex max-xl:w-4/12 max-md:w-6/12 max-xl:justify-center max-xl:flex  `}
            >
              <div
                className={`max-w-[273px] hover:scale-125 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center max-md:hover:scale-110`}
              >
                <img
                  className={` w-full rounded-lg max-w-[273px]`}
                  src={item}
                  alt={item}
                />
                <div className="absolute min-h-[47px] flex justify-center items-center bg-gray-light transition-all backdrop-blur-[9px] duration-300 w-full group-hover:bottom-0 bottom-[-50%] shadow-project-two-box max-md:min-w-10">
                  <p className="text-white text-xl leading-custom-lg font-bold max-md:text-base">
                    Nubbies
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
          <button className="text-black text-base font-medium leading-custom-4xl transition-all ease-linear duration-200 hover:bg-black hover:text-white mx-auto py-[11px] border border-solid border-black rounded-full px-8 mt-10 max-lg:mt-8 max-md:mt-6 max-sm:mt-5">
            View All
          </button>
      </div>
    </div>
  );
};

export default Projects;
