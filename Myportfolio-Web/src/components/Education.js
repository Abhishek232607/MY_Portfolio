import React from 'react';
import './Education.css'; // optional styling

const Education = () => {
  return (
    <div className="education-container">
      <h1>🎓 Education</h1>
      <div className="education-detail">
        <h3>SSLC(10th)</h3>
        <p><strong>Institute:</strong>Governament High school Umblebylu</p>
        <p><strong>University:</strong>Karnataka State Board</p>
        <p><strong>Location:</strong> Shimoga, India</p>
        <p><strong>Year:</strong>2010-2011</p>
      </div>
      <div className="education-detail">
        <h3>Second Year(12th)</h3>
        <p><strong>Institute:</strong>Governament PU College Shimoga</p>
        <p><strong>University:</strong>Karnataka Board</p>
        <p><strong>Location:</strong> Shimoga, India</p>
        <p><strong>Year:</strong>2011-2013</p>
      </div>
      <div className="education-detail">
        <h3>Bachelor of Computer Applications</h3>
        <p><strong>Institute:</strong>Governament First Grade College</p>
        <p><strong>University:</strong>Kuvempu University</p>
        <p><strong>Location:</strong> Shimoga, India</p>
        <p><strong>Year:</strong>2013-2016</p>
      </div>
      <div className="education-detail">
        <h3>Master of Computer Applications (MCA)</h3>
        <p><strong>Institute:</strong> Jawaharlal Nehru National College of Engineering</p>
        <p><strong>University:</strong> Visvesvaraya Technological University (VTU)</p>
        <p><strong>Location:</strong> Shimoga, India</p>
        <p><strong>Year:</strong>2016-2020</p>
      </div>
    </div>
  );
};

export default Education;
