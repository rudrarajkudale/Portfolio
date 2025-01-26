import React from "react";
import "../App.css";

import Wanderlust from "../assets/wonder.jpg";
import Spotify from "../assets/spotify.png";
import EMS from "../assets/EMS.png";

const PortfolioBox = ({ imgSrc, title, description, link }) => (
  <div className="portfolio-box">
    <img src={imgSrc} alt={title} />
    <div className="portfolio-layer">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href={link}><i className="bx bx-link-external"></i></a>
    </div>
  </div>
);

const Portfolio = () => (
  <section className="portfolio" id="portfolio">
    <h2 className="heading">My <span>Projects</span></h2>
    <div className="portfolio-container">
      <PortfolioBox imgSrc={Wanderlust} title="Wanderlust" description="Developed a responsive rental web application for property exploration and listing.
" link="https://wanderlust-3xf6.onrender.com" />
      <PortfolioBox imgSrc={EMS} title="Employee Management System" description="Created a web app for employee management, task assignment, and tracking progress." link="https://employee-management-system-byrudra.netlify.app/" />
      <PortfolioBox imgSrc={Spotify} title="Spotify Clone" description="I have developed a professional-grade Spotify clone utilizing HTML and CSS." link="https://spotifyclone-rudraraj.netlify.app/" />
    </div>
  </section>
);

export default Portfolio;
