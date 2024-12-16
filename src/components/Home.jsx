import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 1.0 } // Fully visible when 100% of the section is in view
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen text-white overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                ease: 'easeOut',
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.h1
            className="text-6xl md:text-8xl 2xl:text-8xl font-black bg-clip-text text-black dark:text-white"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 0.85 },
            }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 100,
            }}
          >
            Joshua Thomas
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl 2xl:text-4xl mt-4 text-black dark:text-white"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.85, y: 0 },
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          >
            Software Engineer | CSE @ MSU
          </motion.p>
        </motion.div>
      </div>

      {/* Footer Text */}
      <p
        className={`absolute bottom-8 right-10 sm:text-md md:text-md lg:text-md 2xl:text-lg font-nm text-black dark:text-white transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'
          }`}
      >
        Built with React.js, Vite, TailwindCSS, and Particles.js
      </p>
    </section>
  );
};

export default Home;

