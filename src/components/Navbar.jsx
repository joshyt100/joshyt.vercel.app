import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setMenuOpen(false); // Close menu after navigating
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent border-b border-gray-500/10 backdrop-blur-lg text-black dark:text-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-700 dark:hover:text-gray-300 transition-opacity opacity-50 hover:opacity-100"
            >
              Joshua
            </button>
          </div>

          {/* Centered Navigation Links (Desktop Only) */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 text-lg opacity-100 hover:opacity-90 transition-opacity">
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
              onClick={() => navigate('/contact')}
              className="hover:text-gray-700 dark:hover:text-gray-300 transition opacity-80"
            >
              Contact
            </button>
          </div>

          {/* Social Media Links and Theme Switcher */}
          <div className="flex items-center space-x-6 opacity-100 hover:opacity-90 transition-opacity">
            {/* Theme Toggle Slider */}
            <div className="flex items-center space-x-2">
              <FaSun className={`text-yellow-500 ${theme === 'light' ? 'opacity-100' : 'opacity-50'}`} />
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={toggleTheme}
                  className="sr-only peer"
                />
                <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-gray-500 rounded-full peer dark:bg-gray-600 dark:peer-checked:bg-yellow-500 transition-all duration-300">
                  <div
                    className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${theme === 'dark' ? 'translate-x-7' : ''
                      }`}
                  />
                </div>
              </label>
              <FaMoon className={`text-gray-800 dark:text-yellow-400 ${theme === 'dark' ? 'opacity-100' : 'opacity-50'}`} />
            </div>

            {/* GitHub */}
            <a
              href="https://github.com/joshyt100"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-300 text-black dark:text-white transition opacity-80"
              aria-label="GitHub"
            >
              <FaGithub className="h-7 w-7" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/joshua-thomas-7548b4294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-300 text-sky-600 transition opacity-80"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-7 w-7" />
            </a>

            {/* Hamburger Menu (Mobile Only) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="block md:hidden text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Dropdown Menu (Mobile Only) */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-200 opacity-80 dark:bg-black text-black dark:text-white flex flex-col items-center space-y-4 py-4 shadow-lg">
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
              onClick={() => navigate('/contact')}
              className="hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

