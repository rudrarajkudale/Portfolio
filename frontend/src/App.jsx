import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ScrollReveal from "scrollreveal";
import Typed from "typed.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav a");

    const handleScroll = () => {
      sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(`header nav a[href*=${id}]`);
          if (activeLink) activeLink.classList.add("active");
        }
      });

      const header = document.querySelector("header");
      if (header) header.classList.toggle("sticky", window.scrollY > 100);

      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    ScrollReveal({
      distance: "80px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .portfolio-box", { origin: "bottom" });
    ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
    ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

    const typed = new Typed(".multiple-text", {
      strings: ["Full-Stack Developer", "Java Developer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Portfolio />
              <About />
              <Footer />
            </>
          }
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
