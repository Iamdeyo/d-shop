import { useEffect, useState } from 'react';
import { data } from '../../../static/data';
import ProductCard from '../ProductCard/ProductCard.jsx';
import styles from '../../../styles/styles';

const BestDeals = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const d =
      data?.productData &&
      data.productData.sort((a, b) => b.total_sell - a.total_sell);
    const firstFive = d.slice(0, 5);
    setProducts(firstFive);
  }, []);
  return (
    <section className={styles.section}>
      <p className={styles.heading}>Best Deals</p>
      <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-3">
        {products &&
          products.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
      </div>
    </section>
  );
};
export default BestDeals;
