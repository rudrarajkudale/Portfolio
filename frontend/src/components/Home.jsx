import React from "react";
import "../App.css";
import Profile from "../assets/profile.png";
import CV from "../assets/resume.pdf";
import 'boxicons/css/boxicons.min.css';

const Home = () => (
  <section className="home" id="home">
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Rudraraj Kudale</h1>
      <h3>And I'm a <span className="multiple-text"></span></h3>
      <p>
      I'm Rudraraj Kudale, a final-year B.Tech Computer Engineering student at DY Patil School of Engineering & Technology, Pune, with a
CGPA of 9.6. I am proficient in Java, C, JavaScript, and full-stack development, with a solid understanding of Data Structures and
Algorithms (DSA). I hold certifications in Full Stack Development and Web Development, and I’m eager to apply my skills to impactful
projects in a professional environment.
      </p>
      <div className="social-media">
        <a href="https://www.linkedin.com/in/rudraraj-kudale-939413259/" className="a"><i className="bx bxl-linkedin"></i></a>
        <a href="https://www.youtube.com/channel/UCyq0pwjG3CntpeRsVod4iog" className="a"><i className="bx bxl-youtube"></i></a>
        <a href="https://www.instagram.com/rudra_kudale/" className="a"><i className="bx bxl-instagram"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100090542691891&mibextid=ZbWKwL" className="a"><i className="bx bxl-facebook"></i></a>
      </div>
      <a href={CV} className="btn">Download CV</a>
    </div>
    <div className="home-img">
      <img src={Profile} alt="profile" />
    </div>
  </section>
);

export default Home;
