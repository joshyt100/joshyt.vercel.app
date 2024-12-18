import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaLinkedin } from 'react-icons/fa';

const ProjectNavbar = () => {
  const navigate = useNavigate();

  // SetTimeOut is being used here to ensure that background render is done before re-routing *important*
  const handleBackClick = () => {
    navigate('/');
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'instant' });
      }
    }, 5);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent border-b border-gray-500/10 backdrop-blur-lg text-black dark:text-white z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative h-16">
        <div className="flex justify-between items-center h-16">
          {/* Back Arrow */}
          <button
            onClick={handleBackClick}
            className="text-xl flex  items-center space-x-2 hover:text-gray-700 dark:hover:text-gray-300 transition-opacity"
            aria-label="Go Back"
          >
            <FaArrowLeft />
          </button>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/joshyt100"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-300 text-black dark:text-white transition opacity-80"
              aria-label="GitHub"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-thomas-7548b4294/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-700 dark:hover:text-gray-300 text-sky-600 transition opacity-80"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavbar;

