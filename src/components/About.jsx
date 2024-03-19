import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className=" pb-12 w-full h-full bg-[#1c3144] text-gray-300 pt-16 md:pt-0"
    >
      <div className=" flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8 pl-4">
            <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-[#1982C4]">
              About
            </p>
          </div>
        </div>
        <section className="max-w-[1000px] w-full px-4 text-sm md:text-lg">
          <p className="pl-0 w-full">
            I am a front end developer, passionate about building user friendly,
            responsive and accessible web applications with React.
            <br />
            <br />
            During Covid 19, with time on my hands and a desire to find a sense
            of purpose and fulfilment in my career, I embarked on a life
            changing mission to leave behind the Live events industry and become
            a Front end developer.
            <br />
            <br />
            Starting off with an in depth Udemy course on Front End development
            covering HTML, CSS and JavaScript, my curiosity quickly evolved into
            a passion.
            <br />
            <br />
            I went on to join and graduate from the School of Code's 16 week
            full time, full-stack development bootcamp, which was a journey
            packed full of learning, collaboration and industry added value from
            mindset coaches, guest speakers and personal mentors.
            <br />
            <br /> The experience and skills I gained at the School of Code have
            given me a solid foundation on which to build upon and take to the
            next level in my career.
            <br />
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
