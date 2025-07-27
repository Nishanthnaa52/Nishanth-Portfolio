import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
    const frontEndSkills = [
        { name: 'HTML5', icon: 'html' },
        { name: 'CSS3', icon: 'css' },
        { name: 'JavaScript', icon: 'js' },
        { name: 'React', icon: 'react' },
        { name: 'Bootstrap', icon: 'bootstrap' },
        { name: 'Tailwind', icon: 'tailwind' },
    ];

    const backEndSkills = [
        { name: 'Python', icon: 'python' },
        { name: 'Django', icon: 'django' },
    ];

    const databaseSkills = [
        { name: 'MySql', icon: 'mysql' },
    ];

    const toolsSkills = [
        { name: 'Figma', icon: 'figma' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'Linux', icon: 'linux' },
        { name: 'VS Code', icon: 'vscode' },
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

    const titleVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1 } },
    };

    const renderSkills = (skills) => (
        <motion.div
            className="flex flex-wrap justify-center items-center gap-4 px-2 sm:px-20 py-15"
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

    return (
        <div>
            <motion.h2 className="text-2xl font-bold text-center text-green-500 pt-10" variants={titleVariants} initial="hidden" animate="visible">
                Front-end Skills
            </motion.h2>
            {renderSkills(frontEndSkills)}

            <motion.h2 className="text-2xl font-bold text-center text-green-500" variants={titleVariants} initial="hidden" animate="visible">
                Back-end Skills
            </motion.h2>
            {renderSkills(backEndSkills)}

            <motion.h2 className="text-2xl font-bold text-center text-green-500" variants={titleVariants} initial="hidden" animate="visible">
                Database Skills
            </motion.h2>
            {renderSkills(databaseSkills)}

            <motion.h2 className="text-2xl font-bold text-center text-green-500" variants={titleVariants} initial="hidden" animate="visible">
                Tools
            </motion.h2>
            {renderSkills(toolsSkills)}
        </div>
    );
}

export default Skills;