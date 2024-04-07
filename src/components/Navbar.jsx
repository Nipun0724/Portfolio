import React from "react";
import "./Navbar.css";
import home from "../assets/house-solid.svg";
import about from "../assets/address-card-solid.svg";
import project from "../assets/sheet-plastic-solid.svg";
import testimonials from "../assets/comments-solid.svg";
import contact from "../assets/phone-solid.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul style={{ listStyle: "none" }}>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={home} alt="" style={{ height: "30px" }} />
            <p className="links" style={{ color: "black" }}>
              Home
            </p>
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={about} alt="" style={{ height: "30px" }} />
            <p className="links" style={{ color: "black" }}>
              About Me
            </p>
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={project} alt="" style={{ height: "30px" }} />
            <p className="links" style={{ color: "black" }}>
              Projects
            </p>
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={testimonials} alt="" style={{ height: "30px" }} />
            <p className="links" style={{ color: "black" }}>
              Testimonials
            </p>
          </a>
        </li>
        <li>
          <a href="#" style={{ textDecoration: "none" }}>
            <img src={contact} alt="" style={{ height: "30px" }} />
            <p className="links" style={{ color: "black" }}>
              Contact Us
            </p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
