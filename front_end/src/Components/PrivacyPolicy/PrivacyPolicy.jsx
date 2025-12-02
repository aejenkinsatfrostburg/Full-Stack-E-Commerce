import React from 'react';
import './PrivacyPolicy.css';

export const PrivacyPolicy = () => {
  return (
    <div className='privacy-policy-page'>
      <div className="privacy-policy-box">

        <h1>Privacy Policy</h1>
        <p>Last updated: December 2, 2025</p>

        <p>
          This Privacy Policy explains how we collect, use, and protect your personal information when you use our website. Our goal is to respect your privacy while providing a safe and user-friendly experience.
        </p>

        <h1>Information We Collect</h1>
        <p>We may collect the following types of information:</p>
        <ul>
          <li><strong>Personal Data:</strong> Information you provide directly, such as your name, email address, and account details.</li>
          <li><strong>Usage Data:</strong> Information collected automatically, including your IP address, browser type, pages visited, time spent on pages, and other diagnostic data.</li>
        </ul>

        <h1>How We Use Your Information</h1>
        <p>We use the collected data to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve and personalize your user experience</li>
          <li>Communicate updates, offers, and important notifications</li>
          <li>Analyze site usage and performance</li>
        </ul>

        <h1>Information Sharing and Disclosure</h1>
        <p>
          We do not sell your personal information. We may share information with trusted service providers to support our services, comply with legal obligations, or protect the safety of our users.
        </p>

        <h1>Changes to This Privacy Policy</h1>
        <p>
          We may update this Privacy Policy periodically. Updates will be posted on this page with the new "Last updated" date. You are encouraged to review this Privacy Policy regularly.
        </p>

        <h1>Contact Us</h1>
        <p>
          If you have questions or concerns about this Privacy Policy, please contact us at: <br />
          ourWorkEmail@example.com
        </p>

      </div>
    </div>
  );
};
