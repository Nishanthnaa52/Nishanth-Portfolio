import React from 'react';
import { motion } from 'framer-motion';
import projects from '../info.js';

function ProjectCard({ project }) {
    if (!project.liveLink && !project.githubLink) {
        return <div className="bg-white shadow-md rounded-lg p-6 mb-6 min-w-[300px] max-w-[300px] h-[400px] mx-2 flex flex-col"></div>;
    }

    return (
        <motion.div
            className="bg-white shadow-md rounded-lg p-6 mb-6 min-w-[300px] max-w-[300px] h-[400px] mx-2 flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-black text-xl font-bold mb-2">{project.projectName}</h3>
            <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {project.projectAbout}
            </p>
            <div className="mt-auto flex space-x-4">
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                            Live Link
                        </button>
                    </a>
                )}
                {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300">
                            GitHub Link
                        </button>
                    </a>
                )}
            </div>
        </motion.div>
    );
}

function Projects() {
    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="flex flex-wrap justify-center mt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {projects.map((project, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <ProjectCard project={project} />
                </motion.div>
            ))}
        </motion.div>
    );
}

export default Projects;