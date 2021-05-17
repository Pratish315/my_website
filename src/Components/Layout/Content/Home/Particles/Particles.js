import React from "react";
import Particles from "react-particles-js";
import ParticlesStyle from "./Particles.module.css";

const particleOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: false,
      },
    },
    color: {
      value: "#ffffff",
    },
    size: {
      value: 6,
      random: true,
      anim: {
        speed: 5,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      random: true,
      speed: 2,
      direction: "bottom",
      out_mode: "out", /* can make bounce */
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      bubble: {
        distance: 25,
        duration: 2,
        size: 15,
        opacity: 10,
      },
    },
  }
}

const particles = () => {
  return (
    <Particles params={particleOptions} className={ParticlesStyle.particles} />
  );
};

export default particles;