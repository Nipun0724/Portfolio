import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import "./Projects.css";
import delish from "../assets/DelishDash.png";
import weather from "../assets/Weather.png";
import vortex from "../assets/Vortex.png";
const Projects = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      className="projects"
      id="projects"
      ref={ref}
      variants={{
        hidden: { opacity: 0.8, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      <h2>My Projects</h2>
      <div className="container2">
        <div className="project">
          <img className="front" src={delish} alt="" />
          <h3>Project One</h3>
          <div className="btn-container">
            <a href="https://github.com/Nipun0724/DelishDash-main">
              <button>Github</button>
            </a>
            <a href="https://6618f4b8a3d77aaa73bd0e3c--hilarious-dragon-d26dff.netlify.app/">
              <button>Website</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img className="front" src={weather} alt="" />
          <h3>Project Two</h3>
          <div className="btn-container">
            <a href="https://github.com/Nipun0724/Weather">
              <button>Github</button>
            </a>
            <a href="https://nipunweather.netlify.app/">
              <button>Website</button>
            </a>
          </div>
        </div>
        <div className="project">
          <img className="front" src={vortex} alt="" />
          <h3>Project Three</h3>
          <div className="btn-container">
            <a href="https://github.com/Nipun0724/Vortex-360-Event-2025">
              <button>Github</button>
            </a>
            <a href="https://transcendent-gnome-9ce8a6.netlify.app/">
              <button>Website</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
