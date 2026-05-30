import React from "react";
import "../Project_Detail.css";

const SMS_Backend = () => {
  return (
    <section className="project-detail-section">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-overlay"></div>

        <div className="project-hero-content">
          <p className="project-tag">PROJECT DETAIL</p>

          <h1>Backend API for Student Management System</h1>

          <p>
            A comprehensive backend API for a Student Management System, built
            with Node.js and Express, providing robust functionality for
            managing student data, courses, and administrative tasks.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img src="/SMS/code.png" alt="Project Preview" />

          <div className="project-gallery">
            <div className="gallery">
              <img src="/SMS/data.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img
                src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/467203635/original/abb304d0486126f1ed110227345f58f4b72b3d96/develop-net-web-api-backend-and-rest-services.png"
                alt="Gallery"
              />
            </div>

            <div className="gallery">
              <img
                src="https://tse2.mm.bing.net/th/id/OIP.WUZMr_VYSoLdsyqQKtVXmwHaFj?r=0&pid=ImgDetMain&o=7&rm=3"
                alt="Gallery"
              />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p>
              This project involves developing a robust backend API for a
              Student Management System using Node.js and Express. The API
              provides comprehensive functionality for managing student
              information, courses, and administrative tasks.
            </p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span>C#</span>
              <span>ASP.NET Core</span>
              <span>Entity Framework</span>
              <span>SQL Server</span>
              <span>JWT Authentication</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li>Student Enrollment Management</li>
              <li>Course Registration and Management</li>
              <li>Grade Tracking and Reporting</li>
              <li>Administrative User Roles and Permissions</li>
              <li>Data Validation and Error Handling</li>
              <li>API Documentation and Testing</li>
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
                  "https://github.com/Thy9899/StudentManagement-dotnet-",
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

export default SMS_Backend;
