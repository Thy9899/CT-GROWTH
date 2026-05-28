import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section id="home" className="home-page">
      <div className="home-page-container">
        {/* Left Content */}
        <div className="left-container" data-aos="fade-left">
          <p className="typing">Welcome!</p>

          <h1 className="gradient">CT GROWTH</h1>

          <p className="intro-text">
            I am currently majoring in Information Technology with a strong
            interest in Web Development and Software Engineering. During my
            learning journey, I have been improving both my technical and
            problem-solving skills through personal and academic projects.
          </p>
        </div>

        {/* Right Image */}
        <div className="right-container" data-aos="fade-right">
          <img src="/Image/profile.jpg" alt="home-page" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
