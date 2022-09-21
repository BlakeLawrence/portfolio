import React from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import cv from "../assets/cv2022.pdf";

const Contact = () => {
  return (
    <div
      name="contact"
      className="pb-16  w-full h-full bg-[#1c3144] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/d89292ed-c006-4e06-bd1c-f34fa684203e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-5">
          <p className=" sm:ml-0 text-4xl font-bold inline border-b-4 border-[#1982C4] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 ">
            Please fill in and submit the form below:
          </p>
        </div>
        <div className="flex flex-col p-6 rounded-lg bg-[#1982C4]">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            className="p-2 rounded-md focus:outline-none bg-gray-200"
            type="text"
            name="name"
          />
          <label className="text-white mt-2" htmlFor="email">
            Email
          </label>
          <input
            className=" p-2 rounded-md focus:outline-none bg-gray-200"
            type="text"
            name="email"
          />
          <label className="mt-2 text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className="p-2 rounded-md focus:outline-none bg-gray-200"
            name="message"
            rows="10"
          ></textarea>
          <button className="text-white rounded-md border-[2px]  px-4 py-2 my-6 mx-auto flex items-center font-semibold hover:scale-105 ">
            Submit
          </button>
        </div>
        {/* social icons */}
        <div className="sm:hidden flex justify-center left-1 mt-8 mb-4">
          <ul className="flex">
            <li className=" w-[50px] h-[40px] flex justify-between items-center ">
              <a
                className="flex items-center text-gray-300 font-semibold"
                href="https://www.linkedin.com/in/blake-lawrence83/"
                target="_blank"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className=" w-[50px] h-[40px] flex justify-between items-center  ">
              <a
                className="flex items-center text-gray-300 font-semibold"
                href="https://github.com/BlakeLawrence"
                target="_blank"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <li className="w-[50px] h-[40px] flex justify-between items-center">
                <a
                  className="flex items-center text-gray-300 font-semibold"
                  href="/"
                >
                  <HiOutlineMail size={30} />
                </a>
              </li>
            </Link>
            <li className="w-[50px] h-[40px] flex justify-between items-center ">
              <a
                className="flex items-center text-gray-300 font-semibold"
                href={cv}
                target="_blank"
              >
                <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Contact;
