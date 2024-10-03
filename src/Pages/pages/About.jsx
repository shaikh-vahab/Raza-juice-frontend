import React from "react";
import "../../Css/AboutUs.css";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              In today's digital age, being online is more than just a convenience; it's a way of life.
              With the click of a button, we connect to a vast world of information, communication, and entertainment.
              From social media to online shopping, our virtual presence shapes how we interact and perceive the world.
              Despite its benefits, being online also raises concerns about privacy, security, and digital addiction.
              Whether for work, leisure, or staying connected with loved ones, being online has become an integral part of modern existence.
            </p>

            <button>Explore More</button>
          </div>
          <div className="banner">
            <img src="AboutUs-img.jpg" alt="about" className="zoom-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
