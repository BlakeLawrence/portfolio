import React from "react";
import projectCleanup from "../assets/projectcleanup.png";
import todo from "../assets/todo.png";
import squatify from "../assets/squatify.png";
import sourcery from "../assets/sourcery.png";
import movie from "../assets/movie-mate.png";
import portfolio from "../assets/blake-portfolio.png";
import michelle from "../assets/michelle.png";

const Projects = () => {
  return (
    /* text container - heading and description */
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-[#1c3144] pt-1"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[290px]"
          >
            {/* description */}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[290px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Project Cleanup
            </h3>

            <p className="text-gray-300 font-bold">
              School of Code Final Project ( duration - 4 weeks )
            </p>
            <br />
            <p className="text-gray-300 text-left pb-[2px]">
              My team and I chose to build an app to help tackle the world's
              pollution crisis.
            </p>
            <p>
              We decided to take on new technologies to push ourselves and learn
              during the process. We used Next Js with Tailwind and leaflet maps
              as well as various libraries such as formik,Yup and Toastify.
            </p>

            {/* Buttons div */}
            <div>
              <a
                href="https://projectcleanup.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 mt-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] sm:text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/environment_variables_frontend"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg mt-2 px-2 py-1.5 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
              <a
                href="https://youtu.be/2OWNUpYSubc"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg mt-2 px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Presentation
                </button>
              </a>
            </div>
          </div>
          {/* Nails By Michelle  */}
          <div
            style={{ backgroundImage: `url(${michelle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[290px]"
          >
            {/* description */}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[290px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Nails By Michelle
            </h3>

            <p className="text-gray-300 font-bold">
              My first commercial website...
            </p>

            <p>
              I made this website for a family friends nail salon business in
              Cheddar, Somerset using Next Js and Tailwind. I learnt alot about
              SEO and I further increased my skills in Next Js and Tailwind.
            </p>
            <p>
              It took me a little over a week to build this site and I am very
              proud of the results.
            </p>

            {/* Buttons div */}
            <div>
              <a
                href="https://nails-by-michelle.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 mt-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] sm:text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/nails-by-michelle"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg mt-2 px-2 py-1.5 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Squatify  */}
          <div
            style={{ backgroundImage: `url(${squatify})` }}
            className="text-gray-300  shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[290px]"
          >
            {/* description */}
          </div>
          <div className=" text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-lg p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[290px]">
            <h3 className="text-2xl font-bold text-gray-200">Squatify</h3>
            <br />

            <p className="">
              A side project I initiated with a few fellow students from School
              of Code.
            </p>
            <p>
              This helped us keep busy on weekends and provided more teamwork
              and collaboration experience in an Agile way.
            </p>

            {/* Buttons div */}
            <div className="pt-6">
              <a
                href="https://squatify.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/Squatify-App"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Movie Mate */}
          <div
            style={{ backgroundImage: `url(${movie})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[290px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[290px]">
            <h3 className="text-2xl font-bold text-gray-200 ">Movie Mate</h3>
            <br />
            <p>An app that finds all movies by search title.</p>
            <p>
              I had alot of fun buiding this app and it provided an opportunity
              to cement some of the core React fundamentals such as fetching
              data, using props and state, conditional rendering and side
              effects.
            </p>

            {/* Buttons div */}
            <div className="pt-8">
              <a
                href="https://movie-mate-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/find-a-film"
                target="_blank"
                rel="noreferrer"
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
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[290px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[290px]">
            <h3 className="text-2xl font-bold text-gray-200 ">To Do List</h3>
            <br />
            <p>
              This is a basic react app I built while learning React to practice
              the fundamentals we had been taught such as onChange and OnClick
              events and basic use of state and props.
            </p>
            <p>
              The user can add todo items to a list, mark them as complete when
              they've been done or delete them completely.
            </p>

            {/* Buttons div */}
            <div className="pt-8">
              <a
                href="https://blakes-todo-list.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/To-Do-List"
                target="_blank"
                rel="noreferrer"
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
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[325px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col container sm:text-md border-[1px] rounded-md p-1 sm:p-2.5 justify-between border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[325px]">
            <h3 className="text-2xl font-bold text-gray-200 ">
              Sourcery Resources
            </h3>
            <p className="text-gray-300 font-bold">
              Week-9 Project ( duration- 1 week )
            </p>
            <br />
            <p className="pb-[2px]">
              An app to help students find learning resources.
            </p>
            <p className="pb-[2px]">
              This project was our first taste of collaborating in a random
              Agile team to engineer a full stack application.
            </p>
            <p>
              It was a pressure filled week but an enjoyable one that helped us
              build resillience and provided invaluable experience for our final
              project month.
            </p>

            {/* Buttons div */}
            <div className="pt-1">
              {/*  <a href="https://blakes-todo-list.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-2 py-1.5 m-2 hover:bg-[#1982c4] text-gray-300 border-[1px] hover:border-[#1982c4] text-md">
                    Demo
                  </button>
                </a> */}
              <a
                href="https://github.com/BlakeLawrence/Sourcery--Front-End"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1 sm:py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* My Portfolio*/}
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[290px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[290px]">
            <h3 className="text-2xl font-bold text-gray-200 ">My Portfolio</h3>
            <br />
            <p>This is my portfolio website that you are currently viewing.</p>
            <p> It was built using React and Tailwind CSS</p>

            {/* Buttons div */}
            <div className="pt-8">
              <a
                href="https://github.com/BlakeLawrence/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
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
