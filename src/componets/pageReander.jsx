import React from 'react';
import { motion } from 'framer-motion';

function ReanderButton({ setActiveComponent }) {
  const buttonName = ["Home", "Skills", "Project", "About", "Contact"];

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      className="hidden lg:block" // Show on large screens, hide on smaller ones
    >
      <ul className="flex gap-2 justify-around flex-wrap px-5 sm:px-20 ">
        {buttonName.map((btnName, btnIndex) => (
          <li
            className="my-2 bg-green-500 px-4 py-2 font-medium rounded-md border-green-500 border-1 cursor-pointer flex justify-center sm:justify-around sm:rounded-lg hover:scale-105 transform transition duration-200 ease-in-out active:scale-95"
            key={btnIndex}
            onClick={() => setActiveComponent(btnName)}
          >
            {btnName}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default ReanderButton;