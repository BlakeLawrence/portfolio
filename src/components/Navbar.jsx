import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Blake-Logo.svg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[80px] md:h-[125px] flex justify-between items-center px-4 bg-[#1c3144] text-[#ccd6f6]">
      <div>
        <img
          id="logo"
          className="hover:animate-pulse"
          src={Logo}
          alt="main logo"
        />
      </div>

      {/* menu */}
      <ul className="hidden md:flex text-xl">
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="hover:text-[#1982C4] hover:scale-125">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden">
        {!nav ? <FaBars size="1.5rem" /> : <FaTimes size="1.5rem" />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1c3144] flex flex-col justify-center items-center"
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
            offset={-125}
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
            offset={-50}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="projects"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="py-5 text-3xl">
          <Link
            onClick={handleClick}
            to="socials"
            spy={true}
            smooth={true}
            offset={-125}
            duration={500}
          >
            Social Media || CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
