import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/navigation/Navbar";
import HomePage from "../components/homePage/HomePage";
import Project from "../components/project/Project";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <HomePage />
      <Project />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
