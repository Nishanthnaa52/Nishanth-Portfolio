import React from "react";
import Squares from "./componets/background.jsx";
import Navber from "./componets/navber.jsx";
import HeroSection from "./componets/herosection.jsx";

const App = () => {
  return (
    <>
    <div className=" relative h-screen w-screen bg-gray-900">
      {/* Squares Background */}
      <Squares 
        speed={0.2} 
        squareSize={60}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='lightgreen'
        hoverFillColor='green'
      />

      
    </div>

    {/* Content */}
      <div className="container absolute inset-0 flex flex-col z-10 text-white mx-auto">
         <Navber />
         <HeroSection />
      </div>
    </>
  );
};  

export default App;
