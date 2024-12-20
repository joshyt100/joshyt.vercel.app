import React from 'react';
import { useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectLayout = ({ title, description, techStack = [], features = [], githubLink, children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 dark:text-white px-6 sm:px-10 py-6 overflow-x-hidden">
      {/* Project Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl text-center font-bold mt-20 mb-3 tracking-tight">
          {title}
        </h1>
        <p className="text-base sm:text-lg text-center text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
        {githubLink && (
          <div className="flex justify-center mt-2">
            <a
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-150"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
            </a>
          </div>
        )}
      </header>

      {/* Full-width Separator */}
      <hr className="bg-gray-400 dark:bg-gray-600 border-0 h-px mb-6" />

      {/* Project Details */}
      <div className="w-full max-w-5xl mx-auto">
        {/* Tech Stack */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </section>

        {/* Features */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Features</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </section>

        {/* Main Content */}
        <main className="text-gray-700 dark:text-gray-300 text-base leading-relaxed space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ProjectLayout;

