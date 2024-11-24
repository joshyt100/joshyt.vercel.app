import React from 'react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex items-center justify-center h-screen text-white overflow-hidden"
    >
      {/* Starry Background */}
      <div className="stars-wrapper absolute inset-0 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Projects Showcase
        </h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
          Explore some of the most exciting and impactful projects I’ve worked
          on. From web development to software engineering, each project
          reflects my dedication to innovation and problem-solving.
        </p>
      </div>
    </section>
  );
};

export default Projects;

