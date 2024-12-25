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
        className="relative flex-grow p-0 md:p-2 xl:p-3 2xl:p-4 sm:pb-10 flex flex-col bg-transparent items-center"
      >
        <div className="relative w-full z-10">
          <div className="rounded-xl p-5 sm:p-6 md:p-8 lg:p-10 pb-10 sm:pb-20 bg-zinc-800/5 backdrop-blur-md dark:backdrop-blur-xl dark:bg-gray-500/10 border border-zinc-200 dark:border-zinc-900">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-5xl mt-4 font-bold mb-3 sm:mb-4 md:mb-5 xl:mb-5 text-black dark:text-white">
                Projects
              </h2>
              <p className="text-sm sm:text-base md:text-xl font-semibold max-w-4xl mx-auto lg:text-lg 2xl:text-xl text-zinc-800 dark:text-zinc-300 leading-relaxed px-2">
                Explore some of my most exciting projects showcasing innovative
                solutions and creativity.
              </p>
            </div>

            {/* Project Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-6 2xl:gap-8 mb-10 sm:mb-20 md:mb-30 lg:mb-40 xl:mb-52 2xl:mb-52 px-3 sm:px-6 md:px-10">
              {projects.map((project, index) => (
                <Link
                  to={project.link}
                  key={index}
                  className="group relative bg-zinc-100/85 dark:bg-black shadow-2xl 
                          p-4 w-full sm:p-5 md:p-7 xl:p-7 2xl:p-10 rounded-xl hover:scale-105 hover:shadow-2xl 
                           transition-transform duration-300 border border-zinc-300 dark:border-zinc-900"
                >
                  <div>
                    <h3 className="text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-black font-bold 
                                mb-2 sm:mb-3 md:mb-4 group-hover:text-purple-400 
                                dark:group-hover:text-purple-400 dark:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-md md:text-lg lg:text-lg xl:text-md 2xl:text-lg font-normal text-zinc-800 
                               text-pretty group-hover:text-gray-700 dark:text-zinc-300 
                               dark:group-hover:text-gray-400 transition-colors duration-300 
                                2xl:mb-3">
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

