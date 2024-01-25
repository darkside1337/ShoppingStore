import { useContext, useState } from "react";
import ShoppingCartContext from "../hooks/ShoppingCartContext";
import "../styles/ShoppingCart.css";
import TableRow from "./TableRow";
const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(ShoppingCartContext);
  console.log(cartItems);
  let cartTotal =
    cartItems.reduce((acc, curr) => (acc = acc + curr.price * curr.qty), 0) ||
    0;
  const handleAddQty = (e) => {
    const productId = Number(e.target.getAttribute("data-item-id"));
    const selectedProduct = cartItems.find((item) => item.id === productId);

    if (selectedProduct) {
      let updatedSelectedProduct = {
        ...selectedProduct,
        qty: selectedProduct.qty + 1,
      };
      let filteredArr = cartItems.filter((item) => item.id !== productId);
      setCartItems([...filteredArr, { ...updatedSelectedProduct }]);
    }
  };
  const handleReduceQty = (e) => {
    const productId = Number(e.target.getAttribute("data-item-id"));
    const selectedProduct = cartItems.find((item) => item.id === productId);
    if (selectedProduct.qty <= 1) return;
    if (selectedProduct) {
      let updatedSelectedProduct = {
        ...selectedProduct,
        qty: selectedProduct.qty - 1,
      };
      let filteredArr = cartItems.filter((item) => item.id !== productId);
      setCartItems([...filteredArr, { ...updatedSelectedProduct }]);
    }
  };

  const handleRemoveItem = (e) => {
    const productId = Number(e.target.getAttribute("data-item-id"));
    if (productId) {
      let filteredCart = cartItems.filter((item) => item.id !== productId);
      setCartItems([...filteredCart]);
    }
  };

  return (
    <div className="cart_container container">
      <div className="table_component" role="region" tabIndex="0">
        <table>
          <caption>Your Cart:</caption>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems &&
              cartItems.map((item, index) => (
                <TableRow
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  imgUrl={item.image}
                  qty={item.qty}
                  index={index}
                  price={item.price}
                  addOnClick={handleAddQty}
                  removeOnClick={handleReduceQty}
                  deleteCartItem={handleRemoveItem}
                />
              ))}
          </tbody>
        </table>
        <div className="total">
          <h2>Your Total is ${cartTotal.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
