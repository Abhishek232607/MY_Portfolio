import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      {/* Contact Panel */}
      <section className="about-panel">
        <h2>📞 Contact Me</h2>
        <p><strong>Name:</strong> Abhishek</p>
        <p><strong>Email:</strong> abhishekabhi61995@gmail.com</p>
        <p><strong>Phone:</strong> +91-7975829123</p>
      </section>

      {/* Education Panel */}
      <section className="about-panel">
        <h2>🎓 Education</h2>
        <p><strong>Master of Computer Applications</strong></p>
        <p>Jawaharlal Nehru National College of Engineering</p>
        <p>Visvesvaraya Technological University, Bangalore</p>
        <p><strong>Year:</strong> 2020</p>
      </section>

      {/* Core Competencies */}
      <section className="about-panel">
        <h2>🧠 Core Competencies</h2>
        <ul>
          <li>Software Development</li>
          <li>Programming</li>
          <li>Debugging</li>
          <li>Build and Deployment</li>
          <li>Linux</li>
          <li>Performance Optimization</li>
        </ul>
      </section>

      {/* Technical Skills */}
      <section className="about-panel">
        <h2>💻 Technical Skills</h2>
        <ul>
          <li>Java, Spring Boot, MySQL</li>
          <li>HTML, CSS, React</li>
          <li>Java Swings</li>
          <li>Redis Cache, WSL</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      {/* Core Objective */}
      <section className="about-panel">
        <h2>🎯 Core Objective</h2>
        <p>
          Passionate software developer eager to tackle challenging roles, leveraging advanced skills in Java, Spring Boot, MySQL and React JS with additional skills in Linux.
        </p>
      </section>

      {/* Profile Summary */}
      <section className="about-panel">
        <h2>📝 Profile Summary</h2>
        <ul>
          <li>Over 2.9 years of experience in software development specializing in Java Swings, Spring Boot, MySQL, and React.</li>
          <li>Strong knowledge of Java 8 features like Functional Interface, Streams, and Memory Management.</li>
          <li>Developed and enhanced REST APIs using Spring Boot.</li>
          <li>Skilled in debugging and optimizing performance using Java 8.</li>
          <li>Hands-on with Redis Cache Server and WSL on Spring Boot framework.</li>
        </ul>
      </section>

      {/* Certification */}
      <section className="about-panel">
        <h2>📜 Certifications</h2>
        <ul>
          <li>Certified “JAVA Programming” course by NPTEL</li>
          <li>Certified basic “PYTHON” course by NPTEL</li>
        </ul>
      </section>

      {/* Work Experience */}
      <section className="about-panel">
        <h2>🏢 Work Experience</h2>
        <p><strong>Java Developer</strong> — AuroTec, Bangalore</p>
        <p><strong>From:</strong> April 1st 2022 – Present</p>
        <ul>
          <li>Developed TUCKIT desktop application using Java Swings, Servlets, and SQL.</li>
          <li>Built sports scoring and display products (Cricket, Football, Hockey, etc.) using Java Swings.</li>
          <li>Developed ITS (Internet Transport System) for buses using Java.</li>
          <li>Experience in debugging Java and Spring Boot applications.</li>
          <li>Developed people-counting system and advertisement projects.</li>
          <li>Worked with React.js, React Native, Spring Boot REST APIs.</li>
          <li>Used Redis Cache, WSL, Git, Eclipse, IntelliJ, and Visual Studio.</li>
          <li>Worked on MySQL database and REST API development.</li>
        </ul>
      </section>

      {/* Personal Details */}
      <section className="about-panel">
        <h2>🙋 Personal Details</h2>
        <p><strong>Date of Birth:</strong> 13th Nov 1995</p>
        <p><strong>Languages Known:</strong> English, Kannada, Telugu</p>
        <p><strong>Address:</strong> No:144, 4th Main, 8th Block, Nandini Layout, Bengaluru, 56009</p>
      </section>
    </div>
  );
};

export default About;
