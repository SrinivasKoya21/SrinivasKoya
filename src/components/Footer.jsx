import React, { useState } from 'react';
import { Linkedin, Instagram, Mail, Phone } from 'lucide-react'; // Import icons

const Footer = () => {
  const [showDialog, setShowDialog] = useState(false);

  const handleContactClick = () => {
    setShowDialog(true);
    setTimeout(() => setShowDialog(false), 3000); // Auto-hide after 3 seconds
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 rounded-t-lg shadow-md">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6"> {/* Use flex for icon spacing */}
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors" // Added hover effect
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" /> {/* Use the LinkedIn icon */}
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors"  // Added hover effect
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" /> {/* Use the Instagram icon */}
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-green-400 transition-colors" // Added hover effect
            aria-label="Email"
          >
            <Mail className="w-6 h-6" /> {/* Use the Mail icon */}
          </a>
          <button
            onClick={handleContactClick}
            className="hover:text-yellow-400 transition-colors" // Added hover effect
            aria-label="Contact"
          >
            <Phone className="w-6 h-6" /> {/* Use the Phone icon */}
          </button>
        </div>
        <div>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</div>
      </div>

      {showDialog && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-4 rounded shadow-lg z-50">
          📞 Contact Number: +123456789
        </div>
      )}
    </footer>
  );
};

export default Footer;
