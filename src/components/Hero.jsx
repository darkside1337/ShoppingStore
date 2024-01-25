import PrimaryBtn from "./PrimaryBtn";
import HeroImg from "../assets/toa-heftiba-large.jpg";
import "../styles/Hero.css";

import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleShop = () => {
    navigate("/products");
  };

  /*
  <div className="hero__container">
  </div>

  <div className="container">
  </div>
  */
  return (
    <div className="hero container">
      <div className="hero__left">
        <h1>One-stop For All</h1>
        <h3>
          Elevate Your Style with Sparkling Jewels, High-Tech Gadgets & Fashion.
        </h3>
        <PrimaryBtn text="Shop Now!" onClick={handleShop} />
      </div>
      <div className="hero__right">
        <img src={HeroImg} height="500px" />
      </div>
    </div>
  );
};

export default Hero;
