import MainLayout from "../MainLayout/MainLayout";
import ProductsCatalogue from "../components/ProductsCatalogue";
const ClothingPage = () => {
  return (
    <MainLayout>
      <ProductsCatalogue filter="clothing" />
    </MainLayout>
  );
};

export default ClothingPage;
