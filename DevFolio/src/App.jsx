import React from "react";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col  justify-center items-center ">
      <h1 className="text-3xl sm:text-6xl md:text-9xl text-slate-800 font-bold">
        DevFolio
      </h1>
      <span className=" text-lg sm:text-2xl md:text-4xl text-emerald-600 font-semibold">
        Frontend Engineer | Programmer
      </span>
      <Hero />
    </div>
  );
}

export default App;
