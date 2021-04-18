import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";

const particleOptions = {
  particles: {
    number: {
      value: 360,
      density: {
        enable: false,
      },
    },
    color: {
      value: "#43935366",
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
      random: true,
      speed: 2,
      direction: "down",
      out_mode: "bounce",
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
    <Particles params={particleOptions} className="canvas particles" />
  );
};

export default particles;