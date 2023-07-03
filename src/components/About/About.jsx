import React from "react";
import Lottie from "lottie-react";
import about from "./about.json";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const About = () => {
  return (
    <div
      name="about"
      className="w-full lg:h-screen bg-white text-[#35404E] font-poppins"
    >
      <div className="max-w-screen-2xl mx-auto px-8 lg:flex justify-center items-center h-full py-20">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex justify-center items-center w-full">
            <div>
              <Lottie animationData={about}></Lottie>
            </div>
          </div>
          <div className=" mt-20">
            <p className="text-6xl font-mono font-bold text-[#35404E]">
              About Me
            </p>
            <p className=" text-gray-500 mt-5 font-mono">
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.
            </p>
            <Tabs>
              <TabList>
                <div className="gap-3 mt-6">
                  <Tab>
                    <button className=" ">Main Skills</button>
                  </Tab>
                  <Tab>
                    <button className="">Courses</button>
                  </Tab>
                  <Tab>
                    <button className="">Education</button>
                  </Tab>
                </div>
              </TabList>
              <TabPanel>
                <div className=" font-sans font-light my-5">
                  <h2 className=" text-gray-500">
                    <span className=" text-gray-700 font-semibold">
                      Web and user interface design
                    </span>{" "}
                    - Development
                  </h2>
                  <p className=" text-gray-500">
                    Websites, web experiences, ...
                  </p>
                </div>
                <div className="font-sans font-light">
                  <h2 className=" text-gray-500">
                    <span className=" text-gray-700 font-semibold">
                      Interaction design
                    </span>{" "}
                    - Animation
                  </h2>
                  <p className=" text-gray-500">I like to move it move it.</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" font-sans font-light my-5">
                  <h2 className=" text-gray-500">
                    <span className=" text-gray-700 font-semibold">
                      Complete Web Development Course
                    </span>{" "}
                    - Programming Hero
                  </h2>
                  <p className=" text-gray-500">Jan-2023 - Jun-2023</p>
                </div>
                <div className="font-sans font-light">
                  <h2 className=" text-gray-500">
                    <span className=" text-gray-700 font-semibold">
                      Complete Web Development Course
                    </span>{" "}
                    - Programming Hero
                  </h2>
                  <p className=" text-gray-500">Jan-2023 - Jun-2023</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className=" font-sans font-light my-5">
                  <h2 className=" text-gray-500">
                    <span className=" text-gray-700 font-semibold">
                      Msc In CSE
                    </span>{" "}
                    - Hochschule Rhein Waal, Germany
                  </h2>
                  <p className=" text-gray-500">2020 - Running</p>
                </div>
                <div className="font-sans font-light">
                  <h2 className=" text-gray-500">
                    <span className=" text-gray-700 font-semibold">
                      Bsc In CSE
                    </span>{" "}
                    - Daffodil International University, Dhaka
                  </h2>
                  <p className=" text-gray-500">2015 - 2018</p>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
