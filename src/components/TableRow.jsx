const TableRow = ({
  id,
  title,
  price,
  imgUrl,
  qty,
  index,
  addOnClick,
  removeOnClick,
  deleteCartItem,
}) => {
  return (
    <tr>
      <td className="index-row row">{index}</td>
      <td className="image-row">
        <img src={imgUrl} alt={`image of ${title}`} height="80px" />
      </td>
      <td className="title-row row">{title}</td>
      <td className="price-row row">
        <p className="bold">${price} </p>
      </td>
      <td className="qty-row row">
        <div>
          <button
            className="plus-button"
            data-item-id={id}
            onClick={addOnClick}
          >
            +
          </button>
          {qty}
          <button
            className="minus-button"
            data-item-id={id}
            onClick={removeOnClick}
          >
            -
          </button>
        </div>
      </td>
      <td className="delete-row row">
        <button
          className="deleteBtn"
          data-item-id={id}
          onClick={deleteCartItem}
        >
          REMOVE
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
