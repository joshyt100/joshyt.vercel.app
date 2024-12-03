import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Member and Project Management Dashboard',
      description:
        'This is a project built with React, FastAPI, Javascript, and Firebase that allows the user to manage their members and associated projects. It can read, update, delete, and display information about each of the members and projects.',
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
        className="relative mt-20 ml-5 mr-5 min-h-screen z-10 flex flex-col items-center scroll-mt-24"
      >
        {/* Border Wrapper */}
        <div className="relative backdrop-blur-sm opacity-85 bg-gray-950 rounded-3xl p-10 pb-20">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl text-opacity-100 font-bold mb-6 text-white">
              Projects
            </h2>
            <p className="text-lg font-semibold md:text-xl text-opacity-100 max-w-4xl mx-auto text-gray-300 leading-relaxed">
              Explore some of my most exciting projects showcasing innovative
              solutions and creative designs.
            </p>
          </div>

          {/* Project Boxes */}
          <div className="grid grid-cols-1 mb-40 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative border border-sky-600 p-8 bg-black text-white rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
                style={{ opacity: 1 }} // Ensure full opacity
              >
                <h3 className="text-3xl font-black mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-semibold text-lg group-hover:text-gray-200 transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

