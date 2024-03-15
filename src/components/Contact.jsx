import React from 'react'
import "./Contact.css"
import phone from "../assets/white-phone-icon-vector-7151422.png"
import location from "../assets/360_F_149544314_UcRXtS7SJVBBFUYVJGA88LWgbimCMsfg.png"
import linkdein from "../assets/icons8-linkedin-24.png"
import github from "../assets/icons8-github-26.png"
import facebook from "../assets/icons8-facebook-24.png"
import twitterx from "../assets/icons8-twitterx-50.png"
const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="container">
        <div className="input">
            <label htmlFor="name">Name :</label>
            <input type="text" id='name'/>
            <label htmlFor="email">Email :</label>
            <input type="emai" id='email'/><br />
            <p>Enter your Email: </p>
            <textarea name="" id="" cols="43" rows="10"></textarea>
            <input type="submit" id='btn'/>
        </div>
        <div className="socials">
            <h3>Contact Info</h3>
            <div className="details"><img src={phone} alt="" /><p>+91-9778440565</p></div>
            <div className="details"><img src={location} alt="" className='special'/><p>"Achutham", Sivapuram Rd, Pattalakkunnu, Mannuthy PO, Thrissur, Kerala, India</p></div>
            <h3>Social Media</h3>
            <div className="links">
                <a href="#"><img src={facebook} alt="" className='special'/></a>
                <a href="#"><img src={github} alt="" /></a>
                <a href="#"><img src={linkdein} alt="" /></a>
                <a href="#"><img src={twitterx} alt="" /></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
