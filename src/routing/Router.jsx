import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProductsCataloguePage from "../Pages/ProductsCataloguePage";
import SingleProductPage from "../Pages/SingleProductPage";
import CartPage from "../Pages/CartPage";
import App from "../App";
import Hero from "../components/Hero";
import ShoppingCart from "../components/ShoppingCart";
import JeweleryPage from "../Pages/JeweleryPage";
import ClothingPage from "../Pages/ClothingPage";
import ElectronicsPage from "../Pages/ElectronicsPage";
import ErrorPage from "../Pages/ErrorPage";
/* -------------------------------------------------------------------------- */
/*                                   routing                                  */
/* -------------------------------------------------------------------------- */

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "products",
      element: <ProductsCataloguePage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/products/electronics",
      element: <ElectronicsPage />,
    },
    {
      path: "/products/jewelery",
      element: <JeweleryPage />,
    },
    {
      path: "/products/clothing",
      element: <ClothingPage />,
    },
    {
      path: "cart",
      element: <CartPage />,
    },
    {
      path: "/product/:id",
      element: <SingleProductPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
