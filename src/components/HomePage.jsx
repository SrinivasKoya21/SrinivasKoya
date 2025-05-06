import React, { useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import srinivaspic from '../assets/images/srinivaspic.jpg';

const HomePage = ({ onGoToPage2, onGoToAbout, onGoToContact }) => {
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    // Scroll to About section
    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll to Contact section
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        // Optional: If you want to trigger scrolls via props
    }, []);

    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to My Portfolio</h1>
                <p className="text-lg text-gray-700 mb-8">
                    Hello, This is Sesha Sai Srinivas. Let me present my portfolio.. 👉
                </p>

                <div
                    ref={aboutRef}
                    className="w-64 h-64 bg-purple-300 rounded-full mx-auto mb-8 overflow-hidden flex items-center justify-center"
                >
                    <img
                        src={srinivaspic}
                        alt="Srinivaspic"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        onClick={onGoToPage2}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center"
                    >
                        Get Started <ChevronRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </div>

            <div ref={contactRef} />
        </div>
    );
};

export default HomePage;
