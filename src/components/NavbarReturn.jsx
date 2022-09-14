import React from "react";
import { useState } from "react";
import Logo from "../assets/Blake-Logo.svg";
import { Link } from "react-scroll";

const NavbarReturn = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className="fixed w-full h-[100px] sm:h-[125px] flex justify-between items-center px-4 bg-[#1c3144] text-[#ccd6f6]">
      <div>
        <img
          id="logo"
          className="hover:animate-pulse"
          src={Logo}
          alt="logo image"
        />
      </div>
    </nav>
  );
};

export default NavbarReturn;
