import { useTypewriter, Cursor } from "react-simple-typewriter";
import React from "react";
import "./Header.css";
import comp from "../assets/vecteezy_cute-astronaut-working-in-front-of-his-computer_-removebg-preview.png";
const Header = () => {
  const [typeEffect] = useTypewriter({
    words: [" Programmer.", " Innovater.", " Designer.", " Web Developer."],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  return (
    <div className="hero-section">
      <div className="title">
        <h1>
          I'm a<span>{typeEffect}</span>
        </h1>
        <img src={comp} alt="" />
      </div>
    </div>
  );
};

export default Header;
