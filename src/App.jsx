import React from "react";
import { useEffect } from "react";
import Squares from "./componets/background.jsx";
import Navber from "./componets/navber.jsx";
import ReanderButton from "./componets/pageReander.jsx";
import HeroSection from "./componets/herosection.jsx";
//import About from "./componets/about.jsx";


const App = () => {
  useEffect(() => {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
  }, []);

  return (
    <>
      {/* Full-screen background */}
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 z-[-2] ">
        <Squares
          speed={0.2}
          squareSize={60}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="lightgreen"
          hoverFillColor="green"
        />
      </div>

      {/* Content */}
      <div className="relative min-h-screen w-full flex flex-col z-10 text-white overflow-x-hidden">
        <Navber />
        <ReanderButton />
        <HeroSection />    
      </div>
    </>
  );
};

export default App;
