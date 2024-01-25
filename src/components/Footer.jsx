import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../styles/Footer.css";
import {
  Home,
  Compass,
  GanttChartSquare,
  Phone,
  Nfc,
  ShoppingCart,
  MailOpen,
  Map,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";
/*  Navigate : Home, Products, Cart: Contact: location, phone number, email.
      Socials: FB TWITTER INSTAGRAM YOUTUBE  */
const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">
        <img src={Logo} height="50px" alt="Shopping store logo" />
      </div>
      <div className="home__section d_flex_c">
        <h3 className="h3__title footer__anchor">
          <div>Navigate</div>
          <div>
            <Compass />
          </div>
        </h3>
        <div className="home__container">
          <Link to="/" className="footer__anchor">
            <div>
              <Home />
            </div>
            <div>Home</div>
          </Link>
          <Link to="products" className="footer__anchor">
            <div>
              <GanttChartSquare />
            </div>
            <div>Products</div>
          </Link>
          <Link to="cart" className="footer__anchor">
            <div>
              <ShoppingCart />
            </div>
            <div>Cart</div>
          </Link>
        </div>
      </div>
      <div className="contact-us d_flex_c">
        <h3 className="h3__title">
          <div>Get in Touch </div>
          <div>
            <Nfc />
          </div>
        </h3>
        <div className="footer__contacts ">
          <p>
            Location <Map />
          </p>
          <p>123 Regal Street, Luxoria Heights, Grand Kingdom</p>
        </div>
        <div className="footer__contacts ">
          <p>
            Phone <Phone />
          </p>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="footer__contacts ">
          <p>
            Email <MailOpen />
          </p>
          <p>info@opulentcrownluxury.com</p>
        </div>
      </div>
      <div className="socials d_flex_c">
        <h3>Socials</h3>
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
    </footer>
  );
};

export default Footer;
