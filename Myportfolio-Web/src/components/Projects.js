import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>📁 My Projects</h1>

      <div className="project-list">
        <div className="project-card">
          <h3>1. Municipal Corporation System</h3>
          <p>
            A JSP-based web application designed to manage and streamline municipal operations such as complaint handling,
            billing, and employee data.
          </p>
          <p><strong>Tools Used:</strong> Eclipse, XAMPP Server</p>
        </div>

        <div className="project-card">
          <h3>2. College Management System</h3>
          <p>
            A PHP-based web application used to manage students, faculty, courses, exams, and attendance efficiently for educational institutions.
          </p>
          <p><strong>Tools Used:</strong> Visual Studio, XAMPP Server</p>
        </div>

        <div className="project-card">
          <h3>3. Pollution Control Services</h3>
          <p>
            JSP web application built to track and report environmental pollution data, enabling real-time reporting and awareness.
          </p>
          <p><strong>Tools Used:</strong> Eclipse, WAMP Server</p>
        </div>

        <div className="project-card">
          <h3>4. Locker Application</h3>
          <p>
            Java Swing desktop application used for locker service systems at public places (malls, temples, stations) allowing users
            to store and retrieve items securely.
          </p>
          <p><strong>Tools Used:</strong> NetBeans, MySQL Workbench</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
