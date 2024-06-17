// src/pages/About/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Sidebar />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our application. Here is some information about us.</p>
        <p>We are dedicated to providing the best service and continuously improving our application.</p>
      </div>
    </div>
  );
}

export default About;
