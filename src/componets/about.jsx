import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

function About() {
	// Animation properties
	const fadeIn = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	return (
		<div className="flex flex-col sm:flex-row items-center justify-center h-fit w-full px-6 py-40 sm:py-20">

			{/* About Content */}
			<motion.div
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.6 }}
				className="text-center sm:ml-15 sm:text-left sm:w-1/2 p-10 "
			>
				<h1 className="inline text-4xl sm:text-5xl font-bold text-green-500 hover:text-red-500 transition-all duration-300 ease-in-out pb-10">
					About Me
				</h1>
				<p className="text-lg sm:text-xl text-green-400 mt-4">
					Hello, I'm <span className="text-green-500 font-semibold">Nishanth</span>, a passionate Frontend Developer and Tech Enthusiast with a strong foundation in Python and web application development.
				</p>
				<p className="text-lg sm:text-xl text-green-500 mt-4">
					Currently pursuing my Engineering, I am deeply interested in Linux, open-source contributions, and exploring the fascinating world of cybersecurity.
				</p>
			</motion.div>

			{/* About Image */}
			<motion.div
				variants={fadeIn}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.6 }}
				className="flex justify-center w-full sm:w-1/2 mt-10 sm:mt-0"
			>
				<motion.img
					className="w-40 h-40 sm:w-60 sm:h-60 object-cover rounded-[50px] border-4 border-green-500"
					src={logo}
					alt="About Me"
				/>
			</motion.div>

		</div>
	);
}

export default About;
