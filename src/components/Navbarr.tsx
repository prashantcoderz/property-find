import "./Navbar.css";
import { FiSearch } from "react-icons/fi"; // <-- ORANGE SEARCH ICON
import logo from "../assets/Vector (2).png";

function Navbar() {
  return (
    <div className="navbar">

      {/* LEFT LOGO */}
      <div className="nav-left">
       <img src={logo} className="nav-logo" alt="logo" />


        <div className="nav-text">
          <h3>CRAIG REALTORS</h3>
          <span>Real Estate Agency</span>
        </div>
      </div>

      {/* CENTER MENU */}
      <div className="nav-menu">
        <a href="#">HOME</a>
        <a href="#">SERVICES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </div>

      {/* RIGHT SEARCH */}
      <div className="nav-right">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

    </div>
  );
}

export default Navbar;
