import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';




const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent border-b border-gray-500/10 backdrop-blur-sm text-white z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height */}
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <a
              href="#home"
              className="text-white bg-clip-text hover:text-white transition-opacity opacity-50 hover:opacity-100"
            >
              Joshua
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-lg opacity-100 hover:opacity-90 transition-opacity"> {/* Slightly larger text */}
            <a href="#home" className="hover:text-gray-300 transition opacity-80">Home</a>
            <a href="#about" className="hover:text-gray-300 transition opacity-80">About</a>
            <a href="#projects" className="hover:text-gray-300 transition opacity-80">Projects</a>
            <a href="#experience" className="hover:text-gray-300 transition opacity-80">Experience</a>
            <a href="#contact" className="hover:text-gray-300 transition opacity-80">Contact</a>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 opacity-100 hover:opacity-90 transition-opacity">
            <a
              href="https://github.com/joshyt100"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition opacity-80"
              aria-label="GitHub"
            >
              <FaGithub className="h-7 w-7" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-thomas-7548b4294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition opacity-80"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

