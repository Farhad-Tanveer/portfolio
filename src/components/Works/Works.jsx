import React from "react";
import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { BsArrowUpRight } from "react-icons/bs";
import img1 from "../../assets/projects/chef-recipe-hunter.png";
import img2 from "../../assets/projects/summer-camp.png";
import img3 from "../../assets/projects/dragon-news.png";

const Works = () => {
  const [projects, setProjects] = useState([]);

  return (
    <div name="works" className=" w-full md:h-screen text-[#35404E]">
      <div className=" max-w-[1200px] mx-auto p-4">
        <div className=" grid lg:grid-cols-2 pt-20">
          <h1 className=" text-5xl font-poppins font-bold">
            Look at my <br /> recent projects{" "}
          </h1>
          {/* <div>
            <Tabs>
              <TabList>
                <div className="flex justify-center items-center gap-6 mt-10">
                  <Tab>
                    <button className="btn btn-accent rounded-full">
                      All <BsArrowUpRight />
                    </button>{" "}
                  </Tab>
                  <Tab>
                    <button className="btn btn-accent rounded-full">
                      Basic <BsArrowUpRight />
                    </button>
                  </Tab>
                  <Tab>
                    <button className="btn btn-accent rounded-full">
                      MERN <BsArrowUpRight />
                    </button>
                  </Tab>
                </div>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
            </Tabs>
          </div> */}
        </div>
        <div>
          <div className="card lg:card-side bg-base-100 mt-20">
            <figure className=" w-[600px] h-[400px]">
              <div className="rounded-xl overflow-hidden">
                <img
                  className="object-top hover:object-bottom duration-700 "
                  src={img1}
                  alt="Album"
                />
              </div>
            </figure>
            <div className="card-body ml-32">
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Listen</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
