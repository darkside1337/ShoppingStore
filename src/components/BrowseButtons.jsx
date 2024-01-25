import { useNavigate } from "react-router-dom";
import "../styles/BrowseButtons.css";

const BrowseButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="button-container">
      <button
        className="browse-buttons button"
        onClick={() => navigate("/products")}
      >
        All
      </button>
      <button
        className="browse-buttons button"
        onClick={() => navigate("/products/clothing")}
      >
        Clothing
      </button>
      <button
        className="browse-buttons button"
        onClick={() => navigate("/products/electronics")}
      >
        Electronics
      </button>
      <button
        className="browse-buttons button"
        onClick={() => navigate("/products/jewelery")}
      >
        Jewelry
      </button>
    </div>
  );
};

export default BrowseButtons;
