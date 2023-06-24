import React from "react";
import { Particles } from "react-tsparticles";

const ParticleMotion = () => {
  const particleOptions = {
    background: {
      color: {
        value: "#000000"
      }
    },
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 3
      },
      move: {
        speed: 2
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        }
      }
    }
  };

  return <Particles id="particles-js" options={particleOptions} />;
};

export default ParticleMotion;
