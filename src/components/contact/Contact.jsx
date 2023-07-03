import React from "react";
import Lottie from "lottie-react";
import email from "./email.json";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#EBEFF3]">
      <div className="max-w-screen-2xl mx-auto px-8 lg:flex justify-center items-center h-full py-28">
        <div className="flex flex-col lg:w-1/2">
          <form
            method="POST"
            action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-[#35404E]">
                Contact
              </p>
              <p className="text-[#35404E] py-4">
                // Submit the form below or shoot me an email -
                farhadtanveer05@gmail.com
              </p>
            </div>
            <input
              className=" p-2"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="my-4 p-2 "
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="p-2"
              name="message"
              rows="6"
              placeholder="Message"
            ></textarea>
            <div className=" mt-4">
              <button className="btn btn-error normal-case">Submit Form</button>
            </div>
          </form>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <Lottie animationData={email}></Lottie>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
