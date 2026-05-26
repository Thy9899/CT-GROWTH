import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img src="/Image/profile.jpg" alt="About Me" />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <p className="section-tag">ABOUT ME</p>

          <h1 className="about-title">
            Passionate About
            <span> Web Development</span>
          </h1>

          <p className="about-description">
            I am an Information Technology student with a strong passion for
            modern web development and software engineering. I enjoy building
            responsive websites, desktop applications, and full-stack systems
            that solve real-world problems.
          </p>

          <p className="about-description">
            During my learning journey, I have worked on multiple academic and
            personal projects using technologies such as React.js, ASP.NET Core
            Web API, C#, SQL Server, Laravel, and JavaScript.
          </p>

          {/* Skills */}
          <div className="skills">
            <div className="skill-card">React JS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">C# .NET</div>
            <div className="skill-card">ASP.NET API</div>
            <div className="skill-card">SQL Server</div>
            <div className="skill-card">Laravel</div>
          </div>

          {/* Buttons */}
          <div className="about-buttons">
            <button className="btn-primary">Download CV</button>

            <button className="btn-outline">Contact Me</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
