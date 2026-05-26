import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div id="home" className="home-page">
      <div className="home-page-container">
        <div className="left-container">
          <p className="typing">Welcome!</p>

          <h1 className="gradient">CT GROWTH</h1>

          <p className="intro-text">
            I am currently majoring in Information Technology with a strong
            interest in Web Development and Software Engineering. During my
            learning journey, I have been improving both my technical and
            problem-solving skills through personal and academic projects.
          </p>
        </div>

        <div className="right-container">
          <img src="/Image/profile.jpg" alt="home-page" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
