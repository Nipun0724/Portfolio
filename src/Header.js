import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

const Header = () => {
  return (
    <div className="hero-section">
      <img src="./istockphoto-612399462-612x612-removebg-preview.png" alt="" />
      <div className="title">
        <h1>
          I am
          <span>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#eb455f",
                fontWeight: 500,
                fontSize: "4rem",
              }}
              startDelay={0}
              multiText={["Developer.", "Designer.", "Innovator.", "Nipun."]}
              multiTextDelay={1500}
              typeSpeed={100}
            />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
