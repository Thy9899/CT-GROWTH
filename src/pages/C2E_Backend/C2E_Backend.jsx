import React from "react";
import "../Project_Detail.css";

const C2E_Backend = () => {
  return (
    <section className="project-detail-section">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-overlay"></div>

        <div className="project-hero-content">
          <p className="project-tag">PROJECT DETAIL</p>

          <h1>Backend API for Click2Eat</h1>

          <p>
            A robust backend API for the Click2Eat application, built with
            Node.js and Express, providing seamless integration with the
            frontend and managing all server-side logic.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img
            src="/C2E_API/app.png"
            alt="Project Preview"
            style={{ objectPosition: "left" }}
          />

          <div className="project-gallery">
            <div className="gallery">
              <img src="/C2E_API/diagram.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/C2E_API/admin.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/C2E_API/customer.png" alt="Gallery" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p>
              The Click2Eat Backend API is a comprehensive server-side
              application designed to support the Click2Eat food delivery
              platform. It provides a robust and scalable architecture for
              handling all server-side logic, including user authentication,
              order management, and database interactions. Built with Node.js
              and Express, the API ensures seamless communication between the
              frontend and backend, enabling a smooth user experience for both
              customers and restaurant administrators. The API also incorporates
              security best practices to protect user data and ensure the
              integrity of the application.
            </p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>JWT</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li>User Authentication and Authorization</li>
              <li>Order Management</li>
              <li>Database Interactions</li>
              <li>API Endpoints</li>
              <li>Security Measures</li>
              <li>Scalability</li>
            </ul>
          </div>

          <div className="project-buttons">
            <button className="live-btn" disabled>
              Live Demo
            </button>

            <button
              className="github-btn"
              onClick={() =>
                window.open(
                  "https://github.com/Thy9899?tab=repositories",
                  "_blank",
                )
              }
            >
              GitHub Repository
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default C2E_Backend;
