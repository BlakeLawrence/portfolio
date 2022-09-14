import React from "react";
import projectCleanup from "../assets/projectcleanup.png";
import todo from "../assets/todo.png";
import squatify from "../assets/squatify.png";
import sourcery from "../assets/sourcery.png";

const Projects = () => {
  return (
    /* text container - heading and description */
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-[#1c3144] pt-1"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pl-12 sm:pl-0 pb-8">
          <p className=" text-2xl sm:text-4xl  font-bold inline border-b-4 text-gray-300 border-[#1982C4]">
            Projects
          </p>
          <p className="py-6 text-sm md:text-lg">
            Here are some of the projects I've worked on...
          </p>
        </div>

        {/* grid container - 2 columns down to 1 on mobile view*/}
        <div className="w-full items-center grid sm:grid-cols-2 gap-4 pb-20">
          {/* Grid items / projects */}
          {/* Project Cleanup  */}

          <div
            style={{ backgroundImage: `url(${projectCleanup})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[250px]"
          ></div>

          {/* descrip tion */}
          <div className="text-gray-300 text-sm sm:text-md flex flex-col  content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[250px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Project Cleanup
            </h3>

            <p className="text-gray-300 font-bold">
              School of Code Final Project
            </p>
            <p className="text-gray-300 text-left">
              My team and I chose to build an app to help tackle the world's
              pollution crisis
            </p>
            <p>
              We decided to take on new technologies to puish ourselves and
              learn during the process. We used Next Js with Tailwind and
              leaflet maps as well as various libraries such as formik,
            </p>

            {/* Buttons div */}
            <div className="pt-6">
              <a href="https://projectcleanup.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/environment_variables_frontend"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-1.5 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
              <a href="https://youtu.be/2OWNUpYSubc" target="_blank">
                <button className="text-center rounded-lg px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Presentation
                </button>
              </a>
            </div>
          </div>
          {/* Squatify  */}
          <div
            style={{ backgroundImage: `url(${squatify})` }}
            className="text-gray-300  shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[250px]"
          >
            {/* description */}
          </div>
          <div className=" text-gray-300 text-sm sm:text-md flex flex-col container content-div sm:text-md border-[1px] rounded-lg p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[250px]">
            <h3 className="text-2xl font-bold text-gray-200">Squatify</h3>
            <br />

            <p className="">
              A side project I initiaded with a few fellow students from School
              of code.
            </p>
            <p>Helped us keep busy on weekends</p>
            <p>Practiced Agile team working</p>

            {/* Buttons div */}
            <div className="pt-6">
              <a href="https://squatify.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/Squatify-App"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* To Do list */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[250px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col container content-div sm:text-md border-[1px] rounded-md p-2.5 justify-evenly border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[250px]">
            <h3 className="text-2xl font-bold text-gray-200 ">To Do List</h3>
            <br />
            <p>a basic react app with no back-end.</p>
            <p>I built this to practice React Basics</p>

            {/* Buttons div */}
            <div className="pt-8">
              <a href="https://blakes-todo-list.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/To-Do-List"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Sourcery */}
          <div
            style={{ backgroundImage: `url(${sourcery})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[250px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col container content-div sm:text-md border-[1px] rounded-md p-2.5 justify-evenly border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[250px]">
            <h3 className="text-2xl font-bold text-gray-200 ">
              Sourcery Resources
            </h3>
            <br />
            <p>Project week 9 project</p>
            <p>An app to help students find learning resources</p>

            {/* Buttons div */}
            <div className="pt-8">
              {/*  <a href="https://blakes-todo-list.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1.5 m-2 hover:bg-[#1982c4] text-gray-300 border-[1px] hover:border-[#1982c4] text-md">
                    Demo
                  </button>
                </a> */}
              <a
                href="https://github.com/BlakeLawrence/Sourcery--Front-End"
                target="_blank"
              >
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
