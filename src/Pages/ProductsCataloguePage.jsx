import MainLayout from "../MainLayout/MainLayout";
import ProductsCatalogue from "../components/ProductsCatalogue";
const ProductsCataloguePage = () => {
  return (
    <MainLayout>
      <ProductsCatalogue filter="all" />
    </MainLayout>
  );
};

export default ProductsCataloguePage;
