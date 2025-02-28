import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // Ensures background stays behind everything
        background: { color: "#0d1117" }, // Dark mode-friendly background
        particles: {
          number: { value: 100, density: { enable: true, area: 800 } }, // Adjust density for better performance
          shape: { type: "circle" }, // Circle-shaped particles
          opacity: { value: 0.7 }, // Slight transparency
          size: { value: 3, random: true }, // Random sizes for particles
          move: { enable: true, speed: 1.5 }, // Smooth movement
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.5,
          }, // Connecting lines
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // Particles move away on hover
            onClick: { enable: true, mode: "push" }, // Clicking adds more particles
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 4 },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full"
    />
  );
}
