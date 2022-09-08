import React from "react";
import { useState } from "react";
import { FaHamburger, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/Blake-Logo.svg";
import cv from "../assets/cv2022.pdf";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[100px] sm:h-[125px] flex justify-between items-center px-4 bg-[#0a192f] text-[#ccd6f6]">
      <div>
        <img
          id="logo"
          className="hover:animate-pulse"
          src={Logo}
          alt="logo image"
        />
      </div>
      {/* menu */}
      <ul className="hidden md:flex text-lg">
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="projects" spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaHamburger size="1.5rem" /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-4 text-3xl">
          <Link
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul className="">
          <li className=" w-[150px] h-[40px] sm:w-[160px] sm:h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/blake-lawrence83/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className=" w-[150px] h-[40px] sm:w-[160px] sm:h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6e5494]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/BlakeLawrence"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <li className=" w-[150px] h-[40px] sm:w-[160px] sm:h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1982C4]">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="/"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
          </Link>
          <li className=" w-[150px] h-[40px] sm:w-[160px] sm:h-[60px]  flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={cv}
              target="_blank"
            >
              CV
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
