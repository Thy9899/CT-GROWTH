import React from "react";
import "./PDS.css";

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
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
            alt="Project Preview"
          />

          <div className="project-gallery">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Gallery"
            />

            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              alt="Gallery"
            />

            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Gallery"
            />
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
            <button className="live-btn">Live Demo</button>

            <button className="github-btn">GitHub Repository</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PDS;
