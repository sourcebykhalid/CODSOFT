import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center mx-auto px-4 py-5 sticky top-0 w-full z-20 bg-black border-b-1 border-gray-300">
      <div>
        <h1 className=" font-bold text-2xl ">Khalid</h1>
      </div>
      <nav>
        <ul className=" flex justify-center sm:gap-x-4 gap-x-2 font-semibold">
          <li className=" text-gray-400 hover:text-white cursor-pointer">
            About
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer">
            Portfolio
          </li>
          <li className=" text-gray-400 hover:text-white cursor-pointer">
            Technologies
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
