import { useContext, useState } from "react";
import "../styles/card.css";
import AddToCartBtn from "./AddToCartBtn";
import ShoppingDataContext from "../hooks/ShoppingDataContext";
import ShoppingCartContext from "../hooks/ShoppingCartContext";
import { useNavigate } from "react-router-dom";
const Card = ({ id, title, price, desc, imgUrl, rating }) => {
  const { products } = useContext(ShoppingDataContext);
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();
  const [itemsQty, setItemQty] = useState(1);

  const handleQuantity = (e) => {
    const newVal = Number(e.target.value);
    setItemQty(newVal);
  };
  /* add the product and add one more object key called qty for quantity */

  const handleProductAdd = (e) => {
    e.preventDefault();
    const productId = Number(e.target.getAttribute("data-product-id"));
    const selectedProduct = products.find(
      (product) => product.id === productId
    );

    // check if product already exists in the cart

    if (cartItems.some((product) => product.id == productId)) {
      let existingItem = cartItems.find((product) => product.id == productId);

      // add the current quantity to the previous quantity

      let itemWithUpdatedQuantity = {
        ...existingItem,
        qty: Number(existingItem.qty) + Number(itemsQty),
      };
      let filteredCart = cartItems.filter((product) => product.id != productId);

      setCartItems([...filteredCart, { ...itemWithUpdatedQuantity }]);
      setItemQty(1);
    } else {
      setCartItems([
        ...cartItems,
        { ...selectedProduct, qty: Number(itemsQty) },
      ]);
      setItemQty(1);
    }
  };

  return (
    <div className="card">
      <div className="card__image">
        <img
        className="shrink__anim"
          draggable={false}
          src={imgUrl}
          alt={`picture of ${title}`}
          height="200px"
          onClick={() => navigate(`/product/${id}`)}
        />
      </div>
      <div className="card__bottom">
        <h3 className="card__title">{title}</h3>
        <p className="product-description-txt">{desc}</p>
        <div className="price__section">
          <p>
            <b>{`$ ${price}`}</b>
          </p>

          <form
            className="add__form"
            data-product-id={id}
            onSubmit={handleProductAdd}
          >
            <input
              type="number"
              min="1"
              max="10"
              value={itemsQty}
              onChange={handleQuantity}
            />
            <AddToCartBtn id={id} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Card;
