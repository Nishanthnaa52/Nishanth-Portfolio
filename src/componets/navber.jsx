import React from "react";
import logo from "../assets/logo.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Navber() {
    return (
        <motion.nav 
            initial={{ y: -100, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration : 1, delay: 1.5}}
            className="flex justify-between h-fit w-full p-5">
            <div>
                <img className="w-18 h-18 rounded-full border-4 border-green-500 object-cover" src={logo} alt="logo" />
            </div>
            <div className="flex justify-center gap-4 text-4xl">
                <a className="px-2" href="https://github.com/Nishanthnaa52/" target="_blank" rel="github-link">
                    <FaGithub />
                </a >
                <a className="px-2" href="https://www.instagram.com/nishanth_naa_52 " target="_blank" rel="Instagram-link">
                    <FaInstagram />
                </a>
                <a className="px-2" href="https://www.linkedin.com/in/nishanthnaa52/" target="_blank" rel="Linkedin-link">
                    <FaLinkedin />
                </a>
            </div>
        </motion.nav>
    )
}

export default Navber;