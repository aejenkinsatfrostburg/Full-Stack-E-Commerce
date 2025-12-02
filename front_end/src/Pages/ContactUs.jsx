import React, { useState } from 'react';
import './CSS Sheets/ContactUs.css';

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${formData.name}\nSubject: ${formData.subject}\nMessage: ${formData.message}`);
    setFormData({ name: '', subject: '', message: '' });
  };

  return (
    <div className='contact-page'>
      <div className="contact-box">

        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below or use one of our contact methods.</p>

        <div className="contact-cards">
          <div className="contact-card">
            <h2>Email</h2>
            <p>ourWorkEmail@example.com</p>
          </div>

          <div className="contact-card">
            <h2>Phone</h2>
            <p>123-456-7890</p>
          </div>

          <div className="contact-card">
            <h2>Mailing Address</h2>
            <p>123 Example Street<br/>City, State, ZIP</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h1>Send Us a Message</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name:
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </label>

            <label>
              Subject:
              <input 
                type="text" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </label>

            <label>
              Message:
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                rows="5"
              />
            </label>

            <button type="submit">Send</button>
          </form>
        </div>

      </div>
    </div>
  );
};
