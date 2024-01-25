import MainLayout from "../MainLayout/MainLayout";
import ProductsCatalogue from "../components/ProductsCatalogue";
const ElectronicsPage = () => {
  return (
    <MainLayout>
      <ProductsCatalogue filter="electronics" />
    </MainLayout>
  );
};

export default ElectronicsPage;
