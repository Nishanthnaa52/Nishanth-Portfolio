import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import projects from '../info.js';

function ProjectCard({ project }) {
    return (
        <motion.div
            className="bg-white shadow-md rounded-lg p-6 mb-6 min-w-[300px] max-w-[300px] h-[400px] mx-2 flex flex-col"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img
                src={project.image}
                alt={project.projectName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-black  text-xl font-bold mb-2">{project.projectName}</h3>
            <p className="text-gray-700 mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                {project.projectAbout}
            </p>
            <div className="mt-auto flex space-x-4">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                        Live Link
                    </button>
                </a>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition duration-300">
                        GitHub Link
                    </button>
                </a>
            </div>
        </motion.div>
    );
}

function Projects() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    return (
        <div className="container mx-auto px-4 py-8 relative">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-4 text-2xl font-bold rounded-full shadow-md hover:bg-green-600 transition duration-300"
                onClick={scrollLeft}
            >
                &lt;
            </button>
            <motion.div
                ref={scrollRef}
                className="flex overflow-x-scroll scrollbar-hide mx-5 sm:mx-10 py-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </motion.div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-4 text-2xl font-bold rounded-full shadow-md hover:bg-green-600 transition duration-300"
                onClick={scrollRight}
            >
                &gt;
            </button>
        </div>
    );
}

export default Projects;
