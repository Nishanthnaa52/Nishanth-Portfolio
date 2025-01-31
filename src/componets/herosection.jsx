import React from "react";
import { motion } from "framer-motion";
import myPhoto from "../assets/myPhoto.jpg";
 
function HeroSection() {

  const PopAnimation = {
      scale: 1.2,
      color: 'gray',
      transition: {duration : 0.5, delay: 0.2},
      borderColor : "red",
  }

// Function to generate motion properties
const getMotionProps = (startX, endX, duration = 0.5, delay = 0) => ({
  initial: { x: startX, opacity: 0 },
  animate: { x: endX, opacity: 1 },
  transition: { duration, delay },
});

    
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2  h-fit w-full grid-rows-2 p-6 mt-10 sm:mt-20">
        <motion.div 
        {...getMotionProps(-100,0,1.5,3)}
        className="profile-img flex justify-center w-full">
          
          <motion.img 
          whileHover={PopAnimation} 
          className="w-50 h-50 sm:w-70 sm:h-70 object-cover rounded-full border-5 border-green-500" 
          src={myPhoto} 
          alt="myPhoto" />

        </motion.div>

        <motion.div  
        {...getMotionProps(200,0,1.5,3)}
        className="font-bold p-5 basis-128 flex flex-col items-center justify-center w-full">
            
            <p className="title text-7xl text-green-500 hover:text-red-500 tracking-normal hover:tracking-[5px] transition-all duration-300 ease-in-out">Nishanth</p>
            <p className="title text-{16px} text-center py-3 text-green-400 hover:text-red-500">Front-end Developer <span className="text-gray-500">||</span> cybersecurity enthusiast</p>

        </motion.div>
      </div>
    </>
  );
}

export default HeroSection;