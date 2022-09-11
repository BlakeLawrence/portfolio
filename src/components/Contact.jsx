import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="pl-16 sm:pl-0 w-full h-full bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/d89292ed-c006-4e06-bd1c-f34fa684203e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className=" sm:ml-0 text-4xl font-bold inline border-b-4 border-[#1982C4] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4 ">
            Fill in the form below or send a message from your email account:
            <br></br>
            <a
              className="text-[#1982C4] font-bold"
              href="mailto: blake-lawrence@hotmail.co.uk"
            >
              {" "}
              blake-lawrence@hotmail.co.uk
            </a>
          </p>
        </div>
        <div className="flex flex-col p-6 rounded-md bg-[#1982C4]">
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            className="bg-[#339ddf] p-2 rounded-md focus:outline-none"
            type="text"
            name="name"
          />
          <label className="text-white mt-2" htmlFor="email">
            Email
          </label>
          <input
            className=" p-2 bg-[#339ddf] rounded-md focus:outline-none"
            type="text"
            name="email"
          />
          <label className="mt-2 text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className="bg-[#339ddf] p-2 rounded-md text-white focus:outline-none"
            name="message"
            rows="10"
          ></textarea>
          <button className="text-white rounded-md border-[1px] hover:bg-[#1982C4] hover:border-[#1982C4] px-4 py-3 my-8 mx-auto flex items-center ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
