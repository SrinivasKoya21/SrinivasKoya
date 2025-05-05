import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 rounded-lg bg-white/80 shadow-md border border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Experience</h3>
            <p className="text-gray-700">
                I have worked as a QA Tester for two years.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    <strong>Company:</strong> Accenture. (2021-2023)
                </li>
                <li>
                    <strong>Position:</strong> QA Testing
                </li>
                <li>
                    <strong>Responsibilities:</strong> - Reviewing and analyzing system specifications to understand requirements.
                                                       - Collaborating with developers to create effective testing strategies.
                                                       - Executing test cases (manual or automated) and analyzing results.

                </li>
            </ul>
        </motion.div>
    );
};

export default Experience;

