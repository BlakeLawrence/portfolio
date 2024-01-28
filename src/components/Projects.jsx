import React from "react";
import projectCleanup from "../assets/projectcleanup.png";
import todo from "../assets/todo.png";
import movie from "../assets/movie-mate.png";
import portfolio from "../assets/blake-portfolio.png";
import michelle from "../assets/michelle.png";
import colors from "../assets/colors.png";
import split from "../assets/split.png";

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
          <p className="py-6 text-sm md:text-lg">
            Here are some of the projects I've worked on...
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
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                My friends and I went out for dinner one night and we had a
                comical experience trying to work out who owed what, so the next
                day I decided to build this bill splitting app.
              </p>
              <p className="mt-1">
                I researched optical character recognition for bill scanning and
                managed to integrate an API to do this, but the free monthly api
                calls were too little and I didnt want to risk having to pay for
                api calls.
              </p>
              <p className="mt-1">
                I plan to add further manual functionality in future, like bill
                line items that can be assigned to each person.
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

            <p className="text-gray-300 font-bold">
              My first commercial website...
            </p>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                I made this website for a nail salon business in Cheddar,
                Somerset.
              </p>
              <p className="mt-1">
                I thoroughly enjoyed the process of communicating with the
                client to make sure I met all their needs and delivered a basic
                website they were blown away with.
              </p>
              <p className="mt-1">
                I also did alot of research on SEO which I implemented to help
                the clients page rank on google and I'm happy to report that the
                webpage is now ranking on page 1 which has made a positive
                impact on the business's bookings ever since.
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
            <br />
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p>
                An app to help tackle the world's pollution crisis **back end
                currently down on demo site**
              </p>
              <p className="mt-1">
                Took on new technologies to learn during the process. Used Next
                Js with Tailwind and leaflet maps as well as various libraries
                such as formik,Yup and Toastify.
              </p>
              <p className="mt-1">
                Our team manifesto, pair programming experience and agile
                approach to our app build ensured we all enjoyed ourselves
                throughout the process while maintaining a great sense of team
                spirit. I couldn't have enjoyed myself any more.
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
            <br />
            <p className="text-gray-300 font-bold">
              An app that finds all movies by search title.
            </p>
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p>
                This app implements the Fetcing and consumption of data through
                an external API, using React props and state, conditional
                rendering and side effects with useEffect.
              </p>
              <p className="mt-2">-Fully Responsive</p>
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
            <br />
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
            <br />
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
