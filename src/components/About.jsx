import React, { useRef, useState } from "react";
import css from "../assets/css.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import coding from "../assets/images-removebg-preview (1).png";
import { motion, useAnimation, useInView } from "framer-motion";
import "./About.css";
const About = () => {
  const [a1, setA1] = useState(0);
  const [a2, setA2] = useState(0);
  const [a3, setA3] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    if (a1 < 86) {
      setTimeout(() => {
        setA1(a1 + 1);
      }, 20);
    }
    if (a2 < 76) {
      setTimeout(() => {
        setA2(a2 + 1);
      }, 20);
    }
    if (a3 < 66) {
      setTimeout(() => {
        setA3(a3 + 1);
      }, 20);
    }
  }
  return (
    <div className="about">
      <div className="coding">
        <img src={coding} alt="" />
      </div>
      <div className="qualification">
        <div className="bio">
          <h2>My Bio</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            illo hic ratione consequuntur reprehenderit. Quia officia animi
            nobis iure et!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            cupiditate consequuntur a nisi amet voluptatibus quidem ullam
            assumenda atque necessitatibus?
          </p>
        </div>
        <div className="skills">
          <h2>My Skills</h2>
          <motion.ul ref={ref}>
            <li>
              <img src={css} />
              <div className="progressbar">
                <motion.div
                  className="progress css"
                  animate={{
                    width: `${a1}%`,
                  }}
                  transition={{
                    ease: "linear",
                  }}
                ></motion.div>
              </div>
              <p>{a1}%</p>
            </li>
            <li>
              <img src={react} />
              <div className="progressbar">
                <motion.div
                  className="progress css"
                  animate={{
                    width: `${a2}%`,
                  }}
                  transition={{
                    ease: "linear",
                  }}
                ></motion.div>
              </div>
              <p>{a2}%</p>
            </li>
            <li>
              <img src={node} />
              <div className="progressbar">
                <motion.div
                  className="progress css"
                  animate={{
                    width: `${a3}%`,
                  }}
                  transition={{
                    ease: "linear",
                  }}
                ></motion.div>
              </div>
              <p>{a3}%</p>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default About;
