import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";
import TrueFocus from "./focus.jsx";

function HeroSection() {
  const PopAnimation = {
    scale: 1.2,
    color: "gray",
    transition: { duration: 0.5, delay: 0.2 },
    borderColor: "red",
  };

  // Function to generate motion properties
  const getMotionProps = (startX, endX, duration = 0.5, delay = 0) => ({
    initial: { x: startX, opacity: 0 },
    animate: { x: endX, opacity: 1 },
    transition: { duration, delay },
  });

  return (
    <div className="flex items-center justify-center flex-col sm:py-10 sm:flex-row h-fit w-full px-5 mt-10 sm:mt-0 ">

      {/* Profile Image */}
      <motion.div {...getMotionProps(-100, 0, 1, 3.5)} className="flex justify-center w-full sm:w-1/2">
        <motion.img
          className="w-40 h-40 sm:w-70 sm:h-70 lg:w-75 lg:h-75 xl:w-85 xl:h-85 object-cover rounded-full border-4 border-green-500"
          src={myPhoto}
          alt="Nishanth"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div {...getMotionProps(100, 0, 1, 3.5)} className="flex flex-col justify-center items-center font-bold  sm:w-1/2">
        <p className="text-5xl sm:text-7xl text-green-500 hover:text-red-500 hover:tracking-[5px] transition-all duration-300 ease-in-out">
          Nishanth
        </p>
        <TrueFocus
          sentence="Frontend-Developer Cybersecurity-Enthusiast"
          manualMode={false}
          blurAmount={8}
          borderColor="red"
          animationDuration={1}
          pauseBetweenAnimations={1}
        />
        <button
          className="mt-5 sm:mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
          onClick={() => window.open("https://drive.google.com/file/d/1khmNuxfafWahXOmm-Ewm9YmSWbJAZ0Gr/view?usp=sharing")}
        >
          <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Resume
          </span>
        </button>
      </motion.div>

    </div>
  );
}

export default HeroSection;
