import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className=" w-full h-[80px] sm:h-[80px] flex justify-around items-center bg-[#1c3144] text-[#ccd6f6] ] ">
      <ul className="flex">
        <li className=" mt-3">Copyright &copy; 2022</li>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <li className=" mt-3">back to top ⬆️</li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
