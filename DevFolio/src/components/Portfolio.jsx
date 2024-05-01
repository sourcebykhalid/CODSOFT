import React from "react";
import KeyMason from "../assets/KeyMason.png";
import DevFolio from "../assets/devfolio.png";
function Portfolio() {
  return (
    <div className="container m-auto sm:w-3/4 sm:mt-16 sm:mb-16">
      <h2 className=" font-bold text-3xl px-10 mb-5">Projects</h2>
      <div className="grid sm:grid-cols-2 px-5 gap-10 ">
        <div className="border border-cyan-300 hover:cursor-pointer  rounded-md p-5">
          <img src={KeyMason} alt="" />
          <h3 className="text-lg font-semibold mt-5">
            KeyMason: A Password Generator App
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            A random password generator app to secure your data, accounts etc
          </p>
          <div className="flex justify-evenly mt-8">
            <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-violet-400 to-cyan-600 hover:text-blue-600 hover:opacity-50  rounded-full">
              <a href="https://keymason.netlify.app/" target="blank">
                Live Preview
              </a>
            </button>
            <button className="px-6 py-2 border rounded-full hover:border-red-500">
              <a
                href="https://github.com/sourcebykhalid/KeyMason-A-Password-Generator-App"
                target="blank"
              >
                Checkout Github
              </a>
            </button>
          </div>
        </div>
        <div className="border border-cyan-300 hover:cursor-pointer  rounded-md p-5">
          <img src={DevFolio} alt="" />
          <h3 className="text-lg font-semibold mt-5">
            DevFolio: A Personal Portfolio Website
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            A Personal portfolio website giving my introduction to people,
            showcasing my skills, and presenting my endeavours which i have
            achieved so far.
          </p>
          <div className="flex justify-evenly mt-3">
            <button className="px-3 sm:px-6py-2 bg-gradient-to-t from-violet-400 to-cyan-600 hover:text-blue-600 hover:opacity-50 rounded-full">
              <a href="https://devfoliobykhalid.netlify.app/" target="blank">
                Live Preview
              </a>
            </button>
            <button className="px-6 py-2 border rounded-full hover:border-red-500">
              <a
                href="https://github.com/sourcebykhalid/KeyMason-A-Password-Generator-App"
                target="blank"
              >
                Checkout Github
              </a>
            </button>
          </div>
        </div>
        <div className="border border-cyan-300 hover:cursor-pointer  rounded-md p-5">
          <img src={DevFolio} alt="" />
          <h3 className="text-lg font-semibold mt-5">
            DevFolio: A Personal Portfolio Website
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            A Personal portfolio website giving my introduction to people,
            showcasing my skills, and presenting my endeavours which i have
            achieved so far.
          </p>
          <div className="flex justify-evenly mt-3">
            <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-violet-400 to-cyan-600 hover:text-blue-600 hover:opacity-50 rounded-full">
              <a href="https://devfoliobykhalid.netlify.app/" target="blank">
                Live Preview
              </a>
            </button>
            <button className="px-6 py-2 border rounded-full hover:border-red-500">
              <a
                href="https://github.com/sourcebykhalid/KeyMason-A-Password-Generator-App"
                target="blank"
              >
                Checkout Github
              </a>
            </button>
          </div>
        </div>
        <div className="border border-cyan-300 hover:cursor-pointer  rounded-md p-5">
          <img src={KeyMason} alt="" />
          <h3 className="text-lg font-semibold mt-5">
            KeyMason: A Password Generator App
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            A random password generator app to secure your data, accounts etc
          </p>
          <div className="flex justify-evenly mt-8">
            <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-violet-400 to-cyan-600 hover:text-blue-600 hover:opacity-50 rounded-full">
              <a href="https://keymason.netlify.app/" target="blank">
                Live Preview
              </a>
            </button>
            <button className="px-6 py-2 border rounded-full hover:border-red-500">
              <a
                href="https://github.com/sourcebykhalid/KeyMason-A-Password-Generator-App"
                target="blank"
              >
                Checkout Github
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
