import React from "react";
import projectCleanup from "../assets/projectcleanup.png";
import todo from "../assets/todo.png";
import movie from "../assets/movie-mate.png";
import portfolio from "../assets/blake-portfolio.png";
import michelle from "../assets/michelle.png";
import colors from "../assets/colors.png";
import split from "../assets/split.png";
import stamp from "../assets/stamp.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import next from "../assets/next.png";
import jest from "../assets/jest.png";
import leaflet from "../assets/leaflet.png";
import javascript from "../assets/javascript.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import api from "../assets/api.png";
import framer from "../assets/framer.png";

const Projects = () => {
  return (
    /* text container - heading and description */
    <div
      name="projects"
      className="w-full md:h-full text-gray-300 bg-[#1c3144] pt-32 md:pt-1"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8">
          <p className=" text-2xl md:text-4xl  font-bold inline border-b-4 text-gray-300 border-[#1982C4]">
            Projects
          </p>
        </div>

        {/* grid container - 2 columns down to 1 on mobile view*/}
        <div className="w-full items-center grid sm:grid-cols-2 gap-4 pb-20">
          {/* Grid items / projects */}
          {/* Divvy / Split */}
          <div
            style={{ backgroundImage: `url(${split})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description */}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Split
            </h3>

            <p className="text-gray-300 font-bold">A Bill splitting app</p>
            <div className="flex w-[75px]">
              <img src={react} alt="react icon" className="w-8 mr-2" />
              <img
                src={tailwind}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                My friends and I went for dinner one night where we had a
                comical experience trying to work out who owed what on the bill,
                so I decided to build this bill splitting app.
              </p>

              <p className="mt-1">
                I plan to add further manual functionality in future, such as
                bill line items that can be assigned to each person.
              </p>
            </div>

            {/* Buttons div - code and demo */}
            <div>
              <a
                href="https://divvy-up.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 mt-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] sm:text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/divvy-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg mt-2 px-2 py-1.5 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Stamd Duty Calc */}
          <div
            style={{ backgroundImage: `url(${stamp})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description */}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Stamp Duty Calculator
            </h3>

            <p className="text-gray-300 font-bold">
              Calculates property stamp duty in England
            </p>
            <div className="flex w-[75px] mt-4 mb-2">
              <img src={react} alt="react icon" className="w-8 mr-2" />
              <img
                src={tailwind}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
              <img
                src={jest}
                alt="jest icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                A helpful app to calculate the various stamp duty brackets for
                first time buyers, next home buyers or additional home buyers in
                England. (current to January 2024)
              </p>
            </div>

            {/* Buttons div - code and demo */}
            <div>
              <a
                href="https://stamp-duty-calculator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 mt-2 py-1.5 ml-0 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] sm:text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/property-ladder"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg mt-2 px-2 py-1.5 mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>

          {/* Nails By Michelle  */}
          <div
            style={{ backgroundImage: `url(${michelle})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description */}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Nails By Michelle
            </h3>
            <p className="text-gray-300 font-bold">Commercial Salon website.</p>
            <div className="flex w-[75px] mt-4">
              <img src={next} alt="next js icon" className="w-8 mr-2" />
              <img
                src={tailwind}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
              <img
                src={framer}
                alt="framer-motion icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                Built for a customers nail salon business in Cheddar, Somerset.
              </p>
              <p className="mt-1">
                I enjoyed the process of communicating with the client to make
                sure I met all their needs and delivered a website they were
                very happy with.
              </p>
              <p className="mt-1">
                I did research on SEO which I implemented to help the clients
                page rank on google. The site is now ranking on page 1 which has
                made a positive impact on the business's bookings ever since.
              </p>
            </div>

            {/* Buttons div - code and demo */}
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
          {/* Project Cleanup  */}
          <div
            style={{ backgroundImage: `url(${projectCleanup})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description */}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between content-div sm:text-md border-[1px] rounded-md p-2.5  border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-gray-200 text-xl sm:text-2xl font-bold">
              Project Cleanup
            </h3>

            <p className="text-gray-300 font-bold">
              School of Code Final Project ( duration - 4 weeks )
            </p>
            <div className="flex w-[75px] mt-3">
              <img src={next} alt="next js icon" className="w-8 mr-2" />
              <img
                src={tailwind}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
              <img
                src={jest}
                alt="jest icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
              <img
                src={leaflet}
                alt="leaflet icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <br />
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm mb-5">
              <p className="mb-2">**BACK-END CURRENTLY DOWN**</p>
              <p>An app to help tackle the world's pollution crisis</p>
              <p className="mt-1">
                Built with Next Js, Tailwind and leaflet maps as well as various
                libraries such as formik,Yup and Toastify.
              </p>
            </div>

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
                href="https://youtu.be/xZ-yoCRlllM"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg mt-2 px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  video run through
                </button>
              </a>
            </div>
          </div>
          {/* Movie Mate */}
          <div
            style={{ backgroundImage: `url(${movie})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200 ">Movie Mate</h3>

            <p className="text-gray-300 font-bold">
              An app that finds all movies by search title.
            </p>
            <div className="flex w-[75px] mt-4">
              <img src={react} alt="react icon" className="w-8 mr-2" />
              <img
                src={tailwind}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
              <img
                src={api}
                alt="api icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p>
                This app implements the Fetcing and consumption of data through
                an external API, using React props and state, conditional
                rendering and side effects with useEffect.
              </p>
            </div>

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
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200 ">To Do List</h3>
            <div className="flex w-[75px] mt-4">
              <img src={react} alt="react icon" className="w-8" />
            </div>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                This is a basic react app I built while learning React to
                practice the fundamentals we had been taught such as onChange
                and OnClick events and basic use of state and props.
              </p>
              <p className="mt-1">
                The user can add todo items to a list, mark them as complete
                when they've been done or delete them completely.
              </p>
            </div>

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
          {/* Color shade picker*/}
          <div
            style={{ backgroundImage: `url(${colors})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200 ">Color Shades</h3>
            <div className="flex w-[75px] mt-4">
              <img
                src={javascript}
                alt="javascript icon"
                className="w-8 mr-2"
              />
              <img
                src={css}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
              <img
                src={html}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <p>
              This is a very basic Vanilla JS app that I built in a few hours to
              refresh my memory on DOM Manipulation.
            </p>
            <p>
              It had been a while since I had played around with Vanilla JS and
              so I took the opportunity one morning to have a quick practice.
            </p>

            {/* Buttons div */}
            <div className="pt-8">
              <a
                href="https://random-color-shades.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5  mr-2 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/BlakeLawrence/color-shades"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-center rounded-lg px-2 py-1.5 hover:bg-[#1982c4] text-gray-300 hover:text-white border-[1px] hover:border-[#1982c4] text-md">
                  Code
                </button>
              </a>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200 ">My Portfolio</h3>
            <div className="flex w-[75px] mt-4">
              <img src={react} alt="react icon" className="w-8 mr-2" />
              <img
                src={tailwind}
                alt="tailwind icon"
                className="w-8 rounded-xl mx-auto mr-2"
              />
            </div>
            <p>This is my portfolio website that you are currently viewing.</p>

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
