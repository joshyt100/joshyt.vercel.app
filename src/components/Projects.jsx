import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { title: 'Hirelio', description: 'Full-stack job application platform with React frontend, Django backend, and AI-powered cover letter generation. Has a full suite of tools for job seekers.', link: '/projects/hirelio', githubLink: 'https://github.com/joshyt100/Hirelio' },
    { title: 'ShipFolio', description: 'Visual portfolio generator built with Next.js that transforms GitHub activity and open source work into an interactive dashboard (Ongoing Development).', link: '/projects/shipfolio', githubLink: 'https://github.com/joshyt100/shipfolio' },
    { title: 'Member and Project Management System', description: 'Full-stack dashboard for managing teams with CRUD operations on members and projects.', link: '/projects/member-management-dashboard', githubLink: 'https://github.com/joshyt100/Full-Stack-Member-Management-System' },
    { title: 'Canadian Experience', description: 'Animation tool where Harold, Sparty, and machines combine to create custom interactive scenes.', link: '/projects/canadian-experience', githubLink: 'https://github.com/joshyt100/sparty-in-a-box' },
    { title: 'SideQuest', description: 'Location-based mobile app that curates personalized quests for unique local experiences.', link: '/projects/sidequest', githubLink: 'https://joshyt.vercel.app/projects/sidequest' },
    { title: 'Multi-Threaded Purchase Order System', description: 'C++ application simulating inventory management with multi-threading using POSIX threads.', link: '/projects/purchase-order-system', githubLink: 'https://github.com/joshyt100/Multi-threaded-Purchase-Order-System' },
    { title: 'Dotfiles', description: 'Configuration collection optimizing development workflow for Neovim, Alacritty, Starship, and AeroSpace.', link: '/projects/dot-files', githubLink: 'https://github.com/joshyt100/dotfiles' },
    { title: 'Vim Motion Snake Game', description: 'Modern Snake game with Vim-style motion controls (h, j, k, l) to enhance muscle memory.', link: '/projects/snake-game', githubLink: 'https://github.com/joshyt100/Vim-Motion-Snake-Game' }
  ];

  const Card = ({ project, size = 'base' }) => {
    const isTaller = ['Member and Project Management System', 'Canadian Experience'].includes(project.title) && size !== 'small';
    const unclamped = size === 'small' && ['Member and Project Management System', 'Canadian Experience'].includes(project.title);

    return (
      <div className={`group relative bg-zinc-100/85 dark:bg-black shadow-lg border dark:border-zinc-800 rounded-lg flex flex-col ${size === 'small' ? 'p-3' : 'p-4'} duration-300 hover:bg-gray-200 dark:hover:bg-gradient-to-tl from-indigo-950/40 to-black ${isTaller ? 'min-h-[240px] lg:min-h-[260px]' : ''}`}>
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-3">
            <h3 className={`${size === 'small' ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'} font-normal pr-3 text-black dark:text-white`}>{project.title}</h3>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition duration-150">
              <FaGithub className={`${size === 'small' ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
          </div>
          <p className={`${size === 'small' ? 'text-sm' : 'text-base'} text-zinc-800 dark:text-zinc-300 mb-4 ${!unclamped && size === 'small' ? 'line-clamp-3' : ''}`}>{project.description}</p>
        </div>
        <div className="flex justify-end items-center">
          <Link to={project.link} className={`inline-flex items-center gap-1 font-semibold rounded-md duration-300 ${size === 'small' ? 'px-2 text-xs py-1' : 'px-2 text-sm py-1.5'} text-white dark:text-black`}>
            <span className="whitespace-nowrap text-indigo-700">View Project</span>
            <IoIosArrowRoundForward className={`${size === 'small' ? 'w-4 h-4' : 'w-5 h-5'} text-indigo-700`} />
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mb-12 min-h-screen z-10">
      <section id="projects" className="relative flex-grow p-0 pb-32 md:p-2 xl:p-3 2xl:p-4 flex flex-col bg-transparent items-center">
        <div className="relative w-full z-10">
          <div className="rounded-xl sm:p-6 md:p-12 lg:pb-36 bg-blue-500/10 backdrop-blur-lg dark:bg-black/20 dark:backdrop-blur-lg border border-zinc-200 dark:border-zinc-900">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4  text-black dark:text-white">Projects</h2>
              <p className="text-sm sm:text-base md:text-lg font-normal max-w-4xl mx-auto lg:text-md 2xl:text-md text-zinc-800 dark:text-zinc-300 leading-relaxed px-2 ">
                Explore some of my most exciting projects showcasing innovative solutions and creativity.
              </p>
            </div>

            <div className="max-w-7xl w-full mx-auto px-3 sm:px-6 md:px-10">
              <div className="border-t border-0 border-zinc-400 dark:border-zinc-700 mx-auto w-full my-16 " />
              <div className="hidden sm:block">
                <div className="grid grid-cols-12 gap-6 mb-6 ">
                  <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(0, 2).map((p, i) => <Card key={i} project={p} />)}
                  </div>
                  <div className="col-span-12 lg:col-span-4 grid grid-rows-2 gap-6">
                    {projects.slice(2, 4).map((p, i) => <Card key={i} project={p} size="small" />)}
                  </div>
                </div>
                <div className="border-t border-0 border-zinc-400 dark:border-zinc-700 my-16" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:hidden mb-12 mt-12">
                {projects.slice(0, 4).map((p, i) => <Card key={i} project={p} />)}
                <div className="border-t border-0 border-zinc-400 dark:border-zinc-700 my-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.slice(4).map((p, i) => <Card key={i} project={p} />)}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
