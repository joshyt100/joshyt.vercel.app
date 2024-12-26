import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the required engine features
      await loadSlim(engine); // Using the slim version for smaller bundle size
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: theme === "dark" ? "#000000" : "#ECECEE", // Dynamically set background color based on theme
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        responsive: [{
          maxWidth: 450,
          options: {
            particles: {
              number: { limit: 50 },
            },
          }
        }],

        modes: {
          push: {
            distance: 150,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: theme === "dark" ? "#5D3FD3" : "#5D3FD3", // Particle Color
        },
        links: {
          color: theme === "dark" ? "#FFFFFF" : "#0284c7", // Lin 0284c7 ewcolor adapts to theme
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.75,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 275,
        },
        opacity: {
          value: 1.0,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 3 },
        },
      },
      detectRetina: true,
    }),
    [theme] // Recalculate options when theme changes
  );

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;

