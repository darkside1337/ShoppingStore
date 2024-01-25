const filterProducts = (products, filterBy) => {
  if (filterBy === "all") {
    return products;
  }
  if (filterBy === "electronics") {
    return products.filter((product) => {
      return product.category === "electronics";
    });
  }
  if (filterBy === "clothing") {
    return products.filter((product) => {
      return product.category.includes("clothing");
    });
  }
  if (filterBy === "jewelery") {
    return products.filter((product) => {
      return product.category === "jewelery";
    });
  }
};
export { filterProducts };
