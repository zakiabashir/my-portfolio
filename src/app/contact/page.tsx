"use client"
import React, { useEffect } from 'react';
import './contact.css';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

function Contact() {
  useEffect(() => {
    // Dynamically load the Tawk.to script
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/672fca332480f5b4f59b36a7/1ic9armg0";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="contact" className="contact-container">
      <h2>Contact Me</h2>
      <p>Feel free to reach out for any projects or collaborations. I’d love to hear from you!</p>
      <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <label htmlFor="name">
          <FaUser /> Name
        </label>
        <input type="text" id="name" name="name" placeholder="Your Name" required />

        <label htmlFor="email">
          <FaEnvelope /> Email
        </label>
        <input type="email" id="email" name="email" placeholder="Your Email" required />

        <label htmlFor="message">
          <FaPaperPlane /> Message
        </label>
        <textarea id="message" name="message" placeholder="Your Message" required></textarea>

        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
