import React from "react";
import { Link as ScrollLink } from "react-scroll";
function Footer() {
  return (
    <footer className="bg-black text-white text-center py-4 mt-44 border-t border-lime-400 w-full flex justify-center  items-center gap-x-3">
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Codebykhalid. All Rights Reserved.
      </p>
      <span className="hidden sm:block fixed left-0 bottom-32 bg-lime-400 text-black font-bold sm:px-8 p-1  cursor-pointer  hover:shadow-lime-300  shadow-md sm:text-lg transform transition-colors skew-x-12 skew-y-12 rotate-90 ">
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Hire me!
        </ScrollLink>
      </span>
      <span className="text-black hover:text-white hover:border-b hover:border-lime-400  cursor-pointer bg-lime-400 p-2 rounded-sm shadow-md shadow-orange-400 hidden sm:block w-fit animate-pulse  ">
        <ScrollLink
          to="hero"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-black"
        >
          ▲
        </ScrollLink>
      </span>
    </footer>
  );
}

export default Footer;
