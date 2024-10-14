import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import {
  SiJavascript,
  SiPython,
  SiMysql,
  SiSpringboot,
  SiLinux,
  SiGithub,
} from "react-icons/si";
import { FaReact ,FaJava, FaPhp} from "react-icons/fa";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[100%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="progress flex items-center h-[100%] justify-end md:justify-center"
            >
              <div className=" flex flex-col gap-6  w-3/4  my-5 md:w-[90%]">
                
                <ProgressBar logo={<FaJava />} name={"JAVA"} value={90} />
                <ProgressBar logo={<SiPython />} name={"PYTHON"} value={80} />
                <ProgressBar logo={<SiJavascript />} name={"JAVASCRIPT"} value={90} />
                <ProgressBar logo={<FaPhp />} name={"PHP"} value={70} />
                <ProgressBar logo={<SiMysql />} name={"MYSQL"} value={85} />
                </div>
            </div>
          </div>
          {/* right box */}
          <div className="right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<FaReact />}
                black={"white"}
                white={"black"}
                skill={"React Js"}
              />
              <SkillBox
                logo={<SiGithub />}
                black={"white"}
                white={"black"}
                skill={"GitHub"}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiSpringboot />}
                black={"black"}
                white={"white"}
                skill={"Spring Boot"}
              />
              <SkillBox
                className=""
                logo={
                  <SiLinux/>
                }
                black={"black"}
                white={"white"}
                skill={"Linux"}
              />
             
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Skills;
