import "./PopularLocations.css";

// IMPORT IMAGES FROM ASSETS
import lusaka from "../assets/lusaka.jpg";
import kitwe from "../assets/kitwe.png";
import ndola from "../assets/ndola.jpg";
import livingstone from "../assets/livingstone.jpg";

function PopularLocations() {
  return (
    <section className="locations-wrapper">
      <h2 className="locations-title">Popular Locations</h2>

      <div className="locations-grid">

        {/* Lusaka */}
        <div
          className="location-card"
          style={{ backgroundImage: `url(${lusaka})` }}
        >
          <div className="location-overlay">Lusaka</div>
        </div>

        {/* Kitwe */}
        <div
          className="location-card"
          style={{ backgroundImage: `url(${kitwe})` }}
        >
          <div className="location-overlay">Kitwe</div>
        </div>

        {/* Ndola */}
        <div
          className="location-card"
          style={{ backgroundImage: `url(${ndola})` }}
        >
          <div className="location-overlay">Ndola</div>
        </div>

        {/* Livingstone */}
        <div
          className="location-card"
          style={{ backgroundImage: `url(${livingstone})` }}
        >
          <div className="location-overlay">Livingstone</div>
        </div>

      </div>
    </section>
  );
}

export default PopularLocations;
