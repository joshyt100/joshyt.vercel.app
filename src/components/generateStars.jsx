import React from "react";
import { motion } from "framer-motion";

const generateStars = (count) => {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 100; // Random position on X-axis
    const y = Math.random() * 300; // Random position on Y-axis (for scrolling)
    const size = Math.random() * 2 + 1; // Random star size

    stars.push(
      <motion.div
        className="star"
        key={i}
        style={{
          top: `${y}vh`,
          left: `${x}vw`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        animate={{
          y: ["0vh", "-300vh"], // Animate upward
        }}
        transition={{
          duration: Math.random() * 10 + 20, // Vary animation speed
          repeat: Infinity, // Loop animation
          ease: "linear",
        }}
      />
    );
  }
  return stars;
};

const StarryParallax = () => {
  return (
    <div className="parallax">
      {generateStars(100)} {/* Generate 100 stars */}
      <div className="content">
        <h1>Welcome to the Stars</h1>
        <p>Scroll down to enjoy the parallax starry effect!</p>
      </div>
    </div>
  );
};

export default StarryParallax;

