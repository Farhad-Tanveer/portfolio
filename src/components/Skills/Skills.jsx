import React from "react";

import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import FireBase from "../../assets/firebase.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Mongo from "../../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#EBEFF3] text-[#35404E]">
      {/* Container */}
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className=" bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={HTML}
              alt="HTML icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={CSS}
              alt="CSS icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={JavaScript}
              alt="JavaScript icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={ReactImg}
              alt="React icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={Tailwind}
              alt="Tailwind icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={Mongo}
              alt="Mongodb icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={Node}
              alt="node.js icon"
            />
          </div>
          <div className="bg-white flex justify-center items-center rounded-full shadow-md hover:shadow-lg transition duration-300">
            <img
              className="object-cover w-30 h-full p-10"
              src={FireBase}
              alt="Firebase icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
