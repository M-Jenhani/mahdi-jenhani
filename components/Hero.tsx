'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden"
    >
      {/* Animated decorative elements - moved to top with lower z-index */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse -z-10"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse -z-10"></div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse -z-10"></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-2xl bg-blue-600/20">
              {/** Robust fallback: render inline SVG when image missing or fails **/}
              {(() => {
                const [imgError, setImgError] = useState(false);
                return imgError ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
                    <rect fill="#2563eb" width="200" height="200" />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="80" fill="white" fontFamily="Arial">MJ</text>
                  </svg>
                ) : (
                  <img
                    src="/profile.jpg"
                    alt="Mahdi Jenhani"
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                );
              })()}
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, I'm <span className="text-blue-500">Mahdi Jenhani</span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8">
            Software Engineer & Data Science / AI Enthusiast
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Motivated final-year Software Engineer & Data Science / AI enthusiast at ENICarthage, seeking an end-of-studies internship (PFE) to apply my skills and contribute to innovative projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
