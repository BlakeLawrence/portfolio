import React from "react";
import Css from "../assets/css.png";
import Github from "../assets/github.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import postgresql from "../assets/Postgresql.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#1982C4]">
            Skills
          </p>
          <p className="py-4 text-sm md:text-lg">
            These are some of the technologies I've worked with...
          </p>
        </div>
        {/* Logo cards - 4 columns down to 2 on mobile view */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Javascript}
              alt="javascript icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={ReactLogo}
              alt="react icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={html} alt="html icon" className="w-10 sm:w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Css} alt="css icon" className="w-10 sm:w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Tailwind}
              alt="tailwind icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Node}
              alt="node js icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">Node Js</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={postgresql}
              alt="postgresql icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Github}
              alt="html icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
