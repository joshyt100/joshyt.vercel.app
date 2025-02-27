import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const particlesLoaded = (container) => {
    console.log(container);
  }



  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {

      })
    }

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    }


  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);


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
              value: 60,
              density: {
                enable: false,
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
            enable: !isMobile,
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
          value: theme === "dark" ? "#71717A" : "#A1A1AA",
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
    [theme, isMobile]);

  if (init) {

    return (
      <div className="fixed inset-0 -z-10">
        <Particles
          id={'tsparticles'}
          init={particlesLoaded}
          options={options}
          className="absolute inset-0"
        />
      </div>
    );
  }
  else {
    return <></>
  }
};

export default ParticlesComponent;
