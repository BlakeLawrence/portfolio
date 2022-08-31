import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Overall Container */}
      <div className="max-w-[1000px] mx-10 lg:mx-auto px-8 flex flex-col justify-center h-full pt-8">
        <p className="text-[#1982C4] text-xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Blake Lawrence
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a full stack developer.
        </h2>
        <p className=" text-[#8892b0] py-4 max-w-[700px]">
          I am a highly motivated and detail orientated Individual. I am
          ambitious, I love learning new things every day and I am always
          pushing myself to be the best I can.
        </p>
        <div>
          {/* Smoothe Scroll link to projects */}
          <Link to="work" spy={true} smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#1982C4] hover:border-[#1982C4]">
              View Work
              <span className="group-hover:rotate-90 duration-300"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
