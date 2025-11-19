import "./Footer.css";

import { FaFacebookF, FaInstagram, FaPinterestP, FaMapMarkerAlt } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer-wrapper">

      <div className="footer-grid">

        {/* LOGO + ABOUT */}
        <div className="footer-col">
          <h2 className="footer-logo">Craig Realtors</h2>
          <p className="footer-text">
            Your trusted real estate partner connecting you with beautiful homes 
            and investment opportunities across Zambia.
          </p>

          <div className="footer-social">
            <FaFacebookF className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaPinterestP className="social-icon" />
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>Home</li>
            <li>Featured Properties</li>
            <li>Property Types</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>

          <p className="footer-contact">
            <FaMapMarkerAlt className="contact-icon" />  
            A1 Munali Mall, Lusaka, Zambia
          </p>

          <p className="footer-contact">
            <FiPhoneCall className="contact-icon" />  
            +260979314286
          </p>

          <p className="footer-contact">
            <AiOutlineMail className="contact-icon" />  
            info@craigrealtors.com
          </p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col">
          <h3 className="footer-heading">Newsletter</h3>
          <p className="footer-text">Get updates about new listings.</p>

          <div className="footer-input-box">
            <input type="text" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Craig Realtors — All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
