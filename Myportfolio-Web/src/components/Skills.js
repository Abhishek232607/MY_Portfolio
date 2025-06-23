// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>🛠 Skills & Certifications</h1>

      <section className="skills-section">
        <h3>Core Competencies</h3>
        <ul>
          <li>Software Development</li>
          <li>Programming</li>
          <li>Debugging</li>
          <li>Build and Deployment</li>
          <li>Linux</li>
          <li>Performance Optimization</li>
        </ul>
      </section>

      <section className="skills-section">
        <h3>Technical Skills</h3>
        <ul>
          <li>Java</li>
          <li>Spring Boot</li>
          <li>MySQL</li>
          <li>HTML, CSS, React JS</li>
          <li>Redis Cache</li>
          <li>WSL</li>
          <li>Git & GitHub</li>
          <li>Java Swings</li>
        </ul>
      </section>

      <section className="skills-section">
        <h3>Soft Skills</h3>
        <ul>
          <li>Communication</li>
          <li>Reliable</li>
          <li>Flexible</li>
          <li>Adaptability</li>
          <li>Analytical</li>
          <li>Collaborative Team Work</li>
        </ul>
      </section>

      <section className="skills-section">
        <h3>Certifications</h3>
        <p>Certified “JAVA Programming” course by NPTEL.</p>
        <p>Awarded Certified with basic “PYTHON” course NPTEL.</p>
      </section>

      {/* <section className="skills-section">
        <h3>Core Objective</h3>
        <p>Passionate software developer eager to tackle challenging roles, leveraging advanced skills in Java, Spring Boot, MySQL, React.js, and Linux.</p>
      </section> */}
    </div>
  );
};

export default Skills;
