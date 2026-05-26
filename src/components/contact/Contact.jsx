import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Content */}
        <div className="contact-info" data-aos="fade-right">
          <p className="contact-tag">CONTACT</p>

          <h1 className="contact-title">
            Let's Work
            <span> Together</span>
          </h1>

          <p className="contact-description">
            I’m always interested in new opportunities, collaborations, and
            exciting projects related to web development and software
            engineering. Feel free to contact me anytime.
          </p>

          {/* Contact Cards */}
          <div className="contact-cards">
            <div className="contact-card">
              <h3>Email</h3>
              <p>chanthykk66@gmail.com</p>
            </div>

            <div className="contact-card">
              <h3>Phone</h3>
              <p>+855 96 790 2778</p>
            </div>

            <div className="contact-card">
              <h3>Location</h3>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="contact-form-container" data-aos="fade-left">
          <form className="contact-form">
            <div className="input-group">
              <input type="text" placeholder="Your Name" required />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Your Email" required />
            </div>

            <div className="input-group">
              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
