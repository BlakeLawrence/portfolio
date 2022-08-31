import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#1982C4]">
              About
            </p>
          </div>
        </div>
        <section className="max-w-[1000px] w-full px-4">
          <p>
            Prior to my journey of becoming a Software Developer, I had a career
            in Live events and covered many roles from Freelance Audio Engineer
            to Event Producer.
          </p>
          <br />
          <p>
            My previous career had its plus sides, but I couldn't see a very
            bright future for myself and so I took the challenge to change
            careers. It was when I came across and researched Software
            development and signed up to my first Udemy Course (Colt Steele's
            front end developer Bootcamp) that I realised that this was a
            passion that could very well be that career change I was after all
            along.
          </p>
          <br />
          <p>
            Fast forward a year and some change later, I have now just completed
            the School of Codes 16 week intensive full stack development
            Bootcamp and here I am, ready to take that giant leap into my first
            development role
          </p>
          <br />
          <p>
            My experience at the School of Code is one I'll never forget and it
            is one that I am incredibly grateful for. Not only did it teach me
            how to code full stack applications, more importantly, it installed
            an incredible amount of resilience into me, it taught me how to fit
            into and work efficiently in any team and it really cemented the
            fact that I made the right decision to change careers. It was no
            easy journey thats for sure, but its one ill never forget and I
            cannot wait to land my first role.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
