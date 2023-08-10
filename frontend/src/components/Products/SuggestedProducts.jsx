import { data } from '../../static/data';
import styles from '../../styles/styles';
import ProductCard from '../Routes/ProductCard/ProductCard';
import { useEffect, useState } from 'react';

const SuggestedProducts = (props) => {
  const [productsData, setProductsData] = useState(null);
  const category = props.data.category;
  useEffect(() => {
    const getProducts = data.productData.filter(
      (product) => product.category === category
    );
    setProductsData(getProducts);
  }, []);
  return (
    <section className={styles.section}>
      <p className={styles.heading}>Related Products</p>
      <div className="grid  grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-3">
        {productsData &&
          productsData.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
      </div>
    </section>
  );
};
export default SuggestedProducts;
