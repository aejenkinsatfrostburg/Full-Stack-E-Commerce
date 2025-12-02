// SiteMap.jsx
import React from 'react';
import './CSS Sheets/SiteMap.css';

export const SiteMap = () => {
  return (
    <main className="sitemap-page">
      <div className="sitemap-box">
        <h1>Site Map</h1>

        <nav aria-label="Main site navigation">
          <ul>
            <li><a href="/">Home</a></li>

            <li>
              <ul>
                <li><a href="/hoodies">Hoodies</a></li>
                <li><a href="/shirts">Shirts</a></li>
                <li><a href="/hats">Hats</a></li>
                <li><a href="/sneakers">Sneakers</a></li>
                <li><a href="/sweatpants">Sweatpants</a></li>
              </ul>
            </li>

            <li><a href="/cart">Shopping Cart</a></li>
            <li><a href="/login">User Login</a></li>
            <li><a href="/contact">Customer Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
          </ul>
        </nav>
      </div>
    </main>
  );
};
