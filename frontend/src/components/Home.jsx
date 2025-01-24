import React from "react";
import "../App.css";
import Profile from "../assets/profile.png";
import 'boxicons/css/boxicons.min.css';

const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Rudraraj Kudale</h1>
      <h3>And I'm a <span className="multiple-text"></span></h3>
      <p>
        I am a student pursuing a B.Tech degree in Computer Science, and I have
        a strong passion for exploring and keeping up with the latest
        advancements in technology.
      </p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/rudraraj-kudale-939413259/" className="a"><i className="bx bxl-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCyq0pwjG3CntpeRsVod4iog" className="a"><i className="bx bxl-youtube"></i></a>
        <a href="https://www.instagram.com/rudra_kudale/" className="a"><i className="bx bxl-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100090542691891&mibextid=ZbWKwL" className="a"><i className="bx bxl-facebook"></i></a>
      </div>
      <a href="CV.png" className="btn">Download CV</a>
    </div>
    <div className="home-img">
      <img src={Profile} alt="profile" />
    </div>
  </section>
);

export default Home;
