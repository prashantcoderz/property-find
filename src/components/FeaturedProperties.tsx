import "./FeaturedProperties.css";

// images import
import img1 from "../assets/house2.jpg";
import img2 from "../assets/house3.jpg";
import img3 from "../assets/house4.jpg";

function FeaturedProperties() {
  return (
    <section className="featured">
      <h2>Featured Properties</h2>

      <div className="property-grid">

        {/* CARD 1 */}
        <div className="property-card">
          <img src={img1} alt="Property" />
          <div className="property-info">
            <h3>Luxury Villa</h3>
            <p>Lusaka, Zambia</p>
            <span className="price">$250,000</span>
            <button>View Details</button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="property-card">
          <img src={img2} alt="Property" />
          <div className="property-info">
            <h3>Modern House</h3>
            <p>Kitwe, Zambia</p>
            <span className="price">$320,000</span>
            <button>View Details</button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="property-card">
          <img src={img3} alt="Property" />
          <div className="property-info">
            <h3>Family Home</h3>
            <p>Ndola, Zambia</p>
            <span className="price">$180,000</span>
            <button>View Details</button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FeaturedProperties;
