import React from 'react';
import Experience from './Experience'; // Import the Experience component

const About = () => {
  return (
      <section
          id="about"
          className="py-16 bg-white border border-gray-300 rounded-md shadow-md overflow-y-auto h-screen hover:shadow-lg transition duration-300" // Added border, hover effect, and transition
      >
          <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row gap-10 items-start">
              {/* Education (Left on larger screens) */}
              <div className="md:w-1/4">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Education</h3>
                  <div className="overflow-x-auto border border-gray-200 rounded"> {/* Added border to the table container */}
                      <table className="min-w-full border-collapse border border-gray-300">
                          <thead>
                              <tr className="bg-gray-200">
                                  <th className="border border-gray-300 px-4 py-2 font-semibold text-left text-gray-700">Education</th>
                                  <th className="border border-gray-300 px-4 py-2 font-semibold text-left text-gray-700">School</th>
                                  <th className="border border-gray-300 px-4 py-2 font-semibold text-left text-gray-700">Year</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2 text-gray-700">High School</td>
                                  <td className="border border-gray-300 px-4 py-2 text-gray-700">St Xavier EM High School</td>
                                  <td className="border border-gray-300 px-4 py-2 text-gray-700">2015</td>
                              </tr>
                              <tr>
                                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Undergraduate in Computer Science</td>
                                  <td className="border border-gray-300 px-4 py-2 text-gray-700">Amity University Lucknow</td>
                                  <td className="border border-gray-300 px-4 py-2 text-gray-700">2021</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>

              {/* About Me Paragraph (Middle on larger screens) */}
              <div className="md:w-1/2 text-center border border-gray-200 rounded p-6"> {/* Added border and padding */}
                  <h2 className="text-3xl font-semibold mb-4 text-gray-800">About Me</h2>
                  <p className="text-lg text-gray-700 mb-6">
                      I am a dedicated and skilled full-stack developer currently seeking exciting opportunities within a reputable company. I possess a comprehensive skillset and a strong drive to contribute meaningfully to innovative projects.
                  </p>
              </div>

              {/* Experience (Right and below on larger screens) */}
              <div className="md:w-1/4 border border-gray-200 rounded p-6"> {/* Added border and padding */}
                  <Experience />
              </div>
          </div>
      </section>
  );
}

export default About;