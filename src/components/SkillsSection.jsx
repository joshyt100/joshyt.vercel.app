import React from 'react';

const skillsData = [
  { name: 'Linux', img: '/images/linux.png' },
  { name: 'C', img: '/images/c.png' },
  { name: 'C++', img: '/images/cpp.png' },
  { name: 'Neovim', img: '/images/neovim.png' },
  { name: 'Git', img: '/images/git.png' },
  { name: 'GitHub', img: '/images/github.png' },
  { name: 'FastAPI', img: '/images/fastapi.png' },
  { name: 'Express.js', img: '/images/express.png' },
  { name: 'TypeScript', img: '/images/typescript.png' },
  { name: 'Django', img: '/images/django.png' },
  { name: 'PostgreSQL', img: '/images/postgresql.png' },
  { name: 'Firebase', img: '/images/firebase.png' },
  { name: 'React', img: '/images/react.png' },
  { name: 'JavaScript', img: '/images/javascript.png' },
  { name: 'Python', img: '/images/python.png' },
  { name: 'HTML', img: '/images/html.png' },
  { name: 'CSS', img: '/images/css.png' },
  { name: 'Tailwind CSS', img: '/images/tailwindcss.png' },
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skillsData.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain mb-2"
              />
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

