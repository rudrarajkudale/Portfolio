import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Profile2 from "../assets/profile2.png";

const About = () => (
  <section className="about" id="about">
    <div className="about-img">
      <img src={Profile2} alt="profile" />
    </div>
    <div className="about-content">
      <h2 className="heading">About <span>Me</span></h2>
      <h3>Full-Stack Developer</h3>
      <p>
        Hello, I'm Rudra, a dedicated student with a strong interest in both
        backend and frontend technologies. My main goal is to enhance my skill
        set in these areas. I am eager to connect with professionals in the tech
        industry who share my passion for finding creative solutions to real-world
        problems. I am constantly seeking new opportunities to expand my knowledge
        and skills in order to make meaningful contributions. I would be thrilled
        to discuss how my enthusiasm and dedication can bring value to your
        organization.
      </p>
      <Link to="/contact" className="btn">Contact Us</Link>
    </div>
  </section>
);

export default About;
