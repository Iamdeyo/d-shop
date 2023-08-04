import Header from '../components/Layout/Header.jsx';
import Hero from '../components/Routes/Hero/Hero.jsx';
import BestDeals from '../components/Routes/BestDeals/BestDeals.jsx';
import FeaturedProduct from '../components/Routes/FeaturedProduct/FeaturedProduct.jsx';
import Events from '../components/Routes/Events/Events.jsx';
import Categories from '../components/Routes/Categories/Categories.jsx';
import Sponsored from '../components/Routes/Sponsored/Sponsored.jsx';
import Footer from '../components/Layout/Footer.jsx';
const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </>
  );
};
export default HomePage;
