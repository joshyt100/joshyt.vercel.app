import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import { LuLinkedin } from 'react-icons/lu';

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setMenuOpen(false);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-14 sm:h-16 2xl:h-18 bg-transparent border-gray-500/10 backdrop-blur-xl text-black dark:text-white z-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full h-full">
        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Centered desktop links */}
        <div className="hidden md:flex space-x-6 text-md 2xl:text-lg absolute left-1/2 transform -translate-x-1/2 items-center">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition opacity-80"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition opacity-80"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigate('/about')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition opacity-80"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate('/contact')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition opacity-80"
          >
            Contact
          </button>
        </div>

        <div className="flex-grow" />

        {/* Right: social links + theme toggle */}
        <div className="flex items-center  space-x-3">
          {/* GitHub */}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="transition-opacity opacity-80 hover:opacity-100"
          >
            {theme === 'light' ? (
              <FaSun className="text-yellow-500 h-5 w-5 " />
            ) : (
              <FaMoon className="text-yellow-400 h-5 w-5 " />
            )}
          </button>
          <a
            href="https://github.com/joshyt100"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 dark:hover:text-gray-300 transition opacity-80"
            aria-label="GitHub"
          >
            <RiGithubLine className="h-7 w-7 " />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/joshua-thomas-7548b4294/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 dark:hover:text-sky-700 transition opacity-80"
            aria-label="LinkedIn"
          >
            <LuLinkedin className="h-7 w-7 " />
          </a>
          {/* Theme toggle */}
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-200 opacity-90 dark:bg-black text-black dark:text-white flex flex-col items-center space-y-4 py-4 shadow-lg">
          <button
            onClick={() => scrollToSection('home')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavigate('/about')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            About
          </button>
          <button
            onClick={() => handleNavigate('/contact')}
            className="hover:text-gray-700 dark:hover:text-gray-300 transition"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

