import { useContext } from "react";
import ShoppingDataContext from "../hooks/ShoppingDataContext";
import BrowseButtons from "./BrowseButtons";
import { filterProducts } from "../utils";
import Card from "./Card";
import "../styles/ProductsCatalogue.css";
const ProductsCatalogue = ({ filter }) => {
  const { products, setProducts } = useContext(ShoppingDataContext);

  const filteredProducts = filterProducts(products, filter);

  return (
    <div className="products__container container">
      <div className="products">
        <nav>
          <BrowseButtons />
        </nav>
        <div className="products__grid">
          {filteredProducts &&
            filteredProducts.map((product) => {
              return (
                <Card
                  key={product.id}
                  title={product.title}
                  id={product.id}
                  price={product.price}
                  imgUrl={product.image}
                  desc={product.description}
                  rating={product.rating.rate}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductsCatalogue;
