import { useContext, useState } from "react";
import ShoppingDataContext from "../hooks/ShoppingDataContext";
import ShoppingCartContext from "../hooks/ShoppingCartContext";
import AddToCartBtn from "./AddToCartBtn";
import "../styles/SingleProductPage.css";
const SingleProduct = ({ productId }) => {
  const { products, setProducts } = useContext(ShoppingDataContext);
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  const selectedProduct = products.find((item) => item.id == productId);
  const { id, title, price, image, description, category, rating } =
    selectedProduct;
  const [itemsQty, setItemQty] = useState("1");
  const handleQuantity = (e) => {
    const newVal = Number(e.target.value);
    setItemQty(newVal);
  };
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
    <div className="single__product__container container">
      <div className="single__product">
        <div className="product_left">
          <img src={image} alt={title} draggable={false} />
        </div>
        <div className="product_right">
          <div>
            <h2>{title}</h2>
            <span className="blue-bg">NEW</span>
          </div>
          <hr />
          <div className="product_category">
            <p className="bold">CATEGORY: {category}</p>
          </div>
          <hr />
          <div className="product__info">
            <p className="bold">PRODUCT INFO</p>
            <p>{description}</p>
          </div>
          <hr />
          <div className="rating">
            <p>
              <b>RATING:</b> {rating.rate}
            </p>
            <p>
              <b>COUNT:</b> {rating.count}
            </p>
          </div>
          <hr />
          <form data-product-id={id} onSubmit={handleProductAdd}>
            <input
              type="number"
              min="1"
              max="10"
              value={itemsQty}
              onChange={handleQuantity}
            />
            <div>
              <p className="price__tag">
                <b>${price}</b>
              </p>
              <AddToCartBtn id={id} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
