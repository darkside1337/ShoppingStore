import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SingleProduct from "../components/SingleProduct";
import MainLayout from "../MainLayout/MainLayout";

const SingleProductPage = () => {
  const { id } = useParams();
  return (
    <MainLayout>
      <SingleProduct productId={id} />
    </MainLayout>
  );
};

export default SingleProductPage;
