import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Hirelio',
      description:
        'A full-stack job-application and contacts-tracking platform that pairs a React + Tailwind frontend with a Django REST backend, offering secure session-based auth, resume/cover letter uploads to S3, analytics dashboards, granular filters, and on-demand cover-letter generation powered by Google Gemini.',
      link: '/projects/hirelio',
      githubLink: 'https://github.com/yourusername/hirelio',
    },
    {
      title: 'ShipFolio',
      description:
        'A visual portfolio generator built with Next.js 15 and Tailwind that transforms your GitHub activity into an interactive dashboard where you can showcase selected open source pull requests, show contribution statistics , and soon share a live public portfolio link (coming soon).',
      link: '/projects/shipfolio',
      githubLink: 'https://github.com/joshyt100/shipfolio',
    },

    {
      title: 'Member and Project Management System',
      description:
        'A full-stack dashboard for managing teams, allowing CRUD operations on members and projects.',
      link: '/projects/member-management-dashboard',
      githubLink: 'https://github.com/joshyt100/Full-Stack-Member-Management-System',
    },
    {
      title: 'Canadian Experience',
      description:
        'An animation tool where Harold, Sparty, and machines combine to create custom interactive scenes.',
      link: '/projects/canadian-experience',
      githubLink: 'https://github.com/joshyt100/sparty-in-a-box',
    },

    {
      title: 'SideQuest',
      description:
        'A location-based mobile app that curates personalized quests, guiding users to unique experiences nearby. By connecting people to similar destinations, SideQuest fosters shared adventures and memorable discoveries. (Ongoing Development)',
      link: '/projects/sidequest',
      githubLink: 'https://joshyt.vercel.app/projects/sidequest',
    },
    {
      title: 'Multi-Threaded Purchase Order System',
      description:
        'A C++ application simulating inventory and order management with multi-threading. This project demonstrates the use of POSIX threads for efficient and concurrent processing of customer orders and inventory updates.',
      link: '/projects/purchase-order-system',
      githubLink: 'https://github.com/joshyt100/Multi-threaded-Purchase-Order-System',
    },

    {
      title: 'Dotfiles',
      description:
        'A collection of custom configurations designed to optimize the development workflow, featuring tools like Neovim, Alacritty, Starship, and AeroSpace.',
      link: '/projects/dot-files',
      githubLink: 'https://github.com/joshyt100/dotfiles',
    },
    {
      title: 'Vim Motion Snake Game',
      description:
        "A modern take on the classic Snake game, featuring Vim-style motion controls (h, j, k, l) for navigation. Designed to enhance your Vim muscle memory while providing a fun and interactive gaming experience.",
      link: '/projects/snake-game',
      githubLink: 'https://github.com/joshyt100/Vim-Motion-Snake-Game',
    },
  ];

  const Card = ({ project, size = 'base' }) => {
    const isTaller =
      ['Member and Project Management System', 'Canadian Experience'].includes(project.title) &&
      size !== 'small';

    const unclamped =
      size === 'small' &&
      ['Member and Project Management System', 'Canadian Experience'].includes(project.title);

    return (
      <div
        className={`group relative bg-zinc-100/85 dark:bg-black shadow-2xl border dark:border-zinc-800 rounded-xl flex flex-col ${size === 'small' ? 'p-5' : 'p-6'
          } duration-300 hover:bg-gray-200 dark:hover:bg-gradient-to-tl from-indigo-950/40 to-black ${isTaller ? 'min-h-[320px] lg:min-h-[360px] 2xl:min-h-[380px]' : ''}`}
      >
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-4">
            <h3
              className={`${size === 'small'
                ? 'text-lg sm:text-xl lg:text-[1.2rem]'
                : 'text-xl sm:text-2xl lg:text-[1.55rem]'
                } font-normal pr-4 text-black dark:text-white`}
            >
              {project.title}
            </h3>
            <a
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-150 flex-shrink-0"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={`${size === 'small' ? 'h-5 w-5' : 'h-6 w-6 lg:h-7 lg:w-7'}`} />
            </a>
          </div>
          <p
            className={`${size === 'small' ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
              } text-zinc-800 dark:text-zinc-300 mb-6 ${!unclamped && size === 'small' ? 'line-clamp-3' : ''}`}
          >
            {project.description}
          </p>
        </div>
        <div className="flex justify-end items-center">
          <Link
            to={project.link}
            className={`inline-flex items-center gap-2 border border-transparent font-semibold rounded-lg duration-300 ${size === 'small'
              ? 'px-2 text-sm py-1.5'
              : 'px-3 text-md py-2 xl:px-4 xl:text-base lg:py-3'
              } text-white dark:text-black`}
          >
            <span className="whitespace-nowrap text-indigo-700">View Project</span>
            <IoIosArrowRoundForward className={`${size === 'small' ? 'w-5 h-5' : 'w-7 h-7'} text-indigo-700`} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen z-10">
      <section
        id="projects"
        className="relative flex-grow p-0 md:p-2 xl:p-3 2xl:p-4 sm:pb-0 flex flex-col bg-transparent items-center"
      >
        <div className="relative w-full z-10">
          <div className="rounded-xl sm:p-6 md:p-8 lg:p-10 sm:pb-20 bg-blue-500/5 backdrop-blur-lg dark:bg-black/20 dark:backdrop-blur-lg border border-zinc-200 dark:border-zinc-900">
            <div>
              <div className="text-center mb-6 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl 2xl:4xl mt-0 mb-3 text-black dark:text-white">
                  Projects
                </h2>
              </div>

              {/* Container */}
              <div className="max-w-7xl w-full mx-auto mb-10 sm:mb-20 md:mb-30 lg:mb-40 xl:mb-50 2xl:mb-64 px-3 sm:px-6 md:px-10">
                {/* Mobile layout */}
                <div className="grid grid-cols-1 gap-4 sm:hidden">
                  {projects.map((project, idx) => (
                    <Card key={idx} project={project} />
                  ))}
                </div>

                {/* Tablet & up */}
                <div className="hidden sm:block">
                  {/* ---------- TOP FOUR ---------- */}
                  <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-6 2xl:gap-8 mb-4 md:mb-6 lg:mb-6 2xl:mb-8">
                    {/* First two large side-by-side */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 2xl:gap-8">
                      {projects.slice(0, 2).map((project, idx) => (
                        <Card key={idx} project={project} />
                      ))}
                    </div>

                    {/* Two smaller stacked */}
                    <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-4 md:gap-6 lg:gap-6 2xl:gap-8">
                      {projects.slice(2, 4).map((project, idx) => (
                        <Card key={idx} project={project} size="small" />
                      ))}
                    </div>
                  </div>

                  {/* ---------- BOTTOM FOUR ---------- */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-6 2xl:gap-8">
                    {projects.slice(4, 8).map((project, idx) => (
                      <Card key={idx} project={project} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

