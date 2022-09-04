import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/d89292ed-c006-4e06-bd1c-f34fa684203e"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#1982C4] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or send me a direct email:<br></br>
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
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#1982C4] hover:border-[#1982C4] px-4 py-3 my-8 mx-auto flex items-center ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
