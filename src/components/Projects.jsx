import React from 'react'
import "./Projects.css"
import right from "../assets/chevron-right.145x256.png"
const Projects = () => {
  return (
    <div className="projects">
        <h2>My Projects</h2>
    <div className='project-cards'>
      <div className="cardcontainer">
          <div className="flip">
            <div
              className="front one"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              DelishDash
            </div>
            <div className="back one">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis explicabo cupiditate quidem vitae fuga quam odit quasi laboriosam aliquam amet?</p>
              <a href="#">Visit Website <img src={right} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front two"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Weather Website
            </div>
            <div className="back two">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis explicabo cupiditate quidem vitae fuga quam odit quasi laboriosam aliquam amet?</p>
              <a href="#">Visit Website <img src={right} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front three"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Vortex 360
            </div>
            <div className="back three">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis explicabo cupiditate quidem vitae fuga quam odit quasi laboriosam aliquam amet?</p>
              <a href="#">Visit Website <img src={right} alt="" /></a>
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front four"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              The Office
            </div>
            <div className="back four">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis explicabo cupiditate quidem vitae fuga quam odit quasi laboriosam aliquam amet?</p>
              <a href="#">Visit Website <img src={right} alt="" /></a>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Projects
