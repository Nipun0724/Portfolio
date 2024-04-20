import { useTypewriter } from "react-simple-typewriter";
import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Header.css";
const Header = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  if (inView) {
    controls.start("visible");
  }
  const [typeEffect] = useTypewriter({
    words: [" Programmer.", " Innovater.", " Designer.", " Web Developer."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <motion.div
      className="hero-section"
      id="home"
      ref={ref}
      variants={{
        hidden: { opacity: 0.8, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      {/* <img src={profile} alt="" /> */}
      <div className="title">
        <h1>
          I'm a<span>{typeEffect}</span>
        </h1>
      </div>
    </motion.div>
  );
};

export default Header;
