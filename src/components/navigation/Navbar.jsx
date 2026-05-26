import React, { useState } from "react";
import "./Navbar.css";

const Navigation = () => {
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = [
    { name: "Home", path: "#home" },
    { name: "Courses", path: "#courses" },
    { name: "About Me", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <nav className="navigation">
      {/* Logo */}
      <div className="logo">
        <img src="../../../public/Image/ct_logo.png" alt="CT-Growth" />

        <p>CT GROWTH</p>
      </div>

      {/* Navigation */}
      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.path}
              className={activeMenu === item.name ? "active" : ""}
              onClick={() => setActiveMenu(item.name)}
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
