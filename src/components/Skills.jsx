import React from "react";
import Css from "../assets/css.png";
import Github from "../assets/github.png";
import Javascript from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactLogo from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import html from "../assets/html.png";
import postgresql from "../assets/Postgresql.png";
import typescript from "../assets/TS.png";
import jest from "../assets/jest.png";
import testing from "../assets/react-test.png";
import figma from "../assets/figma.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen bg-[#1c3144]  text-gray-300 pt-28 md:py-0"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-10 pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-[#1982C4]">
            Skills
          </p>
          <p className="py-4 text-sm md:text-lg">
            These are the technologies I've worked with...
          </p>
        </div>
        {/* Logo cards - 4 columns down to 2 on mobile view */}
        <div className=" w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4 mb-10">
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={ReactLogo}
              alt="react icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">React</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={typescript}
              alt="typescript icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">Typescript</p>
          </div>

          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={Tailwind}
              alt="tailwind icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img src={jest} alt="jest icon" className="w-10 sm:w-20 mx-auto" />
            <p className="my-4">Jest</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={testing}
              alt="react testing library icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">React Testing Library</p>
          </div>
          <div className="bg-[#213b52]  rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={Javascript}
              alt="javascript icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={Node}
              alt="node js icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">Node Js</p>
          </div>

          <div className="bg-[#213b52]  shadow-md rounded-md  border-[#1982C4] hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={postgresql}
              alt="postgresql icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">PostgreSQL</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img
              src={Github}
              alt="html icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4">GitHub</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img src={html} alt="html icon" className="w-10 sm:w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="bg-[#213b52] rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-2 duration-500">
            <img src={Css} alt="css icon" className="w-10 sm:w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="bg-[#213b52]  rounded-md shadow-md hover:shadow-md shadow-black hover:shadow-[#1982C4] hover:scale-110 pt-3 duration-500">
            <img
              src={figma}
              alt="figma icon"
              className="w-10 sm:w-20 mx-auto"
            />
            <p className="my-4 mt-6">Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
