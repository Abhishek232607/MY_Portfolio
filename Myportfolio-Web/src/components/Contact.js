// // src/components/Contact.js
// import React from 'react';
// import './Contact.css';

// const Contact = () => {
//   return (
//     <div className="contact-container">
//       <h1>Contact Me</h1>
//       <form className="contact-form">
//         <input type="text" placeholder="Your Name" required />
//         <input type="email" placeholder="Your Email" required />
//         <textarea placeholder="Your Message" rows="5" required></textarea>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
// src/components/Contact.js
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'abhishek_123',      // Replace with your EmailJS service ID
      'abhishek_7975',     // Replace with your EmailJS template ID
      form.current,
      'OGtACF7fkCnGGIa4z'       // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Try again.');
        console.error(error);
      }
    );
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
