import React from "react";
import "./HireMe.css";

const icons = {
  telegram: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
  facebook: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  instagram: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  linkedin: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
};

const HireMe = () => {
  return (
    <section className="hire-me">
      {/* Hero */}
      <div className="hire-hero">
        <p className="hire-tag">AVAILABLE FOR WORK</p>

        <h1>
          Let's Build Something
          <span> Amazing Together</span>
        </h1>

        <p className="hire-intro">
          I'm Chanthy Kean, an Information Technology student and Software
          Developer specializing in modern web applications, desktop systems,
          REST APIs, and database-driven solutions.
        </p>

        <div className="hire-contact-container">
          <fieldset className="hire-contact-box">
            <legend className="hire-contact-title">Contact Me</legend>

            <div className="icon-group">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100071130440893&mibextid=LQQJ4d"
                target="_blank"
                rel="noreferrer"
                className="icon-item"
              >
                <img src={icons.facebook} alt="Facebook" className="icon-img" />
                <span className="icon-label">Facebook</span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/chanthy_kean"
                target="_blank"
                rel="noreferrer"
                className="icon-item"
              >
                <img src={icons.telegram} alt="Telegram" className="icon-img" />
                <span className="icon-label">Telegram</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sii8718?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="icon-item"
              >
                <img
                  src={icons.instagram}
                  alt="Instagram"
                  className="icon-img"
                />
                <span className="icon-label">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/chanthy-kean-9ba862409?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noreferrer"
                className="icon-item"
              >
                <img src={icons.linkedin} alt="LinkedIn" className="icon-img" />
                <span className="icon-label">LinkedIn</span>
              </a>
            </div>
          </fieldset>
        </div>
      </div>

      {/* Services */}
      <div className="hire-section">
        <h2>Services I Offer</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>🌐 Web Development</h3>
            <p>
              Modern responsive websites using React.js, Laravel and ASP.NET
              Core.
            </p>
          </div>

          <div className="service-card">
            <h3>💻 Desktop Applications</h3>
            <p>Business applications using C# Windows Forms and SQL Server.</p>
          </div>

          <div className="service-card">
            <h3>⚙ Backend Development</h3>
            <p>
              REST APIs, Authentication, Database Design, and Server-side
              development.
            </p>
          </div>

          <div className="service-card">
            <h3>📱 Mobile Applications</h3>
            <p>
              Cross-platform mobile apps using Flutter and modern technologies.
            </p>
          </div>
        </div>
      </div>

      {/* Why Me */}
      <div className="hire-section">
        <h2>Why Work With Me?</h2>

        <div className="why-grid">
          <div>✓ Strong Problem Solving Skills</div>
          <div>✓ Modern UI/UX Design Focus</div>
          <div>✓ Full-Stack Development Knowledge</div>
          <div>✓ API Integration Experience</div>
          <div>✓ Database Design & SQL Skills</div>
          <div>✓ Fast Learner & Adaptable</div>
        </div>
      </div>

      {/* Skills */}
      <div className="hire-section">
        <h2>Technology Stack</h2>

        <div className="skills">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>Java</span>
          <span>C#</span>
          <span>ASP.NET Core</span>
          <span>Laravel</span>
          <span>Node.js</span>
          <span>Flutter</span>
          <span>SQL Server</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>Git</span>
        </div>
      </div>

      {/* Availability */}
      <div className="hire-section">
        <h2>Current Availability</h2>

        <div className="availability">
          <div className="available">
            🟢 Available for Internship Opportunities
          </div>

          <div className="available">🟢 Available for Freelance Projects</div>

          <div className="available">🟢 Open to Collaboration</div>
        </div>
      </div>

      {/* Process */}
      <div className="hire-section">
        <h2>My Working Process</h2>

        <div className="process-grid">
          <div className="process-card">
            <h3>1</h3>
            <p>Requirement Discussion</p>
          </div>

          <div className="process-card">
            <h3>2</h3>
            <p>Planning & Design</p>
          </div>

          <div className="process-card">
            <h3>3</h3>
            <p>Development</p>
          </div>

          <div className="process-card">
            <h3>4</h3>
            <p>Testing & Delivery</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="hire-cta">
        <h2>Ready to Start a Project?</h2>

        <p>
          Whether it's a website, desktop application, API, or database system,
          I'm ready to help bring your ideas to life.
        </p>

        <a
          href="https://t.me/chanthy_kean"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-btn"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
};

export default HireMe;
