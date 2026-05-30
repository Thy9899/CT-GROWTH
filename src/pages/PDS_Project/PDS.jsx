import React from "react";
import "../Project_Detail.css";

const PDS = () => {
  return (
    <section className="project-detail-section">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-overlay"></div>

        <div className="project-hero-content">
          <p className="project-tag">PROJECT DETAIL</p>

          <h1>Product Store Application</h1>

          <p>
            A modern desktop application developed using C# Windows Forms and
            SQL Server for managing products, orders, inventory, and reporting.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img src="/WindowForm/stock.png" alt="Project Preview" />

          <div className="project-gallery">
            <div className="gallery">
              <img src="/WindowForm/report.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/WindowForm/product.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/WindowForm/profile.png" alt="Gallery" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p>
              This application was designed to simplify product and inventory
              management for small businesses. It provides an easy-to-use
              desktop interface for handling products, sales transactions,
              reporting, and customer data management.
            </p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span>C#</span>
              <span>WinForms</span>
              <span>SQL Server</span>
              <span>ASP.NET API</span>
              <span>REST API</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li>Product Management System</li>
              <li>User Authentication</li>
              <li>Inventory Tracking</li>
              <li>Sales Reporting Dashboard</li>
              <li>Responsive Desktop UI</li>
              <li>Database Integration</li>
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

export default PDS;
