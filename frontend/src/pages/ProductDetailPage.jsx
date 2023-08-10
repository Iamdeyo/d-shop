import { useParams } from 'react-router-dom';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import ProductDetail from '../components/Products/ProductDetail.jsx';
import SuggestedProducts from '../components/Products/SuggestedProducts.jsx';
import { useEffect, useState } from 'react';
import { data } from '../static/data';
const ProductDetailPage = () => {
  const { name } = useParams();
  const [productData, setProductData] = useState(null);
  const productName = name.replace(/-/g, ' ');
  useEffect(() => {
    const getProduct = data.productData.find(
      (product) => product.name === productName
    );
    setProductData(getProduct);
  }, [productName]);
  return (
    <div>
      <Header />
      {productData && (
        <>
          <ProductDetail data={productData} />
          <SuggestedProducts data={productData} />
        </>
      )}
      <Footer />
    </div>
  );
};
export default ProductDetailPage;
