import React from "react";
import HeroPic from "../assets/HeroPic.jpg";

function Hero() {
  // Define animation options

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center md:p-3 mt-16 sm:mt-28 ">
      <div>
        <div className="m-auto px-4 py-10 flex flex-col gap-2 w-full">
          <h1 className="font-bold sm:text-4xl text-3xl">
            Hello, I&apos;m Khalid Shakeel,
          </h1>
          <h1 className="font-bold sm:text-4xl text-3xl bg-gradient-to-t from-blue-500 to-cyan-800  text-transparent bg-clip-text">
            Frontend developer
          </h1>
          <span className="mt-4 text-gray-400">
            A Passionate Web developer, seeking to apply competent development
            skills <br /> with focus on collaboration, communication, and
            passion.
          </span>
        </div>
      </div>
      <div className=" relative">
        <img
          src={HeroPic}
          alt=""
          className=" rounded-full h-36 w-36 shadow-md shadow-cyan-300 border-2 border-slate-100 relative z-10"
        />
        <span className=" bg-gradient-to-br from-violet-500 to-cyan-600 rounded-full  p-7  h-32 w-32 mt-8 absolute left-10 bottom-3 z-0"></span>
      </div>
    </div>
  );
}

export default Hero;
