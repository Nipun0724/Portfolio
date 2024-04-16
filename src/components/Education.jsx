import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Education.css";
const Education = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      className="education"
      ref={ref}
      variants={{
        hidden: { opacity: 0.8, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div className="container-edu">
        <div className="row-edu">
          <div className="col-edu">
            <h2 className="title-edu">Education</h2>
            <div className="contents-edu">
              <div className="box-edu">
                <h4>2022-2026</h4>
                <h4>B.tech in Computer Science</h4>
                <p>
                  Vellore Institute of Technology, Vellore <br />
                  <br />
                  <span className="cgpa">CGPA</span> : 9.40
                </p>
              </div>
              <div className="box-edu">
                <h4>2021-2022</h4>
                <h4>12th Standard (SCERT)</h4>
                <p>Kuriakose Elias English Medium School, Kottayam</p>
                <span className="cgpa">Grade</span> : 97.33%
              </div>
              <div className="box-edu">
                <h4>2019-2020</h4>
                <h4>10th Standard (CBSE)</h4>
                <p>Bharathiya Vidya Bhavan, Poochatty</p>
                <span className="cgpa">Grade</span> : 98.6%
              </div>
            </div>
          </div>
          <div className="col-edu">
            <h2 className="title-edu">Experience</h2>
            <div className="contents-edu">
              <div className="box-edu">
                <h4>2024-</h4>
                <h4>Web Developer Head</h4>
                <p>RoboVitics Club, VIT Vellore</p>
              </div>
              <div className="box-edu">
                <h4>2024-2024</h4>
                <h4>Intern</h4>
                <p>Nirva Health</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
