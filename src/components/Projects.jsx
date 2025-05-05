import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 rounded-lg bg-white/80 shadow-md border border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Projects</h3>
            <p className="text-gray-700">
                Here are some of the projects I have worked on:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    <strong>Project 1:</strong> AI Powered Attendance Capturing System using AWS
                </li>
                <li>
                    <strong>Description:</strong> Developed a fully automated attendance capturing system using face recognition,
                                          integrated the backend services with AWS - DynamoDB, S2 Bucket, API gateway and Lambda Functions
                </li>
                <li>
                    <strong>Technologies Used:</strong> AWS Web Services
                </li>
                <li>
                    <strong>Github: </strong>
                    <a
                        href="https://github.com/SrinivasKoya/AI-Powered-Attendance-Capturing-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 visited:text-purple-600 underline" // Added styling
                    >
                        AI-Powered-Attendance-Capturing-System
                    </a>
                </li>
            </ul>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    <strong>Project 2:</strong> Social Distance Capturing System
                </li>
                <li>
                    <strong>Description:</strong> At the time of Covid I developed a Social Distance Capturing System
                </li>
                <li>
                    <strong>Technologies Used:</strong> Python, CMake, CV2
                </li>
                <li>
                    <strong>Github: </strong>
                    <a
                        href="https://github.com/SmartPracticeschool/SPS-3014-Social-Distancing-Alert-System"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 visited:text-purple-600 underline" // Added styling
                    >
                        Social Distance Capturing
                    </a>
                </li>
            </ul>
        </motion.div>
    );
};

export default Projects;
