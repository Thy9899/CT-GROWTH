import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", path: "home" },
    { name: "Project", path: "project" },
    { name: "About", path: "about" },
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

  /* =====================================
      Close Menu After Click
  ===================================== */
  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setMenuOpen(false);
  };

  return (
    <nav className={`navigation ${scrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div
        className="logo"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setActiveMenu("Home");
        }}
      >
        <img src="/public/ct_logo.png" alt="CT-Growth" />

        <p>CT GROWTH</p>
      </div>

      {/* Mobile Toggle */}
      <div
        className={`nav-menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={`#${item.path}`}
              className={activeMenu === item.name ? "active" : ""}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.name}
            </a>
          </li>
        ))}

        {/* Mobile Button */}
        <button className="nav-btn mobile-btn">Hire Me</button>
      </ul>

      {/* Desktop Button */}
      <button className="nav-btn desktop-btn">Hire Me</button>
    </nav>
  );
};

export default Navigation;
