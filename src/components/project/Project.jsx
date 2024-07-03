import React from "react";
import ProjectBox from "../../chip/ProjectBox";

const Project = () => {
  return (
    <div id="projects" className="container m-auto mt-16">
      {/* heading */}
      <div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Projects</h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>
      <div 
      data-aos="fade-up"
       className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my projects.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[100%] sm:w-fit mt-5">
    <div className="card-box grid grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1">
           <ProjectBox />
        </div>
      </div>
    </div>
  );
};

export default Project;
