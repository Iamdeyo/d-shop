import { useNavigate } from 'react-router-dom';
import ShopCreate from '../components/shop/ShopCreate.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const ShopCreatePage = () => {
  const navigate = useNavigate();
  const { isSellerAuthenticated } = useSelector((state) => state.shop);

  useEffect(() => {
    if (isSellerAuthenticated === true) {
      navigate('/shop-home');
    }
  }, [isSellerAuthenticated]);
  return (
    <div>
      <ShopCreate />
    </div>
  );
};
export default ShopCreatePage;
