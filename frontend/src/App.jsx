import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  ProductDetailPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  ProfilePage,
  ShopCreatePage,
  ShopActivationPage,
  ShopLoginPage,
  ShopHomePage,
} from './routes/Routes.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/user.js';
import ProtectedRoute from './ProtectedRoute.jsx';
import SellerProtectedRoute from './SellerProtectedRoute.jsx';
import { loadShop } from './redux/actions/shop.js';

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  const { isLoading, isSellerAuthenticated } = useSelector(
    (state) => state.shop
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadShop());
  }, []);

  return (
    <>
      {loading || isLoading ? null : (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sign-up" element={<SignupPage />} />
              <Route path="/activation" element={<ActivationPage />} />
              <Route path="/shop/activation" element={<ShopActivationPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/product/:name" element={<ProductDetailPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <ProfilePage />
                  </ProtectedRoute>
                }
              />
              <Route path="/shop-create" element={<ShopCreatePage />} />
              <Route path="/shop-login" element={<ShopLoginPage />} />
              <Route
                path="/shop-home"
                element={
                  <SellerProtectedRoute
                    isSellerAuthenticated={isSellerAuthenticated}
                  >
                    <ShopHomePage />
                  </SellerProtectedRoute>
                }
              />
            </Routes>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </BrowserRouter>
        </>
      )}
    </>
  );
}

export default App;
