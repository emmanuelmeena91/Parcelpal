// src/components/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contactForm">
        <h2>Shoot us a message for any enquiries</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contactInfo">
        <div className="contactDetail">
          <h3>Phone</h3>
          <p>+254712345678</p>
        </div>
        <div className="contactDetail">
          <h3>Email</h3>
          <p>parcelpal@gmail.com</p>
        </div>
        <div className="contactDetail">
          <h3>Social Media</h3>
          <p>@parcelpal</p>
        </div>
        <div className="contactDetail">
          <h3>Location</h3>
          <p>Moi Avenue</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
