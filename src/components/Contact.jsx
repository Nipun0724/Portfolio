import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import "./Contact.css";
import phone from "../assets/white-phone-icon-vector-7151422.png";
import location from "../assets/360_F_149544314_UcRXtS7SJVBBFUYVJGA88LWgbimCMsfg.png";
import linkdein from "../assets/icons8-linkedin-24.png";
import github from "../assets/icons8-github-26.png";
import facebook from "../assets/icons8-facebook-24.png";
import twitterx from "../assets/icons8-twitterx-50.png";

const Contact = () => {
  // Animation controls
  const controls = useAnimation();
  // Reference for detecting if the component is in view
  const ref = useRef(null);
  // Trigger animation when component is in view
  const inView = useInView(ref, { once: true });
  if (inView) {
    controls.start("visible");
  }

  return (
    <motion.div
      className="contact"
      id="contact"
      ref={ref}
      variants={{
        hidden: { opacity: 0.8, x: -200 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1 }}
    >
      {/* Contact Me header */}
      <h2>Contact Me</h2>

      {/* Container for form and social media links */}
      <div className="container1">
        {/* Contact form */}
        <form className="input">
          <label htmlFor="name">Name :</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email :</label>
          <input type="emai" id="email" />
          <br />
          <p>Enter your Email: </p>
          <textarea name="" id="" cols="43" rows="10"></textarea>
          <input type="submit" id="btn" />
        </form>

        {/* Social media links */}
        <div className="socials">
          <h3>Contact Info</h3>
          <div className="details">
            {/* Phone icon */}
            <img src={phone} alt="" />
            <p>+91-9778440565</p>
          </div>
          <div className="details">
            {/* Location icon */}
            <img src={location} alt="" className="special" />
            <p>
              "Achutham", Sivapuram Rd, Pattalakkunnu, Mannuthy PO, Thrissur,
              Kerala, India
            </p>
          </div>
          <h3>Social Media</h3>
          {/* Social media links */}
          <div className="links1">
            <a href="https://www.facebook.com/nipun.nair.1/" target="_blank">
              <img src={facebook} alt="" className="special" />
            </a>
            <a
              href="https://github.com/Nipun0724?tab=repositories"
              target="_blank"
            >
              <img src={github} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/nipun-nair-3ba1a4271/"
              target="_blank"
            >
              <img src={linkdein} alt="" />
            </a>
            <a href="https://twitter.com/nipun_nair" target="_blank">
              <img src={twitterx} alt="" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
