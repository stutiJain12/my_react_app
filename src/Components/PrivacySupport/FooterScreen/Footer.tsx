import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer-main">
    <div className="footer-content">
      <div className="footer-col">
        <div className="footer-logo">
          {/* Replace with your logo or text */}
          <span className="footer-logo-icon">✦</span>
          <span className="footer-logo-text">The cleanic</span>
        </div>
        <button className="footer-book-btn">Book Now</button>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Legal</div>
        <div className="footer-link">Privacy Policy</div>
        <div className="footer-link">Terms & Conditions</div>
        <div className="footer-link">Refund Policy</div>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Operating Hours</div>
        <div>Mon - Fri: 8am - 8pm</div>
        <div>Saturday: 9am - 7pm</div>
        <div>Sunday: 9am - 8pm</div>
        <div className="footer-social-label">Follow us for cleaning tips</div>
        <div className="footer-socials">
          <span> {/* Replace with icons as needed */}
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span>
            <i className="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i className="fa-brands fa-youtube"></i>
          </span>
          <span>
            <i className="fa-brands fa-tiktok"></i>
          </span>
        </div>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Contact</div>
        <div>The cleanic</div>
        <div>500 Terry Francine Street</div>
        <div>San Francisco, CA 94158</div>
        <div>123-456-7890</div>
        <div>info@mysite.com</div>
      </div>
    </div>
    <div className="footer-bottom">
      © 2035 by The Cleanic. Powered and secured by <a href="https://wix.com" target="_blank" rel="noopener noreferrer">Wix</a>
    </div>
  </footer>
);

export default Footer;