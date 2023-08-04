import { data } from '../../../static/data';
import styles from '../../../styles/styles';
import ProductCard from '../ProductCard/ProductCard';

const FeaturedProduct = () => {
  return (
    <section className={styles.section}>
      <p className={styles.heading}>Featured Products</p>
      <div className="grid  grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-3">
        {data?.productData &&
          data.productData.map((product, index) => (
            <ProductCard data={product} key={index} />
          ))}
      </div>
    </section>
  );
};
export default FeaturedProduct;
