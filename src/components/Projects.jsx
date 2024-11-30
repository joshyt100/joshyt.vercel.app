import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description:
        'A revolutionary app designed to streamline productivity and improve task management.',
    },
    {
      title: 'Project 2',
      description:
        'An innovative e-commerce platform offering a seamless shopping experience.',
    },
    {
      title: 'Project 3',
      description:
        'A social networking platform that connects like-minded individuals worldwide.',
    },
    {
      title: 'Project 4',
      description:
        'A machine learning project focused on analyzing and predicting real-world trends.',
    },
  ];

  return (
    <div>
      {/* Projects Section */}
      <section
        id="projects"
        className="relative backdrop-blur-sm bg-black opacity-70 text-white flex flex-col items-center min-h-screen overflow-hidden z-10"
      >
        <div className="relative z-20 mt-40 text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Projects</h2>
          <p className="text-lg md:text-xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Explore some of my most exciting projects showcasing innovative
            solutions and creative designs.
          </p>
        </div>

        {/* Project Boxes */}
        <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative border border-purple-800 p-8 bg-black backdrop-blur-lg text-white rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white group-hover:text-gray-100 transition-colors duration-300">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scrollable Extra Content */}
      <section className="relative backdrop-blur-md bg-black opacity-65 text-black flex flex-col items-center justify-center min-h-screen z-10">
        <h2 className="text-4xl font-bold">More Projects Coming Soon</h2>
        <p className="text-gray-300 mt-4">
          Stay tuned for exciting updates and new projects that push the
          boundaries of innovation and design.
        </p>
      </section>
    </div>
  );
};

export default Projects;

