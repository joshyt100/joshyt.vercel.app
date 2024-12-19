import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Member and Project Management System',
      description:
        'Full-stack project that allows teams to efficiently manage their members and projects. It can read, update, delete, and display information about each of the members and projects.',
      link: '/projects/member-management-dashboard',
    },
    {
      title: 'SideQuest',
      description:
        'A location-based mobile app that curates personalized quests, guiding users to unique experiences nearby. By connecting people to similar destinations, SideQuest fosters shared adventures and memorable discoveries. (Ongoing Development)',
      link: '/projects/sidequest',
    },
    {
      title: 'Vim Motion Snake Game',
      description:
        "A modern take on the classic Snake game, featuring Vim-style motion controls (h, j, k, l) for navigation. Designed to enhance your Vim muscle memory while providing a fun and interactive gaming experience.",
      link: '/projects/snake-game',
    },
    {
      title: 'Canadian Experience',
      description:
        'An interactive animation project featuring Harold, Sparty, and two custom-built machines. Use the characters and machines together to create fully customizable animations, control machine timing, and bring your scenes to life with precision and creativity.',
      link: '/projects/canadian-experience',
    },
    {
      title: 'Dotfiles',
      description:
        'A collection of custom configurations designed to optimize the development workflow, featuring tools like Neovim, Alacritty, Starship, and AeroSpace.',
      link: '/projects/dot-files',
    },
    {
      title: 'Multi-Threaded Purchase Order System',
      description:
        'A C++ application simulating inventory and order management with multi-threading. This project demonstrates the use of POSIX threads for efficient and concurrent processing of customer orders and inventory updates.',
      link: '/projects/purchase-order-system',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen z-10">
      <section
        id="projects"
        className="relative flex-grow pb-10 mx-1 sm:mx-4 flex flex-col bg-transparent items-center"
      >
        <div className="relative w-full z-10">
          <div className="rounded-2xl p-10 pb-20 bg-zinc-800/5 backdrop-blur-md dark:bg-zinc-900/50 border border-white dark:border-zinc-800">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-6xl mt-12 font-bold mb-4 md:mb-6 text-black dark:text-white">
                Projects
              </h2>
              <p className="text-base md:text-xl font-semibold max-w-4xl mx-auto text-zinc-800 dark:text-zinc-300 leading-relaxed">
                Explore some of my most exciting projects showcasing innovative
                solutions and creative designs.
              </p>
            </div>

            {/* Project Boxes */}
            <div
              className="
                gap-1 md:gap-10 sm:gap-5 mx-0 
                grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 
                sm:mx-2 md:mx-4 lg:mx-15
              "
            >
              {projects.map((project, index) => (
                <Link
                  to={project.link}
                  key={index}
                  className="group relative bg-zinc-100/85 dark:bg-gradient-to-tr from-zinc-900 to-black shadow-2xl p-6 md:p-12 
                            rounded-2xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-zinc-600"
                >
                  <div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl xl:text-4xl text-black font-bold mb-2 md:mb-4 
                                group-hover:text-purple-400 dark:group-hover:text-purple-400 dark:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-lg xl:text-xl font-normal text-zinc-800 text-pretty 
                               group-hover:text-gray-700 dark:text-zinc-300 dark:group-hover:text-gray-400 transition-colors duration-300 mb-2 md:mb-3">
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

