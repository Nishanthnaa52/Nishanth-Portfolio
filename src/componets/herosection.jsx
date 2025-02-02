import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";

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
    <div className="flex flex-col py-20 sm:py-10 sm:flex-row items-center justify-center h-fit w-full px-6 mt-10 sm:mt-0 ">

      {/* Profile Image */}
      <motion.div {...getMotionProps(-100, 0, 1, 1.8)} className="flex justify-center w-full sm:w-1/2">
        <motion.img
          className="w-40 h-40 sm:w-70 sm:h-70 lg:w-75 lg:h-75 xl:w-85 xl:h-85 object-cover rounded-full border-4 border-green-500"
          src={myPhoto}
          alt="Nishanth"
        />
      </motion.div>

      {/* Hero Content */}
      <motion.div {...getMotionProps(100, 0, 1, 1.8)} className="font-bold text-center sm:text-left sm:w-1/2 flex flex-col items-center sm:items-start justify-center">
        <p className="text-5xl pt-10 sm:text-7xl text-green-500 hover:text-red-500 hover:tracking-[5px] transition-all duration-300 ease-in-out">
          Nishanth
        </p>
        <p className="text-lg sm:text-xl py-3 text-green-400 hover:text-red-500">
          Frontend Developer <span className="text-gray-500">||</span> Cybersecurity Enthusiast
        </p>
      </motion.div>

    </div>
  );
}

export default HeroSection;
