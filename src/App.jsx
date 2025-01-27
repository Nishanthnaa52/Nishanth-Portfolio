import React from "react";
import Squares from "./componets/background.jsx"
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
      <div className="absolute inset-0 flex items-center justify-center z-10 text-white">
        <h1 className="text-4xl font-bold">Hi, I am Nishanth</h1>
      </div>
    </div>
  );
};  

export default App;
