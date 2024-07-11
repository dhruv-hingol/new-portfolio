"use client";
import React, { useCallback } from 'react'
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

function ParticlesBox() {
  const particlesInit = useCallback(async (engine:any) => {
  console.log("🚀 ~ particlesInit ~ engine:", engine)

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container:any) => {
    await container;
  }, []);
  return (
    <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 50,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: false,
            },
            move: {
              directions: "top",
              enable: true,
              outModes: {
                default: "out",
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: false,
                area: 800,
              },
              value: 50,
              limit: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: ["triangle", "circle"],
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
  )
}

export default ParticlesBox