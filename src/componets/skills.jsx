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

    // Animation variants for staggered entrance
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.12,
                duration: 0.7,
            },
        },
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="flex flex-col sm:flex-row justify-center items-stretch gap-8 pt-10 bg-white rounded-2xl shadow-2xl p-4 mx-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className="flex-1 flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-green-200 px-4 py-4"
                variants={cardVariants}
            >
                <h2 className="text-2xl font-bold text-green-500 mb-4">Front-end Skills</h2>
                <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants}>
                    {frontEndSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white text-green-500 border border-green-300 p-3 rounded-lg shadow hover:bg-green-100 transition duration-300 w-24 h-24"
                            variants={cardVariants}
                            whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(34,197,94,0.15)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.name}
                                className="w-10 h-10 mb-1"
                            />
                            <div className="text-base font-semibold text-center">{skill.name}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                className="flex-1 flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-green-200 px-4 py-4"
                variants={cardVariants}
            >
                <h2 className="text-2xl font-bold text-green-500 mb-4">Back-end Skills</h2>
                <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants}>
                    {backEndSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white text-green-500 border border-green-300 p-3 rounded-lg shadow hover:bg-green-100 transition duration-300 w-24 h-24"
                            variants={cardVariants}
                            whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(34,197,94,0.15)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.name}
                                className="w-10 h-10 mb-1"
                            />
                            <div className="text-base font-semibold text-center">{skill.name}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                className="flex-1 flex flex-col items-center border-b-2 sm:border-b-0 sm:border-r-2 border-green-200 px-4 py-4"
                variants={cardVariants}
            >
                <h2 className="text-2xl font-bold text-green-500 mb-4">Database Skills</h2>
                <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants}>
                    {databaseSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white text-green-500 border border-green-300 p-3 rounded-lg shadow hover:bg-green-100 transition duration-300 w-24 h-24"
                            variants={cardVariants}
                            whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(34,197,94,0.15)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.name}
                                className="w-10 h-10 mb-1"
                            />
                            <div className="text-base font-semibold text-center">{skill.name}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <motion.div
                className="flex-1 flex flex-col items-center px-4 py-4"
                variants={cardVariants}
            >
                <h2 className="text-2xl font-bold text-green-500 mb-4">Tools</h2>
                <motion.div className="flex flex-wrap justify-center gap-4" variants={containerVariants}>
                    {toolsSkills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center bg-white text-green-500 border border-green-300 p-3 rounded-lg shadow hover:bg-green-100 transition duration-300 w-24 h-24"
                            variants={cardVariants}
                            whileHover={{ scale: 1.08, boxShadow: '0 8px 24px rgba(34,197,94,0.15)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                                alt={skill.name}
                                className="w-10 h-10 mb-1"
                            />
                            <div className="text-base font-semibold text-center">{skill.name}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Skills;