import React from "react";
import Navbar from "../navigation/Navbar";
import HomePage from "../homePage/HomePage";
import Courses from "../courses/Courses";
import About from "../about/About";
import Contact from "../contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HomePage />
      <Courses />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
