import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Briefcase, Code, ChevronRight, Menu, X } from 'lucide-react';

// Reusable components
const Navbar = ({ onGoToPage2, onGoToHome, onGoToAbout, onGoToContact }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-4 rounded-b-lg shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="#" className="text-xl font-bold">My Portfolio</a>
                    <div className="hidden md:flex space-x-4">
                        <button
                            variant="ghost"
                            className="text-white hover:bg-white/20 px-4 py-2 rounded"
                            onClick={() => {
                                if (onGoToHome) {
                                    onGoToHome();
                                }
                            }}
                        >
                            Home
                        </button>
                        <button
                            variant="ghost"
                            className="text-white hover:bg-white/20 px-4 py-2 rounded"
                            onClick={() => {
                                if (onGoToAbout) {
                                    onGoToAbout();
                                }
                            }}
                        >
                            About
                        </button>
                        <button
                            variant="ghost"
                            className="text-white hover:bg-white/20 px-4 py-2 rounded"
                            onClick={() => {
                                if (onGoToContact) {
                                    onGoToContact();
                                }
                            }}
                        >
                            Contact
                        </button>
                        {onGoToPage2 && (
                            <button
                                onClick={onGoToPage2}
                                className="bg-white/20 hover:bg-white/30 text-white border-white/30 px-4 py-2 rounded"
                            >
                                 Go to Details
                            </button>
                        )}
                    </div>
                    <div className="md:hidden">
                        <button
                            variant="ghost"
                            className="text-white"
                            onClick={handleMenuClick}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-indigo-500/90 backdrop-blur-md text-white p-4 space-y-4 rounded-b-lg shadow-md"
                    >
                        <button
                            variant="ghost"
                            className="text-white hover:bg-white/20 w-full text-left px-4 py-2 rounded"
                            onClick={() => {
                                setIsMenuOpen(false);
                                if (onGoToHome) {
                                     onGoToHome();
                                }
                            }}
                        >
                            Home
                        </button>
                        <button
                            variant="ghost"
                            className="text-white hover:bg-white/20 w-full text-left px-4 py-2 rounded"
                            onClick={() => {
                                setIsMenuOpen(false);
                                if (onGoToAbout) {
                                     onGoToAbout();
                                }
                            }}
                        >
                            About
                        </button>
                        <button
                            variant="ghost"
                            className="text-white hover:bg-white/20 w-full text-left px-4 py-2 rounded"
                            onClick={() => {
                                setIsMenuOpen(false);
                                if (onGoToContact) {
                                     onGoToContact();
                                }
                            }}
                        >
                            Contact
                        </button>
                        {onGoToPage2 && (
                            <button
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    onGoToPage2();
                                }}
                                className="bg-white/20 hover:bg-white/30 text-white border-white/30 w-full text-left px-4 py-2 rounded"
                            >
                                Go to Details
                            </button>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;