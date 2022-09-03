import React from "react";
import projectCleanup from "../assets/projectcleanup.png";
import todo from "../assets/todo.png";
import restuarant from "../assets/restuarant.png";
import squatify from "../assets/squatify.png";
import sourcery from "../assets/sourcery.png";

const Work = () => {
  return (
    /* text container - heading and description */
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl sm:text-4xl  font-bold inline border-b-4 text-gray-300 border-[#1982C4]">
            Work
          </p>
          <p className="py-6 text-sm md:text-lg">
            Here is some of the work I've done to date...
          </p>
        </div>

        {/* grid container - 4 columns down to 2 on mobile view*/}
        <div className="grid sm:grid-cols-2 gap-4 pb-16">
          {/* Grid items / projects */}
          {/* Project Cleanup  */}
          <div
            style={{ backgroundImage: `url(${projectCleanup})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="text-white opacity-0 group-hover:opacity-100 text-sm sm:text-md">
              <h3 className="text-xl sm:text-2xl font-bold">Project Cleanup</h3>
              <br />
              <p>My teams Final Project at School of Code</p>
              <p>- See our Presentation video below</p>
              <div className="pt-8 text-center">
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
          </div>
          {/* Squatify  */}
          <div
            style={{ backgroundImage: `url(${squatify})` }}
            className="text-white  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 text-sm sm:text-md">
              <h3 className="text-2xl font-bold text-white ">Squatify</h3>
              <br />
              <p>A side project I initiaded with a few fellow students</p>
              <p>- Helped us keep busy on weekends</p>
              <p>- Practiced Agile team working</p>
              <div className="pt-8 text-center">
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
          </div>

          {/* Restuarant reviews  */}
          <div
            style={{ backgroundImage: `url(${restuarant})` }}
            className="text-white shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 text-sm sm:text-md">
              <h3 className="text-2xl font-bold text-white ">
                Restuarant Reviews
              </h3>
              <br />
              <p>A tutorial build that helped me cement</p>
              <p>a few react fundamentals.</p>
              <div className="pt-8 text-center">
                {/* <a
                  href="https://restuarant-reviews.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                    Demo
                  </button>
                </a> */}
                <a
                  href="https://github.com/BlakeLawrence/Restuarant-Review-App-Client"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-3 py-2 m-2 bg-white text-gray-700 font-bold text-md">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* To Do list */}
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="text-white shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 text-sm sm:text-md">
              <h3 className="text-2xl font-bold text-white ">To Do List</h3>
              <br />
              <p>a basic react app with no back-end.</p>
              <p>I built this to practice React Basics</p>

              <div className="pt-8 text-center">
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
          </div>
          {/* Sourcery */}
          <div
            style={{ backgroundImage: `url(${sourcery})` }}
            className="text-white shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 text-sm sm:text-md">
              <h3 className="text-2xl font-bold text-white ">
                SOrcery Resources
              </h3>
              <br />
              <p>Project week 9 project</p>
              <p>An app to help students find learning resources</p>

              <div className="pt-8 text-center">
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
    </div>
  );
};

export default Work;
