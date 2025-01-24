import React from "react";
import "../App.css";

import Wanderlust from "../assets/wonder.jpeg";
import Spotify from "../assets/spotify.png";
import LandingPage from "../assets/landing.jpg";
import TemperatureConverter from "../assets/tc.png";
import TributePage from "../assets/tribute.jpg";
import Calculator from "../assets/calculator.jpg";
import TodoApp from "../assets/todo.jpg";

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
      <PortfolioBox imgSrc={Wanderlust} title="Wanderlust" description="I have created a website where users can add rental properties using Node.js and MongoDB" link="https://wanderlust-bdzt.onrender.com/listings" />
      <PortfolioBox imgSrc={Spotify} title="Spotify Clone" description="I have developed a professional-grade Spotify clone utilizing HTML and CSS." link="https://spotifyclone-rudraraj.netlify.app/" />
      <PortfolioBox imgSrc={LandingPage} title="Landing Page" description="The landing page has been crafted utilizing HTML and CSS to create an engaging and informative interface." link="https://landing-page-by-rudra.netlify.app/" />
      <PortfolioBox imgSrc={TemperatureConverter} title="Temperature Converter" description="The temperature converter has been developed employing HTML and CSS to facilitate conversion operations." link="https://temperature-converter-by-rudra.netlify.app/" />
      <PortfolioBox imgSrc={TributePage} title="Tribute Page" description="The tribute page has been created through the utilization of HTML and CSS." link="https://tribute-page-by-rudra.netlify.app/" />
      <PortfolioBox imgSrc={Calculator} title="Calculator" description="I've developed a calculator using HTML and CSS to perform calculations." link="https://calculator-by-rudra.netlify.app/" />
      <PortfolioBox imgSrc={TodoApp} title="TODO APP" description="I have created a task management application utilizing HTML, CSS, and JavaScript to facilitate the addition and removal of tasks." link="https://todo-by-rudra.netlify.app/" />
    </div>
  </section>
);

export default Portfolio;
