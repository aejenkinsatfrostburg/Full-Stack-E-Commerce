import React from 'react'
import './AccessibilityInfo.css'

export const AccessibilityInfo = () => {
  return (
    <div className='accessibility-page'>
        <div className="accessibility-box">
            <h1>Accessibility Statement</h1>
            <p>Last updated: December 2, 2025</p>

            <p>
            This website is designed to be accessible to all users, including those with disabilities. Our goal is to provide a user-friendly experience while complying with accessibility standards.
            </p>

            <h1>Accessibility Standards</h1>
            <p>
            This site follows basic accessibility best practices based on:
            </p>
            <ul>
                <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level A/AA</li>
                <li>WAI-ARIA best practices</li>
                <li>Semantic HTML structure</li>
            </ul>

            <h1>Accessibility Features</h1>
            <p>The website includes several features to improve accessibility:</p>
            <ul>
                <li>Skip to Main Content link at the top of each page</li>
                <li>Alt text on all essential images</li>
                <li>Keyboard-navigable menus</li>
                <li>Clear heading structure (H1, H2, H3)</li>
                <li>High-contrast text for readability</li>
                <li>Labels for all form fields</li>
                <li>Responsive design for different screen sizes</li>
                <li>Descriptive link text instead of vague phrases like "click here"</li>
            </ul>

            <h1>Accessibility Evaluation</h1>
            <p>
            This site was evaluated using the WAVE Web Accessibility Evaluation Tool. Results include:
            </p>
            <ul>
                <li>All images tested have alt text</li>
                <li>Text contrast passes standards</li>
                <li>Skip navigation link is present and functional</li>
                <li>Some minor issues may remain depending on template usage (e.g., heading order, unlabeled fields)</li>
            </ul>
            <p>
            Any issues found will be addressed in future revisions to improve accessibility.
            </p>

            <h1>Reporting Accessibility Issues</h1>
            <p>
            If you encounter an accessibility issue on this site, please contact us at: <br />
            ourWorkEmail@example.com
            </p>

        </div>
    </div>
  )
}
