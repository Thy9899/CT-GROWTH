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

          <p>
            A mobile application for managing student information, class
            schedules, and academic records, built with React Native for both
            iOS and Android platforms.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img src="/SMS/sms.png" alt="Project Preview" />

          <div className="project-gallery">
            <div className="gallery">
              <img src="/SMS/mobile.png" alt="Gallery" />
            </div>
            <div className="gallery">
              <img src="/SMS/student.png" alt="Gallery" />
            </div>
            <div className="gallery">
              <img src="/SMS/class.png" alt="Gallery" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p>
              A mobile application for managing student information, class
              schedules, and academic records, built with React Native for both
              iOS and Android platforms.
            </p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span>Dart</span>
              <span>Flutter</span>
              <span>ASP.NET Core</span>
              <span>Entity Framework</span>
              <span>SQL Server</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li>Student Information Management</li>
              <li>Class Schedule Viewing</li>
              <li>Academic Record Tracking</li>
              <li>Notifications and Reminders</li>
              <li>Offline Data Access</li>
              <li>Intuitive User Interface</li>
            </ul>
          </div>

          <div className="project-buttons">
            <button className="live-btn" disabled>
              Live Demo
            </button>

            <button className="github-btn">GitHub Repository</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMS_App;
