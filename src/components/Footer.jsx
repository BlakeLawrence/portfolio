import React from "react";
import Logo from "../assets/Blake-Logo.svg";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full h-[80px] sm:h-[80px] flex justify-around items-center bg-[#0a192f] text-[#ccd6f6] shadow-white shadow-lg">
      <ul>
        <li className="mt-3">Copyright &copy;2022</li>
      </ul>
    </footer>
  );
};

export default Footer;
