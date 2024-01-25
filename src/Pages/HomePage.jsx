import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import ShoppingDataContext from "../hooks/ShoppingDataContext";
import MainLayout from "../MainLayout/MainLayout";

const HomePage = () => {
  return (
    <MainLayout>  
      <Hero />
    </MainLayout>
  );
};

export default HomePage;
