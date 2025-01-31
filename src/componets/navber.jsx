import React from "react";
import logo from "../assets/logo.svg";
import "../css/Navbar.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Navber() {
    const PopAnimation = {
                    scale: 1.2,
                    color: 'gray',
                    transition: {duration : 0.1}
                }

    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration : 1, delay: 1.5}}
            className="flex justify-between h-fit w-full p-5">
            <div className="flex items-center justify-center">
                <motion.img 
                whileHover={{
                    rotate: 360,
                    borderColor: "red",
                    scale: 1.2,
                    transition: {duration : 0.5, delay : .2}
                }}
                
                className="w-13 h-13 rounded-full border-4 border-green-500 object-cover" src={logo} alt="logo" />
                <p className="text-green-500 sm:text-2xl text-1xl font-bold px-5 tracking-normal hover:tracking-[5px] transition-all duration-300 ease-in-out">Nishanth Dev</p>
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl">
                <motion.a 
                whileHover={PopAnimation}
                className="px-2" href="https://github.com/Nishanthnaa52/" target="_blank" rel="github-link">
                    <FaGithub />
                </motion.a >
                <motion.a 
                whileHover={PopAnimation}
                className="px-2" href="https://www.instagram.com/nishanth_naa_52 " target="_blank" rel="Instagram-link">
                    <FaInstagram />
                </motion.a>
                <motion.a
                whileHover={PopAnimation}
                className="px-2" href="https://www.linkedin.com/in/nishanthnaa52/" target="_blank" rel="Linkedin-link">
                    <FaLinkedin />
                </motion.a>
            </div>
        </motion.nav>
    )
}

export default Navber;
