import { useTypewriter,Cursor } from "react-simple-typewriter";
import React from "react";
import './Header.css'
const Header = () => {
  const [typeEffect]=useTypewriter({
    words:[' Programmer',' Innovater',' Designer',' Web Developer'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40
  })
  return (
    <div className="hero-section">
      <div className="title">
        <h1>
          I'm a 
          <span>{typeEffect}</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
