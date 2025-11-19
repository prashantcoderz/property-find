import "./Topbar.css";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";

function Topbar() {
  return (
    <div className="topbar">

      {/* LEFT SIDE */}
      <div className="left">
        <span className="item">
          <AiOutlineMail /> info@craigrealtors.com
        </span>

        <span className="item">
          <FiPhoneCall /> +260979314286
        </span>

        <span className="item">
          <GoLocation /> A1 Munali Mall, Munali Road, Lusaka
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <button className="add-btn">Add Listing</button>

        <div className="social">
          <FaFacebookF />
          <FaInstagram />
          <FaPinterestP />
        </div>

        <span className="user">craigsims808</span>
      </div>

    </div>
  );
}

export default Topbar;
