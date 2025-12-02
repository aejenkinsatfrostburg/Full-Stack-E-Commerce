import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Graffiti Streetwear logo.png'
import instagram_icon from '../Assets/insta.png'
import facebook_icon from '../Assets/facebook.png'
import linkedIn_icon from '../Assets/linkedIn.png'
import youtube_icon from '../Assets/Youtube.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
        </div>
        <ul className="footer-links">
            <li><a href="/privacypolicy">Privacy Policy</a></li>
            <li><a href="/accessibility">Accessibility</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/">Home</a></li>
        </ul>
        <div className="footer-socials-icons">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="instagram" />
            </div>
            <div className="footer-icons-container">
                <img src={facebook_icon} alt="facebook" />
            </div>
            <div className="footer-icons-container">
                <img src={linkedIn_icon} alt="linkedin" />
            </div>
            <div className="footer-icons-container">
                <img src={youtube_icon} alt="youtube" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved</p>
        </div>
    </div>
  )
}
