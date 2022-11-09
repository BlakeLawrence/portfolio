import React from "react";
import projectCleanup from "../assets/projectcleanup.png";
import todo from "../assets/todo.png";
import squatify from "../assets/squatify.png";
import sourcery from "../assets/sourcery.png";
import movie from "../assets/movie-mate.png";
import portfolio from "../assets/blake-portfolio.png";
import michelle from "../assets/michelle.png";
import colors from "../assets/colors.png";

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
                My team and I chose to build an app to help tackle the world's
                pollution crisis.
              </p>
              <p className="mt-1">
                We took on new technologies to push ourselves and learn during
                the process. We used Next Js with Tailwind and leaflet maps as
                well as various libraries such as formik,Yup and Toastify.
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
                I made this website for a distant family members nail salon
                business in Cheddar, Somerset.
              </p>
              <p className="mt-1">
                I thoroughly enjoyed the process of communicating with the
                client to make sure I met all their needs and delivered a
                website they were blown away with.
              </p>
              <p className="mt-1">
                I also made sure to include outstanding SEO and I'm happy to
                report that the webpage is now ranking on page 1 of google which
                I am very excited about and I have no doubt my website build
                will add incredible value to their business.
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
          {/* Squatify  */}
          <div
            style={{ backgroundImage: `url(${squatify})` }}
            className="text-gray-300  shadow-lg shadow-[#040c16] container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description */}
          </div>
          <div className=" text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-lg p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200">Squatify</h3>
            <br />
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="mt-1">
                Squatify is a side project I got going with a few fellow
                students from School of Code in the middle of our bootcamp
                journey.
              </p>
              <p className="mt-1">
                The reason I initiated this project was to reach out and make a
                few friends on the course and to keep our agile and team
                collaboration skills sharpened on weekends and in our spare
                time.
              </p>
              <p className="mt-1">
                We had various technical hiccups that we ironed out along the
                way but we also learnt some new technologies such as styled
                components and we further cemented our knowledge of Node,
                express and SQL in the process
              </p>
            </div>

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
                I had alot of fun buiding this app and it provided an
                opportunity to cement some of the core React fundamentals such
                as fetching and consuming data from an external API, using React
                props and state, conditional rendering and side effects with
                useEffect.
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
          {/* Sourcery */}
          <div
            style={{ backgroundImage: `url(${sourcery})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col container sm:text-md border-[1px] rounded-md p-1 sm:p-2.5 justify-between border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200 ">
              Sourcery Resources
            </h3>
            <p className="text-gray-300 font-bold">
              Week-9 Project ( duration- 1 week )
            </p>
            <br />
            <div className="text-gray-300 text-left pb-[2px] text-xs md:text-sm">
              <p className="pb-[2px] mt-1">
                An app to help students find learning resources.
              </p>
              <p className="pb-[2px] mt-1">
                This project was our first taste of collaborating in a random
                Agile team to engineer a full stack application.
              </p>
              <p className=" mt-1">
                It was a pressure filled week but an enjoyable one that helped
                us build resillience and provided invaluable experience for our
                final project month.
              </p>
            </div>

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

          {/* Color shade picker*/}
          <div
            style={{ backgroundImage: `url(${colors})` }}
            className="text-gray-300 shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div bg-cover bg-center h-[350px]"
          >
            {/* description*/}
          </div>
          <div className="text-gray-300 text-sm sm:text-md flex flex-col justify-between container content-div sm:text-md border-[1px] rounded-md p-2.5 border-[#213b52] bg-[#213b52] shadow-lg shadow-[#040c16] bg-cover bg-center h-[350px]">
            <h3 className="text-2xl font-bold text-gray-200 ">
              Color Shade Picker
            </h3>
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
        </div>
      </div>
    </div>
  );
};

export default Projects;
