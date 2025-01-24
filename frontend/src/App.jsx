import React from "react";
import { Routes, Route } from "react-router-dom"; // Only import Routes and Route here
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";

const App = () => (
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
      <Route path="/contact" element={<Contact />} /> {/* Contact page */}
    </Routes>
  </>
);

export default App;
