import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // Load the full tsParticles package
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // You can access the tsParticles container here if needed
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: '#000000', // Background color
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push', // Adds particles on click
            },
            onHover: {
              enable: true,
              mode: 'repulse', // Repels particles on hover
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4, // Number of particles added on click
            },
            repulse: {
              distance: 100, // Distance for repulsion on hover
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff', // Particle color
          },
          links: {
            color: '#ffffff',
            distance: 150, // Maximum distance for linking particles
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2, // Particle movement speed
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800, // Area for particle density
            },
            value: 80, // Number of particles
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle', // Shape of particles
          },
          size: {
            value: { min: 1, max: 5 }, // Size range of particles
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

