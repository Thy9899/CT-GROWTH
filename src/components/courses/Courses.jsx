import React from "react";
import "./Courses.css";

const Courses = () => {
  return (
    <div id="courses">
      <div className="courses-wrapper">
        <div className="course-container">
          <h1>Courses</h1>
          <p>
            I have completed several courses in web development, including HTML,
            CSS, JavaScript, React, and Node.js. These courses have provided me
            with a strong foundation in front-end and back-end development,
            allowing me to build dynamic and responsive web applications. I am
            continuously learning and expanding my skill set through online
            courses and hands-on projects.
          </p>
          <div className="course-slider">
            <div className="course-card">
              <div className="card">
                <p className="name-course">Windows Form Application</p>
                <img
                  src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                  alt="HTML & CSS"
                />
                <p className="description">
                  Learn to create desktop applications using Windows Forms.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Web Fronted (Click2Eat Customer)</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="JavaScript"
                />
                <p className="description">
                  Build interactive web interfaces using JavaScript and React.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Web Fronted (Click2Eat Admin)</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="JavaScript"
                />
                <p className="description">
                  Build interactive web interfaces using JavaScript and React.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Web Backed (Click2Eat Admin)</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                  alt="Node.js"
                />
                <p className="description">
                  Develop server-side applications with Node.js and Express.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Mobile App Development</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2317/2317069.png"
                  alt="Database"
                />
                <p className="description">
                  Learn to build cross-platform mobile applications using React
                  Native.
                </p>
              </div>

              {/* Doublicate */}
              <div className="card">
                <p className="name-course">Windows Form Application</p>
                <img
                  src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png"
                  alt="HTML & CSS"
                />
                <p className="description">
                  Learn to create desktop applications using Windows Forms.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Web Fronted (Click2Eat Customer)</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="JavaScript"
                />
                <p className="description">
                  Build interactive web interfaces using JavaScript and React.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Web Fronted (Click2Eat Admin)</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                  alt="JavaScript"
                />
                <p className="description">
                  Build interactive web interfaces using JavaScript and React.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Web Backed (Click2Eat Admin)</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
                  alt="Node.js"
                />
                <p className="description">
                  Develop server-side applications with Node.js and Express.
                </p>
              </div>
              <div className="card">
                <p className="name-course">Mobile App Development</p>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2317/2317069.png"
                  alt="Database"
                />
                <p className="description">
                  Learn to build cross-platform mobile applications using React
                  Native.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
