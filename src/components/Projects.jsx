import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Member and Project Management Dashboard',
      description:
        'This is a project built with React, FastAPI, Javascript, and Firebase that allows the user to manage their members and associated projects. It can read, update, delete, and display information about each of the members and projects.',
      link: '/projects/member-management-dashboard',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'An innovative e-commerce platform offering a seamless shopping experience.',
      link: '/projects/e-commerce-platform',
    },
    {
      title: 'Brighter - Social Networking Platform',
      description:
        'A social networking platform that connects like-minded individuals worldwide. This project enables people to connect in real-time and the project was built with React, Node.js, Express.js, MongoDB, as well as Redis for advanced caching.',
      link: '/projects/social-networking-platform',
    },
    {
      title: 'Machine Learning Project',
      description:
        'A machine learning project focused on analyzing and predicting real-world trends.',
      link: '/projects/machine-learning-project',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen z-10">
      <section
        id="projects"
        className="relative flex-grow pb-10 mx-4 flex flex-col bg-transparent items-center"
      >
        <div className="relative w-full z-10">
          <div className="rounded-2xl p-10 pb-20 bg-zinc-800/5 backdrop-blur-md dark:bg-zinc-900/50 border border-white dark:border-zinc-800">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-5xl md:text-6xl mt-12 font-bold mb-6 text-black dark:text-white">
                Projects
              </h2>
              <p className="text-lg font-semibold md:text-xl max-w-4xl mx-auto text-zinc-800 dark:text-zinc-300 leading-relaxed">
                Explore some of my most exciting projects showcasing innovative
                solutions and creative designs.
              </p>
            </div>

            {/* Project Boxes */}
            <div className="grid grid-cols-1 mb-80 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:mx-15">
              {projects.map((project, index) => (
                <Link
                  to={project.link}
                  key={index}
                  className="group relative bg-zinc-100/85 dark:bg-gradient-to-tr from-zinc-900 to-black shadow-2xl p-12 
                            rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-zinc-600"
                >
                  <div>
                    <h3 className="text-4xl text-black font-bold mb-4 
                                group-hover:text-purple-400 dark:group-hover:text-purple-400 dark:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="font-normal text-zinc-800 text-xl text-pretty 
                               group-hover:text-gray-700 dark:text-zinc-300 dark:group-hover:text-gray-400 transition-colors duration-300 mb-3">
                      {project.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

