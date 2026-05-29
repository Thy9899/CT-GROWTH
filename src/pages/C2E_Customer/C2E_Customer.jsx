import React from "react";
import "../Project_Detail.css";

const C2E_Customer = () => {
  return (
    <section className="project-detail-section">
      {/* Hero */}
      <div className="project-hero">
        <div className="project-overlay"></div>

        <div className="project-hero-content">
          <p className="project-tag">PROJECT DETAIL</p>

          <h1>Click2Eat Customer App</h1>

          <p>
            The Click2Eat Customer App is a user-friendly mobile application
            designed to provide a seamless food ordering experience.
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="project-detail-container">
        {/* Left */}
        <div className="project-left">
          <img src="/C2E_Customer/product.png" alt="Project Preview" />

          <div className="project-gallery">
            <div className="gallery">
              <img src="/C2E_Customer/cart.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/C2E_Customer/checkout.png" alt="Gallery" />
            </div>

            <div className="gallery">
              <img src="/C2E_Customer/acc.png" alt="Gallery" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="project-right">
          <div className="info-card">
            <h2>Project Overview</h2>

            <p>
              The Click2Eat Customer App is a comprehensive food ordering
              platform designed to enhance the dining experience for customers.
              It offers a user-friendly interface that allows users to easily
              browse through a wide variety of restaurants and cuisines, place
              orders, and track their deliveries in real-time. The app also
              provides personalized recommendations based on user preferences
              and order history, making it easier for customers to discover new
              dishes and restaurants. With secure payment options and timely
              notifications about order status, the Click2Eat Customer App
              ensures a convenient and enjoyable dining experience for users.
            </p>
          </div>

          <div className="info-card">
            <h2>Technologies Used</h2>

            <div className="tech-stack">
              <span>React</span>
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express</span>
            </div>
          </div>

          <div className="info-card">
            <h2>Features</h2>

            <ul>
              <li>Intuitive User Interface</li>
              <li>Real-time Order Tracking</li>
              <li>Personalized Recommendations</li>
              <li>Secure Payment Options</li>
              <li>Timely Notifications</li>
            </ul>
          </div>

          <div className="project-buttons">
            <button
              className="live-btn"
              onClick={() =>
                window.open(
                  "https://thy9899.github.io/Click2Eat-Customer/",
                  "_blank",
                )
              }
            >
              Live Demo
            </button>

            <button
              className="github-btn"
              onClick={() =>
                window.open(
                  "https://github.com/Thy9899/Click2Eat-Customer",
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

export default C2E_Customer;
