import React from "react";
import Squares from "./componets/background.jsx";
import Navber from "./componets/navber.jsx";

const App = () => {
  return (
    <div className="h-screen w-screen relative bg-gray-900">
      {/* Squares Background */}
      <Squares 
        speed={0.2} 
        squareSize={60}
        direction='diagonal' // up, down, left, right, diagonal
        borderColor='lightgreen'
        hoverFillColor='green'
      />

      {/* Content */}
      <div className="container absolute inset-0 flex justify-center z-10 text-white mx-auto">
         <Navber />
      </div>
    </div>
  );
};  

export default App;
