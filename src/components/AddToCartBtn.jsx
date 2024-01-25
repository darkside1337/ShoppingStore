import "../styles/AddToCartBtn.css";
const AddToCartBtn = ({ id, onClick }) => {
  return (
    <button
      data-product-id={id}
      type="submit"
      onClick={onClick}
      className="addToCartBtn"
    >
      <span>Add to cart!</span>
    </button>
  );
};

export default AddToCartBtn;
