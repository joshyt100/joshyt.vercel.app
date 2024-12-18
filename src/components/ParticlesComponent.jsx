import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { debounce } from "lodash";

const themeColors = {
  dark: {
    background: "#000000",
    particleColor: "#5D3FD3",
    linkColor: "#FFFFFF",
  },
  light: {
    background: "#ECECEE",
    particleColor: "#5D3FD3",
    linkColor: "#0284c7",
  },
};

const ParticlesComponent = ({ id, theme }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initializeParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = debounce((container) => {
    console.log(container);
  }, 300);

  const options = useMemo(() => {
    const colors = themeColors[theme];
    const isMobile = window.innerWidth < 768;

    return {
      background: {
        color: { value: colors.background },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: { distance: 150 },
        },
      },
      particles: {
        color: { value: colors.particleColor },
        links: {
          color: colors.linkColor,
          distance: 150,
          enable: true,
          opacity: 1,
          width: 1,
        },
        move: {
          enable: true,
          outModes: { default: "bounce" },
          random: true,
          speed: 0.75,
        },
        number: {
          density: { enable: true },
          value: isMobile ? 100 : 275,
        },
        opacity: { value: 1.0 },
        shape: { type: "circle" },
        size: { value: { min: 2, max: 3 } },
      },
      detectRetina: true,
    };
  }, [theme]);

  return init ? <Particles id={id} init={particlesLoaded} options={options} /> : null;
};

export default ParticlesComponent;

