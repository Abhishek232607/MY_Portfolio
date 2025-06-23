// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import profileImg from '../assets/profile.png'; // ✅ Make sure the image exists

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* 👤 Profile Image Panel */}
      <div className="profile-panel">
        <img src={profileImg} alt="Profile" className="profile-img" />
      </div>

      <h2>My Portfolio</h2>

      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/Skills">Skills</Link></li>
          <li><Link to="/Education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
