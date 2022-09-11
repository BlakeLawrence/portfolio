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
      className="w-full md:h-full text-gray-300 bg-[#0a192f] pt-1"
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
        <div className="w-full items-center grid sm:grid-cols-2 gap-4 pb-16">
          {/* Grid items / projects */}
          {/* Project Cleanup  */}
          <div
            style={{ backgroundImage: `url(${projectCleanup})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* description */}
          </div>
          <div className="text-white text-sm sm:text-md flex flex-col justify-evenly content-div sm:text-md border-2 border-[#1982C4] rounded-md p-2.5">
            <h3 className="text-xl sm:text-2xl font-bold">Project Cleanup</h3>
            <br />
            <p>My teams Final Project at School of Code</p>

            <div className="pt-8">
              <a href="https://projectcleanup.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/environment_variables_frontend"
                target="_blank"
              >
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Code
                </button>
              </a>
              <a href="https://youtu.be/2OWNUpYSubc" target="_blank">
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Presentation
                </button>
              </a>
            </div>
          </div>
          {/* Squatify  */}
          <div
            style={{ backgroundImage: `url(${squatify})` }}
            className="text-white  shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* description */}
          </div>
          <div className="text-white text-sm sm:text-md flex flex-col container content-div sm:text-md border-2 border-[#1982C4] rounded-md p-2.5 justify-evenly">
            <h3 className="text-2xl font-bold text-white">Squatify</h3>
            <br />

            <p>A side project I initiaded with a few fellow</p>
            <p>- Helped us keep busy on weekends</p>
            <p>- Practiced Agile team working</p>

            <div className="pt-8">
              <a href="https://squatify.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/Squatify-App"
                target="_blank"
              >
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* To Do list */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="text-white shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* description*/}
          </div>
          <div className="text-white text-sm sm:text-md flex flex-col container content-div sm:text-md border-2 border-[#1982C4] rounded-md p-2.5 justify-evenly">
            <h3 className="text-2xl font-bold text-white ">To Do List</h3>
            <br />
            <p>a basic react app with no back-end.</p>
            <p>I built this to practice React Basics</p>

            <div className="pt-8">
              <a href="https://blakes-todo-list.netlify.app/" target="_blank">
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/To-Do-List"
                target="_blank"
              >
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Sourcery */}
          <div
            style={{ backgroundImage: `url(${sourcery})` }}
            className="text-white shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* description*/}
          </div>
          <div className="text-white text-sm sm:text-md flex flex-col container content-div sm:text-md border-2 border-[#1982C4] rounded-md p-2.5 justify-evenly">
            <h3 className="text-2xl font-bold text-white ">
              Sourcery Resources
            </h3>
            <br />
            <p>Project week 9 project</p>
            <p>An app to help students find learning resources</p>

            <div className="pt-8">
              {/*  <a href="https://blakes-todo-list.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                    Demo
                  </button>
                </a> */}
              <a
                href="https://github.com/BlakeLawrence/Sourcery--Front-End"
                target="_blank"
              >
                <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
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
