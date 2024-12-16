import React from 'react';

const ProjectLayout = ({ title, description, techStack = [], features = [], children }) => {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-black text-black dark:text-white p-8">
      {/* Project Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mt-10 mb-12">{title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">{description}</p>
      </header>

      {/* Project Details */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
        <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
          {techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Features</h2>
        <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
};

export default ProjectLayout;

