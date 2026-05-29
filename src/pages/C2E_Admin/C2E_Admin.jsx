import React from "react";
import "../Project_Detail.css";

const C2E_Admin = () => {
  return (
    <section className="project-detail-section">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-overlay"></div>

        <div className="project-hero-content">
          <p className="project-tag">PROJECT DETAIL</p>

          <h1>Click2Eat Admin App</h1>

          <p>
            A comprehensive admin panel for managing the Click2Eat food delivery
            platform, including user management, order processing, and
            analytics.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img src="/C2E_Admin/dashbaord.png" alt="Project Preview" />

          <div className="project-gallery">
            <div className="gallery">
              <img src="/C2E_Admin/stock.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/C2E_Admin/order.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/C2E_Admin/report.png" alt="Gallery" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p>
              This admin panel provides a comprehensive solution for managing
              the Click2Eat food delivery platform, offering features for user
              management, order processing, and analytics.
            </p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
              <span>Bootstrap</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li>User Management</li>
              <li>Order Processing</li>
              <li>Analytics Dashboard</li>
              <li>Inventory Management</li>
              <li>Reporting</li>
              <li>Integration with Payment Gateways</li>
            </ul>
          </div>

          <div className="project-buttons">
            <button
              className="live-btn"
              onClick={() =>
                window.open("https://click2-eat.vercel.app/", "_blank")
              }
            >
              Live Demo
            </button>

            <button
              className="github-btn"
              onClick={() =>
                window.open("https://github.com/Thy9899/Click2Eat", "_blank")
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

export default C2E_Admin;
