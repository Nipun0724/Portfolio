import React from "react";
import "./Projects.css";
import right from "../assets/chevron-right.145x256.png";
import delish from "../assets/DelishDash.png";
import weather from "../assets/Weather.png";
import vortex from "../assets/Vortex.png";
const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="container2">
        <div className="project">
          <img className="front" src={delish} alt="" />
          <div className="hidden">
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ratione.
            </p>
            <a href="#">
              Visit Website{" "}
              <img src={right} style={{ height: "12px" }} alt="" />
            </a>
          </div>
        </div>
        <div className="project">
          <img className="front" src={weather} alt="" />
          <div className="hidden">
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ratione.
            </p>
            <a href="#">
              Visit Website{" "}
              <img src={right} style={{ height: "12px" }} alt="" />
            </a>
          </div>
        </div>
        <div className="project">
          <img className="front" src={vortex} alt="" />
          <div className="hidden">
            <h3>Lorem, ipsum.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ratione.
            </p>
            <a href="#">
              Visit Website{" "}
              <img src={right} style={{ height: "12px" }} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
