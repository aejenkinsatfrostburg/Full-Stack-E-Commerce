import React from 'react';
import './AccessibilityInfo.css';

export const AccessibilityInfo = () => {
  return (
    <main className="accessibility-page" role="main">
      <section className="accessibility-box" aria-labelledby="accessibility-heading">
        <h1 id="accessibility-heading">Accessibility Statement</h1>
        <p><strong>Last updated:</strong> December 2, 2025</p>

        <p>
          This website is designed to be accessible to all users, including those with disabilities.
          Our goal is to provide a user-friendly experience while complying with accessibility standards.
        </p>

        <h2>Accessibility Standards</h2>
        <p>This site follows accessibility best practices based on:</p>
        <ul>
          <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level A/AA</li>
          <li>WAI-ARIA best practices</li>
          <li>Semantic HTML structure</li>
        </ul>

        <h2>Accessibility Features</h2>
        <p>The website includes several features to improve accessibility:</p>
        <ul>
          <li><a href="#main-content">Skip to Main Content</a> link at the top of each page</li>
          <li>Alt text on all essential images</li>
          <li>Keyboard-navigable menus</li>
          <li>Clear heading hierarchy (H1, H2, H3)</li>
          <li>High-contrast text for readability</li>
          <li>Labels for all form fields</li>
          <li>Responsive design for different screen sizes</li>
          <li>Descriptive link text instead of vague phrases like "click here"</li>
        </ul>

        <h2>Accessibility Evaluation</h2>
        <p>This site was evaluated using the WAVE Web Accessibility Evaluation Tool. Results include:</p>
        <ul>
          <li>All essential images have meaningful alt text</li>
          <li>Text contrast meets accessibility standards</li>
          <li>Skip navigation link is present and functional</li>
          <li>Minor issues may remain depending on template usage (e.g., heading order, unlabeled fields)</li>
        </ul>
        <p>Any issues found will be addressed in future revisions to improve accessibility.</p>

        <h2>Reporting Accessibility Issues</h2>
        <p>
          If you encounter an accessibility issue on this site, please contact us at: <br />
          <a href="mailto:ourWorkEmail@example.com">ourWorkEmail@example.com</a>
        </p>

        <noscript>
          <p>This website requires JavaScript to function properly. Please enable JavaScript in your browser settings.</p>
        </noscript>
      </section>
    </main>
  );
};
