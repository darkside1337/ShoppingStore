import useFetchData from "./hooks/useFetchData";
import ShoppingDataContext from "./hooks/ShoppingDataContext";
import ShoppingCartContext from "./hooks/ShoppingCartContext";
import { useEffect, useState } from "react";
import Router from "./routing/Router";
/* import Footer from "../components/Footer";
import Navbar from "./components/Navbar";
 */
const App = () => {
  const { data, isLoading, error } = useFetchData();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    if (!error && !isLoading) {
      setProducts(data);
    }
    if (error) console.log(error);
  }, [data, isLoading, error]);
  return (
    <>
      <ShoppingCartContext.Provider value={{ cartItems, setCartItems }}>
        <ShoppingDataContext.Provider value={{ products, setProducts }}>
          <Router />
        </ShoppingDataContext.Provider>
      </ShoppingCartContext.Provider>
    </>
  );
};

export default App;
