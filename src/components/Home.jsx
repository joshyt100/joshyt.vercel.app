import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {

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
            className="text-6xl md:text-8xl font-extrabold bg-clip-text text-white "
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
            className="text-2xl md:text-3xl mt-4 text-gray-300"
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
    </section>
  );
};

export default Home;

