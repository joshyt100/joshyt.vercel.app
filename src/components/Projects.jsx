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
      title: 'Brighter - Social Networking Platform for the real-world',
      description:
        'A social networking platform that connects like-minded individuals worldwide. This project enables people to connect in real-time and the project was built with React, Node.js, Express.js, MongoDB, as well as Redis for advanced caching.',
    },
    {
      title: 'Project 4',
      description:
        'A machine learning project focused on analyzing and predicting real-world trends.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen z-10">
      <section
        id="projects"
        className="relative flex-grow pb-10 mx-4 flex flex-col items-center"
      >
        <div className="relative w-full z-10">
          <div className="rounded-2xl p-10 pb-20 bg-zinc-400/10  backdrop-blur-md   border border-white dark:border-zinc-800">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl mt-12 font-bold mb-6 text-black dark:text-white">
                Projects
              </h2>
              <p className="text-lg font-semibold md:text-xl max-w-4xl mx-auto text-gray-700 dark:text-white leading-relaxed">
                Explore some of my most exciting projects showcasing innovative
                solutions and creative designs.
              </p>
            </div>

            {/* Project Boxes */}
            <div className="grid grid-cols-1 mb-80 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 dark:bg-zinc-900 backdrop-blur-sm shadow-2xl p-12 
                           rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-zinc-500"
                >
                  <h3 className="text-3xl text-black font-bold mb-4 
                              group-hover:text-purple-400 dark:group-hover:text-purple-800 dark:text-gray-200 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="font-normal text-black text-xl 
                             group-hover:text-gray-700 dark:text-gray-200 dark:group-hover:text-gray-400 transition-colors duration-300">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
