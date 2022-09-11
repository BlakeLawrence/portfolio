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
        <input
          className="bg-[#1982C4] p-2 rounded-md"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#1982C4] rounded-md"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#1982C4] p-2 rounded-md"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white rounded-md border-[1px] hover:bg-[#1982C4] hover:border-[#1982C4] px-4 py-3 my-8 mx-auto flex items-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
