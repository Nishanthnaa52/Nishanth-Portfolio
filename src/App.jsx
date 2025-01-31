import React from "react";
import { useEffect } from "react";
import Squares from "./componets/background.jsx";
import Navber from "./componets/navber.jsx";
import HeroSection from "./componets/herosection.jsx";

const App = () => {
    useEffect(() => {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
  }, []);

  return (
    <>
    <div className="min-h-screen overflow-hidden bg-black absolute h-screen w-screen bg-gray-900 z-[-2]">
      {/* Squares Background */}
      <Squares 
        speed={0.2} 
        squareSize={60}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='lightgreen'
        hoverFillColor='green'
      />

      {/* Content */}
      <div className="container  h-full w-full absolute inset-0 flex flex-col z-10 text-white mx-auto">
         <Navber />
         <HeroSection />
      </div>


    </div>

    
    </>
  );
};  

export default App;
