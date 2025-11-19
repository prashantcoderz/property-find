import "./PropertyTypes.css";
import { FaHome, FaBuilding, FaWarehouse, FaGlobeAsia } from "react-icons/fa";

function PropertyTypes() {
  return (
    <section className="types-wrapper">
      <h2 className="types-title">Property Types</h2>

      <div className="types-grid">

        {/* TYPE 1: Houses */}
        <div className="type-card">
          <FaHome className="type-icon" />
          <h3>Houses</h3>
          <p>Beautiful family homes in prime locations.</p>
        </div>

        {/* TYPE 2: Apartments */}
        <div className="type-card">
          <FaBuilding className="type-icon" />
          <h3>Apartments</h3>
          <p>Modern apartments with premium facilities.</p>
        </div>

        {/* TYPE 3: Commercial */}
        <div className="type-card">
          <FaWarehouse className="type-icon" />
          <h3>Commercial</h3>
          <p>Shops, offices and commercial spaces.</p>
        </div>

        {/* TYPE 4: Land */}
        <div className="type-card">
          <FaGlobeAsia className="type-icon" />
          <h3>Land</h3>
          <p>Plots and land for development.</p>
        </div>

      </div>
    </section>
  );
}

export default PropertyTypes;
