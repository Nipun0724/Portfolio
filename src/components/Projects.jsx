import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

import "./Projects.css";
import delish from "../assets/DelishDash.png";
import weather from "../assets/Weather.png";
import vortex from "../assets/Vortex.png";

const Projects = () => {
  // Animation controls
  const controls = useAnimation();

  // Ref for detecting when component is in view
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Start animation when component is in view
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
      {/* Project section title */}
      <h2>My Projects</h2>

      {/* Project cards */}
      <div className="container2">
        {/* Project One */}
        <div className="project">
          <img className="front" src={delish} alt="" />
          <h3>Project One</h3>
          <div className="btn-container">
            {/* Link to GitHub */}
            <a
              target="_blank"
              href="https://github.com/Nipun0724/DelishDash-main"
            >
              <button>Github</button>
            </a>

            {/* Link to website */}
            <a
              target="_blank"
              href="https://6618f4b8a3d77aaa73bd0e3c--hilarious-dragon-d26dff.netlify.app/"
            >
              <button>Website</button>
            </a>
          </div>
        </div>

        {/* Project Two */}
        <div className="project">
          <img className="front" src={weather} alt="" />
          <h3>Project Two</h3>
          <div className="btn-container">
            {/* Link to GitHub */}
            <a target="_blank" href="https://github.com/Nipun0724/Weather-App">
              <button>Github</button>
            </a>

            {/* Link to website */}
            <a target="_blank" href="https://nipunweather2.netlify.app/">
              <button>Website</button>
            </a>
          </div>
        </div>

        {/* Project Three */}
        <div className="project">
          <img className="front" src={vortex} alt="" />
          <h3>Project Three</h3>
          <div className="btn-container">
            {/* Link to GitHub */}
            <a
              target="_blank"
              href="https://github.com/Nipun0724/Vortex-360-Event-2025"
            >
              <button>Github</button>
            </a>

            {/* Link to website */}
            <a
              target="_blank"
              href="https://transcendent-gnome-9ce8a6.netlify.app/"
            >
              <button>Website</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
