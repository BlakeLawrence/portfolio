import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/cv2022.pdf";

const Home = () => {
  return (
    <>
      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-1">
        <ul>
          <li className=" w-[150px] h-[40px] sm:w-[150px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-[1px] rounded-md border-[#1982C4] hover:shadow-md hover:shadow-[#1982C4]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
              href="https://www.linkedin.com/in/blake-lawrence83/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[150px] h-[40px] sm:w-[150px] mt-2 sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-[1px] rounded-md border-[#1982C4] hover:shadow-md hover:shadow-[#1982C4]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
              href="https://github.com/BlakeLawrence"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li className=" w-[150px] h-[40px] sm:w-[150px] mt-2 sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 rounded-md border-[1px] border-[#1982C4] hover:shadow-md hover:shadow-[#1982C4]">
              <a
                className="flex justify-between items-center w-full text-gray-300 font-semibold"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className=" w-[150px] h-[40px] sm:w-[150px] mt-2 sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 border-[1px] rounded-md border-[#1982C4] hover:shadow-md hover:shadow-[#1982C4]">
            <a
              className="flex justify-between items-center w-full text-gray-300 font-semibold"
              href={cv}
              target="_blank"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
      {/* Intro */}
      <div name="home" className="w-full h-screen bg-[#0a192f]">
        {/* Overall Container */}
        <div className="max-w-[1000px] mx-10 lg:mx-auto px-8 flex flex-col justify-center h-full pt-8">
          <p className="text-[#1982C4] text-xl sm:text-3xl">Hi, my name is</p>
          <h1 className="text-3xl sm:text-8xl font-bold text-[#ccd6f6]">
            Blake Lawrence
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className=" text-[#8892b0] py-4 max-w-[700px]">
            I am a highly motivated, ambitious and detail orientated Individual.
            I love learning new things every day and I am always pushing myself
            to be the best I can.
          </p>
          <div>
            {/* Smoothe Scroll link to projects */}
            <Link to="projects" spy={true} smooth={true} duration={500}>
              <button className="text-white group border-2 px-4 py-2 sm:px-6 sm:py-3 my-2 flex items-center hover:bg-[#1982C4] hover:border-[#1982C4]  ">
                View Projects
                <span className="group-hover:rotate-90 duration-300"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
