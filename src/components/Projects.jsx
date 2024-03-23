import React from 'react'
import "./Projects.css"
import right from "../assets/chevron-right.145x256.png"
const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="project">
        <img src="https://picsum.photos/id/237/400/400" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatum dolorem aut sed minima, ipsam nemo distinctio accusantium neque, deserunt, sint ut quibusdam quas delectus nihil magnam voluptas maxime unde.</p>
      </div>
      <div className="project">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatum dolorem aut sed minima, ipsam nemo distinctio accusantium neque, deserunt, sint ut quibusdam quas delectus nihil magnam voluptas maxime unde.</p>
        <img src="https://picsum.photos/id/237/400/400" alt="" />
      </div>
      <div className="project">
        <img src="https://picsum.photos/id/237/400/400" alt="" />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat voluptatum dolorem aut sed minima, ipsam nemo distinctio accusantium neque, deserunt, sint ut quibusdam quas delectus nihil magnam voluptas maxime unde.</p>
      </div>
    </div>
  )
}

export default Projects
