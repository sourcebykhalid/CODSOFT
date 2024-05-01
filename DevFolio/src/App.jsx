import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="bg-black text-white h-full">
      <Navbar />
      <Hero />
      <Portfolio />
      <Tech />
    </div>
  );
}

export default App;
