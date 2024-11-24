import React from 'react';

const About = () => {
  return (
    <div className="about-container flex flex-col md:flex-row items-center justify-center h-full w-full text-white px-6 md:px-12 gap-8">
      {/* Headshot */}
      <div className="headshot-container flex-shrink-0">
        <img
          src="./images/headshot.png" // Update this path based on your directory
          alt="Joshua Thomas Headshot"
          className="rounded-full shadow-lg headshot-image"
        />
      </div>

      {/* About Text */}
      <div className="text-content max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          Hi, I’m <strong>Joshua Thomas</strong>, a passionate and driven software engineer currently pursuing a degree in Computer Science and Engineering at MSU. I thrive on solving complex problems and developing innovative solutions that make a meaningful impact.
        </p>
        <p className="text-lg md:text-xl leading-relaxed mb-4">
          My expertise spans a variety of technologies, including modern frontend frameworks, backend development, cloud services, and database design. I love building efficient, scalable, and user-friendly software applications.
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          Beyond coding, I’m constantly learning and exploring the latest trends in technology, from artificial intelligence to cloud-native solutions. Whether collaborating with a team or working independently, I bring enthusiasm, adaptability, and a commitment to excellence in every project I undertake.
        </p>
      </div>
    </div>
  );
};

export default About;

