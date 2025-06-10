// src/components/ThemeBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ThemeBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0d0d0d]">
      {/* --- Neon Particles Layer --- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "#0d0d0d",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: ["#00ffd5", "#a78bfa", "#38bdf8"], // Cyan, Violet, Sky
            },
            links: {
              color: "#00ffd5",
              distance: 120,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.6,
              straight: false,
            },
            number: {
              value: 45,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* --- Blurred Glow Blobs --- */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-[-80px] right-[-100px] w-80 h-80 bg-purple-500/10 rounded-full blur-2xl animate-blob" />
    </div>
  );
};

export default ThemeBackground;
