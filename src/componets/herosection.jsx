import React from "react";
import { motion } from "framer-motion";

function HeroSection() {
	
	return (
		<motion.div 
		initial={{ x : -100, opacity: 0}}
		animate={{ x : 0, opacity: 1}}
		transition={{ duration : 1, delay: 2.2}}

		className="flux text-8xl">
			<p className="text-center">Hi, I am <spac style={{color: "red"}}>Nishanth</spac></p>
		</motion.div>
	)
}

export default HeroSection;