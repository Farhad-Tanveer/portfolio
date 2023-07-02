import React from "react";
import { HiArrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#EBEFF3]">
      {/* container */}
      <div className=" max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className=" text-xl text-[#DC4970] font-poppins font-bold">
          Front-End Developer
        </h2>
        <p className=" text-4xl sm:text-5xl font-poppins font-bold text-[#35404E]">
          Hello my name is
        </p>
        <h1 className=" text-4xl sm:text-5xl font-poppins font-bold text-[#35404E]">
          {" "}
          Mohammad <br /> Farhad Tanveer
        </h1>

        <p className=" text-gray-500 py-4 max-w-[500px] ">
          I am a passionate junior front-end developer with a keen eye for
          design and a drive to create seamless, interactive web experiences.
        </p>
        <div>
          <button className=" btn btn-error text-white">
            View Work <HiArrowRight></HiArrowRight>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
