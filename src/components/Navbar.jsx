import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import ShoppingCartContext from "../hooks/ShoppingCartContext";
import "../styles/Navbar.css";
import {
  Home,
  ShoppingCart,
  ShoppingBag,
  Barcode,
  Shirt,
  Cable,
  Gem,
} from "lucide-react";
import Logo from "../assets/logo.svg";

const Navbar = () => {
  const [openCategories, setOpenCategories] = useState(false);
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  /* ---------------------------- qty of cart items --------------------------- */
  let cartQty =
    cartItems.reduce((acc, curr) => {
      return acc + curr.qty;
    }, 0) || 0;
  const dropdownRef = useRef();

  const handleDropDown = () => {
    setOpenCategories(!openCategories);
  };

  useEffect(() => {
    let handler = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpenCategories(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });
  return (
    <header>
      <div className="header__left">
        <Link to="/">
          <img src={Logo} height="50px" alt="Shopping store logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <Home />
              <span>Home</span>
            </NavLink>
          </li>
          <li
            className="productsMenu"
            onClick={handleDropDown}
            ref={dropdownRef}
          >
            {/* <NavLink to="products"> */}
            <ShoppingBag />
            <span>Products</span>
            {/* </NavLink> */}
            <div className={`dropdown ${openCategories ? "open" : "hidden"}`}>
              <div>Categories: </div>
              <ul>
                <li>
                  <Link to="/products">
                    <span>All</span>
                    <Barcode className="icon" />
                  </Link>
                </li>
                <li>
                  <Link to="/products/clothing">
                    <span>Clothing</span>
                    <Shirt />
                  </Link>
                </li>
                <li>
                  <Link to="/products/electronics">
                    <span>Electronics</span>
                    <Cable />
                  </Link>
                </li>
                <li>
                  <Link to="/products/jewelery">
                    <span>Jewelry</span>
                    <Gem />
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/cart">
              <ShoppingCart />
              <span>Cart</span>
              <span className="cartQuantity">{cartQty}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
