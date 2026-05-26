import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "Courses", path: "courses" },
    { name: "About Me", path: "about" },
    { name: "Contact", path: "contact" },
  ];

  /* =====================================
     Detect Current Section On Scroll
  ===================================== */
  useEffect(() => {
    const sections = document.querySelectorAll("section, div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.id;

            const currentMenu = menuItems.find(
              (item) => item.path === currentId,
            );

            if (currentMenu) {
              setActiveMenu(currentMenu.name);
            }
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="navigation">
      {/* Logo */}
      <div
        className="logo"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <img src="/Image/ct_logo.png" alt="CT-Growth" />

        <p>CT GROWTH</p>
      </div>

      {/* Nav Links */}
      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.path}`}
              className={activeMenu === item.name ? "active" : ""}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Button */}
      <button className="nav-btn">Hire Me</button>
    </nav>
  );
};

export default Navigation;
