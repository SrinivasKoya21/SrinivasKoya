import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 rounded-lg bg-white/80 shadow-md border border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Education</h3>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Masters</h4> {/* Changed to text-lg and adjusted styling */}
            <p className="text-gray-700">
                I am currently pursuing my Master's degree in Computer Science from Auburn University Montgomery.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>University:</strong> Auburn University Montgomery (2023-Present)</li>
                <li><strong>Degree:</strong> Masters in Computer Science</li>
                <li><strong>Relevant Coursework:</strong> Advanced Data Structures Algorithms, Web Development, Advanced Database Systems</li>
            </ul>
            <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Bachelors</h4> {/* Changed to text-lg and adjusted styling and added mt-4 */}
            <p className="text-gray-700">
                I have a Bachelor's degree in Computer Science from Amity University Lucknow.
                I also completed several online courses in web development and
                machine learning.
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li><strong>University:</strong> Amity University (2017-2021)</li>
                <li><strong>Degree:</strong> Bachelor of Technology in Computer Science</li>
                <li><strong>Relevant Coursework:</strong> Data Structures, Algorithms, Web Development, Database Systems</li>
            </ul>
        </motion.div>
    );
};

export default Education;
