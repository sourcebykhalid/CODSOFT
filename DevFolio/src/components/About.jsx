import React from "react";

function About() {
  return (
    <div
      id="about"
      className={`flex flex-col justify-start  sm:py-9 bg-white text-gray-900 py-28`}
    >
      <div className="custom-shape-divider-bottom-1715279379">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="px-4 ">
        <h2 className="sm:text-4xl font-bold sm:ml-40 ml-8 bg-black px-2 py-1 w-fit rounded-sm text-gray-400 shadow-md shadow-lime-500">
          About me
        </h2>
      </div>
      <div className="mt-3">
        <div className=" sm:p-12 px-6 sm:px-36 font-semibold mb-8  ">
          <span>
            🎨 Frontend enthusiast with a knack for blending creativity with
            code. Specializing in ReactJS, Redux, JavaScript, Tailwind CSS, and
            more, I bring ideas to life through intuitive user interfaces and
            elegant designs. Let&apos;s collaborate and create something
            extraordinary together!
          </span>
        </div>
        <div className=" flex flex-col relative before:absolute before:top-2 before:left-0 before:bottom-0 before:w-2 before:bg-gray-600 before:rounded-full sm:ml-32 ml-1">
          <div className="sm:ml-4 ml-2 relative ">
            <h3 className=" font-bold absolute text-xl -left-20 translate-y-1">
              2024
            </h3>

            <h2 className="sm:text-2xl font-bold flex justify-start items-center">
              <span className="relative bg-blue-500 rounded-full h-4 w-4 block mx-2 sm:-left-7 -left-5"></span>
              Web Development Intern{" "}
              <span className="  sm:block sm:text-md text-xs font-semibold">
                &nbsp; &nbsp;May 2024 - Present
              </span>
            </h2>
            <h3 className=" sm:text-xl font-semibold mb-2 ml-8">
              Codsoft Technologies
            </h3>
            <span className=" mx-auto px-8 py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              soluta similique eveniet recusandae temporibus numquam magnam
              beatae natus
            </span>
          </div>
          <div className="sm:ml-4 ml-2 relative mt-5">
            <h3 className=" font-bold absolute text-xl -left-20">2024</h3>

            <h2 className="sm:text-2xl font-bold flex justify-start items-center">
              <span className="relative bg-blue-500 rounded-full h-4 w-4 block mx-2 sm:-left-7 -left-5"></span>
              Web Development Intern{" "}
              <span className=" sm:block sm:text-md text-xs font-semibold">
                &nbsp; &nbsp;Apr 2024-May 2024
              </span>
            </h2>
            <h3 className=" sm:text-xl font-semibold mb-2 ml-8">
              Oasis Infobyte
            </h3>
            <span className="ml-8 mx-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              soluta similique eveniet recusandae temporibus numquam magnam
              beatae natus
            </span>
          </div>
          <div className="sm:ml-4 ml-2 relative mt-5">
            <h3 className=" font-bold absolute text-xl -left-20">2021</h3>
            <h2 className="sm:text-2xl font-bold flex justify-start items-center">
              <span className="relative bg-blue-500 rounded-full h-4 w-4 block mx-2 sm:-left-7 -left-5"></span>
              B.tech (ECE){" "}
              <span className="sm:block sm:text-md text-xs font-semibold">
                &nbsp; &nbsp;Aug 2017 - May 2021
              </span>
            </h2>
            <h3 className=" sm:text-xl font-semibold mb-2 ml-8">
              Punjab Technical University
            </h3>
            <span className=" ml-8 mx-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              soluta similique eveniet recusandae temporibus numquam magnam
              beatae natus
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
