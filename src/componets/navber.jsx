import React from "react";
import logo from "../assets/logo.jpg";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Navber() {
    return (
        <nav className="absolute flex justify-between h-auto w-full p-5">
            <div>
                <img className="w-18 h-18 rounded-full border-4 border-green-500 object-cover" src={logo} alt="logo" />
            </div>
            <div className="flex items-center justify-center gap-4 text-4xl">
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
        </nav>
    )
}

export default Navber;