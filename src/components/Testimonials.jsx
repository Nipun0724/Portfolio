import React from "react";
import "./Testimonials.css";
import qb from "../assets/qbegin.png";
import qe from "../assets/qend.png";
import astro from "../assets/3600_2_06-removebg-preview.png";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="container">
        <div className="col">
          <div className="quote">
            <img src={qb} alt="" style={{ height: "20px" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              amet provident dolores officiis inventore vero in atque, quam
              porro impedit!
            </p>
          </div>
          <img src={qe} className="end" alt="" style={{ height: "20px" }} />

          <div className="client">
            <p>-XYZ Inc.</p>
            <img src="https://picsum.photos/id/237/60/60" alt="" />
          </div>
        </div>
        <img src={astro} alt="" className="astro" />
        <div className="row">
          <div className="col">
            <div className="quote">
              <img src={qb} alt="" style={{ height: "20px" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                amet provident dolores officiis inventore vero in atque, quam
                porro impedit!
              </p>
            </div>
            <img src={qe} className="end" alt="" style={{ height: "20px" }} />

            <div className="client">
              <p>-XYZ Inc.</p>
              <img src="https://picsum.photos/id/237/60/60" alt="" />
            </div>
          </div>
          <div className="col">
            <div className="quote">
              <img src={qb} alt="" style={{ height: "20px" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                amet provident dolores officiis inventore vero in atque, quam
                porro impedit!
              </p>
            </div>
            <img src={qe} className="end" alt="" style={{ height: "20px" }} />

            <div className="client">
              <p>-XYZ Inc.</p>
              <img src="https://picsum.photos/id/237/60/60" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
