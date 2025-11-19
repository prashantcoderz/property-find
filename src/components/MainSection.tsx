import "./MainSection.css";
import heroImg from "../assets/Mask group.png";  // ← Yahi sahi import hai

function MainSection() {
  return (
    <div className="main-section">

      {/* LEFT CONTENT */}
      <div className="main-left">
        <span className="best-real-estate">🏠 Best Real Estate</span>

        <h1>
          Make Yourself <br /> At Home
        </h1>

        <p className="main-desc">
          Luxury Homes from Lusaka to Livingstone. Experience Zambia's Most
          Desired Real Estate.
        </p>

        <button className="enquire-btn">Enquire Now</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="main-right">
        <img src={heroImg} alt="house" className="main-img" />
      </div>
    </div>
  );
}

export default MainSection;
