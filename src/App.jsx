import React, { useState, useEffect } from "react";
import Squares from "./componets/background.jsx";
import Navber from "./componets/navber.jsx";
import ReanderButton from "./componets/pageReander.jsx";
import HeroSection from "./componets/herosection.jsx";
import Skills from "./componets/skills.jsx";
import Projects from "./componets/projects.jsx";
import About from "./componets/about.jsx";
import Contact from "./componets/contact.jsx";
import useWindowSize from "./componets/useWindowSize.js";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("Home");
  const [animationDelay, setAnimationDelay] = useState(3);
  const { width } = useWindowSize();
  const isDesktop = width >= 1024;

  useEffect(() => {
    // Reset animation delay to 0 seconds after initial load
    if (animationDelay === 3) {
      setTimeout(() => setAnimationDelay(0), 4000);
    }
  }, [animationDelay]);

  const handleComponentChange = (component) => {
    setActiveComponent(component);
    setAnimationDelay(0); // Set delay to 0 seconds on button click
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "Home":
        return <HeroSection animationDelay={animationDelay} />;
      case "Skills":
        return <Skills />;
      case "Project":
        return <Projects />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      default:
        return <HeroSection animationDelay={animationDelay} />;
    }
  };

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
        <ReanderButton setActiveComponent={handleComponentChange} />
        {isDesktop ? (
          renderComponent()
        ) : (
          <div className="flex flex-col">
            <div className="min-h-screen"><HeroSection animationDelay={animationDelay} /></div>
            <div className="min-h-screen"><Skills /></div>
            <div className="min-h-screen"><Projects /></div>
            <div className="min-h-screen"><About /></div>
            <div className="min-h-screen"><Contact /></div>
          </div>
        )}
      </div>
    </>
  );
};

export default App;

