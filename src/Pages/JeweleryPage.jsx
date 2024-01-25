import MainLayout from "../MainLayout/MainLayout";
import ProductsCatalogue from "../components/ProductsCatalogue";

const JeweleryPage = () => {
  return (
    <MainLayout>
      <ProductsCatalogue filter="jewelery" />
    </MainLayout>
  );
};

export default JeweleryPage;
