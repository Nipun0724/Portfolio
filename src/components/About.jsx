import React, { useRef, useState } from "react";
import css from "../assets/css.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import flask from "../assets/flask-by-example-python-web-framework-bottle-bottle-removebg-preview.png";
import postgres from "../assets/postgresql-icon-1987x2048-v2fkmdaw.png";
import html from "../assets/html.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import "./About.css";

const About = () => {
  // Controls for animation
  const controls = useAnimation();

  // State for animation values
  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(0);
  const [a3, setA3] = useState(0);
  const [a4, setA4] = useState(0);
  const [a5, setA5] = useState(0);
  const [a6, setA6] = useState(0);

  // Reference for in-view detection
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // Animation and value updates when in view
  if (inView) {
    controls.start("visible");
    if (a1 < 60) {
      setTimeout(() => {
        setA1(a1 + 1);
      }, 20);
    }
    if (a2 < 70) {
      setTimeout(() => {
        setA2(a2 + 1);
      }, 20);
    }
    if (a3 < 80) {
      setTimeout(() => {
        setA3(a3 + 1);
      }, 20);
    }
    if (a4 < 80) {
      setTimeout(() => {
        setA4(a4 + 1);
      }, 20);
    }
    if (a5 < 80) {
      setTimeout(() => {
        setA5(a5 + 1);
      }, 20);
    }
    if (a6 < 90) {
      setTimeout(() => {
        setA6(a6 + 1);
      }, 20);
    }
  }

  return (
    // About section with motion animation
    <motion.div
      className="about"
      id="about"
      ref={ref}
      variants={{
        hidden: { opacity: 0.9, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      {/* Qualification and skills */}
      <div className="qualification">
        <div className="skills">
          {/* Title */}
          <h2>My Skills</h2>
          {/* Description */}
          <p className="myskill">
            Skilled in full-stack web development, crafting user-friendly
            interfaces and robust backend systems for seamless digital
            experiences.
          </p>
          {/* Skills container */}
          <div className="skills-container">
            {/* Backend skills */}
            <div className="skill">
              <h3 className="backend">Backend</h3>
              <motion.ul ref={ref}>
                {/* PostgreSQL skill */}
                <li>
                  <div className="progressbar1">
                    <motion.div
                      className="progress1 postgres"
                      animate={{
                        width: `${100 - a1}%`,
                      }}
                      transition={{
                        ease: "linear",
                      }}
                    ></motion.div>
                  </div>
                  <p>{a1}%</p>
                  <img src={flask} />
                </li>
                {/* Flask skill */}
                <li>
                  <div className="progressbar1">
                    <motion.div
                      className="progress1 flask"
                      animate={{
                        width: `${100 - a2}%`,
                      }}
                      transition={{
                        ease: "linear",
                      }}
                    ></motion.div>
                  </div>
                  <p>{a2}%</p>
                  <img src={postgres} />
                </li>
                {/* Node.js skill */}
                <li>
                  <div className="progressbar1">
                    <motion.div
                      className="progress1 node"
                      animate={{
                        width: `${100 - a3}%`,
                      }}
                      transition={{
                        ease: "linear",
                      }}
                    ></motion.div>
                  </div>
                  <p>{a3}%</p>
                  <img src={node} />
                </li>
              </motion.ul>
            </div>
            {/* Frontend skills */}
            <div className="skill">
              <h3>Frontend</h3>
              <motion.ul ref={ref} className="frontend">
                {/* HTML skill */}
                <li>
                  <img src={html} />
                  <p>{a6}%</p>
                  <div className="progressbar">
                    <motion.div
                      className="progress css"
                      animate={{
                        width: `${a6}%`,
                      }}
                      transition={{
                        ease: "linear",
                      }}
                    ></motion.div>
                  </div>
                </li>
                {/* CSS skill */}
                <li>
                  <img src={css} />
                  <p>{a4}%</p>
                  <div className="progressbar">
                    <motion.div
                      className="progress css"
                      animate={{
                        width: `${a4}%`,
                      }}
                      transition={{
                        ease: "linear",
                      }}
                    ></motion.div>
                  </div>
                </li>
                {/* React skill */}
                <li>
                  <img src={react} />
                  <p>{a5}%</p>
                  <div className="progressbar">
                    <motion.div
                      className="progress css"
                      animate={{
                        width: `${a5}%`,
                      }}
                      transition={{
                        ease: "linear",
                      }}
                    ></motion.div>
                  </div>
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
