import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      }
    }

    checkMobile();

  }, []);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
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
      fpsLimit: isMobile ? 30 : 120,
      detectRetina: true,
      responsive: [{
        maxWidth: 500,
        options: {
          particles: {
            number: {
              value: 50,
              density: {
                enable: true, height: 375, width: 725
              },
            },
            move: {
              speed: 0.6,
            }

          },
        }
      }],
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
          value: theme === "dark" ? "#71717A" : "#A1A1AA", // Particle Color
        },
        links: {
          color: theme === "dark" ? "#6366F1" : "#3730A3", // Lin 0284c7 ewcolor adapts to theme
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
          value: 260,
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
    }),
    [theme] // Recalculate options when theme changes
  );

  return <Particles id={id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;
