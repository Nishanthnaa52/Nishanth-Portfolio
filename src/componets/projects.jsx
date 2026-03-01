import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projects from '../info.js';
import './projects.css';

function ProjectCard({ project, onClick }) {
    if (!project.liveLink && !project.githubLink) {
        return <div className="bg-white shadow-md rounded-lg p-6 mb-6 min-w-[calc(100%-1rem)] max-w-[calc(100%-1rem)] h-[400px] mx-2 flex flex-col sm:min-w-[300px] sm:max-w-[300px]"></div>;
    }

    return (
        <motion.div
            className="bg-white shadow-md rounded-lg p-6 w-[300px] h-[400px] mx-2 flex flex-col cursor-pointer"
            whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(34,197,94,0.18)' }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClick}
        >
            <motion.img
                src={project.image}
                alt={project.projectName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />
            <h3 className="text-black text-xl font-bold mb-2">{project.projectName}</h3>
            <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {project.projectAbout}
            </p>
            <div className="mt-auto flex space-x-4">
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <motion.button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            Live Link
                        </motion.button>
                    </a>
                )}
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <motion.button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}>
                            GitHub Link
                        </motion.button>
                    </a>
                )}
            </div>
        </motion.div>
    );
}

function ProjectPopup({ project, onClose }) {
    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-70 flex justify-center items-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
        >
            <motion.div
                className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
            >
                <motion.button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                    whileHover={{ scale: 1.2, color: '#22c55e' }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </motion.button>
                <motion.img
                    src={project.image}
                    alt={project.projectName}
                    className="w-full h-64 object-cover rounded-t-lg mb-4"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />
                <h3 className="text-black text-2xl font-bold mb-4">{project.projectName}</h3>
                <p className="text-gray-700 mb-6">{project.projectAbout}</p>
                <div className="flex space-x-4 flex-wrap">
                    {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="mb-2">
                            <motion.button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                Live Link
                            </motion.button>
                        </a>
                    )}
                    {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="mb-2">
                            <motion.button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}>
                                GitHub Link
                            </motion.button>
                        </a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleClosePopup = () => {
        setSelectedProject(null);
    };

    // Staggered entrance for project cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.13,
                duration: 0.7,
            },
        },
    };

    return (
        <div>
            <motion.h2 
                className="text-3xl font-bold text-center text-green-500 pt-10" 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
            >
                Projects
            </motion.h2>
            <motion.div className="pt-10" variants={containerVariants} initial="hidden" animate="visible">
                <div className="flex flex-wrap justify-center gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} onClick={() => handleProjectClick(project)} />
                    ))}
                </div>
            </motion.div>
            <AnimatePresence>
                {selectedProject && (
                    <ProjectPopup project={selectedProject} onClose={handleClosePopup} />
                )}
            </AnimatePresence>
        </div>
    );
}

export default Projects;