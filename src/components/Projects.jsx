import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Member and Project Management System',
      description:
        'Full-stack project that allows teams to efficiently manage their members and projects. It can read, update, delete, and display information about each of the members and projects.',
      link: '/projects/member-management-dashboard',
      githubLink: 'https://github.com/joshyt100/Full-Stack-Member-Management-System',
    },
    {
      title: 'SideQuest',
      description:
        'A location-based mobile app that curates personalized quests, guiding users to unique experiences nearby. By connecting people to similar destinations, SideQuest fosters shared adventures and memorable discoveries. (Ongoing Development)',
      link: '/projects/sidequest',
      githubLink: 'https://joshyt.vercel.app/projects/sidequest',
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
      githubLink: 'https://github.com/joshyt100/Vim-Motion-Snake-Game',
    },
    {
      title: 'Dotfiles',
      description:
        'A collection of custom configurations designed to optimize the development workflow, featuring tools like Neovim, Alacritty, Starship, and AeroSpace.',
      link: '/projects/dot-files',
      githubLink: 'https://github.com/joshyt100/dotfiles',
    },
    {
      title: 'Multi-Threaded Purchase Order System',
      description:
        'A C++ application simulating inventory and order management with multi-threading. This project demonstrates the use of POSIX threads for efficient and concurrent processing of customer orders and inventory updates.',
      link: '/projects/purchase-order-system',
      githubLink: 'https://github.com/joshyt100/Multi-threaded-Purchase-Order-System',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen z-10">
      <section
        id="projects"
        className="relative flex-grow p-0 md:p-2 xl:p-3 2xl:p-4 sm:pb-10 flex flex-col bg-transparent items-center"
      >
        <div className="relative w-full z-10">
          <div className="rounded-xl p-5 sm:p-6 md:p-8 lg:p-10  sm:pb-20 bg-blue-500/5 backdrop-blur-lg dark:backdrop-blur-xl dark:bg-black/25 border border-zinc-200 dark:border-zinc-900">
            <div className="text-center mb-6 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:text-4xl mt-4 font-bold mb-3 sm:mb-4 md:mb-5 xl:mb-5 text-black dark:text-white">
                Projects
              </h2>
              <p className="text-sm sm:text-base md:text-lg font-semibold max-w-4xl mx-auto lg:text-lg 2xl:text-lg text-zinc-800 dark:text-zinc-300 leading-relaxed px-2">
                Explore some of my most exciting projects showcasing innovative
                solutions and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-6 2xl:gap-8 mb-10 sm:mb-20 md:mb-30 lg:mb-40 xl:mb-50 2xl:mb-64 px-3 sm:px-6 md:px-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-zinc-100/85 dark:bg-black shadow-2xl 
                          p-6 w-full rounded-xl
                           duration-300 border  dark:border-zinc-800 hover:scale-105
                          flex flex-col"
                >
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-4"> {/* Changed from items-center to items-start */}
                      <h3 className="text-xl sm:text-2xl font-bold pr-4  text-black dark:text-white">
                        {project.title}
                      </h3>

                      <a
                        className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-150"
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="h-6 w-6 lg:h-7 lg:w-7" />
                      </a>
                    </div>
                    <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-300 mb-6">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-end items-center">
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2 bg-zinc-950 text-white dark:text-black dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 
                              font-semibold px-3 text-sm py-2 xl:px-4 xl:text-base lg:py-3 rounded-lg 
                              duration-300  dark:border-none"
                    >
                      <span className="whitespace-nowrap">View Project</span>
                      <IoIosArrowRoundForward className="w-6 h-6" />
                    </Link>
                  </div>
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

