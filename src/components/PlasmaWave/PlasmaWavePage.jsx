import React from "react";
import PlasmaWave from "./PlasmaWave";

const PlasmaWavePage = () => {
  return (
    <div className="container">
      <div className="wrapper">
        {/* HERO SECTION */}
        <section id="home">
          {/* Plasma Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
            }}
          >
            <PlasmaWave
              colors={["#A855F7", "#06B6D4"]}
              speed1={0.05}
              speed2={0.05}
              focalLength={0.8}
              bend1={1}
              bend2={0.5}
              dir2={1.0}
              rotationDeg={0}
            />
          </div>

          {/* Hero Content */}

          <div className="description">
            <p className="typing">Welcome!</p>

            <h1 className="gradient">CT-Learning</h1>

            <p className="intro-text">
              I am currently majoring in Information Technology with a strong
              interest in Web Development and Software Engineering. During my
              learning journey, I have been improving both my technical and
              problem-solving skills through personal and academic projects.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlasmaWavePage;
