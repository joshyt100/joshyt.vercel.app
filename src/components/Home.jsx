import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const generateStars = (count) => {
    return Array.from({ length: count }).map((_, i) => {
      const cx = `${Math.random() * 100}%`;
      const cy = `${Math.random() * 100}%`;
      const r = (Math.random() + 0.5).toFixed(1);

      return (
        <circle
          key={i}
          className="star"
          cx={cx}
          cy={cy}
          r={r}
          style={{
            fillOpacity: Math.random() * 0.8 + 0.2,
          }}
        />
      );
    });
  };

  return (
    <section
      id="home"
      className="relative flex items-center justify-center h-screen text-white overflow-hidden"
    >
      {/* Starry Background */}
      <div className="stars-wrapper absolute inset-0 z-0">
        {[...Array(3)].map((_, s) => (
          <svg
            key={s}
            className="stars"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            {generateStars(200)}
          </svg>
        ))}
      </div>

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
            className="text-6xl md:text-8xl font-extrabold bg-clip-text text-opacity-4"
            variants={{
              hidden: { scale: 0.8, opacity: 0 },
              visible: { scale: 1, opacity: 0.65 },
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
            className="text-2xl md:text-3xl mt-4 text-gray-300"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 0.65, y: 0 },
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
    </section>
  );
};

export default Home;

