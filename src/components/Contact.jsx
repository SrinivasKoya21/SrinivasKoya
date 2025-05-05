import React from 'react';
import { Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-[var(--color-dark)] text-white py-12 px-6 md:px-12 lg:px-24 border-t border-gray-700 hover:bg-gray-800 transition duration-300 rounded-t-md" // Added hover effect and rounded top
    >
      <div className="max-w-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="mb-3">Feel free to reach out!</p>
        <div className="flex justify-center gap-8 mb-4">
          <div>
            <p className="font-semibold text-lg">Phone:</p>
            <p className="text-gray-300">+1234567890</p>
          </div>
          <div>
            <p className="font-semibold text-lg">Email:</p>
            <p className="text-gray-300">srinivaskoya21.com</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://linkedin.com"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-200" // Added transition
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center transition duration-200" // Added transition
          >
            <Instagram className="w-5 h-5 mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}