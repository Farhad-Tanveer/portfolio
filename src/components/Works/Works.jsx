import React, { useEffect } from "react";
import { useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import { BsArrowUpRight } from "react-icons/bs";
import { FaGithub, FaLine, FaLink } from "react-icons/fa";
import img1 from "../../assets/projects/chef-recipe-hunter.png";
import sheba from "../../assets/projects/shebaxyz.png";
import img2 from "../../assets/projects/summer-camp.png";
import img3 from "../../assets/projects/career-hub.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div name="works" className=" w-full py-20  text-[#35404E]">
      <div className=" max-w-[1200px] mx-auto p-4">
        <div className=" grid lg:grid-cols-2">
          <h1 className=" text-5xl font-mono font-bold">
            Look at my <br /> recent projects{" "}
          </h1>
        </div>
        <div>
          {/* first project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px] transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={sheba}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="card-body lg:w-1/2 lg:ml-20">
              <h2 className="card-title">Sheba</h2>
              <p>
                Introducing 'sheba' – a responsive on-demand service platform.
                Tailored for convenience frontend design ensures a user-friendly
                experience, making it effortless for users to access and request
                home-based services.{" "}
              </p>
              <div className="lg:flex  gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  tailwind CSS
                </button>
              </div>
              <div className="flex gap-2">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/farhadtanveer/sheba"
                    target="_blank"
                  >
                    Github
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a href="https://shebaxyz.netlify.app/" target="_blank">
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
          </div>
          {/* second project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">Sporty Summer</h2>
              <p>
                This is a sports academy website project designed for a summer
                camp school. The website aims to provide a platform for students
                to enroll and learn various sports activities.{" "}
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  MongoDB
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ExpressJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  NodeJs
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/Farhad-Tanveer/summer-camp-client"
                    target="_blank"
                  >
                    Client
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/Farhad-Tanveer/summer-camp-server"
                    target="_blank"
                  >
                    Server
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a href="https://summer-camp-b9765.web.app/" target="_blank">
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img2}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
          {/* third project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-full transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img1}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
            <div className="card-body lg:w-1/2 lg:ml-20">
              <h2 className="card-title">Foodism</h2>
              <p>
                Foodism is a website dedicated to showcasing Chinese recipes. It
                serves as a platform for renowned Chinese chefs to share their
                culinary expertise and authentic Chinese dishes.{" "}
              </p>
              <div className="lg:flex  gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  MongoDB
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ExpressJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  NodeJs
                </button>
              </div>
              <div className="flex gap-2">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/Farhad-Tanveer/chef-recipe-hunter-client"
                    target="_blank"
                  >
                    Client
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/Farhad-Tanveer/chef-recipe-hunter-server"
                    target="_blank"
                  >
                    Server
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://chef-recipe-hunter-c1208.web.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
          </div>

          {/* forth project */}
          <div
            className="card lg:card-side bg-base-100 mt-20"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <div className="card-body pl-0 lg:w-1/2">
              <h2 className="card-title">Dream Career</h2>
              <p>
                'Dream Career' – a sleek job-searching website. Navigate
                opportunities effortlessly with its intuitive frontend design.
                Your next career move is just a click away!
              </p>
              <div className="lg:flex gap-2 mb-7">
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  JavaScript
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  ReactJs
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  Tailwind
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  HTML5
                </button>
                <button className=" btn btn-sm normal-case mr-2 mb-2">
                  CSS
                </button>
              </div>
              <div className="flex gap-3">
                <button className=" btn normal-case">
                  <a
                    href="https://github.com/Farhad-Tanveer/career-hub"
                    target="_blank"
                  >
                    Client
                  </a>
                  <FaGithub></FaGithub>
                </button>
                <button className=" btn normal-case">
                  <a
                    href="https://effulgent-rabanadas-271b23.netlify.app/"
                    target="_blank"
                  >
                    Live Site
                  </a>
                  <FaLink></FaLink>
                </button>
              </div>
            </div>
            <div className="relative max-w-full h-80 overflow-hidden rounded-lg">
              <div className="h-max w-[600px]  transition-transform duration-[5000ms] ease-linear transform translate-y-0 hover:-translate-y-[calc(100%-18rem)] rounded-lg">
                <img
                  src={img3}
                  alt=""
                  className="w-full object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
