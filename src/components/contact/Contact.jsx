import React, { useRef } from "react";
import Lottie from "lottie-react";
import email from "./email.json";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgl0e6g",
        "template_q5j399h",
        form.current,
        "BjOjc216wgOOLIze4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div name="contact" className="w-full lg:h-screen bg-[#EBEFF3]">
      <div className="max-w-screen-2xl mx-auto px-8 lg:flex justify-center items-center h-full py-28">
        <div className="flex flex-col lg:w-1/2">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl font-mono font-bold inline border-b-4 border-pink-600 text-[#35404E]">
                Contact
              </p>
              <p className="text-[#35404E] py-4">
                Submit the form below or shoot me an email -
                farhadtanveer05@gmail.com
              </p>
            </div>
            <input
              className=" p-2"
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              className="my-4 p-2 "
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              className="p-2"
              name="message"
              rows="6"
              placeholder="Message"
            ></textarea>
            <div className=" mt-4">
              <input
                className="btn btn-error normal-case"
                type="submit"
                value="Submit Form"
              />
            </div>
          </form>
        </div>
        <div className="lg:flex justify-center items-center lg:w-1/2">
          <Lottie animationData={email}></Lottie>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
