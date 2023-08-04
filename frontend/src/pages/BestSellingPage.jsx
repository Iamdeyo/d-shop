import { useEffect, useState } from 'react';
import Footer from '../components/Layout/Footer';
import Header from '../components/Layout/Header';
import { data } from '../static/data';
import ProductCard from '../components/Routes/ProductCard/ProductCard';
import styles from '../styles/styles';

const BestSellingPage = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProduct = data.productData.sort(
      (a, b) => b.total_sell - a.total_sell
    );
    setProducts(getProduct);
  }, []);
  return (
    <>
      <Header />
      <section className={`${styles.section} `}>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-3 my-10">
          {products &&
            products.map((product) => (
              <div key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          {products && products.length === 0 && (
            <p className="py-10 w-full col-span-full text-center text-4xl font-bold opacity-30">
              No product found
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};
export default BestSellingPage;
