import React from "react";
import { motion } from "framer-motion";
import TrueFocus from "./focus.jsx";
import myPhoto from "../assets/myPhoto.jpg";

const HeroSection = ({ animationDelay }) => {
  const getMotionProps = (startX, endX, duration = 1, delay = animationDelay) => ({
    initial: { x: startX, opacity: 0 },
    animate: { x: endX, opacity: 1 },
    transition: { duration, delay },
  });

  return (
    <div className="flex items-center justify-center flex-col sm:py-10 sm:flex-row h-fit w-full px-5 mt-10 sm:mt-0 ">

      {/* Profile Image */}
      <motion.div {...getMotionProps(-100, 0)} className="flex justify-center w-full sm:w-1/2">
        <motion.img
          className="w-40 h-40 sm:w-70 sm:h-70 lg:w-75 lg:h-75 xl:w-85 xl:h-85 object-cover rounded-full border-4 border-green-500"
          src={myPhoto}
          alt="Nishanth"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div {...getMotionProps(100, 0)} className="flex flex-col justify-center items-center font-bold  sm:w-1/2">
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
        <a href="https://drive.google.com/file/d/1vOM_Z4Hk4DyDmW623Doe8Id1ec8lgmG9/view?usp=sharing" target="_block">
          <motion.button
            className="mt-5 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
            whileTap={{ scale: 0.95 }}
          >
            My Resume
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
