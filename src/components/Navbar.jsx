import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";
import home from "../assets/house-solid.svg";
import about from "../assets/address-card-solid.svg";
import project from "../assets/sheet-plastic-solid.svg";
import education from "../assets/school-solid.svg";
import contact from "../assets/phone-solid.svg";
const Navbar = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  if (inView) {
    setTimeout(() => {
      controls.start("visible");
    }, 1500);
  }
  return (
    <motion.div
      className="navbar"
      ref={ref}
      variants={{
        hidden: { x: -100 },
        visible: { x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.5 }}
    >
      <ul style={{ listStyle: "none" }}>
        <Link style={{ textDecoration: "none" }} to="#home">
          <li>
            <a>
              <img src={home} alt="" style={{ height: "30px" }} />
              <p className="links" style={{ color: "black" }}>
                Home
              </p>
            </a>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="#about">
          <li>
            <a>
              <img src={about} alt="" style={{ height: "30px" }} />
              <p className="links" style={{ color: "black" }}>
                About Me
              </p>
            </a>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="#education">
          <li>
            <a>
              <img src={education} alt="" style={{ height: "30px" }} />
              <p className="links" style={{ color: "black" }}>
                Education
              </p>
            </a>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="#projects">
          <li>
            <a>
              <img src={project} alt="" style={{ height: "30px" }} />
              <p className="links" style={{ color: "black" }}>
                Projects
              </p>
            </a>
          </li>
        </Link>
        <Link style={{ textDecoration: "none" }} to="#contact">
          <li>
            <a>
              <img src={contact} alt="" style={{ height: "30px" }} />
              <p className="links" style={{ color: "black" }}>
                Contact Us
              </p>
            </a>
          </li>
        </Link>
      </ul>
    </motion.div>
  );
};

export default Navbar;
