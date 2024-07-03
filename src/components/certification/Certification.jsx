import React from "react";
import CertificationBox from "../../chip/CertificationBox";

const Certification = () => {
  return (
    <div id="certifications" className="container m-auto mt-16">
      {/* heading */}
      <div 
      data-aos="fade-up"
       className="relative mb-5">
        <h3 className="text-3xl font-black text-gray-400 sm:text-2xl">Certifications</h3>
        <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
      </div>
      <div 
      data-aos="fade-up"
       className="left flex-1 w-full">
        <p className="text-gray-700 font-medium w-[100%]">
          Here are some of my certifications.
        </p>
      </div>
      {/* card */}
      <div className="card-wrapper mx-auto w-[100%] sm:w-fit mt-5">
    <div className="card-box grid grid-cols-2 gap-5 md:grid-cols-2 sm:grid-cols-1">
          <CertificationBox />
        </div>
      </div>
    </div>
  );
};

export default Certification;
