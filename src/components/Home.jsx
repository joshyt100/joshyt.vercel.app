import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    const footerText = document.querySelector('.footer-text');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === homeSection) {
            setIsVisible(entry.isIntersecting);
          }
        });
      },
      {
        threshold: 0.7,
        //rootMargin: '-50px 0px'
        rootMargin: '-100px 0px' //Add some margin to trigger earlier
      }
    );

    setIsVisible(true);

    if (homeSection) {
      observer.observe(homeSection);
    }

    // Cleanup function
    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
      observer.disconnect();
    };
  }, []); // Empty dependency array to run only on mount

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
            className="text-6xl sm:text-6xl md:text-7xl 2xl:text-8xl font-black bg-clip-text text-black dark:text-white"
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
            className=" text-lg text-black sm:text-2xl md:text-3xl 2xl:text-3xl mt-2 text-black dark:text-white"
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
      <div
        className={`absolute bottom-8 right-10 transition-all duration-500 ${isVisible
          ? 'opacity-100 transform translate-y-0'
          : 'opacity-0 transform translate-y-4'
          }`}
      >
        <p className="text-sm sm:text-md md:text-md lg:text-md 2xl:text-lg font-nm text-black dark:text-white">
          Built with React.js, Vite, TailwindCSS, and MDX
        </p>
      </div>
    </section>
  );
};

export default Home;
