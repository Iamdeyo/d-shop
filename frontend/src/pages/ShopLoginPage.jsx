import { useNavigate } from 'react-router-dom';
import ShopLogin from '../components/shop/ShopLogin.jsx';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSellerAuthenticated } = useSelector((state) => state.shop);

  console.log(isSellerAuthenticated);
  useEffect(() => {
    if (isSellerAuthenticated === true) {
      navigate('/shop-home');
    }
  }, [isSellerAuthenticated]);
  return (
    <div>
      <ShopLogin />
    </div>
  );
};
export default ShopLoginPage;
