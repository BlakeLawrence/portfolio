import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" pb-12 w-full h-full bg-[#1c3144] text-gray-300"
    >
      <div className="pl-12 md:pl-0 flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-[#1982C4]">
              About
            </p>
          </div>
        </div>
        <section className="max-w-[1000px] w-full px-4 text-sm md:text-lg">
          <p className="pl-0 w-full">
            Prior to my journey of becoming a software developer, I enjoyed a
            career in live corporate events and I covered many roles from Audio
            Engineer to Event Producer. <br />
            <br /> My previous career had its plus sides, but I couldn't see a
            very bright or challenging future for myself and so I took the
            challenge to change careers. It was when I came across and
            researched software development and signed up to my first Udemy
            course (Colt Steele's front end developer bootcamp) that I realised
            that this was a passion that could very well be that career change I
            was searching for. <br />
            <br />
            Fast forward a year and I have now just graduated from the School of
            Code's 16 week intensive full stack developer bootcamp and I am
            ready to secure my first software development role.
            <br />
            <br /> The experience gained at the School of Code is one I'll never
            forget and it is one that I am incredibly grateful for. Not only did
            I learn how to code full stack applications, more importantly, it
            instilled an incredible amount of resilience into me, I learned how
            to fit into and work efficiently in any team and it really cemented
            the fact that I made the right decision to change careers. <br />
            <br />
            It was no easy journey thats for sure, but its one ill never forget
            and one that I am so happy I embarked on.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
