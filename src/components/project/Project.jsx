import React from "react";
import "./Project.css";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Product Store Application",
    image: "https://orkes.io/content/img/csharp.png",
    description:
      "A desktop-based product management system developed using C# Windows Forms and SQL Server with features including product inventory, sales management, reporting, and secure user authentication.",
    path: "/psd-project",
  },

  {
    title: "Click2Eat Customer",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "A modern food ordering web application built with React.js, featuring responsive UI design, real-time menu browsing, cart management, and seamless customer experience.",
  },

  {
    title: "Click2Eat Admin",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "An admin dashboard system developed using React.js for managing restaurants, food categories, customer orders, analytics, and operational workflows.",
  },

  {
    title: "Backend Click2Eat API",
    image: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    description:
      "A RESTful backend API built with Node.js and Express.js, supporting authentication, order management, database integration, and secure communication between frontend and server.",
  },

  {
    title: "Mobile App Development",
    image: "https://cdn-icons-png.flaticon.com/512/2317/2317069.png",
    description:
      "A cross-platform mobile application created using Flutter, designed with responsive layouts, modern UI components, and optimized mobile performance.",
  },

  {
    title: "Student Management System",
    image:
      "https://th.bing.com/th/id/R.4c4b4a9bb2d54db883702f949dc6fbe1?rik=vatoAfWE2P28%2fg&pid=ImgRaw&r=0",
    description:
      "A full-stack student management platform developed using ASP.NET Core Web API and SQL Server for handling student records, authentication, attendance, and reporting.",
  },
];

const Project = () => {
  return (
    <section id="project" className="project-section">
      <div className="project-wrapper">
        <div className="project-container" data-aos="fade-up">
          <p className="project-tag">MY PROJECTS</p>

          <h1 className="project-title">
            Featured <span>Projects</span>
          </h1>

          <p className="project-intro">
            Throughout my learning journey, I have worked on multiple software
            and web development projects that helped strengthen my skills in
            frontend development, backend systems, APIs, databases, and UI/UX
            design.
          </p>

          {/* Slider */}
          <div className="project-slider">
            <div className="project-card">
              {[...projects, ...projects].map((project, index) => (
                <div className="card" key={index}>
                  <div className="card-top">
                    <img src={project.image} alt={project.title} />

                    <p className="name-project">{project.title}</p>
                  </div>

                  <p className="description">{project.description}</p>

                  <button className="project-btn">
                    <Link to={project.path}>View Project</Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
