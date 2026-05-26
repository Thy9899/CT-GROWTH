import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-container">
        {/* =====================================
            Left
        ===================================== */}
        <div className="footer-left">
          <div className="logo-name">
            <img src="../../../public/Image/ct_logo.png" alt="CT-Growth" />

            <h1>CT GROWTH</h1>
          </div>

          <p className="footer-description">
            Hi, I'm <span>Chanthy Kean</span>, a passionate Web Developer and
            Software Developer who enjoys building modern websites and desktop
            applications with clean UI/UX and modern technologies.
          </p>

          {/* Social Media */}
          <div className="social-media">
            <a
              href="https://www.facebook.com/profile.php?id=100071130440893&mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>

            <a
              href="https://t.me/chanthy_kean"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
                alt="Telegram"
              />
            </a>

            <a
              href="https://www.instagram.com/sii8718?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/chanthy-kean-9ba862409?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                alt="LinkedIn"
              />
            </a>
          </div>

          <a href="#home" className="top-btn">
            Back To Top ↑
          </a>
        </div>

        {/* =====================================
            Middle
        ===================================== */}
        <div className="footer-mid">
          <h2>Quick Links</h2>

          <ul>
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#courses">Courses</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* =====================================
            Right
        ===================================== */}
        <div className="footer-right">
          <h2>Address</h2>

          <p>
            Trapeang Rum Chek Village,
            <br />
            Sangkat Choam Chau,
            <br />
            Khan Por Senchey,
            <br />
            Phnom Penh, Cambodia
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 CT GROWTH. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
