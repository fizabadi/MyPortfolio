import React from 'react';
import './Contact.css'; 
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Contact() {
  return (
    <>
    <Navbar />
  
    <div className="contact">
      <h1>Contact me</h1>
      <h4>---------------Get in Touch---------------</h4>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info">
            {/* <div className="text"><h2>Get in Touch</h2></div>
            <p>Looking for an internship or part-time work? If you find me as the best fit, then contact me via email.</p> */}
            <h3><img src="name.png" alt="name" style={{ width: "70px", height: "70px" }} />Name:</h3>
            <p>Fiza Badi</p>
            <h3><img src="location.png" alt="location" style={{ width: "70px", height: "70px" }} />Address:</h3>
            <p>Rajkot, Gujarat</p>
            <h3><img src="mail.png" alt="mail" style={{ width: "70px", height: "70px" }} />Email:</h3>
            <p>fizabadi4@gmail.com</p>
            <h3><img src="linkedin.webp" alt="linkedin" style={{ width: "70px", height: "70px" }} />Linkedin:</h3>
            <Link className="link" to="https://www.linkedin.com/in/fiza-badi-592668260/"><p>follow me</p></Link>
            
          </div>
        </div>
        <div className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input type="text" className="input-field" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" className="input-field" />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input type="text" className="input-field" />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea className="input-field textarea"></textarea>
          </div>
          <button className="send-button">Send Message</button>
        </div>
      </div>
     
    </div>
    </>
  );
}
