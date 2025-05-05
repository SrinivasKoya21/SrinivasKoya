import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Briefcase, Code, Award, Zap } from 'lucide-react'; // Added Zap icon for skills
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';

// Placeholder component for Achievements and Hobbies.  You'll replace this.
const AchievementsAndHobbies = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 rounded-lg bg-white/80 shadow-md border border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Achievements & Hobbies</h3>
            <p className="text-gray-700">
                Here's a list of my achievements and hobbies:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    <strong>Achievement 1:</strong>  Won 100% Scholarship Award for my Academics.
                </li>
                <li>
                    <strong>Hobby 1:</strong>  Working on small projects developing programming skills.
                </li>
                <li>
                    <strong>Hobby 2:</strong>  Playing Badminton.
                </li>
            </ul>
        </motion.div>
    );
};

// Placeholder component for Skills.  You'll replace this.
const Skills = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-6 rounded-lg bg-white/80 shadow-md border border-gray-200"
        >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h3>
            <p className="text-gray-700">
                Here's a list of my skills:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                <li>
                    <strong>Programming Languages:</strong>  JavaScript, Python, C++, Java
                </li>
                <li>
                    <strong>Frameworks/Libraries:</strong>  React, Node.js, Tailwind CSS
                </li>
                <li>
                    <strong>Tools:</strong>  Git, AWS
                </li>
            </ul>
        </motion.div>
    );
};


const DetailsPage = ({ onGoToHome }) => {
    const [activeSection, setActiveSection] = useState('education');
    const containerRef = useRef(null);

    const scrollToContainer = useCallback(() => {
        if (containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    useEffect(() => {
        scrollToContainer();
    }, []);

    const renderContent = () => {
        switch (activeSection) {
            case 'education':
                return <Education />;
            case 'experience':
                return <Experience />;
            case 'projects':
                return <Projects />;
            case 'achievements':
                return <AchievementsAndHobbies />;
            case 'skills': // Added case for skills
                return <Skills />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center justify-start flex-grow p-4 md:p-8">
            <div ref={containerRef} />
            <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8">
                {/* Fixed Circular Buttons Column */}
                <div className="md:w-1/4 flex flex-col items-start space-y-4">
                    <button
                        variant="ghost"
                        size="circle"
                        onClick={() => setActiveSection('education')}
                        className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 border-gray-300"
                        aria-label="Education"
                    >
                        <BookOpen className="w-8 h-8" />
                    </button>
                    <button
                        variant="ghost"
                        size="circle"
                        onClick={() => setActiveSection('experience')}
                        className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2 text-gray-700 hover:bg-green-100 hover:text-green-600 border-gray-300"
                        aria-label="Experience"
                    >
                        <Briefcase className="w-8 h-8" />
                    </button>
                    <button
                        variant="ghost"
                        size="circle"
                        onClick={() => setActiveSection('projects')}
                        className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2 text-gray-700 hover:bg-purple-100 hover:text-purple-600 border-gray-300"
                        aria-label="Projects"
                    >
                        <Code className="w-8 h-8" />
                    </button>
                    <button
                        variant="ghost"
                        size="circle"
                        onClick={() => setActiveSection('achievements')}
                        className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2 text-gray-700 hover:bg-yellow-100 hover:text-yellow-600 border-gray-300"
                        aria-label="Achievements and Hobbies"
                    >
                        <Award className="w-8 h-8" />
                    </button>
                    <button // Added Skills button
                        variant="ghost"
                        size="circle"
                        onClick={() => setActiveSection('skills')}
                        className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 border-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600 border-gray-300"
                        aria-label="Skills"
                    >
                        <Zap className="w-8 h-8" /> {/* Zap icon for skills */}
                    </button>
                </div>

                {/* Content Display Area */}
                <div className="md:w-3/4">
                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                    <div className="mt-8 flex justify-end">
                        <button
                            onClick={onGoToHome}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;
