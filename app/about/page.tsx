import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About Event App</h1>
      <p>Welcome to our Event App, your one-stop solution for booking and managing appointments.</p>
      <h2>Our Mission</h2>
      <p>Our mission is to provide a seamless and efficient appointment booking experience for our users.</p>
      <h2>How it Works</h2>
      <ul>
        <li>Browse available appointment times</li>
        <li>Book an appointment with our team of experts</li>
        <li>View and manage your upcoming appointments</li>
        <li>Receive reminders and notifications about your appointments</li>
      </ul>
      <h2>Our Team</h2>
      <p>Our team is dedicated to providing the best possible experience for our users.</p>
      <h2>Get in Touch</h2>
      <p>If you have any questions or feedback about our app, we would love to hear from you.</p>
      <p>Contact us at <a href="mailto:insert-email">insert-email</a> or <a href="tel:insert-phone-number">insert-phone-number</a></p>
    </div>
  );
};

export default AboutPage;