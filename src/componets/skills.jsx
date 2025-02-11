import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
    const skills = [
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS3', icon: 'css' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'React', icon: 'react' },
        { name: 'Python', icon: 'python' },
        { name: 'Django', icon: 'django' },
        { name: 'Tailwind', icon: 'tailwind' },
        { name: 'MySql', icon: 'mysql' },
        { name: 'Figma', icon: 'figma' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Linux', icon: 'linux' },
        { name: 'C', icon: 'c'},
        { name: 'C++', icon: 'cpp'}
  
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <motion.div
            className="flex flex-wrap justify-center items-center gap-4 px-20 py-15"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    className="flex flex-col items-center bg-green-500 text-white p-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 ease-in-out w-32 h-32"
                    variants={itemVariants}
                >
                    <img
                        src={`https://skillicons.dev/icons?i=${skill.icon}`}
                        alt={skill.name}
                        className="w-16 h-16 mb-2"
                    />
                    <div className="text-xl font-semibold px-2">{skill.name}</div>
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Skills;