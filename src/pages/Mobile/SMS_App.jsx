import React from "react";
import "../Project_Detail.css";

const SMS_App = () => {
  return (
    <section className="project-detail-section">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-overlay"></div>

        <div className="project-hero-content">
          <p className="project-tag">PROJECT DETAIL</p>

          <h1>Student Management System Mobile App</h1>

          <p></p>
        </div>
      </div>
      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img src="/" alt="Project Preview" />

          <div className="project-gallery">
            <img src="/" alt="Gallery" />

            <img src="/" alt="Gallery" />

            <img src="/" alt="Gallery" />
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p></p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div className="project-buttons">
            <button className="live-btn">Live Demo</button>

            <button className="github-btn">GitHub Repository</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMS_App;
