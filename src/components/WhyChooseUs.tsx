import "./WhyChooseUs.css";
import { FaUserTie, FaHome, FaShieldAlt, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-wrapper">
      <h2 className="why-title">Why Choose Us</h2>

      <div className="why-grid">

        {/* CARD 1 */}
        <div className="why-card">
          <FaUserTie className="why-icon" />
          <h3>Professional Agents</h3>
          <p>Trusted and experienced real estate professionals to guide you.</p>
        </div>

        {/* CARD 2 */}
        <div className="why-card">
          <FaHome className="why-icon" />
          <h3>Verified Properties</h3>
          <p>All properties are inspected and fully verified.</p>
        </div>

        {/* CARD 3 */}
        <div className="why-card">
          <FaShieldAlt className="why-icon" />
          <h3>Secure Deals</h3>
          <p>We ensure safe and transparent property transactions.</p>
        </div>

        {/* CARD 4 */}
        <div className="why-card">
          <FaHeadset className="why-icon" />
          <h3>24/7 Support</h3>
          <p>Our team is always available to assist you.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
