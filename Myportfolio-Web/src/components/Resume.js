import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-full">
      <h1>My Resume</h1>
      <div className="resume-actions">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
          View PDF
        </a>
        <a
          href="https://github.com/yourusername/your-resume-source"
          target="_blank"
          rel="noopener noreferrer"
          className="source-button"
        >
          View Source
        </a>
      </div>
      <iframe
        src="/resume.pdf"
        width="100%"
        height="700px"
        title="Resume"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Resume;
